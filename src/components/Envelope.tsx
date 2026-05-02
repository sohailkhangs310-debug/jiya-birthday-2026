import { motion } from 'motion/react';
import { useState } from 'react';
import confetti from 'canvas-confetti';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#CA8A04', '#FDF9F1', '#FDE047']
    });

    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(onOpen, 1500);
    }, 2500);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-cream/90 backdrop-blur-sm"
      initial={{ opacity: 1 }}
      animate={{ opacity: isTransitioning ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-[340px] h-[240px] md:w-[480px] md:h-[320px] cursor-pointer" onClick={handleOpen}>
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-brand-yellow rounded-lg shadow-xl overflow-hidden shadow-brand-yellow/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-30"></div>
        </div>

        {/* Card Inside */}
        <motion.div 
          className="absolute left-4 right-4 bg-white rounded flex flex-col items-center justify-center p-4 shadow-inner polaroid-shadow"
          initial={{ top: "10px", bottom: "10px" }}
          animate={{ top: isOpen ? "-160px" : "10px", bottom: isOpen ? "160px" : "10px", zIndex: isOpen ? 20 : 0 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 50 }}
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
        >
          <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-cream border-2 border-brand-yellow/20 rounded-md overflow-hidden mb-2 p-1 transform -rotate-3">
            <img src="https://i.ibb.co/zV4SYSSw/IMG-20260502-221121-148.jpg" alt="Us" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <h2 className="font-serif text-brand-yellow text-xl md:text-2xl font-bold">A SPECIAL NOTE</h2>
          <p className="font-handwriting text-brand-dark/80 text-xl mt-1">just for you ♥</p>
        </motion.div>

        {/* Envelope Front Left/Right Flaps */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-lg">
          <div className="absolute w-full h-full border-brand-yellow/90 border-[120px] border-l-[170px] border-r-[170px] md:border-[160px] md:border-l-[240px] md:border-r-[240px] border-t-transparent border-b-brand-yellow rounded-lg drop-shadow-md"></div>
        </div>

        {/* Envelope Top Flap */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-1/2 z-30 origin-top"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpen ? -180 : 0, zIndex: isOpen ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top flap triangle */}
          <div className="w-full h-full">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full drop-shadow-lg">
              <defs>
                <pattern id="noise" width="100" height="100" patternUnits="userSpaceOnUse">
                  <image href="https://www.transparenttextures.com/patterns/paper-fibers.png" x="0" y="0" width="100" height="100" />
                </pattern>
              </defs>
              <polygon points="0,0 100,0 50,100" fill="#CA8A04" />
              <polygon points="0,0 100,0 50,100" fill="url(#noise)" opacity="0.3" />
            </svg>
          </div>
          
          {/* Wax Seal */}
          <motion.div 
            className="absolute left-1/2 bottom-0 w-12 h-12 -ml-6 -mb-6 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-md border-2 border-[#AA8C2C]"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-serif text-white text-xl font-bold">J</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.p 
        className="absolute bottom-10 font-sans text-brand-dark/50 text-sm tracking-widest uppercase"
        animate={{ opacity: isOpen ? 0 : [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        CLICK TO CONTINUE
      </motion.p>
    </motion.div>
  );
}
