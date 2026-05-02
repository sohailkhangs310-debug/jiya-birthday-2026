import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart } from 'lucide-react';

const MusicPage = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className="page bg-brand-cream relative" ref={ref}>
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-80 mix-blend-multiply"></div>
       
       <div className="h-full flex flex-col p-8 relative z-10 items-center justify-center">
          
          {/* Stamp frame */}
          <div className="bg-brand-yellow p-3 shadow-xl mb-10 w-64 stamp-border relative">
            <div className="bg-white p-2">
               <img src="https://i.ibb.co/HfHVNBnZ/IMG-20260502-221107-248.jpg" alt="Album Cover" className="w-full aspect-square object-cover filter sepia-[0.3]" referrerPolicy="no-referrer" />
            </div>
             <div className="absolute -right-4 -bottom-4 text-brand-yellow transform rotate-12">
                <Heart size={32} fill="currentColor" />
             </div>
          </div>

          <div className="w-full max-w-xs bg-white rounded-2xl p-6 shadow-md border border-brand-yellow/10 polaroid-shadow">
             <div className="flex justify-between items-start mb-4">
               <div>
                 <h3 className="font-sans font-bold text-xl text-brand-dark">My Favourite Song</h3>
                 <p className="font-sans text-sm text-brand-dark/60">Your Voice Note</p>
               </div>
               <Heart size={20} className="text-brand-yellow" fill="currentColor" />
             </div>

             {/* Progress Bar */}
             <div className="mb-4">
               <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                 <div className="w-1/3 h-full bg-brand-yellow rounded-full"></div>
               </div>
               <div className="flex justify-between mt-1 font-sans text-xs text-brand-dark/50">
                 <span>1:04</span>
                 <span>3:15</span>
               </div>
             </div>

             {/* Controls */}
             <div className="flex justify-center items-center space-x-6">
                <button className="text-brand-dark/60 hover:text-brand-yellow transition-colors">
                  <SkipBack size={24} fill="currentColor" />
                </button>
                <button className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </button>
                <button className="text-brand-dark/60 hover:text-brand-yellow transition-colors">
                  <SkipForward size={24} fill="currentColor" />
                </button>
             </div>
          </div>

          <div className="mt-8 text-center font-handwriting text-brand-yellow text-2xl rotate-[-2deg]">
            Every time I hear it, I think of you.
          </div>
          
          <div className="absolute bottom-6 right-6 font-handwriting text-brand-dark/60 text-xl">4/6</div>
       </div>
    </div>
  );
});

MusicPage.displayName = 'MusicPage';
export default MusicPage;
