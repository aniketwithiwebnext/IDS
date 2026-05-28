import { useState, useEffect } from "react";
import { ArrowRight, Terminal, Shield, Network, Zap, Cpu } from "lucide-react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coordinate multipliers from the screen center (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const tiltStyle = {
    transform: `perspective(1000px) rotateX(${mousePos.y * 30}deg) rotateY(${mousePos.x * -30}deg)`,
    transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
    transformStyle: "preserve-3d" as const
  };

  const ambientX = mousePos.x * -60;
  const ambientY = mousePos.y * -60;

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-ids-black grid-pattern">
      
      {/* 3D Radiant Core Ambient Lights (Parallax depth layers mapped to mousePos) */}
      <div
        style={{
          transform: `translate(${ambientX}px, ${ambientY}px)`,
          transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)"
        }}
        className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-ids-purple/10 blur-[120px] pointer-events-none"
      />
      <div
        style={{
          transform: `translate(${ambientX * -1}px, ${ambientY * -1}px)`,
          transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)"
        }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-ids-violet/10 blur-[130px] pointer-events-none"
      />

      {/* Futuristic Grid and Lines background overlay */}
      <div className="absolute inset-0 bg-transparent flex items-center justify-center pointer-events-none z-0">
        <div className="w-full h-full max-w-7xl mx-auto px-4 relative opacity-40">
          <div className="absolute top-[10%] left-[-5%] w-0.5 h-64 bg-gradient-to-b from-transparent via-ids-purple/50 to-transparent" />
          <div className="absolute bottom-[10%] right-[-5%] w-0.5 h-64 bg-gradient-to-b from-transparent via-ids-violet/50 to-transparent" />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-ids-purple/15 to-ids-violet/15 border border-ids-purple/30 text-ids-magenta font-mono text-[12px] font-semibold uppercase tracking-wider animate-[pulse_3s_infinite]">
              <Zap className="w-3.5 h-3.5" />
              <span>One Partner. Total Digital Dominance.</span>
            </div>

            {/* Headline title banner */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-3xl xl:text-5xl text-white tracking-tight leading-[1.1]">
              Cybersecurity, Web Development, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ids-magenta via-ids-purple to-ids-violet">
                AI-Powered SEO & AEO
              </span> <br className="hidden lg:inline" />
              — Unstoppable Business Growth.
            </h1>

            {/* Subheadline description information list */}
            <p className="font-sans text-[15px] sm:text-[16px] text-slate-300 leading-relaxed max-w-2xl">
              IDS is California's only all-in-one digital partner that builds your brand, secures your business, generates qualified leads, monitors your media presence, grows your revenue, and makes you the answer AI chooses — simultaneously. No more juggling multiple vendors. One team. Total control. Two continents.
            </p>

            {/* Action buttons trigger anchors */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-ids-purple to-ids-violet hover:from-ids-magenta hover:to-ids-purple font-bold text-white shadow-[0_5px_20px_rgba(123,47,190,0.35)] hover:shadow-[0_5px_30px_rgba(192,38,211,0.5)] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-semibold transition-all duration-300 hover:text-white"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Dual operation context indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-905/70 border border-slate-700/60 text-[11px] font-mono text-slate-400 mt-4 select-none">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active operations: California, USA & Dubai, UAE</span>
            </div>
          </div>

          {/* Graphic section featuring mouse tilt parameters */}
          <div className="lg:col-span-5 relative flex items-center justify-center z-10">
            <div
              style={tiltStyle}
              className="relative w-full max-w-[380px] aspect-[1/1] sm:aspect-[1/1] rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing group overflow-hidden"
            >
              {/* Glassmorphic card context filters */}
              <div className="absolute inset-0 bg-gradient-to-tr from-ids-purple/10 via-transparent to-ids-violet/10 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* HUD alignment borders */}
              <div className="absolute top-4 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-ids-purple/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-ids-violet/30 to-transparent" />

              <div className="flex items-center justify-between" style={{ transform: "translateZ(30px)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Active Operations</span>
                </div>
                <Terminal className="w-4 h-4 text-ids-magenta" />
              </div>

              {/* Core 3D circular structures representing digital alignment */}
              <div className="relative my-6 flex items-center justify-center" style={{ transform: "translateZ(80px)" }}>
                <div className="w-48 h-48 rounded-full border-2 border-ids-purple/20 border-dashed animate-[spin_40s_linear_infinite] flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full border-2 border-ids-violet/30 border-dotted animate-[spin_20s_linear_infinite_reverse] flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-ids-purple/40 to-ids-violet/45 p-0.5 flex items-center justify-center shadow-[0_0_30px_rgba(123,47,190,0.3)]">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute -top-2 left-6 p-2 rounded-xl bg-slate-950/80 border border-ids-purple/30 font-mono text-[10px] text-ids-magenta animate-[bounce_5s_infinite]">
                  <Cpu className="w-3.5 h-3.5 inline mr-1 text-ids-purple" />
                  <span>SECURE-CORE</span>
                </div>

                <div className="absolute -bottom-4 right-4 p-2 rounded-xl bg-slate-950/80 border border-ids-violet/30 font-mono text-[10px] text-ids-violet animate-[bounce_6s_infinite_delay-1000]">
                  <Network className="w-3.5 h-3.5 inline mr-1 text-ids-violet" />
                  <span>AEO_READY_2026</span>
                </div>
              </div>

              {/* Coordinates footer inside card */}
              <div className="flex flex-col space-y-2 mt-auto" style={{ transform: "translateZ(50px)" }}>
                <div className="h-[1px] bg-slate-800 w-full" />
                <div className="flex justify-between items-center text-slate-300 text-xs font-mono">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-500 uppercase">CALIFORNIA, USA</span>
                    <span className="font-semibold text-[11px] text-slate-200">Headquarters</span>
                  </div>
                  <div className="h-8 w-[1px] bg-slate-800" />
                  <div className="flex flex-col text-right">
                    <span className="text-[9px] text-slate-500 uppercase">DUBAI, UAE</span>
                    <span className="font-semibold text-[11px] text-slate-200">IGS Office Hub</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
