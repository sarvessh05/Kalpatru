import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  delay?: number;
  onClick?: () => void;
  variant?: "light" | "dark";
  accentColor?: string;
}

const FloatingCard = ({ 
  icon: Icon, 
  title, 
  delay = 0, 
  onClick,
  variant = "light",
  accentColor = "hsl(15, 90%, 55%)"
}: FloatingCardProps) => {
  const isLight = variant === "light";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group cursor-pointer relative ${
        isLight 
          ? "bg-white/80 backdrop-blur-xl border-gray-200/50 hover:bg-white hover:shadow-2xl hover:shadow-primary/20" 
          : "bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20"
      } border rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 transition-all duration-300`}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${accentColor}20, transparent 70%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="mb-4 md:mb-6 p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl"
          style={{ 
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}80)`,
          }}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        >
          <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
        </motion.div>
        
        <h3 className={`font-heading text-lg md:text-xl font-semibold ${
          isLight ? "text-gray-900" : "text-white"
        }`}>
          {title}
        </h3>
        
        <motion.div
          className="mt-3 md:mt-4 flex items-center gap-2 text-xs md:text-sm font-medium"
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          style={{ color: accentColor }}
        >
          <span>Explore</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FloatingCard;
