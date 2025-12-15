import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LucideIcon, ChevronRight } from "lucide-react";

interface MaterialItem {
  id: string;
  name: string;
  icon: LucideIcon;
  services: string[];
  color: string;
}

interface MaterialSelectorProps {
  materials: MaterialItem[];
}

const MaterialSelector = ({ materials }: MaterialSelectorProps) => {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  
  const selected = materials.find(m => m.id === selectedMaterial);

  return (
    <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
      {/* Materials */}
      <div className="space-y-4">
        {materials.map((material, index) => (
          <motion.div
            key={material.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedMaterial(
              selectedMaterial === material.id ? null : material.id
            )}
            className={`group cursor-pointer relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              selectedMaterial === material.id
                ? "bg-white/10 border-white/30"
                : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
            }`}
          >
            <div className="p-4 md:p-6 flex items-center gap-4 md:gap-6">
              <div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${material.color}, ${material.color}80)` }}
              >
                <material.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-white">
                  {material.name}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  {material.services.length} applications
                </p>
              </div>
              
              <motion.div
                animate={{ rotate: selectedMaterial === material.id ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </motion.div>
            </div>
            
            {/* Hover glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{
                background: `radial-gradient(circle at left center, ${material.color}20, transparent 50%)`
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Services reveal */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-gray-400 text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6">
                What we build with {selected.name}
              </h4>
              
              {selected.services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group cursor-pointer p-4 md:p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium text-base md:text-lg">{service}</span>
                    <span 
                      className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: selected.color }}
                    >
                      View →
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex items-center justify-center"
            >
              <p className="text-gray-500 text-base md:text-lg text-center px-4">
                Select a material to see what we can build
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MaterialSelector;
