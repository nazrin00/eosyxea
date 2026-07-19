import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] font-sans selection:bg-[#7C3AED]/30 selection:text-white relative overflow-hidden">
      
      {/* Subtil Arxa Fon Parıltısı (Radial Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-radial-gradient from-[#7C3AED]/5 to-transparent pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(circle 500px at 50% 0px, rgba(124, 58, 237, 0.08), transparent 80%)' }} />

      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#0F172A]/80 bg-[#050816]/90 backdrop-blur-md relative">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="text-base font-bold tracking-wider text-[#F8FAFC] hover:text-[#7C3AED] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-sm"
          >
            EOSYXEA
          </Link>

          {/* Naviqasiya (Yalnız tələb olunan keçidlər) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            <Link 
              href="#products" 
              className="hover:text-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-sm"
            >
              Products
            </Link>
            <Link 
              href="#research" 
              className="hover:text-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-sm"
            >
              Research
            </Link>
            <Link 
              href="#build-log" 
              className="hover:text-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-sm"
            >
              Build Log
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Get in Touch CTA */}
          <div>
            <Link 
              href="#contact" 
              className="inline-flex h-9 items-center justify-center rounded-md bg-[#7C3AED] px-4 text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] border border-[#7C3AED] transition-all hover:bg-[#8B5CF6] hover:border-[#8B5CF6] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* 2. Hero Section */}
        <section id="hero" className="py-24 md:py-36 flex flex-col items-start justify-center max-w-3xl">
          
          {/* Current Sprint Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3.5 py-1 text-xs font-semibold text-[#8B5CF6] mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            Sprint 1 — Active Development
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-[#F8FAFC] sm:text-5xl md:text-6xl leading-[1.15]">
            Building trustworthy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#94A3B8] to-[#7C3AED]">
              enterprise AI systems.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-2xl">
            Engineering secure AI infrastructure, enterprise agents, and intelligent automation for organizations that need production-ready AI—not prototypes.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link 
              href="#products" 
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#7C3AED] px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] border border-[#7C3AED] transition-all hover:bg-[#8B5CF6] hover:border-[#8B5CF6] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
            >
              Explore Our Products →
            </Link>
            <Link 
              href="#build-log" 
              className="inline-flex h-11 items-center justify-center rounded-md border border-[#0F172A] bg-[#0F172A]/40 px-6 text-sm font-semibold text-[#94A3B8] transition-all hover:bg-[#0F172A] hover:text-[#F8FAFC] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
            >
              View Build Log
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
