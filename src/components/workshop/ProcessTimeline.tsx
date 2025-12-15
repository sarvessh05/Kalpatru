import { motion } from "framer-motion";

interface ProcessStep {
  title: string;
  description: string;
  visual?: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  variant?: "light" | "dark";
  accentColor?: string;
}

const ProcessTimeline = ({ steps, variant = "light", accentColor = "hsl(15, 90%, 55%)" }: ProcessTimelineProps) => {
  const isLight = variant === "light";
  
  return (
    <div className="relative">
      {/* Vertical line */}
      <div 
        className="absolute left-6 md:left-8 top-0 bottom-0 w-px hidden sm:block"
        style={{ 
          background: isLight 
            ? `linear-gradient(to bottom, transparent, ${accentColor}40, transparent)` 
            : `linear-gradient(to bottom, transparent, ${accentColor}60, transparent)` 
        }}
      />
      
      <div className="space-y-12 md:space-y-16 lg:space-y-24">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-16"
          >
            {/* Step indicator */}
            <motion.div
              className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${accentColor}, ${accentColor}80)`,
                boxShadow: `0 0 40px ${accentColor}40`
              }}
              whileInView={{ scale: [0.8, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="font-heading text-lg md:text-xl font-bold text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>

            {/* Content */}
            <div className="flex-1 pt-2 md:pt-3">
              <h3 className={`font-heading text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3 ${
                isLight ? "text-gray-900" : "text-white"
              }`}>
                {step.title}
              </h3>
              <p className={`text-base md:text-lg leading-relaxed ${
                isLight ? "text-gray-600" : "text-gray-400"
              }`}>
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
