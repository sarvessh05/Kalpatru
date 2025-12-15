import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Layers, 
  FileImage, 
  Package, 
  Sparkles,
  MessageCircle,
  ArrowDown
} from "lucide-react";
import StickyNav from "@/components/workshop/StickyNav";
import FloatingCard from "@/components/workshop/FloatingCard";
import ProcessTimeline from "@/components/workshop/ProcessTimeline";
import HorizontalGallery from "@/components/workshop/HorizontalGallery";
import { useWorkshopMemory } from "@/hooks/useWorkshopMemory";
import printingBg from "@/assets/printing-bg.jpg";

const ACCENT_COLOR = "hsl(15, 90%, 55%)";

const services = [
  { icon: CreditCard, title: "Business Cards" },
  { icon: Layers, title: "Banners & Flex" },
  { icon: Package, title: "Packaging" },
  { icon: FileImage, title: "Posters" },
  { icon: Sparkles, title: "Something Else?" },
];

const processSteps = [
  { 
    title: "Paper Selection", 
    description: "Choose from premium stocks. Textured, glossy, matte — each tells a different story." 
  },
  { 
    title: "Ink Layering", 
    description: "Watch colors build in layers. CMYK precision meets artistic expression." 
  },
  { 
    title: "Finishing Touch", 
    description: "UV coating, embossing, foil stamping — the details that make it memorable." 
  },
  { 
    title: "Quality Check & Delivery", 
    description: "Every piece inspected. Delivered to your door, ready to impress." 
  },
];

const galleryItems = [
  { caption: "Printed 10,000 flyers overnight for a city-wide election campaign.", gradient: "linear-gradient(135deg, hsl(15,90%,55%), hsl(200,70%,50%))" },
  { caption: "500 premium invitation cards with gold foil for a destination wedding.", gradient: "linear-gradient(135deg, hsl(200,70%,50%), hsl(280,70%,60%))" },
  { caption: "Complete brand kit — cards, letterheads, envelopes — delivered in 48 hours.", gradient: "linear-gradient(135deg, hsl(280,70%,60%), hsl(340,70%,55%))" },
  { caption: "Festival banners spanning 200 feet across the main street.", gradient: "linear-gradient(135deg, hsl(340,70%,55%), hsl(40,80%,55%))" },
];

const PrintingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useWorkshopMemory("printing");

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <StickyNav variant="printing" />



      {/* Entry Frame - Immersive Hero */}
      <section ref={heroRef} className="relative h-[200vh]">
        <motion.div 
          className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
          style={{ opacity: heroOpacity }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${printingBg})`,
              scale: heroScale,
            }}
          />
          
          {/* Light overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
          
          {/* Animated color accent */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 50%, hsla(15,90%,55%,0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 70% 50%, hsla(200,70%,50%,0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 30% 50%, hsla(15,90%,55%,0.15) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Text content */}
          <motion.div 
            className="relative z-10 text-center px-6 max-w-4xl"
            style={{ y: textY }}
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-relaxed mb-6 md:mb-8 px-4"
            >
              Every idea begins blank.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-600 leading-relaxed px-4"
            >
              We give it color, weight, and purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex flex-col items-center text-gray-400"
              >
                <span className="text-sm mb-2">Scroll to explore</span>
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Moment of Choice */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6 px-4">
              What will you print?
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto px-4">
              Select your vision. We'll make it real.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {services.map((service, index) => (
              <FloatingCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                delay={index * 0.1}
                variant="light"
                accentColor={ACCENT_COLOR}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Comes to Life */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6 px-4">
              How it comes to life
            </h2>
          </motion.div>

          <ProcessTimeline 
            steps={processSteps} 
            variant="light" 
            accentColor={ACCENT_COLOR}
          />
        </div>
      </section>

      {/* Real Work, Real Scale */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-4 md:mb-6 px-4">
              Real work, real scale
            </h2>
            <p className="text-gray-500 text-base md:text-lg px-4">
              Stories from our press room.
            </p>
          </motion.div>
        </div>

        <HorizontalGallery items={galleryItems} variant="light" />
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Stacked paper effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-x-10 bg-white rounded-3xl shadow-lg"
              style={{
                top: `${10 + i * 3}%`,
                bottom: `${10 + (4 - i) * 3}%`,
                transform: `rotate(${(i - 2) * 0.5}deg)`,
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0.3 + i * 0.15, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>

        <div className="relative container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 md:mb-8 px-4">
              Tell us what you're imagining.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button 
                size="xl"
                onClick={() => window.open('https://wa.me/917745049560?text=Hi! I would like to discuss a printing project with Kalpatru.', '_blank')}
                className="bg-[hsl(15,90%,55%)] hover:bg-[hsl(15,90%,50%)] text-white shadow-2xl shadow-[hsl(15,90%,55%)]/30 px-6 md:px-10 text-sm md:text-base"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                WhatsApp Us
              </Button>
              <Button 
                size="xl"
                variant="outline"
                onClick={() => window.open('mailto:thokpatilkunal@gmail.com?subject=Printing Project Inquiry&body=Hi Kalpatru Team,%0D%0A%0D%0AI would like to discuss a printing project. Please get in touch with me.%0D%0A%0D%0AThank you!', '_blank')}
                className="border-[hsl(15,90%,55%)] text-[hsl(15,90%,55%)] hover:bg-[hsl(15,90%,55%)] hover:text-white px-6 md:px-10 text-sm md:text-base"
              >
                Email Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 mb-6">
            <div className="text-center md:text-left">
              <span className="font-display text-lg md:text-xl tracking-widest">KALPATRU</span>
              <p className="text-gray-400 text-xs md:text-sm mt-1">The Press Room</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-center">
              <a 
                href="https://wa.me/917745049560" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
              >
                📱 +91 77450 49560
              </a>
              <a 
                href="mailto:thokpatilkunal@gmail.com"
                className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
              >
                ✉️ thokpatilkunal@gmail.com
              </a>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-800 pt-4">
            <p className="text-xs md:text-sm text-gray-400">
              © 2024 Kalpatru Group. Printing & Fabrication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrintingPage;
