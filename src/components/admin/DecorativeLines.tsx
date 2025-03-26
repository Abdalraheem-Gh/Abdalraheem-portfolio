'use client';
import { motion } from "framer-motion";

const DecorativeLines = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => {
        const angle = Math.random() * 360;
        const size = Math.random() * 50 + 30;
        const duration = Math.random() * 10 + 5;
        
        return (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/70 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}%`,
              rotate: angle,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200]
            }}
            transition={{ 
              duration: duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

export default DecorativeLines;