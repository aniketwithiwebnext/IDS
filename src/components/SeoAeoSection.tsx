import { Search, Bot, ArrowRight, Zap, CheckCircle } from "lucide-react";

export default function SeoAeoSection() {
  return (
    <section id="seo-aeo" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-[10%] w-[35rem] h-[35rem] bg-indigo-500/[0.04] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="inline-flex px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded-full mb-4 font-mono">
            The 2026 Search Reality
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Google Rankings Are No Longer Enough. <br />Welcome to the Age of AI Search.
          </h2>
          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
            In 2026, the way people find businesses has fundamentally changed. Traditional SEO gets you ranked on Google. But today, millions of potential clients skip Google entirely and ask ChatGPT, Perplexity, or Microsoft Copilot directly: 
            <span className="italic block mt-2 text-cyan-400 font-mono text-xs sm:text-sm">
              "Who is the best IT company in California?" | "Which agency can help me enter the UAE market?"
            </span>
          </p>
          <p className="font-sans text-slate-400 text-xs sm:text-sm leading-relaxed mt-2">
            These AI engines don't show a list of links. They give ONE answer. One recommendation. One brand. Is that brand yours?
          </p>
        </div>

        {/* Matrix Comparison layout side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* SEO Card */}
          <div className="p-8 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-[5%] right-[5%] text-slate-700/20 group-hover:text-cyan-400/5 transition-colors">
              <Search className="w-32 h-32" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm">
                  SEO
                </div>
                <div>
                  <h3 className="font-display font-black text-white text-lg leading-tight">Search Engine Optimization</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#06b6d4]">Traditional Clicks</span>
                </div>
              </div>

              <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6">
                Optimizes for Google rankings. Gets you on page 1 of search results. Drives traffic through clicks. The essential foundation of digital visibility. IDS delivers this with a cybersecurity-first approach that protects your rankings while growing them.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/5 font-sans">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Keyword Maps & On-page optimization</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Secure backlinking architectures</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>No black-hat risks</span>
                </div>
              </div>
            </div>

            <div className="pt-8 text-xs font-mono text-slate-500 mt-6 uppercase">
              Target: SERP Listings
            </div>
          </div>

          {/* AEO Card */}
          <div className="p-8 bg-amber-500/5 border border-amber-500/20 backdrop-blur-xl rounded-2xl flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-[5%] right-[5%] text-amber-500/5 group-hover:text-amber-500/10 transition-colors">
              <Bot className="w-32 h-32" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
                  AEO
                </div>
                <div>
                  <h3 className="font-display font-black text-white text-lg leading-tight">Answer Engine Optimization</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-amber-400">AI Recommendation Engine</span>
                </div>
              </div>

              <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6">
                Optimizes for AI engine answers. Makes YOU the recommended answer on ChatGPT, Perplexity, and Copilot. The new frontier of digital visibility in 2026. IDS delivers this with a structured content and authority strategy that puts your brand at the top of every AI response.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-amber-500/10 font-sans">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Structural authority schema feeds</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Interactive query clustering mapping</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>ChatGPT & Perplexity authoritative reference feed</span>
                </div>
              </div>
            </div>

            <div className="pt-8 text-xs font-mono text-amber-400/80 mt-6 uppercase">
              Target: The Recommended Single Choice
            </div>
          </div>

        </div>

        {/* Bottom line banner */}
        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-amber-500" />
          <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong>Bottom Line:</strong> IDS is one of the only digital partners in California offering both SEO AND AEO — ensuring your business is visible everywhere your clients are looking, whether that is Google, ChatGPT, or whatever platform comes next. And beyond SEO and AEO, our Media Monitoring service adds the critical intelligence layer — because knowing what is being said about your brand across every platform and every market is the foundation that makes your entire digital strategy infinitely smarter and more precisely targeted.
          </p>
        </div>

      </div>
    </section>
  );
}
