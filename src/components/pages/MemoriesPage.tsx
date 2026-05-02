import React from 'react';

const MemoriesPage = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className="page bg-brand-yellow relative" ref={ref}>
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20"></div>
       
       <div className="h-full flex flex-col p-6 relative z-10">
          <div className="text-center mb-6">
             <h2 className="font-serif italic text-3xl text-brand-cream tracking-wide">Messages</h2>
             <span className="font-handwriting text-2xl text-brand-cream/80">- favorites -</span>
          </div>

          <div className="flex-1 bg-brand-cream rounded-xl p-4 shadow-inner overflow-y-auto max-w-sm mx-auto w-full relative">
             <div className="absolute top-2 right-4 text-brand-yellow font-bold text-xl">&hearts;</div>
             
             <div className="mt-8 space-y-6">
               <div className="bg-white p-3 rounded-lg shadow-sm border border-brand-dark/10 relative">
                 <div className="absolute -left-2 -top-2 w-6 h-6 bg-brand-yellow text-white flex items-center justify-center rounded-full text-xs font-bold shadow">1</div>
                 <p className="font-sans text-sm text-brand-dark/80 italic">"😍 I love being with you, you always make me laugh..."</p>
               </div>
               
               <div className="bg-white p-3 rounded-lg shadow-sm border border-brand-dark/10 relative ml-4">
                 <div className="absolute -right-2 -top-2 w-6 h-6 bg-brand-yellow text-white flex items-center justify-center rounded-full text-xs font-bold shadow">2</div>
                 <p className="font-sans text-sm text-brand-dark/80 italic">"Good morning my love, I hope you have an incredible day ✨"</p>
               </div>
               
               <div className="bg-white p-3 rounded-lg shadow-sm border border-brand-dark/10 relative">
                 <div className="absolute -left-2 -top-2 w-6 h-6 bg-brand-yellow text-white flex items-center justify-center rounded-full text-xs font-bold shadow">3</div>
                 <p className="font-sans text-sm text-brand-dark/80 italic">"I can't believe how lucky I am to have you."</p>
               </div>
             </div>

             <div className="text-center mt-10">
               <span className="font-handwriting text-brand-yellow text-2xl">I love you.</span>
             </div>
          </div>
          
          <div className="text-right mt-4 font-handwriting text-brand-cream text-xl opacity-60">2/6</div>
       </div>
    </div>
  );
});

MemoriesPage.displayName = 'MemoriesPage';
export default MemoriesPage;
