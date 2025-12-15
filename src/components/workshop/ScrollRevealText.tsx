import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealTextProps {
  lines: string[];
  className?: string;
  textClassName?: string;
}

const ScrollRevealText = ({ lines, className = "", textClassName = "" }: ScrollRevealTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className={`relative ${className}`}>
      {lines.map((line, index) => {
        const start = index / lines.length;
        const end = (index + 1) / lines.length;
        
        return (
          <ScrollLine
            key={index}
            line={line}
            progress={scrollYProgress}
            start={start}
            end={end}
            className={textClassName}
          />
        );
      })}
    </div>
  );
};

interface ScrollLineProps {
  line: string;
  progress: any;
  start: number;
  end: number;
  className?: string;
}

const ScrollLine = ({ line, progress, start, end, className }: ScrollLineProps) => {
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0.3]);
  const y = useTransform(progress, [start, end], [30, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className={`font-heading text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed ${className}`}
    >
      {line}
    </motion.p>
  );
};

export default ScrollRevealText;
