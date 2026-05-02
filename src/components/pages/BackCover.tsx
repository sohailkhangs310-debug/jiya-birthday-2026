import React from 'react';

const BackCover = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className="page page-cover relative overflow-hidden" ref={ref} data-density="hard">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-30"></div>
      
      <div className="h-full flex flex-col p-8 relative z-10 text-center justify-center border-r-8 border-r-brand-dark/20">
         
         <div className="bg-white p-4 pb-12 w-64 mx-auto rotate-2 shadow-2xl relative">
            <div className="absolute top-2 right-2 text-brand-yellow text-2xl rotate-12">&hearts;</div>
            <img src="https://i.ibb.co/Tx658QBk/IMG-20260502-221112-618.jpg" alt="Our best memory" className="w-full aspect-[4/3] object-cover border border-gray-200" referrerPolicy="no-referrer" />
            
            <div className="absolute bottom-4 left-0 w-full text-center">
              <p className="font-handwriting text-brand-yellow text-3xl">i love you</p>
            </div>
         </div>

         <div className="mt-12 bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-brand-cream/20 mx-4">
           <h2 className="font-sans font-black text-xl text-brand-cream tracking-wider uppercase mb-2">
             With you, every moment becomes an unforgettable memory
           </h2>
           <p className="font-serif italic text-brand-cream/80">Happy birthday, Jiya.</p>
         </div>

         <div className="absolute bottom-4 left-1/2 -ml-2 text-brand-cream/30 text-sm font-sans tracking-widest">
            â™¾
         </div>
      </div>
    </div>
  );
});

BackCover.displayName = 'BackCover';
export default BackCover;
