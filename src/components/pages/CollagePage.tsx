import React from 'react';

const CollagePage = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const images = [
    "https://i.ibb.co/kR0HFFD/IMG-20260502-221139-224.jpg",
    "https://i.ibb.co/zV4SYSSw/IMG-20260502-221121-148.jpg",
    "https://i.ibb.co/Tx658QBk/IMG-20260502-221112-618.jpg",
    "https://i.ibb.co/HfHVNBnZ/IMG-20260502-221107-248.jpg",
    "https://i.ibb.co/fYxcYGHf/IMG-20260502-221101-685.jpg",
    "https://i.ibb.co/99b7W42H/IMG-20260502-221158-905.jpg"
  ];

  return (
    <div className="page bg-brand-yellow relative" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20"></div>

      <div className="h-full flex flex-col p-6 relative z-10">
        <h2 className="font-sans font-black text-yellow-900 text-lg md:text-xl uppercase tracking-wider mb-6 pb-2 border-b-2 border-yellow-900/30 text-center">
          PERSON WHO MAKES ME<br/>SMILE EVERYTIME
        </h2>

        <div className="grid grid-cols-2 gap-3 pb-8">
           {images.map((src, i) => (
             <div key={i} className={`bg-brand-cream p-1.5 shadow-md polaroid-shadow ${i % 3 === 0 ? 'rotate-1' : (i % 2 === 0 ? '-rotate-2' : 'rotate-2')}`}>
                <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative">
                  <img src={src} alt="Memory" className="w-full h-full object-cover filter contrast-[1.1] saturate-[1.1] opacity-90" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 border border-black/10 mix-blend-overlay pointer-events-none"></div>
                </div>
                <div className="h-4 mt-1 bg-brand-cream w-full flex items-center justify-center">
                   <div className="w-1/2 h-[1px] bg-brand-yellow/20"></div>
                </div>
             </div>
           ))}
        </div>
        
        <div className="mt-auto pt-2 text-right font-handwriting text-brand-cream/60 text-xl">
           6/8
        </div>
      </div>
    </div>
  );
});

CollagePage.displayName = 'CollagePage';
export default CollagePage;
