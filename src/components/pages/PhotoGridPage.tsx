import React from 'react';

const PhotoGridPage = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const photos = [
    "https://i.ibb.co/fYxcYGHf/IMG-20260502-221101-685.jpg",
    "https://i.ibb.co/zV4SYSSw/IMG-20260502-221121-148.jpg",
    "https://i.ibb.co/Tx658QBk/IMG-20260502-221112-618.jpg",
    "https://i.ibb.co/HfHVNBnZ/IMG-20260502-221107-248.jpg"
  ];

  return (
    <div className="page bg-brand-yellow relative" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20"></div>
      
      <div className="h-full flex flex-col p-6 relative z-10 justify-center">
        
        <div className="flex flex-col mb-4">
           <h2 className="font-sans font-black text-white text-5xl md:text-6xl leading-none">LOVE</h2>
           <h2 className="font-sans font-black text-brand-cream/60 text-5xl md:text-6xl leading-none">LOVE</h2>
           <div className="relative">
             <h2 className="font-sans font-black text-white text-5xl md:text-6xl leading-none">LOVE</h2>
             <span className="absolute top-1/2 left-0 transform -translate-y-1/2 font-handwriting text-3xl text-yellow-300 -rotate-6">my favorite place</span>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
           {photos.map((src, i) => (
             <div key={i} className={`relative bg-white p-2 shadow-lg polaroid-shadow ${i % 2 === 0 ? '-rotate-3' : 'rotate-2'}`}>
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  <img src={src} alt="memory" className="w-full h-full object-cover filter contrast-125 saturate-110" referrerPolicy="no-referrer" />
                </div>
                {/* Tiny tape on some */}
                {i % 2 !== 0 && (
                  <div className="absolute -top-2 left-1/2 -ml-4 w-8 h-3 bg-white/50 backdrop-blur transform rotate-3 shadow-sm"></div>
                )}
             </div>
           ))}
        </div>
        
        <div className="mt-auto text-left font-handwriting text-brand-cream text-xl opacity-60">3/6</div>
      </div>
    </div>
  );
});

PhotoGridPage.displayName = 'PhotoGridPage';
export default PhotoGridPage;
