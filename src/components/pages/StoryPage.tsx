import React from 'react';

const StoryPage = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className="page bg-brand-cream relative" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-80 mix-blend-multiply"></div>
      
      {/* Decorative border */}
      <div className="absolute inset-4 border-2 border-dashed border-brand-yellow/30"></div>

      <div className="h-full flex flex-col p-8 md:p-10 relative z-10 overflow-y-auto scrapbook-scroll">
        <h2 className="font-sans font-black text-2xl tracking-tighter text-brand-dark mb-1 uppercase">
          How it all started:
        </h2>
        <h3 className="font-serif italic text-3xl text-brand-yellow mb-6 border-b border-brand-yellow/20 pb-2">
          Our story
        </h3>

        <div className="float-left mr-4 mb-4 transform -rotate-2 w-32 md:w-40 relative">
          <div className="bg-white p-2 pb-6 shadow-md polaroid-shadow">
            <img src="https://i.ibb.co/kR0HFFD/IMG-20260502-221139-224.jpg" alt="First date" className="w-full h-auto object-cover grayscale-[20%]" referrerPolicy="no-referrer" />
            <div className="absolute bottom-1 w-full text-center left-0">
               <span className="font-handwriting text-brand-yellow text-lg">&hearts; &hearts; &hearts;</span>
            </div>
          </div>
          {/* Tape */}
          <div className="absolute -top-3 left-1/2 -ml-6 w-12 h-4 bg-white/60 backdrop-blur-sm transform rotate-[-3deg] shadow-sm"></div>
        </div>

        <div className="text-sm md:text-base leading-relaxed text-brand-dark/80 font-sans space-y-4">
          <p>
            It all started with a simple message. Something casual, nothing special, or so I thought at the time. Unexpected, magical and beautiful.
          </p>
          <p>
            From there, we started talking more. About everything and nothing. Hours that felt like minutes, whole early mornings sharing dreams.
          </p>
          <p>
            I realized I wanted to keep getting to know you more and more, and that's how little by little, without thinking, I fell in love with you.
          </p>
          <div className="text-center my-6">
            <span className="font-handwriting text-2xl text-brand-yellow">You are my favorite coincidence.</span>
          </div>
          <p>
            Today I celebrate your life, your laugh and everything you are. Happy birthday, my love. &hearts;
          </p>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="mt-auto pt-6 flex justify-between items-end opacity-60">
           <div className="font-handwriting text-xl">1/6</div>
           <div className="stamp-border w-16 h-16 flex items-center justify-center -rotate-12">
             <span className="text-white font-bold font-sans text-xs uppercase text-center leading-tight">Love<br/>Stamp</span>
           </div>
        </div>
      </div>
    </div>
  );
});

StoryPage.displayName = 'StoryPage';
export default StoryPage;
