import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface GalleryItem {
  caption: string;
  gradient: string;
}

interface HorizontalGalleryProps {
  items: GalleryItem[];
  variant?: "light" | "dark";
}

const HorizontalGallery = ({ items, variant = "light" }: HorizontalGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const isLight = variant === "light";

  return (
    <div ref={containerRef} className="relative overflow-hidden py-8 md:py-16">
      <motion.div style={{ x }} className="flex gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] rounded-2xl md:rounded-3xl overflow-hidden ${
              isLight ? "shadow-2xl shadow-black/10" : "shadow-2xl shadow-black/50"
            }`}
          >
            {/* Placeholder for real images - using gradient for now */}
            <div
              className="aspect-[4/3] relative"
              style={{ background: item.gradient }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p className="text-white text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                  "{item.caption}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalGallery;
