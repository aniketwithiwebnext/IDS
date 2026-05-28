import { useState } from "react";
import { PILLARS } from "../data";
import { Lock, Code, Sparkles, Award, CheckCircle2, ChevronRight, Server, ShieldCheck, Database, LayoutTemplate } from "lucide-react";

// Map pillar icons
const iconMap: Record<string, any> = {
  Lock: Lock,
  Code: Code,
  Sparkles: Sparkles,
  Award: Award
};

// Custom design colors for Pillars
const pillarStyles: Record<string, { activeBg: string; text: string; lightDot: string; tag: string }> = {
  "pillar-1": { activeBg: "bg-cyan-500/10 border-cyan-500/30", text: "text-cyan-400", lightDot: "bg-cyan-500", tag: "border-cyan-500/20 text-cyan-400" },
  "pillar-2": { activeBg: "bg-emerald-500/10 border-emerald-500/30", text: "text-emerald-400", lightDot: "bg-emerald-400", tag: "border-emerald-500/20 text-emerald-400" },
  "pillar-3": { activeBg: "bg-amber-500/10 border-amber-500/30", text: "text-amber-400", lightDot: "bg-amber-400", tag: "border-amber-500/20 text-amber-400" },
  "pillar-4": { activeBg: "bg-indigo-500/10 border-indigo-500/30", text: "text-indigo-400", lightDot: "bg-indigo-400", tag: "border-indigo-500/20 text-indigo-300" }
};

export default function ServicesSection() {
  const [activePillarId, setActivePillarId] = useState("pillar-1");

  const currentPillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];
  const style = pillarStyles[activePillarId] || pillarStyles["pillar-1"];

  return (
    <section id="services" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Visual backgrounds */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-indigo-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-wider rounded-full mb-4 font-mono">
            What We Do
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none mb-4">
            Every Digital Service Your Business Will Ever Need. <br className="hidden sm:inline" />
            Under One Roof.
          </h2>
          <p className="font-sans text-slate-300 text-sm">
            From infrastructure to AI visibility — IDS covers the complete digital lifecycle of your business across USA and UAE.
          </p>
        </div>

        {/* Pillars Selector Tabs & Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Pillars */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">Select Strategic Pillar</h4>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {PILLARS.map((p) => {
                const IconComponent = iconMap[p.icon] || Lock;
                const isActive = p.id === activePillarId;
                const pColor = pillarStyles[p.id];

                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePillarId(p.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                      isActive
                        ? `${pColor.activeBg} shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]`
                        : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                        isActive ? "bg-white/10 text-white" : "bg-white/5 text-slate-400 group-hover:text-white"
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className={`w-2 h-2 rounded-full shrink-0 transition-opacity ${isActive ? pColor.lightDot : "opacity-0"}`} />
                    </div>

                    <div className="mt-6">
                      <h5 className="font-display font-bold text-[14px] text-white leading-tight uppercase tracking-wide">
                        {p.shortName}
                      </h5>
                      <span className="text-[10px] text-slate-400 font-mono block mt-1">
                        Pillar 0{PILLARS.indexOf(p) + 1}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Services under Selected Pillar */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Pillar Meta description */}
            <div className="p-6 bg-slate-950/40 border border-white/5 rounded-2xl flex items-center justify-between gap-6 backdrop-blur-sm">
              <div className="space-y-1">
                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] font-bold ${style.text}`}>
                  {currentPillar.name}
                </span>
                <p className="font-sans text-xs text-slate-300">
                  {currentPillar.description}
                </p>
              </div>
            </div>

            {/* List of Services in current Pillar with beautiful frosted glass expanders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentPillar.services.map((srv) => (
                <div
                  key={srv.id}
                  className="p-6 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 min-h-[220px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-slate-500">SERVICE {srv.id < 10 ? `0${srv.id}` : srv.id}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${style.lightDot}`} />
                    </div>

                    <h4 className="font-display font-bold text-[15px] text-white leading-tight mb-2.5">
                      {srv.name}
                    </h4>

                    <p className="font-sans text-[13px] text-slate-300 leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Show special list bullets specifically requested for Service 14 (Media monitoring) */}
                    {srv.id === 14 && srv.bullets && (
                      <div className="mt-4 pt-4 border-t border-white/5 space-y-3 font-sans">
                        <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest font-mono block">
                          {srv.bulletTitle}
                        </span>
                        {srv.bullets?.map((bull, bidx) => (
                          <div key={bidx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                            <span className="leading-snug">{bull}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none">
                    <span className="capitalize">Security-First</span>
                    <span className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      Strategic <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
