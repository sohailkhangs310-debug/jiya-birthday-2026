import React from 'react';

const LovePage = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className="page bg-brand-cream relative" ref={ref}>
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-80 mix-blend-multiply"></div>
       
       <div className="h-full flex flex-col p-8 relative z-10 items-center text-center">
          
          <div className="mb-10 mt-6 border-b pb-4 border-brand-dark/10 w-full">
            <h2 className="font-sans font-black text-3xl text-brand-dark tracking-widest uppercase">
              July
            </h2>
            <p className="font-serif italic text-yellow-600 text-xl">Our month of anniversary</p>
          </div>

          {/* Tic Tac Toe Grid */}
          <div className="grid grid-cols-3 grid-rows-3 gap-0 w-48 h-48 mx-auto relative my-8">
             {/* Grid Lines */}
             <div className="col-span-3 h-0.5 bg-brand-dark/20 w-full absolute top-1/3 left-0"></div>
             <div className="col-span-3 h-0.5 bg-brand-dark/20 w-full absolute top-2/3 left-0"></div>
             <div className="row-span-3 w-0.5 bg-brand-dark/20 h-full absolute top-0 left-1/3"></div>
             <div className="row-span-3 w-0.5 bg-brand-dark/20 h-full absolute top-0 left-2/3"></div>

             {/* Cells */}
             <div className="flex items-center justify-center font-handwriting text-5xl text-brand-dark/40">O</div>
             <div className="flex items-center justify-center font-handwriting text-3xl text-brand-dark/80 scale-125 transform rotate-12">
               <span className="text-center leading-none text-sm font-sans font-bold uppercase block w-min break-words">Loving you is still</span>
             </div>
             <div className="flex items-center justify-center font-handwriting text-5xl text-brand-dark/40">X</div>
             
             {/* Center row - winning line */}
             <div className="flex items-center justify-center">
               <div className="text-brand-yellow text-4xl">&hearts;</div>
             </div>
             <div className="flex items-center justify-center">
               <div className="text-brand-yellow text-4xl">&hearts;</div>
             </div>
             <div className="flex items-center justify-center">
               <div className="text-brand-yellow text-4xl">&hearts;</div>
             </div>
             
             {/* Winning Line Overlay */}
             <div className="absolute top-1/2 left-[-10%] w-[120%] h-1 bg-brand-yellow/50 rounded-full transform -translate-y-1/2"></div>

             <div className="flex items-center justify-center font-handwriting text-5xl text-brand-dark/40">X</div>
             <div className="flex items-center justify-center bg-brand-cream z-10 w-full h-full p-2">
                <span className="font-handwriting text-xl text-brand-yellow font-bold text-center leading-tight">My best<br/>decision</span>
             </div>
             <div className="flex items-center justify-center font-handwriting text-5xl text-brand-dark/40">O</div>
          </div>

          <div className="mt-auto mb-10 w-full px-6">
            <p className="font-sans text-sm text-brand-dark/70 text-justify">
              I want to keep adding moments, laughs, trips and days by your side. Thank you for being you, and for letting me be me with you.
            </p>
          </div>

          <div className="absolute bottom-6 left-6 font-handwriting text-brand-dark/60 text-xl">5/6</div>
       </div>
    </div>
  );
});

LovePage.displayName = 'LovePage';
export default LovePage;
