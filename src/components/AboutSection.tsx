import { ArrowRight, Shield, Globe, Landmark, Scale, Briefcase } from "lucide-react";

export default function AboutSection() {
  const usaPoints = [
    { label: "California Headquartered", desc: "Strategy led from Silicon Valley edge hub", icon: Shield },
    { label: "US Market Entry", desc: "Turnkey scaling system for international brands", icon: Globe },
    { label: "USD Billing", desc: "Secure local financial routing structures", icon: Landmark },
    { label: "California Law Compliant", desc: "Ensured digital governance and compliance", icon: Scale }
  ];

  const uaePoints = [
    { label: "Dubai Based", desc: "Sister firm IGS operation based in Dubai Downtown", icon: Shield },
    { label: "MENA Market Entry", desc: "Access the young GCC premium consumer population", icon: Globe },
    { label: "AED Billing", desc: "Local corporate account convenience and logistics", icon: Landmark },
    { label: "UAE Law Compliant", desc: "Complete 100% foreign ownership registry handling", icon: Scale }
  ];

  return (
    <section id="about" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Decorative Blur elements resembling original Frosted design layout */}
      <div className="absolute top-1/2 left-[5%] w-96 h-96 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[5%] w-[35rem] h-[35rem] bg-indigo-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="inline-flex self-start px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
              The IDS Difference
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              We Don't Just Build. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                We Secure. We Grow.
              </span> <br />
              We Make You The Answer.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              IDS — Impulse Digital Solutions — is a California-based digital powerhouse that integrates IT infrastructure, enterprise-grade cybersecurity, world-class web and app development, AI-driven SEO, cutting-edge AEO, full-service branding, digital marketing, lead generation systems, and comprehensive media monitoring intelligence into one seamless, unified solution.
            </p>
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
              We are backed by a global team with active operations in both the United States and the UAE — giving our clients a rare competitive advantage: Silicon Valley innovation combined with deep international market expertise through our sister company, Impulse Growth Solutions, operating from the heart of Dubai. When you partner with IDS, you don't just get a vendor. You get a growth partner who protects your business as aggressively as it grows it — across two of the world's most dynamic business markets.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-cyan-400 transition-all duration-300 hover:text-white"
              >
                <span>Discover Our Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Interactive Dual Continent Cards layout */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* USA Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300" />
              
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <h3 className="font-display font-extrabold text-[#06b6d4] uppercase text-xs tracking-wider">USA Operations</h3>
                </div>
                
                <div className="space-y-4">
                  {usaPoints.map((pt, i) => {
                    const PtIcon = pt.icon;
                    return (
                      <div key={i} className="flex gap-3">
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                          <PtIcon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="font-sans font-semibold text-xs text-white">{pt.label}</h4>
                          <span className="text-[10px] text-slate-400 font-sans block mt-0.5 leading-snug">{pt.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/5 mt-8 text-[9px] font-mono text-slate-500">
                HO: SACRAMENTO, CALIFORNIA
              </div>
            </div>

            {/* UAE Card */}
            <div className="bg-indigo-950/20 border border-indigo-500/20 backdrop-blur-xl p-6 rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/25 transition-all duration-300" />
              
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
                  <h3 className="font-display font-extrabold text-indigo-400 uppercase text-xs tracking-wider">UAE Operations</h3>
                </div>
                
                <div className="space-y-4">
                  {uaePoints.map((pt, i) => {
                    const PtIcon = pt.icon;
                    return (
                      <div key={i} className="flex gap-3">
                        <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 mt-0.5">
                          <PtIcon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="font-sans font-semibold text-xs text-white">{pt.label}</h4>
                          <span className="text-[10px] text-slate-400 font-sans block mt-0.5 leading-snug">{pt.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-indigo-500/10 mt-8 text-[9px] font-mono text-indigo-400/80">
                MIDDLE EAST OFFICE: MARINA, DUBAI
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
