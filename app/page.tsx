import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] font-sans selection:bg-[#7C3AED]/30 selection:text-white">
      
      {/* 1. Header Component */}
      <header className="sticky top-0 z-50 w-full border-b border-[#0F172A]/80 bg-[#050816]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
          
          {/* Logo */}
          <Link href="/" className="text-lg font-bold tracking-wider text-[#F8FAFC] hover:text-[#7C3AED] transition-colors">
            EOSYXEA
          </Link>

          {/* Navigation links */}
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
        
        {/* 2. Hero Section */}
        <section className="py-20 md:py-28 flex flex-col items-start justify-center max-w-3xl">
          {/* Static Sprint Status Badge */}
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

          {/* 3. Currently Building Chips */}
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

        {/* 4. What We Build Section */}
        <section id="projects" className="py-16 md:py-20 border-t border-[#0F172A]">
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

        {/* 5. Engineering Principles Section */}
        <section id="principles" className="py-16 md:py-20 border-t border-[#0F172A]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">Standards</h2>
            <p className="mt-2 text-3xl font-bold text-[#F8FAFC] tracking-tight">Engineering Principles</p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/10 p-6">
              <span className="text-xs font-mono text-[#7C3AED]">01</span>
              <div className="text-lg font-semibold text-[#F8FAFC] mt-2">Security by Design</div>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                Strict input filtering, continuous evaluation, and deterministic bounds to neutralize emerging AI safety threats.
              </p>
            </div>

            <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/10 p-6">
              <span className="text-xs font-mono text-[#7C3AED]">02</span>
              <div className="text-lg font-semibold text-[#F8FAFC] mt-2">AI-first Architecture</div>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                Systems built with intelligence integrated at the core, not as an afterthought or a superficial wrapping layer.
              </p>
            </div>

            <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/10 p-6">
              <span className="text-xs font-mono text-[#7C3AED]">03</span>
              <div className="text-lg font-semibold text-[#F8FAFC] mt-2">Production over Demo</div>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                We design and optimize for high throughput, absolute resilience, and low latency rather than flashy presentations.
              </p>
            </div>

            <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/10 p-6">
              <span className="text-xs font-mono text-[#7C3AED]">04</span>
              <div className="text-lg font-semibold text-[#F8FAFC] mt-2">Automation by Default</div>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                Eliminating structural operational waste through autonomous background processing and deep API-driven workflows.
              </p>
            </div>

            <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/10 p-6">
              <span className="text-xs font-mono text-[#7C3AED]">05</span>
              <div className="text-lg font-semibold text-[#F8FAFC] mt-2">Keep it Simple</div>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                Avoiding premature and complex over-engineering. Clear, maintainable, and straightforward solutions win.
              </p>
            </div>

            <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/10 p-6">
              <span className="text-xs font-mono text-[#7C3AED]">06</span>
              <div className="text-lg font-semibold text-[#F8FAFC] mt-2">Measure Everything</div>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                Rigorous observability, structured prompt evaluation, token accounting, and complete system telemetry.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Build Log Section */}
        <section id="build-log" className="py-16 md:py-20 border-t border-[#0F172A]">
          <div className="mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">Telemetry</h2>
            <p className="mt-2 text-3xl font-bold text-[#F8FAFC] tracking-tight">Active Build Log</p>
          </div>

          <div className="rounded-lg border border-[#0F172A] bg-[#0F172A]/20 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs font-semibold uppercase text-[#94A3B8]/60">Current Phase</p>
                <p className="text-base font-semibold text-[#F8FAFC] mt-1">Sprint 0 — Core Setup</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-[#94A3B8]/60">Current Status</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                  <p className="text-base font-semibold text-[#10B981]">MVP Live & Deploying</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-[#94A3B8]/60">Active Project</p>
                <p className="text-base font-semibold text-[#F8FAFC] mt-1">Foundational Platform Setup</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-[#94A3B8]/60">Last Updated</p>
                <p className="text-base font-semibold text-[#94A3B8] mt-1">Just now</p>
              </div>
            </div>
            
            <div className="border-t border-[#0F172A] mt-6 pt-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Sprint 0 platform initialization is complete. We successfully established our brand presence, configured DNS mappings, resolved deployment path issues, and implemented the initial technical shell. This represents a robust, highly optimized baseline for upcoming features.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Contact Section */}
        <section id="contact" className="py-16 md:py-24 border-t border-[#0F172A] mb-12">
          <div className="mb-12 max-w-xl">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">Inquire</h2>
            <p className="mt-2 text-3xl font-bold text-[#F8FAFC] tracking-tight">Connect with Us</p>
            <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
              We collaborate with forward-thinking engineering leads and enterprise teams to architect robust AI systems. Let's discuss your security, infrastructure, or orchestration requirements.
            </p>
          </div>

          <div className="max-w-xl rounded-lg border border-[#0F172A] bg-[#0F172A]/15 p-6 md:p-8">
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#94A3B8] uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full rounded-md border border-[#0F172A] bg-[#050816] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/30 focus:border-[#7C3AED]/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#94A3B8] uppercase tracking-wider mb-2">Corporate Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full rounded-md border border-[#0F172A] bg-[#050816] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/30 focus:border-[#7C3AED]/50 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#94A3B8] uppercase tracking-wider mb-2">Project Brief</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required 
                  className="w-full rounded-md border border-[#0F172A] bg-[#050816] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/30 focus:border-[#7C3AED]/50 focus:outline-none transition-colors resize-none"
                  placeholder="Outline your architectural challenges or project requirements..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full inline-flex h-11 items-center justify-center rounded-md bg-[#7C3AED] text-sm font-semibold text-white transition-colors hover:bg-[#8B5CF6] focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#0F172A]/60 py-8 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]/60">
          <p>© {new Date().getFullYear()} EOSYXEA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#projects" className="hover:text-[#F8FAFC]">Capabilities</Link>
            <Link href="#principles" className="hover:text-[#F8FAFC]">Principles</Link>
            <Link href="#build-log" className="hover:text-[#F8FAFC]">Build Log</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
