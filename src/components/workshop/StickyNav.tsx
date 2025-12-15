import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";

interface StickyNavProps {
  variant: "printing" | "fabnex";
}

const StickyNav = ({ variant }: StickyNavProps) => {
  const isPrinting = variant === "printing";
  
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isPrinting 
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50" 
          : "bg-[hsl(220,20%,8%)]/90 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <span className={`font-display text-lg md:text-xl tracking-widest ${
            isPrinting ? "text-gray-900" : "text-white"
          }`}>
            KALPATRU
          </span>
          <span className={`text-xs md:text-sm font-semibold px-2 py-1 rounded-full ${
            isPrinting 
              ? "bg-[hsl(15,90%,55%)]/10 text-[hsl(15,90%,55%)]" 
              : "bg-[hsl(30,95%,50%)]/20 text-[hsl(30,95%,50%)]"
          }`}>
            {isPrinting ? "PRESS ROOM" : "THE FLOOR"}
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="flex items-center gap-4">
          {/* Switcher */}
          <div className={`hidden md:flex items-center gap-1 p-1 rounded-full ${
            isPrinting ? "bg-gray-100" : "bg-white/10"
          }`}>
            <Link
              to="/printing"
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isPrinting 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Printing
            </Link>
            <Link
              to="/fabnex"
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isPrinting 
                  ? "bg-white/20 text-white shadow-sm" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Fabnex
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Contact Button */}
          <button
            onClick={() => window.open('https://wa.me/917745049560', '_blank')}
            className={`hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isPrinting 
                ? "bg-[hsl(15,90%,55%)] hover:bg-[hsl(15,90%,50%)] text-white" 
                : "bg-[hsl(30,95%,50%)] hover:bg-[hsl(30,95%,45%)] text-black"
            }`}
          >
            <Phone className="w-4 h-4" />
            Contact
          </button>
        </div>

        {/* Mobile toggle */}
        <Link
          to={isPrinting ? "/fabnex" : "/printing"}
          className={`md:hidden flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium ${
            isPrinting 
              ? "bg-gray-100 text-gray-700" 
              : "bg-white/10 text-white"
          }`}
        >
          {isPrinting ? "Fabnex →" : "← Printing"}
        </Link>
      </div>
    </motion.nav>
  );
};

export default StickyNav;
