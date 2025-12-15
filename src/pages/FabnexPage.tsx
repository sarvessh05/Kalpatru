import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  CircleDot,
  Hexagon,
  Triangle,
  MessageCircle,
  ArrowDown
} from "lucide-react";
import StickyNav from "@/components/workshop/StickyNav";
import MaterialSelector from "@/components/workshop/MaterialSelector";
import HorizontalGallery from "@/components/workshop/HorizontalGallery";
import { useWorkshopMemory } from "@/hooks/useWorkshopMemory";
import fabnexBg from "@/assets/fabex-bg.jpg";

const ACCENT_COLOR = "hsl(30, 95%, 50%)";

const materials = [
  { 
    id: "steel", 
    name: "Steel", 
    icon: Hexagon,
    color: "hsl(30, 95%, 50%)",
    services: ["Industrial Sheds", "Structural Frameworks", "Heavy-duty Gates", "Factory Equipment"]
  },
  { 
    id: "iron", 
    name: "Iron", 
    icon: CircleDot,
    color: "hsl(220, 20%, 45%)",
    services: ["Decorative Railings", "Custom Gates", "Grilles & Frames", "Traditional Work"]
  },
  { 
    id: "aluminium", 
    name: "Aluminium", 
    icon: Triangle,
    color: "hsl(200, 40%, 50%)",
    services: ["Lightweight Structures", "Modern Fixtures", "Window Frames", "Partitions"]
  },
];

const processImages = [
  { 
    caption: "Factory shed fabricated & installed in 12 days — Nashik", 
    gradient: "linear-gradient(135deg, hsl(30,95%,45%), hsl(20,80%,35%))" 
  },
  { 
    caption: "Custom industrial gate with automated system — Pune", 
    gradient: "linear-gradient(135deg, hsl(220,20%,30%), hsl(220,15%,20%))" 
  },
  { 
    caption: "Structural framework for 3-story warehouse — Mumbai", 
    gradient: "linear-gradient(135deg, hsl(200,30%,40%), hsl(220,20%,30%))" 
  },
  { 
    caption: "Decorative iron railing spanning 500 meters — Lonavala", 
    gradient: "linear-gradient(135deg, hsl(20,80%,35%), hsl(30,90%,40%))" 
  },
];

const FabnexPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const sparkOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useWorkshopMemory("fabnex");

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(220,20%,8%)] text-white overflow-x-hidden">
      <StickyNav variant="fabnex" />

      {/* Entry Frame - Dark Immersive Hero */}
      <section ref={heroRef} className="relative h-[200vh]">
        <motion.div 
          className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black"
          style={{ opacity: heroOpacity }}
        >
          {/* Background with subtle visibility */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ 
              backgroundImage: `url(${fabnexBg})`,
            }}
          />
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[hsl(220,20%,8%)]" />
          
          {/* Spark burst effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: sparkOpacity }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle, hsla(30,95%,50%,0.4) 0%, transparent 40%)",
                    "radial-gradient(circle, hsla(30,95%,50%,0.6) 0%, transparent 50%)",
                    "radial-gradient(circle, hsla(30,95%,50%,0.4) 0%, transparent 40%)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div 
            className="relative z-10 text-center px-6 max-w-4xl"
            style={{ y: textY }}
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-relaxed mb-6 md:mb-8 px-4"
            >
              Strength isn't designed.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-400 leading-relaxed px-4"
            >
              It's earned.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex flex-col items-center text-gray-500"
              >
                <span className="text-sm mb-2">Scroll to enter</span>
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Material Before Service */}
      <section className="py-32 px-6 bg-[hsl(220,20%,8%)]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 md:mb-6 px-4">
              Choose your material
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto px-4">
              The foundation determines the structure.
            </p>
          </motion.div>

          <MaterialSelector materials={materials} />
        </div>
      </section>

      {/* Process as Trust */}
      <section className="py-32 px-6 bg-[hsl(220,20%,6%)]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 md:mb-6 px-4">
              How we work
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Measurement", desc: "On-site precision. Every millimeter counts." },
              { step: "02", title: "Cutting", desc: "Clean cuts. No waste. Maximum strength." },
              { step: "03", title: "Welding", desc: "Joints that hold for generations." },
              { step: "04", title: "Installation", desc: "Anchored. Level. Permanent." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 flex flex-col justify-end">
                  <span 
                    className="font-display text-8xl font-bold mb-4"
                    style={{ color: `${ACCENT_COLOR}30` }}
                  >
                    {item.step}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built to Last - Impact Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,6%)] via-[hsl(220,20%,10%)] to-[hsl(220,20%,6%)]" />
        
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-white leading-tight px-4">
              What we build doesn't move.
            </h2>
            <p className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-[hsl(30,95%,50%)] mt-3 md:mt-4 px-4">
              It holds.
            </p>
          </motion.div>
        </div>

        <HorizontalGallery items={processImages} variant="dark" />
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,6%)] to-[hsl(220,20%,10%)]" />
        
        {/* Subtle glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30"
          style={{
            background: `radial-gradient(circle, ${ACCENT_COLOR}40, transparent 60%)`
          }}
        />

        <div className="relative container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-3 md:mb-4 px-4">
              Describe the load.
            </h2>
            <p className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-gray-400 mb-8 md:mb-12 px-4">
              We'll handle the weight.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button 
                size="xl"
                onClick={() => window.open('https://wa.me/917745049560?text=Hi! I would like to discuss a metal fabrication project with Kalpatru Fabnex.', '_blank')}
                className="bg-[hsl(30,95%,50%)] hover:bg-[hsl(30,95%,45%)] text-black font-semibold shadow-2xl shadow-[hsl(30,95%,50%)]/30 px-6 md:px-10 text-sm md:text-base"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                WhatsApp Us
              </Button>
              <Button 
                size="xl"
                variant="outline"
                onClick={() => window.open('mailto:thokpatilkunal@gmail.com?subject=Fabrication Project Inquiry&body=Hi Kalpatru Fabnex Team,%0D%0A%0D%0AI would like to discuss a metal fabrication project. Please get in touch with me.%0D%0A%0D%0AThank you!', '_blank')}
                className="border-[hsl(30,95%,50%)] text-[hsl(30,95%,50%)] hover:bg-[hsl(30,95%,50%)] hover:text-black px-6 md:px-10 text-sm md:text-base"
              >
                Email Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 bg-black border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-6">
            <div className="text-center md:text-left">
              <span className="font-display text-lg md:text-xl tracking-widest text-white">KALPATRU</span>
              <p className="text-gray-500 text-xs md:text-sm mt-1">The Floor</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-center">
              <a 
                href="https://wa.me/917745049560" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm"
              >
                📱 +91 77450 49560
              </a>
              <a 
                href="mailto:thokpatilkunal@gmail.com"
                className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm"
              >
                ✉️ thokpatilkunal@gmail.com
              </a>
            </div>
          </div>
          
          <div className="text-center border-t border-white/10 pt-4">
            <p className="text-xs md:text-sm text-gray-500">
              © 2024 Kalpatru Group. Printing & Fabrication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FabnexPage;