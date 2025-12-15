import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Printer, Hammer, ArrowRight } from "lucide-react";
import printingBg from "@/assets/printing-bg.jpg";
import fabnexBg from "@/assets/fabex-bg.jpg";

const SplitHero = () => {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex flex-col md:flex-row overflow-hidden">
      {/* Kalpatru Logo - Centered */}
      <motion.div
        className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 text-center px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest text-white drop-shadow-2xl">
          KALPATRU
        </h1>
        <p className="text-white/70 text-xs sm:text-sm md:text-base mt-1 md:mt-2 font-light tracking-[0.2em] md:tracking-[0.3em]">
          TWO CRAFTS • ONE LEGACY
        </p>
      </motion.div>

      {/* Printing Side */}
      <motion.div
        className="relative flex-1 cursor-pointer overflow-hidden"
        animate={{
          flex: hoveredSide === "left" ? 1.5 : hoveredSide === "right" ? 0.5 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => navigate("/printing")}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: `url(${printingBg})`,
            transform: hoveredSide === "left" ? "scale(1.05)" : "scale(1)",
          }}
        />
        
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-transparent" />
        
        {/* Colorful Accent */}
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{ opacity: hoveredSide === "left" ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(135deg, #FF6B35, #00A8E8, #FF006E)",
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="mb-4 md:mb-6 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[hsl(15,90%,55%)] to-[hsl(200,70%,50%)]"
              animate={{
                scale: hoveredSide === "left" ? 1.1 : 1,
                boxShadow: hoveredSide === "left" 
                  ? "0 0 40px rgba(255, 107, 53, 0.5)" 
                  : "0 0 20px rgba(255, 107, 53, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Printer className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
              PRINTING
            </h2>
            
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-6 md:mb-8 leading-relaxed px-2">
              If it can be printed, we'll make it unforgettable.
            </p>

            <AnimatePresence>
              {hoveredSide === "left" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center gap-2 text-[hsl(15,90%,55%)] font-semibold text-sm md:text-base"
                >
                  <span>Explore Printing</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Divider Line */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block" />
      </motion.div>

      {/* Fabnex Side */}
      <motion.div
        className="relative flex-1 cursor-pointer overflow-hidden"
        animate={{
          flex: hoveredSide === "right" ? 1.5 : hoveredSide === "left" ? 0.5 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => navigate("/fabnex")}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: `url(${fabnexBg})`,
            transform: hoveredSide === "right" ? "scale(1.05)" : "scale(1)",
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(220,20%,8%)]/95 via-[hsl(220,20%,8%)]/80 to-transparent" />
        
        {/* Spark Glow Effect */}
        <motion.div
          className="absolute inset-0"
          animate={{ 
            opacity: hoveredSide === "right" ? 0.15 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(30, 95%, 50%), transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="mb-4 md:mb-6 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[hsl(30,95%,50%)] to-[hsl(200,40%,40%)]"
              animate={{
                scale: hoveredSide === "right" ? 1.1 : 1,
                boxShadow: hoveredSide === "right" 
                  ? "0 0 50px rgba(245, 158, 11, 0.6)" 
                  : "0 0 20px rgba(245, 158, 11, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Hammer className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4">
              FABNEX
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-6 md:mb-8 leading-relaxed px-2">
              We don't just fabricate metal. We engineer strength.
            </p>

            <AnimatePresence>
              {hoveredSide === "right" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center gap-2 text-[hsl(30,95%,50%)] font-semibold text-sm md:text-base"
                >
                  <span>Explore Fabnex</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Divider */}
      <div className="absolute left-4 right-4 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent md:hidden" />
    </div>
  );
};

export default SplitHero;
