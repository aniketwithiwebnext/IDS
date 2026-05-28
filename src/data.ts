import { Pillar, StatItem, ProblemCard, HowItWorksStep, WhyIDSPoint } from "./types";

export const BRAND_DELIVERABLES = [
  "Branding that defines market leaders",
  "Digital Marketing that drives real revenue",
  "Lead Generation that fills pipelines",
  "Media Monitoring that protects reputations",
  "Cybersecurity that protects at every layer",
  "Web Development that converts visitors",
  "AI SEO & AEO that dominates search"
];

export const BRANDS = [
  "DHL",
  "Starbucks",
  "Nasty Vape",
  "Bloomingdale's",
  "Van Cleef & Arpels",
  "Kellogg's",
  "Red Bull",
  "Hello Parks"
];

export const STATS: StatItem[] = [
  { id: "stat-1", value: "200+", label: "Projects Delivered" },
  { id: "stat-2", value: "2", label: "Continents USA & UAE Operations" },
  { id: "stat-3", value: "98%", label: "Client Retention Rate" },
  { id: "stat-4", value: "360°", label: "Marketing & Branding" },
  { id: "stat-5", value: "100%", label: "Security-First Delivery" },
  { id: "stat-6", value: "AI-Powered", label: "SEO & AEO Growth" }
];

export const PROBLEMS: ProblemCard[] = [
  {
    id: 1,
    title: "Cyber Threats Are Escalating",
    description: "43% of all cyberattacks target small businesses. Without active monitoring and protection, you are already a target. The question is not whether you will be attacked — it is whether you will be ready when it happens.",
    icon: "ShieldAlert"
  },
  {
    id: 2,
    title: "Your Vendors Don't Talk to Each Other",
    description: "When your IT team, security firm, web developer, and marketing agency work in silos, your business pays the price in gaps, inefficiency, and wasted budget. Disconnected vendors create dangerous blind spots that cost you money and expose you to risk.",
    icon: "Layers"
  },
  {
    id: 3,
    title: "Invisible to AI Search",
    description: "Google rankings alone are no longer enough. In 2026, ChatGPT, Perplexity, and Copilot answer millions of business queries daily — bypassing traditional search entirely. If AI doesn't know you exist, your competitors are getting those clients right now.",
    icon: "Bot"
  },
  {
    id: 4,
    title: "No UAE & GCC Market Strategy",
    description: "The UAE and GCC represent one of the world's fastest-growing digital markets with zero income tax, 100% foreign ownership, and a premium consumer base actively seeking global brands. Most US businesses have no strategy to capture this extraordinary opportunity.",
    icon: "Globe"
  },
  {
    id: 5,
    title: "Your Pipeline is Empty",
    description: "Most businesses rely on referrals and hope. Without a structured branding identity, active digital marketing, and a systematic lead generation engine, your growth is unpredictable, inconsistent, and dangerously dependent on luck.",
    icon: "TrendingDown"
  },
  {
    id: 6,
    title: "You Are Flying Blind",
    description: "Your brand is being talked about right now — on social media, news sites, review platforms, and AI engines — and you have absolutely no idea what is being said. One unaddressed negative story, one viral complaint, one competitor move you missed — and the damage is done before you even knew it happened.",
    icon: "EyeOff"
  }
];

