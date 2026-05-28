import { BRANDS, STATS, BRAND_DELIVERABLES } from "../data";
import { CheckCircle2, TrendingUp, Award } from "lucide-react";

export default function TrustBar() {
  return (
    <section id="trust" className="relative py-16 bg-[#030712] border-y border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trusted By logo board */}
        <div className="flex flex-col space-y-6 text-center md:text-left mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-cyan-400 font-bold">REPUTATION & SECURITY</span>
              <h3 className="font-display font-semibold text-lg text-slate-300 mt-1">
                Trusted by Global Brands Across USA & UAE
              </h3>
            </div>
            <div className="flex items-center gap-2 justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Award className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300">Silicon Valley & Dubai sister hubs</span>
            </div>
          </div>

          {/* Scrolling logo ticker line */}
          <div className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-slate-950/20 backdrop-blur-sm rounded-xl">
            <div className="flex items-center space-x-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
              {/* Double up the list for infinite loops */}
              {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => (
                <div key={idx} className="flex items-center space-x-2 shrink-0">
                  <span className="text-sm font-display font-bold tracking-tight text-slate-400 hover:text-white transition-colors duration-300">
                    {brand.toUpperCase()}
                  </span>
                  <span className="text-cyan-500/40 text-xs">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deliverables Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">Our Track Record</span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              What We Have Delivered <br />For These Brands
            </h4>
            <p className="font-sans text-slate-300 text-sm leading-relaxed">
              Impulse Digital Solutions delivers comprehensive brand dominance. From securing core remote network lines to crafting search engine blueprints and local Middle Eastern campaigns, our systems ensure error-free performance.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
            <h5 className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Integrated Client Gains</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BRAND_DELIVERABLES.map((del, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-300 font-sans leading-tight">{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="p-5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900/40 text-center flex flex-col justify-center min-h-[110px]"
            >
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-300">
                {stat.value}
              </div>
              <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider mt-1.5 leading-snug font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Styled inline keyframes for scroll ticker */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
