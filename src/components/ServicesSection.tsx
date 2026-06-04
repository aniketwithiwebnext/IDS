import React from "react";
import { PILLARS } from "../data";
import { 
  Lock, 
  Code, 
  Sparkles, 
  Award, 
  ChevronRight, 
  ShieldCheck, 
  Smartphone, 
  Cpu, 
  Terminal, 
  Search, 
  Bot, 
  Palette, 
  Megaphone, 
  TrendingUp, 
  Eye, 
  Plane, 
  Map, 
  Compass, 
  Briefcase 
} from "lucide-react";

// Flexible iconography mapper for services to make them look custom-styled
const serviceIconMap: Record<number, React.ComponentType<any>> = {
  1: ShieldCheck, // Managed Security
  2: Cpu,         // Cloud & Microsoft
  3: Terminal,    // Core IT
  4: ShieldCheck, // Pen Testing
  5: Terminal,    // Digital Forensics
  6: Lock,        // App Protection
  7: Code,        // Website Dev
  8: Smartphone,  // Mobile App Dev
  9: Search,      // AI SEO
  10: Bot,        // AEO
  11: Palette,    // Branding
  12: Megaphone,  // Digital Marketing
  13: TrendingUp, // Lead Gen
  14: Eye,        // Media Monitoring
  15: Plane,      // UAE Market entry
  16: Map,        // MENA Market Research
  17: Compass,    // GCC Marketing
  18: Briefcase   // Creative Production UAE
};

const pillarColors: Record<string, { bgGlow: string; text: string; label: string; border: string }> = {
  "pillar-1": { bgGlow: "from-ids-purple/20 to-transparent", text: "text-ids-purple", label: "01 / SECURITY & IT", border: "border-ids-purple/20" },
  "pillar-2": { bgGlow: "from-ids-violet/20 to-transparent", text: "text-ids-violet", label: "02 / SOLUTIONS DEV", border: "border-ids-violet/20" },
  "pillar-3": { bgGlow: "from-ids-magenta/20 to-transparent", text: "text-ids-magenta", label: "03 / ORGANIC VISIBILITY", border: "border-ids-magenta/20" },
  "pillar-4": { bgGlow: "from-[#4F46E5]/20 to-transparent", text: "text-ids-violet", label: "04 / MID-EAST EXPANSION", border: "border-ids-violet/15" }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-ids-black relative overflow-hidden">
      {/* Decorative full-spectrum glowing backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70rem] h-[35rem] bg-ids-purple/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[45rem] h-[45rem] bg-ids-violet/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex px-4 py-1.5 bg-ids-purple/10 border border-ids-purple/30 text-ids-magenta text-[10px] font-bold uppercase tracking-wider rounded-full mb-4 font-mono">
            Strategic Solutions
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            18 Enterprise Services. <br className="hidden sm:inline" />
            4 Strategic Pillars. One Partner.
          </h2>
          <p className="font-sans text-sm text-slate-300 leading-relaxed font-normal">
            We eliminate disconnected vendor silos. Our unified experts synchronize your Security, Codebase, organic Search dominance, and International Market strategy.
          </p>
        </div>

        {/* Vertical timeline/staggered grid of all 4 Pillars to make everything viewable together */}
        <div className="space-y-24">
          {PILLARS.map((pillar, pIdx) => {
            const colors = pillarColors[pillar.id] || pillarColors["pillar-1"];
            const isPillarEven = pIdx % 2 === 1;

            return (
              <div 
                key={pillar.id} 
                className="relative p-8 sm:p-12 rounded-3xl bg-white/[0.01] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                {/* Micro glow matching the pillar theme */}
                <div className={`absolute top-0 inset-x-0 h-48 bg-gradient-to-b ${colors.bgGlow} opacity-30 pointer-events-none`} />
                
                {/* Pillar Header Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 pb-8 border-b border-white/5 relative z-10">
                  <div className="lg:col-span-4 space-y-2">
                    <span className="text-[11px] font-mono font-bold text-ids-magenta uppercase tracking-widest block">
                      {colors.label}
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-none">
                      {pillar.shortName}
                    </h3>
                  </div>
                  <div className="lg:col-span-8 flex flex-col justify-end">
                    <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Grid of services in this specific Pillar */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                  {pillar.services.map((srv) => {
                    const ServiceIcon = serviceIconMap[srv.id] || ShieldCheck;
                    
                    return (
                      <div
                        key={srv.id}
                        className="p-6 bg-[#12121A]/60 border border-white/5 rounded-2xl flex flex-col justify-between hover:border-white/10 hover:bg-[#12121A]/85 transition-all duration-300 min-h-[240px] group relative"
                      >
                        {/* Hover color accent strip */}
                        <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-ids-purple to-ids-violet transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                        
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                              SERVICE {srv.id < 10 ? `0${srv.id}` : srv.id}
                            </span>
                            <div className="p-1.5 rounded-lg bg-white/5 text-slate-400 group-hover:text-ids-magenta transition-colors duration-350">
                              <ServiceIcon className="w-4 h-4" />
                            </div>
                          </div>

                          <h4 className="font-display font-bold text-[15px] sm:text-[16px] text-white leading-snug mb-3 pr-2">
                            {srv.name}
                          </h4>

                          <p className="font-sans text-[12.5px] text-slate-300 leading-relaxed">
                            {srv.description}
                          </p>

                          {/* Detail bullets for specialized interactive monitoring */}
                          {srv.id === 14 && srv.bullets && (
                            <div className="mt-4 pt-4 border-t border-white/5 space-y-2.5 font-sans">
                              <span className="text-[10px] font-bold text-ids-magenta uppercase tracking-widest font-mono block">
                                {srv.bulletTitle}
                              </span>
                              {srv.bullets.map((bull, bidx) => (
                                <div key={bidx} className="flex items-start gap-2 text-xs text-slate-300">
                                  <span className="text-ids-magenta shrink-0 mt-0.5">•</span>
                                  <span className="leading-snug">{bull}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400 select-none">
                          <span className="uppercase tracking-wider">Strategic Node</span>
                          <span className="flex items-center gap-1 group-hover:text-ids-magenta transition-colors">
                            DEPLOY <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