export const PILLARS: Pillar[] = [
  {
    id: "pillar-1",
    name: "PILLAR I — CYBERSECURITY & IT",
    shortName: "Security & IT",
    icon: "Lock",
    description: "Enterprise-grade safety, resilience, and scalable architecture optimized to protect and sustain operations worldwide.",
    services: [
      {
        id: 1,
        name: "Managed Security Services (MSS)",
        description: "24/7 remote monitoring, proactive threat detection, real-time incident response, and comprehensive risk management. We watch your entire digital infrastructure while you focus on growing your business. Cyberthreats never sleep — and neither do we."
      },
      {
        id: 2,
        name: "Cloud & Microsoft Services",
        description: "Seamless migration and optimization of Microsoft Azure and Microsoft 365. Secure, scalable cloud infrastructure built for performance, continuity, and productivity. We ensure your business operates at full capacity from anywhere in the world."
      },
      {
        id: 3,
        name: "Core IT Services",
        description: "Network architecture consulting, system integration, data management, and IT strategy consulting. We build the reliable, scalable IT foundation your business needs to grow without limits — remotely delivered, locally impactful."
      },
      {
        id: 4,
        name: "Penetration Testing",
        description: "We think like hackers so your enemies cannot act like them. Comprehensive vulnerability testing with detailed, actionable remediation reports. Know your weaknesses before your attackers do — and fix them before it is too late."
      },
      {
        id: 5,
        name: "Digital Forensics",
        description: "When a breach happens every second matters. Our forensics team investigates cyber incidents, fraud, and data breaches — collecting legal-grade evidence, analyzing attack vectors, and restoring your security posture fast."
      },
      {
        id: 6,
        name: "Advanced App Protection",
        description: "Enterprise-grade application security including Anti-Debugging, Anti-Tampering, MiTM Attack Prevention, Jailbreak Detection, Screenshot Prevention, Screen Recording Prevention, and VPN Detection. Your applications protected at every layer, on every device."
      }
    ]
  },
  {
    id: "pillar-2",
    name: "PILLAR II — WEB & APP DEVELOPMENT",
    shortName: "Web & App Dev",
    icon: "Code",
    description: "Security-first development pairing stunning layout design with secure-hardened deployment architecture.",
    services: [
      {
        id: 7,
        name: "Website Development",
        description: "High-performance, security-first websites built with AI-driven tools, seamless UX, and conversion optimization at every layer. From corporate sites to e-commerce platforms — we build digital experiences that turn visitors into loyal customers. Every site we build has cybersecurity embedded from line one of code."
      },
      {
        id: 8,
        name: "Mobile App Development",
        description: "Native and cross-platform mobile applications that are visually compelling, functionally advanced, and security-hardened from the ground up. AI chatbots, real-time tracking systems, secure payment gateways, and lead generation tools — all built in."
      }
    ]
  },
  {
    id: "pillar-3",
    name: "PILLAR III — DIGITAL GROWTH & VISIBILITY",
    shortName: "Growth & Visibility",
    icon: "Sparkles",
    description: "Dominating traditional Google lookups, innovative AEO chat triggers, brand design, and 24/7 client intelligence monitoring.",
    services: [
      {
        id: 9,
        name: "AI-Powered SEO",
        description: "Beyond conventional rankings — our cybersecurity-integrated SEO strategy protects your site while dominating search results. AI analytics, predictive content modeling, automated keyword research, secure backlinking strategies, and zero black-hat risk. Rank higher. Stay safer. Grow faster."
      },
      {
        id: 10,
        name: "AEO — Answer Engine Optimization",
        description: "The future of search is here. ChatGPT, Perplexity, Google AI Overviews, and Microsoft Copilot now answer millions of business queries daily — bypassing traditional search results entirely. AEO ensures YOUR business is the answer these AI engines recommend. We structure your content, authority, and digital presence so that when a potential client asks an AI \"who is the best cybersecurity company in California?\" — IDS is the answer."
      },
      {
        id: 11,
        name: "Branding & Creative Services",
        description: "Your brand is your most valuable business asset. IDS delivers complete branding solutions — from brand identity, logo design, and visual guidelines to brand strategy, positioning, and full creative production. We build brands that are instantly recognizable, emotionally compelling, and built to dominate their market across USA and UAE."
      },
      {
        id: 12,
        name: "Digital Marketing",
        description: "Full-spectrum digital marketing strategy and execution across all platforms. Paid advertising on Google, Meta, and LinkedIn, social media management, content marketing, email campaigns, influencer marketing, and performance marketing — all data-driven, ROI-focused, and tailored to your target market in both the US and UAE."
      },
      {
        id: 13,
        name: "Lead Generation",
        description: "We build and manage end-to-end lead generation systems that consistently fill your pipeline with qualified, high-intent prospects. Landing pages, conversion funnels, paid campaigns, LinkedIn outreach, email sequences, and CRM integration — engineered to convert strangers into paying clients on autopilot."
      },
      {
        id: 14,
        name: "Media Monitoring & Intelligence",
        description: "Your brand is being talked about right now. Do you know what is being said? IDS delivers comprehensive media monitoring and intelligence services that track every mention of your brand, your competitors, and your industry — across social media, news outlets, review platforms, blogs, podcasts, traditional media, and AI engines — in real time, 24 hours a day, 7 days a week.",
        bulletTitle: "IDS Media Intelligence Setup:",
        bullets: [
          "WHAT WE MONITOR: All major social media platforms (Instagram, X, Facebook, LinkedIn, TikTok, Snapchat, YouTube), global news, blogs, forums, podcasts, TV, radio, and AI engine mentions.",
          "WHAT YOU GET: Real-time brand alerts, sentiment analysis, competitive intelligence, share of voice, crisis early warning, influencer identification, GCC regional market reports, weekly executive briefings.",
          "WHY IT MATTERS: In 2026, negative posts can go viral in hours. Out-competed AI answers translate directly to missed deals. Media intelligence is the layer that makes choices smarter and highly profitable."
        ]
      }
    ]
  },
  {
    id: "pillar-4",
    name: "PILLAR IV — UAE & GCC MARKET SERVICES",
    shortName: "UAE & GCC Expansion",
    icon: "Award",
    description: "Launch turnkey campaigns and scale local operations in the zero-tax Gulf consumer hub.",
    services: [
      {
        id: 15,
        name: "UAE Market Entry Strategy",
        description: "Powered by our sister company IGS in Dubai, we provide US businesses with a complete UAE and GCC market entry solution. Market research, competitive analysis, consumer behavior insights, regulatory guidance, and a full digital launch strategy tailored to the Gulf market. We have the team, the network, and the on-the-ground intelligence to make your UAE expansion successful from day one."
      },
      {
        id: 16,
        name: "MENA Market Research",
        description: "Deep-dive market intelligence for the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. Consumer behavior analysis, competitor mapping, market sizing, trend forecasting, and opportunity identification. Know the market thoroughly before you invest a single dollar in it."
      },
      {
        id: 17,
        name: "GCC Marketing Strategy & Execution",
        description: "Full-service marketing strategy for the UAE and GCC market — social media management, paid advertising, influencer marketing, content creation, and performance marketing across all regional platforms including Snapchat, TikTok, and Instagram which dominate GCC consumer behavior."
      },
      {
        id: 18,
        name: "Branding & Creative Production UAE",
        description: "360° branding and creative production for businesses entering or growing in the UAE and GCC. Brand identity, visual design, media production, photography, videography, and brand strategy — all delivered by our in-house creative team operating from Dubai."
      }
    ]
  }
];

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Free Discovery Call",
    description: "We start with a free 30-minute strategy session to understand your business, your vulnerabilities, and your growth goals across USA and UAE markets. No pressure. No obligation. Pure value."
  },
  {
    id: "step-2",
    number: "02",
    title: "Full Digital Audit",
    description: "Complete audit of your IT infrastructure, security posture, website performance, SEO and AEO standing, current media presence and brand sentiment, and market positioning in both US and UAE markets."
  },
  {
    id: "step-3",
    number: "03",
    title: "Custom Roadmap",
    description: "A tailored action plan covering all pillars simultaneously — cybersecurity, development, SEO, AEO, branding, digital marketing, lead generation, media monitoring, and UAE market strategy — with clear timelines."
  },
  {
    id: "step-4",
    number: "04",
    title: "Integrated Execution",
    description: "Our unified US and UAE teams execute across all pillars in a coordinated, timeline-driven delivery. No silos. No gaps. No excuses. Total integration from day one."
  },
  {
    id: "step-5",
    number: "05",
    title: "Monitor, Optimize & Scale",
    description: "Continuous IT monitoring, media intelligence, monthly performance reporting, and proactive optimization ensure your business keeps growing, stays fully protected, and remains the answer AI recommends."
  }
];

