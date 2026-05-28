import { ShieldAlert, Terminal, Sparkles, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#020617] border-t border-white/5 overflow-hidden">
      {/* Decorative ambient subtle lights near base */}
      <div className="absolute top-1/2 left-1/4 w-[30rem] h-[15rem] bg-indigo-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Main Footer blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/5 pb-12 mb-8">
          
          {/* Logo Brand information */}
          <div className="md:col-span-12 lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <Logo height={48} className="w-auto" />
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm">
              Securing enterprise operations and driving high-velocity buyer lead gen flows across Silicon Valley and Middle Eastern markets.
            </p>
          </div>

          {/* Core Offices links */}
          <div className="md:col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:justify-items-end w-full">
            <div className="space-y-3 font-sans">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>US HEADQUARTERS</span>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed space-y-1">
                <p>California, USA</p>
                <p className="font-mono text-[10px] text-slate-500">Sacramento Edge Node Coordinates</p>
              </div>
            </div>

            <div className="space-y-3 font-sans">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>UAE HUB — IGS</span>
              </div>
              <div className="text-xs text-slate-400 leading-relaxed space-y-1">
                <p>Dubai, UAE</p>
                <p className="font-mono text-[10px] text-slate-500">Marina Office Central District</p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Legal row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-500">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
            <span>© 2026 iWebNext. All rights reserved.</span>
            <span>California, US — SACRAMENTO HQ</span>
            <span>Dubai, UAE — IGS REGIONAL OFFICE</span>
          </div>

          <div className="flex items-center gap-2.5 font-mono text-[11px] text-slate-400">
            <span className="uppercase tracking-widest">Digital Dominance Guaranteed</span>
            <span className="text-slate-700">|</span>
            {/* The absolute mandatory hyperlinked text exactly per specification */}
            <span className="text-xs font-sans text-slate-400">
              Developed by{" "}
              <a
                href="https://iwebnext.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-300 transition-all font-display"
              >
                iWebNext
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
