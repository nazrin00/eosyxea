import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] font-sans selection:bg-[#7C3AED]/30 selection:text-white relative overflow-hidden">
      
      {/* Premium Arxa Fon Glow Efektləri */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none z-0 opacity-40"
           style={{ backgroundImage: 'radial-gradient(circle 400px at 80% 20%, rgba(124, 58, 237, 0.12), transparent 80%)' }} />
      <div className="absolute top-[25%] left-[-200px] w-[600px] h-[600px] pointer-events-none z-0 opacity-20"
           style={{ backgroundImage: 'radial-gradient(circle 300px at 50% 50%, rgba(99, 102, 241, 0.08), transparent 80%)' }} />

      {/* 1. HEADER (NAVIGASIYA) */}
      <header className="sticky top-0 z-50 w-full border-b border-[#0F172A]/40 bg-[#050816]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
          
          {/* Logo (Geniş aralıqlı tipoqrafiya) */}
          <Link 
            href="/" 
            className="text-xs font-bold tracking-[0.6em] text-[#F8FAFC] hover:text-[#7C3AED] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7C3AED]"
          >
            EOSYXEA
          </Link>

          {/* Konsepsiyadakı tam menyu ardıcıllığı */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider text-[#94A3B8]">
            <Link href="#products" className="hover:text-[#F8FAFC] transition-colors">Products</Link>
            <Link href="#solutions" className="hover:text-[#F8FAFC] transition-colors">Solutions</Link>
            <Link href="#research" className="hover:text-[#F8FAFC] transition-colors">Research</Link>
            <Link href="#labs" className="hover:text-[#F8FAFC] transition-colors">Labs</Link>
            <Link href="#build-log" className="hover:text-[#F8FAFC] transition-colors">Build Log</Link>
            <Link href="#contact" className="hover:text-[#F8FAFC] transition-colors">Contact</Link>
          </nav>

          {/* Get in Touch Butonu */}
          <div>
            <Link 
              href="#contact" 
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#111827]/90 border border-[#1E293B] px-5 text-xs font-semibold text-white transition-all hover:bg-[#1E293B] hover:border-[#334155] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
            >
              Get in Touch <span className="ml-2 text-[#94A3B8]">→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ƏSAS MƏZMUN KONTEYNERİ */}
      <main className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
        
        {/* 2. HERO BÖLMƏSİ (Şəkillə eyni nizamda) */}
        <section className="py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Sol Sütun: Mətnlər və CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#818CF8] mb-4">
              BUILDING THE FUTURE OF ENTERPRISE AI
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#F8FAFC] sm:text-5xl md:text-6xl leading-[1.1] max-w-2xl">
              Enterprise AI systems <br />
              that set the foundation <br />
              for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#a78bfa] to-[#c084fc]">what's next.</span>
            </h1>
            <p className="mt-6 text-sm md:text-base text-[#94A3B8] leading-relaxed max-w-xl">
              We build AI operating systems, intelligent agents and secure infrastructure that help organizations move faster, operate smarter and build the future.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="#products" 
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#3B28CC] hover:bg-[#4338CA] px-6 text-xs font-semibold text-white shadow-[0_4px_20px_rgba(59,40,204,0.3)] border border-[#4F46E5] transition-all active:translate-y-[1px]"
              >
                Explore Our Products <span className="ml-2">→</span>
              </Link>
              <Link 
                href="#build-log" 
                className="inline-flex h-11 items-center justify-center rounded-md border border-[#1E293B] bg-[#0F172A]/40 px-6 text-xs font-semibold text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0F172A]/80 transition-all active:translate-y-[1px]"
              >
                View Build Log
              </Link>
            </div>
          </div>

          {/* Sağ Sütun: 3D İzometrik Şüşə Qatları Qrafiki (Tamamilə inline SVG ilə) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end select-none">
            <svg className="w-full max-w-[420px] h-auto drop-shadow-[0_15px_40px_rgba(124,58,237,0.12)]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E1B4B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0F172A" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="glassStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818CF8" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              {/* 3D Struktur Əlaqə Xətləri */}
              <path d="M 200,60 L 200,340" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.3" />
              <path d="M 110,130 L 110,270" stroke="#818CF8" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.2" />
              <path d="M 290,130 L 290,270" stroke="#818CF8" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.2" />

              {/* ALT QAT (Aparat və İnfrastruktur Qatı) */}
              <g transform="translate(0, 90)">
                <polygon points="200,180 320,240 200,300 80,240" fill="url(#glassGrad)" stroke="url(#glassStroke)" strokeWidth="1.5" />
                <path d="M 150,225 L 200,250 L 250,225" stroke="#818CF8" strokeWidth="1.5" strokeOpacity="0.3" />
                <circle cx="200" cy="250" r="3" fill="#818CF8" />
              </g>

              {/* ORTA QAT (Agent və İntellektual Alqoritm Qatı) */}
              <g transform="translate(0, 10)">
                <polygon points="200,140 320,200 200,260 80,200" fill="url(#glassGrad)" stroke="url(#glassStroke)" strokeWidth="1.5" />
                <path d="M 160,180 L 200,200 L 240,180" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="200" cy="200" r="4" fill="#a78bfa" className="animate-pulse" />
              </g>

              {/* ÜST QAT (Tətbiq və İnterfeys Qatı) */}
              <g transform="translate(0, -70)">
                <polygon points="200,100 320,160 200,220 80,160" fill="url(#glassGrad)" stroke="url(#glassStroke)" strokeWidth="1.5" />
                <path d="M 140,150 L 200,180 L 260,140" stroke="#c084fc" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle cx="200" cy="180" r="3" fill="#c084fc" />
              </g>

              {/* Ən üst dekorativ sərbəst düyüm */}
              <circle cx="200" cy="40" r="3" fill="#a78bfa" />
            </svg>
          </div>
        </section>

        {/* 3. ACTIVE FOCUS BÖLMƏSİ (Rəngli nöqtəli çiplər) */}
        <section className="py-12 border-t border-[#0F172A]/60">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]/60 block mb-6">
            ACTIVE FOCUS
          </span>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0F172A]/25 px-4 py-2 text-xs font-semibold text-[#F8FAFC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#818CF8]" />
              AI Operating Systems
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0F172A]/25 px-4 py-2 text-xs font-semibold text-[#F8FAFC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
              Enterprise Agents
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0F172A]/25 px-4 py-2 text-xs font-semibold text-[#F8FAFC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c084fc]" />
              AI Security
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0F172A]/25 px-4 py-2 text-xs font-semibold text-[#F8FAFC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
              MCP Infrastructure
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0F172A]/25 px-4 py-2 text-xs font-semibold text-[#F8FAFC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]" />
              Workflow Automation
            </span>
          </div>
        </section>

        {/* 4. DÖRD ƏSAS BÖLMƏ KARTLARI (Products, Solutions, Research, Labs) */}
        <section id="solutions" className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* KART 1: Products */}
          <div className="group rounded-xl border border-[#0F172A] bg-[#0F172A]/20 p-6 hover:border-[#7C3AED]/30 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <div className="h-10 w-10 rounded-lg bg-[#312E81]/40 flex items-center justify-center border border-[#4338CA]/30 mb-6">
                <svg className="h-5 w-5 text-[#818CF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Products</h3>
              <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">
                Building the next generation of enterprise AI software.
              </p>
            </div>
            <Link href="#products" className="mt-6 inline-flex items-center text-xs font-semibold text-[#818CF8] group-hover:text-[#a78bfa] transition-colors">
              Explore Products <span className="ml-1.5">→</span>
            </Link>
          </div>

          {/* KART 2: Solutions */}
          <div className="group rounded-xl border border-[#0F172A] bg-[#0F172A]/20 p-6 hover:border-[#a78bfa]/30 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <div className="h-10 w-10 rounded-lg bg-[#312E81]/40 flex items-center justify-center border border-[#4338CA]/30 mb-6">
                <svg className="h-5 w-5 text-[#a78bfa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Solutions</h3>
              <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">
                Designing and deploying AI systems for organizations.
              </p>
            </div>
            <Link href="#solutions" className="mt-6 inline-flex items-center text-xs font-semibold text-[#a78bfa] group-hover:text-[#c084fc] transition-colors">
              View Solutions <span className="ml-1.5">→</span>
            </Link>
          </div>

          {/* KART 3: Research */}
          <div className="group rounded-xl border border-[#0F172A] bg-[#0F172A]/20 p-6 hover:border-[#c084fc]/30 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <div className="h-10 w-10 rounded-lg bg-[#312E81]/40 flex items-center justify-center border border-[#4338CA]/30 mb-6">
                <svg className="h-5 w-5 text-[#c084fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Research</h3>
              <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">
                Exploring the future of AI engineering.
              </p>
            </div>
            <Link href="#research" className="mt-6 inline-flex items-center text-xs font-semibold text-[#c084fc] group-hover:text-[#818CF8] transition-colors">
              See Research <span className="ml-1.5">→</span>
            </Link>
          </div>

          {/* KART 4: Labs */}
          <div className="group rounded-xl border border-[#0F172A] bg-[#0F172A]/20 p-6 hover:border-[#818CF8]/30 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <div className="h-10 w-10 rounded-lg bg-[#312E81]/40 flex items-center justify-center border border-[#4338CA]/30 mb-6">
                <svg className="h-5 w-5 text-[#818CF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Labs</h3>
              <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed">
                Experimental projects shaping what's next.
              </p>
            </div>
            <Link href="#labs" className="mt-6 inline-flex items-center text-xs font-semibold text-[#818CF8] group-hover:text-[#a78bfa] transition-colors">
              Explore Labs <span className="ml-1.5">→</span>
            </Link>
          </div>
        </section>

        {/* 5. FEATURED PRODUCT BÖLMƏSİ (AdaptFlow Vizual Paneli) */}
        <section id="products" className="py-16 border-t border-[#0F172A]/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sol tərəf: Məhsul məlumatları */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7C3AED] mb-3">
                FEATURED PRODUCT
              </span>
              <h2 className="text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                AdaptFlow
              </h2>
              <p className="mt-4 text-xs md:text-sm text-[#94A3B8] leading-relaxed max-w-sm">
                Intelligent workflow automation platform for modern operations.
              </p>
              <Link 
                href="#contact" 
                className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-[#3B28CC] hover:bg-[#4338CA] px-5 text-xs font-semibold text-white transition-all active:translate-y-[1px]"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Sağ tərəf: Premium interfeys və node diaqram simulyasiyası */}
            <div className="lg:col-span-7 rounded-xl border border-[#1E293B]/60 bg-[#0F172A]/30 p-1 relative overflow-hidden shadow-2xl">
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0A0E1A] rounded-t-lg border-b border-[#1E293B]/40">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold text-[#F8FAFC] tracking-wide">AdaptFlow</span>
                  <div className="flex gap-4 text-[10px] text-[#94A3B8]/60 font-medium">
                    <span className="text-[#818CF8] border-b border-[#818CF8] pb-1">Flow</span>
                    <span>Executions</span>
                    <span>Analytics</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]/40" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]/40" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#94A3B8]/40" />
                </div>
              </div>

              {/* Node Diagram Canvas */}
              <div className="bg-[#050816]/90 p-8 min-h-[220px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 relative">
                
                {/* Node 1: Trigger */}
                <div className="flex flex-col items-center z-10">
                  <div className="h-12 w-12 rounded-lg border border-[#34D399]/30 bg-[#34D399]/5 flex items-center justify-center text-[#34D399] shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-semibold text-[#F8FAFC] mt-2">Trigger</span>
                </div>

                {/* Bağlantı Xətti 1 */}
                <div className="hidden md:block h-0.5 w-10 border-t border-dashed border-[#1E293B]" />

                {/* Node 2: AI Agent */}
                <div className="flex flex-col items-center z-10">
                  <div className="h-12 w-12 rounded-lg border border-[#818CF8]/30 bg-[#818CF8]/5 flex items-center justify-center text-[#818CF8] shadow-[0_0_15px_rgba(129,140,248,0.1)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-semibold text-[#F8FAFC] mt-2">AI Agent</span>
                </div>

                {/* Bağlantı Xətti 2 */}
                <div className="hidden md:block h-0.5 w-10 border-t border-dashed border-[#1E293B]" />

                {/* Node 3: Action */}
                <div className="flex flex-col items-center z-10">
                  <div className="h-12 w-12 rounded-lg border border-[#F59E0B]/30 bg-[#F59E0B]/5 flex items-center justify-center text-[#F59E0B] shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-semibold text-[#F8FAFC] mt-2">Action</span>
                </div>

                {/* Bağlantı Xətti 3 */}
                <div className="hidden md:block h-0.5 w-10 border-t border-dashed border-[#1E293B]" />

                {/* Node 4: Output */}
                <div className="flex flex-col items-center z-10">
                  <div className="h-12 w-12 rounded-lg border border-[#10B981]/30 bg-[#10B981]/5 flex items-center justify-center text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-semibold text-[#F8FAFC] mt-2">Output</span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 6. BUILD LOG BÖLMƏSİ (Dörd sütunlu təfərrüatlı cədvəl) */}
        <section id="build-log" className="py-16 border-t border-[#0F172A]/60">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7C3AED] block mb-6">
            BUILD LOG
          </span>
          <div className="rounded-xl border border-[#0F172A] bg-[#0F172A]/20 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Sütun 1: Sprint */}
              <div>
                <span className="text-[10px] font-semibold text-[#94A3B8]/60 uppercase tracking-wider block mb-3">Current Sprint</span>
                <h4 className="text-lg font-bold text-[#F8FAFC] flex items-center gap-2">
                  Sprint 0 <span className="h-2 w-2 rounded-full bg-[#3B28CC]" />
                </h4>
                <p className="mt-2 text-xs text-[#94A3B8]">Foundation & Core Systems</p>
              </div>

              {/* Sütun 2: Milestone */}
              <div>
                <span className="text-[10px] font-semibold text-[#94A3B8]/60 uppercase tracking-wider block mb-3">Current Milestone</span>
                <h4 className="text-lg font-bold text-[#F8FAFC]">Architecture Setup</h4>
                <p className="mt-2 text-xs text-[#94A3B8]">Core system design and infrastructure foundation.</p>
              </div>

              {/* Sütun 3: Son İcraatlar Checklist */}
              <div>
                <span className="text-[10px] font-semibold text-[#94A3B8]/60 uppercase tracking-wider block mb-3">Recent Progress</span>
                <ul className="space-y-2 text-xs text-[#94A3B8]">
                  <li className="flex items-center gap-2">
                    <svg className="h-3 w-3 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    System architecture defined
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-3 w-3 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Core components initialized
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-3 w-3 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Development environment ready
                  </li>
                </ul>
              </div>

              {/* Sütun 4: Növbəti Hədəf */}
              <div>
                <span className="text-[10px] font-semibold text-[#94A3B8]/60 uppercase tracking-wider block mb-3">Next Milestone</span>
                <h4 className="text-lg font-bold text-[#F8FAFC]">Core System Development</h4>
                <Link href="#build-log" className="mt-3 inline-flex items-center text-xs font-semibold text-[#818CF8] hover:text-[#a78bfa] transition-colors">
                  View full log <span className="ml-1">→</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 7. CONTACT BÖLMƏSİ (Şəkildəki fərdiləşdirilmiş banner formatında) */}
        <section id="contact" className="py-16 border-t border-[#0F172A]/60">
          <div className="rounded-xl border border-[#0F172A] bg-[#0F172A]/15 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                Let's build the future together.
              </h2>
              <p className="mt-3 text-xs md:text-sm text-[#94A3B8] leading-relaxed max-w-xl">
                Have a project in mind or want to collaborate? We'd love to hear from you.
              </p>
            </div>
            <div>
              <Link 
                href="mailto:syn@eosyxea.com" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#3B28CC] hover:bg-[#4338CA] px-8 text-xs font-bold text-white shadow-lg transition-all active:translate-y-[1px]"
              >
                Get in Touch <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* 8. FOOTER (Şəkildəki sitemap strukturu ilə) */}
      <footer className="border-t border-[#0F172A]/60 py-16 bg-[#050816] relative z-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Sol Kolon: Brand */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <span className="text-xs font-bold tracking-[0.6em] text-[#F8FAFC] mb-4">EOSYXEA</span>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-[200px]">
              Enterprise AI systems that power what's next.
            </p>
          </div>

          {/* Orta Kolonlar: Sitemap */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8FAFC] block mb-4">Products</span>
              <ul className="space-y-3 text-[11px] text-[#94A3B8]">
                <li><Link href="#products" className="hover:text-[#F8FAFC]">AdaptFlow</Link></li>
                <li><span className="opacity-50">ECOS</span></li>
                <li><span className="opacity-50">MCP Gateway</span></li>
                <li><span className="opacity-50">AI Security Platform</span></li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8FAFC] block mb-4">Solutions</span>
              <ul className="space-y-3 text-[11px] text-[#94A3B8]">
                <li><span className="opacity-50">AI Infrastructure</span></li>
                <li><span className="opacity-50">Enterprise Agents</span></li>
                <li><span className="opacity-50">Workflow Automation</span></li>
                <li><span className="opacity-50">MCP Integration</span></li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8FAFC] block mb-4">Company</span>
              <ul className="space-y-3 text-[11px] text-[#94A3B8]">
                <li><Link href="#build-log" className="hover:text-[#F8FAFC]">Build Log</Link></li>
                <li><Link href="#contact" className="hover:text-[#F8FAFC]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8FAFC] block mb-4">Resources</span>
              <ul className="space-y-3 text-[11px] text-[#94A3B8]">
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#F8FAFC]">GitHub</a></li>
                <li><span className="opacity-50">Documentation</span></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Alt Footer: Copyright & Sosial Şəbəkələr */}
        <div className="mx-auto max-w-7xl px-6 md:px-8 border-t border-[#0F172A]/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#94A3B8]/60">
          <p>© {new Date().getFullYear()} EOSYXEA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#F8FAFC] transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.087 1.087 2.595.831.092-.646.336-1.086.608-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#F8FAFC] transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="mailto:syn@eosyxea.com" className="hover:text-[#F8FAFC] transition-colors">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
