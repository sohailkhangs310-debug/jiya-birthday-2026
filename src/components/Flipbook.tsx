import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'motion/react';
import PageCover from './pages/PageCover';
import StoryPage from './pages/StoryPage';
import PhotoGridPage from './pages/PhotoGridPage';
import MusicPage from './pages/MusicPage';
import LovePage from './pages/LovePage';
import BackCover from './pages/BackCover';
import MemoriesPage from './pages/MemoriesPage';
import CollagePage from './pages/CollagePage';

export default function Flipbook() {
  const [page, setPage] = useState(0);

  const onPage = (e: any) => {
    setPage(e.data);
  };

  // We have 8 pages total (0 to 7). The second last slide is page 6 (CollagePage).
  // Keep it "till second last slide" means hide it on the last slide (page 7).
  const showClickToContinue = page < 7;

  return (
    <div className="flex items-center justify-center w-full h-screen bg-brand-cream overflow-hidden relative">
      <div className="max-w-[100vw] max-h-[100vh] flex items-center justify-center p-2 sm:p-8 pb-16 relative z-10 w-full h-full">
        <HTMLFlipBook
          width={400}
          height={600}
          size="stretch"
          minWidth={300}
          maxWidth={500}
          minHeight={400}
          maxHeight={750}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="flip-book"
          style={{ backgroundImage: "none" }}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          onFlip={onPage}
        >
          <PageCover title="Jiya" />
          <StoryPage />
          <MemoriesPage />
          <PhotoGridPage />
          <MusicPage />
          <LovePage />
          <CollagePage />
          <BackCover />
        </HTMLFlipBook>
      </div>

      {showClickToContinue && (
        <motion.p 
          className="absolute bottom-6 left-0 right-0 text-center font-sans text-brand-dark/50 text-sm tracking-widest uppercase pointer-events-none z-20"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          CLICK TO CONTINUE
        </motion.p>
      )}
    </div>
  );
}
