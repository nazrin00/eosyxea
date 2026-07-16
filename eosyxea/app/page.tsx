import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] font-sans selection:bg-[#7C3AED]/30 selection:text-white">
      
      {/* 1. Header Component (Cleaned Nav) */}
      <header className="sticky top-0 z-50 w-full border-b border-[#0F172A]/80 bg-[#050816]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
          
          {/* Logo */}
          <Link href="/" className="text-lg font-bold tracking-wider text-[#F8FAFC] hover:text-[#7C3AED] transition-colors">
            EOSYXEA
          </Link>

          {/* Navigation links (Removed 'About') */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            <Link href="#projects" className="hover:text-[#F8FAFC] transition-colors">Projects</Link>
            <Link href="#build-log" className="hover:text-[#F8FAFC] transition-colors">Build Log</Link>
            <Link href="#contact" className="hover:text-[#F8FAFC] transition-colors">Contact</Link>
          </nav>

          {/* Core Action */}
          <div>
            <Link 
              href="#contact" 
              className="inline-flex h-9 items-center justify-center rounded-md bg-[#7C3AED] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#8B5CF6]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* 2. Hero Section (Production-Grade Copy) */}
        <section className="py-20 md:py-28 flex flex-col items-start justify-center max-w-3xl">
          {/* Static Sprint Status Badge (No pulse animation) */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 text-xs font-medium text-[#8B5CF6] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
            Sprint 0 — Building in Public
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#F8FAFC] sm:text-5xl md:text-6xl leading-[1.1]">
            Building trustworthy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#94A3B8] to-[#7C3AED]">
              enterprise AI systems.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#94A3B8] leading-relaxed">
            We design, architect, and deploy resilient, deterministic, and secure AI infrastructure. We do not build generic wrappers; we build mission-critical enterprise systems designed for high-throughput and absolute safety.
          </p>

          {/* Product-Focused CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="#build-log" 
              className="inline-flex h-11 items-center justify-center rounded-md bg-[#7C3AED] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#8B5CF6]"
            >
              See What We're Building
            </Link>
          </div>

          {/* 3. Currently Building Chips (Below Hero) */}
          <div className="mt-12 w-full">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]/60 mb-3">
              Active Focus Areas
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md border border-[#0F172A] bg-[#0F172A]/40 px-3 py-1.5 text-xs font-mono text-[#F8FAFC]">
                Enterprise AI Systems
              </span>
              <span className="inline-flex items-center rounded-md border border-[#0F172A] bg-[#0F172A]/40 px-3 py-1.5 text-xs font-mono text-[#F8FAFC]">
                AI Infrastructure
              </span>
              <span className="inline-flex items-center rounded-md border border-[#0F172A] bg-[#0F172A]/40 px-3 py-1.5 text-xs font-mono text-[#F8FAFC]">
                AI Security
              </span>
              <span className="inline-flex items-center rounded-md border border-[#0F172A] bg-[#0F172A]/40 px-3 py-1.5 text-xs font-mono text-[#F8FAFC]">
                Workflow Automation
              </span>
            </div>
          </div>
        </section>

        {/* 4. Simplified "What We Build" Section */}
        <section id="what-we-build" className="py-16 md:py-20 border-t border-[#0F172A]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">Capabilities</h2>
            <p className="mt-2 text-3xl font-bold text-[#F8FAFC] tracking-tight">What We Build</p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* AI Infrastructure */}
            <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/20 p-6 hover:border-[#7C3AED]/30 transition-colors duration-200">
              <div className="text-lg font-semibold text-[#F8FAFC]">AI Infrastructure</div>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                Deterministic model orchestration engines built for high-throughput enterprise scales.
              </p>
            </div>

            {/* Enterprise AI Agents */}
            <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/20 p-6 hover:border-[#7C3AED]/30 transition-colors duration-200">
              <div className="text-lg font-semibold text-[#F8FAFC]">Enterprise Agents</div>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                Autonomous agents engineered to resolve complex, multi-step back-office workflows reliably.
              </p>
            </div>

            {/* AI Security */}
            <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/20 p-6 hover:border-[#7C3AED]/30 transition-colors duration-200">
              <div className="text-lg font-semibold text-[#F8FAFC]">AI Security</div>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                Active guardrails, real-time prompt injection mitigation, and compliance tracking.
              </p>
            </div>

            {/* Workflow Automation */}
            <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/20 p-6 hover:border-[#7C3AED]/30 transition-colors duration-200">
              <div className="text-lg font-semibold text-[#F8FAFC]">Workflow Automation</div>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                Resilient API integrations and robust background loops to eliminate operational bottlenecks.
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
