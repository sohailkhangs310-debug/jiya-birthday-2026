import React from 'react';

interface PageCoverProps {
  title: string;
}

const PageCover = React.forwardRef<HTMLDivElement, PageCoverProps>(({ title }, ref) => {
  return (
    <div className="page page-cover relative overflow-hidden" ref={ref} data-density="hard">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-30"></div>
      <div className="h-full flex flex-col items-center justify-center p-8 relative z-10 text-center border-l-8 border-l-brand-dark/20">
        
        <div className="mb-8 transform -rotate-6">
          <div className="bg-white p-3 pb-10 shadow-xl w-48 h-56 mx-auto relative polaroid-shadow">
            <div className="w-full h-full bg-gray-200 overflow-hidden">
                <img src="https://i.ibb.co/99b7W42H/IMG-20260502-221158-905.jpg" alt="Cover Photo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-3 left-0 w-full text-center">
              <span className="font-handwriting text-2xl text-brand-dark">Happy Birthday</span>
            </div>
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl text-brand-cream border-y-2 border-brand-cream py-4 mb-4 tracking-widest font-black drop-shadow-md uppercase">
          {title}
        </h1>
        
        <p className="font-handwriting text-3xl mt-4 text-brand-cream/90 drop-shadow-sm">
          My favorite place
        </p>

        <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border-2 border-brand-cream flex items-center justify-center opacity-70">
           <svg className="w-6 h-6 text-brand-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
           </svg>
        </div>
      </div>
    </div>
  );
});

PageCover.displayName = 'PageCover';
export default PageCover;
