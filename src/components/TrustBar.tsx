import { useState, useEffect, useRef } from "react";
import { BRANDS, STATS, BRAND_DELIVERABLES } from "../data";
import { CheckCircle2, TrendingUp, Award } from "lucide-react";

// Robust dynamic scroll-to-view count-up component
function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Extract trailing non-digits like "+", "%", "°" and the leading numbers
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const targetNumber = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = numericMatch ? numericMatch[2] : value;

  useEffect(() => {
    if (targetNumber === null) {
      return;
    }
    
    let observer: IntersectionObserver | null = null;
    let animationFrameId: number;

    const startCountup = () => {
      const duration = 1200; // fast & smooth animation
      const startTime = performance.now();

      const updateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing: easeOutQuad for a smooth deceleration look
        const easeProgress = progress * (2 - progress);
        const currentVal = Math.floor(easeProgress * targetNumber);
        
        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        } else {
          setCount(targetNumber);
        }
      };

      animationFrameId = requestAnimationFrame(updateCount);
    };

    if (elementRef.current && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCountup();
            if (observer) observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    } else {
      setCount(targetNumber);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, targetNumber]);

  if (targetNumber === null) {
    return <span>{value}</span>;
  }

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section id="trust" className="relative py-24 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
      {/* Background ambient lighting configured for premium light contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-ids-purple/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Trusted By logo board */}
        <div className="flex flex-col space-y-6 text-center md:text-left mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-ids-purple font-bold">REPUTATION & SECURITY</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-1 tracking-tight">
                Trusted by Global Brands Across USA & UAE
              </h3>
            </div>
            <div className="flex items-center gap-2 justify-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <Award className="w-4 h-4 text-ids-purple animate-pulse" />
              <span className="text-xs font-mono text-slate-700">Silicon Valley & Dubai sister hubs</span>
            </div>
          </div>
 
          {/* Scrolling logo ticker line */}
          <div className="relative w-full overflow-hidden py-5 border-y border-slate-200/60 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm">
            <div className="flex items-center space-x-12 animate-[scroll_32s_linear_infinite] whitespace-nowrap">
              {/* Double up the list for infinite loops */}
              {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => (
                <div key={idx} className="flex items-center space-x-2 shrink-0">
                  <span className="text-sm font-display font-semibold tracking-tight text-slate-600 hover:text-ids-purple transition-colors duration-300">
                    {brand.toUpperCase()}
                  </span>
                  <span className="text-ids-purple/30 text-xs">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deliverables Board */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-ids-purple" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">Our Track Record</span>
            </div>
            <h4 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
              What We Have Delivered <br />For These Brands
            </h4>
            <p className="font-sans text-slate-600 text-sm leading-relaxed">
              Impulse Digital Solutions delivers comprehensive brand dominance. From securing core remote network lines to crafting search engine blueprints and local Middle Eastern campaigns, our systems ensure error-free performance.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-md">
            <h5 className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">Integrated Client Gains</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BRAND_DELIVERABLES.map((del, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-ids-purple mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-700 font-sans leading-tight">{del}</span>
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
              className="p-6 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:border-ids-purple/40 hover:-translate-y-1 hover:shadow-lg text-center flex flex-col justify-center min-h-[120px]"
            >
              <div className="text-2xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-ids-purple via-ids-magenta to-ids-violet">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider mt-2 leading-snug font-medium">
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
