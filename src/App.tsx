/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Flipbook from './components/Flipbook';
import Envelope from './components/Envelope';
import { Heart } from 'lucide-react';

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);

  return (
    <div className="w-full h-screen bg-brand-cream relative overflow-hidden">
      
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
         {[...Array(10)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute text-brand-yellow"
             initial={{ 
               top: `${Math.random() * 100}vh`, 
               left: `${Math.random() * 100}vw`,
               scale: Math.random() * 0.5 + 0.5
             }}
             animate={{ 
               top: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
               left: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`]
             }}
             transition={{ 
               duration: Math.random() * 20 + 20, 
               repeat: Infinity, 
               repeatType: "reverse",
               ease: "linear"
             }}
           >
             <Heart fill="currentColor" />
           </motion.div>
         ))}
      </div>

      <AnimatePresence>
        {showEnvelope && (
          <Envelope onOpen={() => setShowEnvelope(false)} />
        )}
      </AnimatePresence>
      
      {!showEnvelope && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full relative z-10"
        >
          <Flipbook />
        </motion.div>
      )}
    </div>
  );
}