export const WHY_IDS: WhyIDSPoint[] = [
  {
    id: 1,
    title: "USA + UAE Dual Operations",
    description: "The only digital partner operating simultaneously in California and Dubai — giving you unmatched reach and operational capability across two of the world's most powerful and fastest-growing business markets."
  },
  {
    id: 2,
    title: "Security-First in Everything",
    description: "Cybersecurity is not an add-on at IDS. It is baked into every website we build, every campaign we run, every SEO strategy we execute, and every line of code we write. Security is our foundation."
  },
  {
    id: 3,
    title: "SEO + AEO Combined",
    description: "We don't just rank you on Google. We make you the answer that AI recommends. SEO and AEO delivered together by one integrated team for maximum digital visibility across every platform in 2026."
  },
  {
    id: 4,
    title: "International Market Intelligence",
    description: "Through IGS in Dubai, we bring real operational international market expertise — not theory. We have the team, the network, and the on-the-ground intelligence that makes UAE GCC entry highly successful."
  },
  {
    id: 5,
    title: "One Vendor, Total Savings",
    description: "Replace 5 to 6 separate vendors with one unified partner. Reduce your operational costs by up to 40% while increasing efficiency, eliminating gaps, and giving your team back hours."
  },
  {
    id: 6,
    title: "Transparent Reporting",
    description: "Real-time dashboards, monthly performance reports, and open-door communication at all times. You always know exactly what is happening across every service, campaign, and market with complete clarity."
  },
  {
    id: 7,
    title: "Long-Term Partnership",
    description: "We measure our success by your growth. Our entire business model is built on long-term retainers, not one-off projects. When you grow, we grow. That alignment of incentives changes everything."
  },
  {
    id: 8,
    title: "Remote-First Global Delivery",
    description: "Every single service we offer can be delivered remotely — from California to Dubai to anywhere. No geographical limitations. No timezone excuses. No delays. Pure delivery."
  },
  {
    id: 9,
    title: "Full Funnel Growth",
    description: "From brand identity to lead generation to conversion — IDS manages your complete digital growth funnel. We don't just build presence, we actively fill your pipeline with qualified, hot buyer leads."
  },
  {
    id: 10,
    title: "Total Brand Intelligence",
    description: "Through our media monitoring service, you always know exactly what is being said about your brand, your competitors, and your industry across every platform and in every market you operate in."
  }
];

