import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { heroProjects } from '@/data/projects';

export function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full aspect-square max-w-[520px] mx-auto lg:mx-0 lg:ml-auto rounded-3xl overflow-hidden bg-gray-100 cursor-none"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
          style={{ backgroundColor: heroProjects[currentIndex].bgColor }}
        >
          <img
            src={heroProjects[currentIndex].image}
            alt="Project showcase"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Custom Cursor Play Button */}
      <motion.div
        className="absolute pointer-events-none z-20"
        animate={{
          x: mousePosition.x - 56,
          y: mousePosition.y - 56,
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="relative w-28 h-28">
          {/* Rotating text */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: '8s' }}
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text className="text-[7px] uppercase tracking-[0.25em] fill-black/70 font-medium">
              <textPath href="#circlePath">
                play showreel • play showreel • play showreel •
              </textPath>
            </text>
          </svg>
          {/* Center play icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-black fill-black ml-0.5" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 w-1.5 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