export const UAE_FACTS = [
  { value: "$500B+", label: "UAE GDP 2026" },
  { value: "9.9M", label: "Population (89% Urban)" },
  { value: "99%", label: "Internet Penetration" },
  { value: "$27B+", label: "E-Commerce Market Size" },
  { value: "100%", label: "Foreign Ownership Allowed" },
  { value: "0%", label: "Personal Income Tax" },
  { value: "Gateway", label: "To 2.5B MENA Consumers" },
  { value: "No. 1", label: "Dubai World Business Hub" }
];

export const CALL_EXPECTATIONS = [
  "Full review of your IT infrastructure and security posture",
  "SEO and AEO visibility audit",
  "Media presence and brand sentiment audit",
  "UAE market opportunity assessment",
  "Top 3 digital vulnerabilities identified",
  "Brand reputation risk assessment",
  "Branding audit and recommendations",
  "Lead generation opportunity assessment",
  "Custom 90-day growth roadmap",
  "Clear service recommendation",
  "No hard sell — pure strategy and value"
];

export const SERVICE_OPTIONS = [
  "Managed Security Services",
  "Penetration Testing",
  "Cloud & Microsoft Services",
  "Core IT Services",
  "Digital Forensics",
  "Advanced App Protection",
  "Website Development",
  "Mobile App Development",
  "AI-Powered SEO",
  "AEO Answer Engine Optimization",
  "Branding & Creative Services",
  "Digital Marketing",
  "Lead Generation",
  "Media Monitoring & Intelligence",
  "Brand Reputation Management",
  "Competitive Intelligence",
  "UAE Market Entry Strategy",
  "MENA Market Research",
  "GCC Marketing Strategy",
  "Full Package All Services",
  "Not Sure Need Advice"
];
