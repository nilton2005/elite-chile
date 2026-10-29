/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import SponsorsBar from "@/components/SponsorsBar";
import Lenis from 'lenis';

const heroVideos = [
  "/assets/videos-hero/8922356-uhd_4096_2160_25fps.mp4",
  "/assets/videos-hero/3772663-hd_1920_1080_25fps.mp4",
  "/assets/videos-hero/7559516-uhd_2560_1440_24fps.mp4"
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counts, setCounts] = useState({ mujeres: 0, ciudades: 0, beneficios: 0, deals: 0 });
  const countersTriggered = useRef(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    // Initialize Lenis for true premium momentum scrolling (FoundersCard style)
    const lenis = new Lenis({
      lerp: 0.0825, // Ultra-low lerp for maximum easing/momentum (much softer)
      wheelMultiplier: 0.4, // Halved the wheel speed so it feels heavier and slower
      smoothWheel: true,
      syncTouch: true, // Smooth scrolling for trackpads/touch easily
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
    }, 6000);
    return () => {
      clearInterval(videoInterval);
      lenis.destroy();
    }
  }, []);

  const testimonials = [
    {
      name: "Victoria Valdés",
      role: "CEO DE FINTECH LATAM",
      quote: "ÉLITEmanu no es solo una red de contactos, es un espacio de contención y estrategia donde las decisiones de alto nivel se sienten respaldadas.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8nEirJ27eBgDiA8DSmq_MV7s2MAcm9c_py-hT-XOnBDsP3pxz112dPHGkkXjFKffpzSb2X9IMEFYyEpBq473IaziqGSK7dOxKE_BZ-3oRQfCVmz6OFIqpvGbTrQg8-gFvPsPUYvIUpIx3ixT59Y5E5AhsFpYe2rWvBFROl27scZtcb_RJ5-Prv164FiRTdjXHaWxsWRhuPN3QCQMxRsPuSgMf92_NoR-5Wodbob7bXgDaSSyuymQ7wWZm0qVuDgFfLktMUrL0NUd2"
    },
    {
      name: "Adriana Costa",
      role: "FOUNDER DE LOGÍSTICOS USA",
      quote: "El acceso a las rondas de inversión en NYC fue el catalizador que nuestra empresa necesitaba. No hay otra red con este nivel de llegada.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqhwxh9tfXsAXBAoCVzMcelBFNeMJ6VN4gYu3cDE7XLvhzRvnULitFqL71e5HrO7ysE_Xz1S58QOekhj7Ihid9OWs71L-iNo8LyeuHakGtxRqP-p6wZFuDuv5O5KfsXgx8in6CDYR6DwWRE5zg9UeIViVe1hbwG3QTQc8D9VFH4N6nH0Nz1DIx2AdKm3687nGkGVJrp74Oal--smkENNBne_zNqJsfgFaK6lnNfCmuwsmgO_1HoHqANXKVXjrz2hxq56BWCqYlyiG7"
    },
    {
      name: "Mariana López",
      role: "BOARD DIRECTOR AT RETAIL GROUP",
      quote: "Pertenecer a este círculo es pertenecer a la historia del liderazgo femenino. La calidad humana y profesional es simplemente inigualable.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApB32mzAwTt2TPEidzPgvTK2pUl046CuFLhlQHUMmE3O_5307Gq8nTZr9kDPDX1e5LGP-WhYPyFT_4TNVa5goDdNJQ_D8W3UDva5Axa9ATneERFQHHZ8ej38hZI9FAnA-Ml0z92PgWxn1YjdmpqLrSLcYcCw9qsggXVIiB7rQsKO0_UHckg9-jX-blA0znJylj_Fl99XZ-2WQGAAu5FdslBCr60c5a5lD1KCBPhhh9ZeguFQk0etTzKfySn9KKu-u7sF8xWrT6-ZFP"
    }
  ];

  const triggerCounters = useCallback(() => {
    if (countersTriggered.current) return;
    countersTriggered.current = true;
    const duration = 2000;
    const startTime = performance.now();
    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounts({
        mujeres: Math.floor(ease * 340),
        ciudades: Math.floor(ease * 3),
        beneficios: Math.floor(ease * 60),
        deals: Math.floor(ease * 2),
      });
      if (progress < 1) requestAnimationFrame(animateCount);
    };
    requestAnimationFrame(animateCount);
  }, []);

  useEffect(() => {
    const cursor = document.getElementById("gold-cursor");
    const move = (e: MouseEvent) => {
      if (cursor) { cursor.style.left = `${e.clientX}px`; cursor.style.top = `${e.clientY}px`; }
    };
    window.addEventListener("mousemove", move);

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const bg = document.getElementById("hero-bg");
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("active");
          if (e.target.id === "stats-section") triggerCounters();
        }
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const interval = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 5000);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearInterval(interval);
    };
  }, [triggerCounters, testimonials.length]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        html, body { cursor: none; }
        #gold-cursor { width:8px;height:8px;background:#E6C364;border-radius:50%;position:fixed;pointer-events:none;z-index:9999;transition:transform .1s ease;box-shadow:0 0 10px #E6C364; }
        .reveal { opacity:0; transform:translateY(40px); transition:all 1s cubic-bezier(.22,1,.36,1); }
        .reveal.active { opacity:1; transform:translateY(0); }
        .slide-up-0 { animation:slideUp .8s ease forwards; }
        .slide-up-200 { animation:slideUp .8s ease .2s forwards; opacity:0; }
        .slide-up-400 { animation:slideUp .8s ease .4s forwards; opacity:0; }
        .fade-up-600 { animation:fadeUp .8s ease .6s forwards; opacity:0; }
        @keyframes slideUp { from{transform:translateY(30px);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { to { background-position:200% center; } }
        .shimmer-title { background:linear-gradient(90deg,#E6C364 0%,#fff 50%,#E6C364 100%); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 4s linear infinite; }
        @keyframes pulseScroll { 0%{transform:scaleY(.5);opacity:.3} 50%{transform:scaleY(1);opacity:1} 100%{transform:scaleY(.5);opacity:.3} }
        .scroll-indicator { width:1px;height:80px;background:linear-gradient(to bottom,transparent,#E6C364,transparent);position:absolute;bottom:30px;left:50%;animation:pulseScroll 2s infinite; }
        .dark-overlay::after { content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(19,19,19,.2) 0%,rgba(19,19,19,.9) 100%); }
        .ornamental-logo { font-family:"Noto Serif",serif;font-size:.65rem;letter-spacing:.3em;opacity:.5;transition:opacity .3s ease; }
        .nav-scrolled { backdrop-filter:blur(24px);background:rgba(10,10,10,.8);border-bottom:1px solid rgba(230,195,100,.3); }
        .nav-scrolled .logo-text { transform:scale(.9); }
        .testimonial-bg { background-color:#131313; }
      `}} />

      <div id="gold-cursor" />

      {/* Navbar */}
      <div className="fixed top-6 left-0 right-0 w-full z-[60] flex justify-center pointer-events-none px-6 transition-all duration-500">
        <nav className={`pointer-events-auto w-full max-w-6xl flex justify-between items-center px-8 transition-all ease-luxury duration-500 rounded-2xl ${scrolled ? "backdrop-blur-2xl bg-black/60 border border-white/10 shadow-2xl py-4" : "bg-transparent py-4"}`} id="mainNav">
          <div className="logo-text transition-transform duration-500">
            <span className="text-2xl italic-display text-primary tracking-tighter">ÉLITEmanu</span>
          </div>
          <div className="hidden md:flex gap-10 items-center">
            <a className="text-primary font-bold border-b border-primary/50 pb-1 text-[0.7rem] tracking-[0.1rem] uppercase font-label" href="#">Comunidad</a>
            <a className="text-zinc-400 hover:text-primary transition-colors text-[0.7rem] tracking-[0.1rem] uppercase font-label" href="/beneficios">Beneficios</a>
            <a className="text-zinc-400 hover:text-primary transition-colors text-[0.7rem] tracking-[0.1rem] uppercase font-label" href="/membresia">Membresía</a>
            <a className="text-zinc-400 hover:text-primary transition-colors text-[0.7rem] tracking-[0.1rem] uppercase font-label" href="/eventos">Eventos</a>
          </div>
          <a href="/membresia">
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-[0.7rem] tracking-[0.1rem] font-bold uppercase transition-all ease-luxury hover:brightness-110 font-label">
              Solicitar membresía
            </button>
          </a>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            {heroVideos.map((videoPath, index) => (
              <video
                key={videoPath}
                autoPlay
                muted
                playsInline
                loop
                src={videoPath}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
                  index === currentVideo ? "opacity-60 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 z-10 dark-overlay">
          </div>
          <div className="container mx-auto px-12 z-20">
            <div className="max-w-4xl flex flex-col items-start gap-4">
              <div className="flex items-center gap-4 mb-2 slide-up-0">
                <span className="ornamental-logo !opacity-80">ESTABLISHED IN SANTIAGO</span>
                <span className="w-8 h-[0.5px] bg-primary/30"></span>
                <span className="ornamental-logo !opacity-80">NYC • MIAMI</span>
              </div>
              <h1 className="italic-display text-5xl md:text-8xl leading-[1.1] text-on-surface">
                <span className="block slide-up-0">Donde el poder</span>
                <span className="gold-gradient-text block slide-up-200">se encuentra con</span>
                <span className="block slide-up-400">la excelencia.</span>
              </h1>
              <p className="font-light text-on-surface-variant max-w-xl text-lg md:text-xl leading-relaxed tracking-wide font-body slide-up-400 mt-4">
                La red exclusiva para mujeres líderes que definen el rumbo de la industria global. Acceso a círculos de influencia inalcanzables.
              </p>
              <div className="flex flex-wrap gap-6 mt-8 fade-up-600">
                <a href="/membresia"><button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-xs tracking-[0.2rem] uppercase hover:bg-white transition-all ease-luxury font-label shadow-lg">Aplicar ahora</button></a>
                <a href="/beneficios"><button className="backdrop-blur-md bg-black/20 border border-primary/40 text-primary px-10 py-4 rounded-xl font-bold text-xs tracking-[0.2rem] uppercase hover:bg-primary/10 transition-all ease-luxury font-label">Nuestra visión</button></a>
              </div>
            </div>
          </div>
          <div className="scroll-indicator"></div>
        </section>

        <SponsorsBar />

        {/* Stats Counter */}
        <section id="stats-section" className="bg-[#0E0E0E] py-24 border-y border-outline-variant/10 reveal">
          <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center md:border-r border-primary/20">
              <span className="italic-display text-6xl md:text-8xl text-primary block mb-2">+{counts.mujeres}</span>
              <span className="font-label font-bold text-[0.65rem] tracking-[0.3rem] uppercase text-zinc-500">Mujeres ejecutivas</span>
            </div>
            <div className="text-center md:border-r border-primary/20">
              <span className="italic-display text-6xl md:text-8xl text-primary block mb-2">{counts.ciudades}</span>
              <span className="font-label font-bold text-[0.65rem] tracking-[0.3rem] uppercase text-zinc-500">Ciudades globales</span>
            </div>
            <div className="text-center md:border-r border-primary/20">
              <span className="italic-display text-6xl md:text-8xl text-primary block mb-2">{counts.beneficios}+</span>
              <span className="font-label font-bold text-[0.65rem] tracking-[0.3rem] uppercase text-zinc-500">Beneficios premium</span>
            </div>
            <div className="text-center">
              <span className="italic-display text-6xl md:text-8xl text-primary block mb-2">${counts.deals}M+</span>
              <span className="font-label font-bold text-[0.65rem] tracking-[0.3rem] uppercase text-zinc-500">En deals conectados</span>
            </div>
          </div>
        </section>

        {/* Community Gallery */}
        <section className="py-32 bg-background reveal">
          <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-10 gap-20 items-center">
            <div className="lg:col-span-4 space-y-8">
              <span className="text-primary text-xs font-bold tracking-[0.4rem] uppercase font-label">Networking de Elite</span>
              <h2 className="serif-display text-5xl md:text-6xl text-on-surface leading-tight">Tu próxima gran alianza está <span className="italic-display shimmer-title">adentro.</span></h2>
              <p className="text-on-surface-variant font-light text-lg leading-relaxed">Nuestros eventos no son simples reuniones sociales. Son centros de inteligencia estratégica donde se gestan las inversiones que mueven el mercado.</p>
              <a href="/eventos"><button className="border-b-2 border-primary pb-2 text-primary font-bold text-sm tracking-widest uppercase font-label hover:text-white hover:border-white transition-all ease-luxury">Ver calendario de eventos</button></a>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-3xl border border-white/5 hover:border-primary/50 transition-all ease-luxury duration-500 hover:scale-[1.01] cursor-pointer shadow-2xl">
                <img alt="Executive boardroom" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" />
              </div>
              <div className="aspect-square overflow-hidden rounded-3xl border border-white/5 hover:border-primary/50 transition-all ease-luxury duration-500 hover:scale-[1.01] cursor-pointer shadow-2xl">
                <img alt="Networking" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop" />
              </div>
              <div className="aspect-square overflow-hidden rounded-3xl border border-white/5 hover:border-primary/50 transition-all ease-luxury duration-500 hover:scale-[1.01] cursor-pointer shadow-2xl">
                <img alt="CEO at desk" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-32 bg-surface-container-low reveal">
          <div className="max-w-7xl mx-auto px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="serif-display text-5xl text-on-surface mb-6">El Privilegio de <span className="italic-display shimmer-title">Ser.</span></h2>
                <p className="text-on-surface-variant text-lg font-light">Accede a una curaduría de beneficios diseñados para el estilo de vida de la mujer líder.</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="ornamental-logo">OFFICIAL PARTNER NETWORK</span>
                <a className="text-primary font-bold text-xs tracking-widest border-b border-primary/20 pb-2 hover:border-primary transition-all ease-luxury uppercase font-label" href="/beneficios">Ver catálogo de convenios</a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: "photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop", tag: "Hospitalidad", title: "Hoteles & Retreats", desc: "Acceso VIP a suites presidenciales y resorts privados en todo el mundo." },
                { img: "photo-1540962351504-03099e0a754b?q=80&w=800&auto=format&fit=crop", tag: "Aviación", title: "Movilidad Privada", desc: "Charter jets con tarifas preferenciales y acceso a salones privados exclusivos." },
                { img: "photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", tag: "Curaduría", title: "Alta Costura", desc: "Personal shoppers y acceso anticipado a colecciones de las casas más prestigiosas." },
              ].map((b, i) => (
                <div key={i} className="group relative overflow-hidden aspect-[4/5] bg-surface-container-high rounded-3xl border border-white/5 shadow-2xl">
                  <img alt={b.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" src={`https://images.unsplash.com/${b.img}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-[15]"></div>
                  <div className="absolute bottom-8 left-8 z-20">
                    <span className="text-primary text-[0.6rem] tracking-[0.3rem] font-bold uppercase font-label mb-2 block">{b.tag}</span>
                    <h3 className="italic-display text-3xl mb-4">{b.title}</h3>
                    <p className="text-zinc-400 text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all ease-luxury duration-500">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gala Banner */}
        <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden reveal">
          <img alt="Gala dinner" className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgna8qMpuJ3VKN8eEU3a-NgTdPh27zM_3pXF2cMyuP2zBRIm4pLXJMnUPMtRW_82EdVVVRxszKAfmfqw2yuGbQYCLTqXerJlJt33IyqEGwcZUmKvrzJFbARBv8eh_i18zHOHxHyhQaeqL0Oiphnd6lIzqlVRBpi7GMa80BLyD-eZ8zK1R17iYpsqKDc3VVV3OQq31Z4rZ9kQiKnRhVWmZ55nC-Y5-zvaeBNjLle9IT5YE_yKrxhzv-MRvszAzpQ4xbHzSL9DsE96vM" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-6">
            <h2 className="italic-display text-3xl md:text-5xl max-w-4xl leading-relaxed">&quot;Cada beneficio fue diseñado para mujeres que no negocian su estándar.&quot;</h2>
            <div className="mt-8 w-24 h-[1px] bg-primary mx-auto"></div>
          </div>
        </section>

        {/* Profiles of Power */}
        <section className="py-32 bg-background reveal">
          <div className="max-w-7xl mx-auto px-12 text-center mb-20">
            <span className="text-primary text-xs font-bold tracking-[0.5rem] uppercase font-label block mb-6">Membresía Activa</span>
            <h2 className="italic-display text-5xl md:text-6xl">Las mujeres que ya están adentro.</h2>
          </div>
          <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Valentina Rivas", title: "Founder & CEO, FinTech", city: "Santiago", tag: "Venture Capital", img: "photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
              { name: "Elena Castillo", title: "Board Director, Real Estate", city: "New York", tag: "Investments", img: "photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
              { name: "Sofia Martinez", title: "Managing Partner, Law Firm", city: "Miami", tag: "Legal Strategy", img: "photo-1598550874175-4d0ef43ee90d?q=80&w=400&auto=format&fit=crop" },
              { name: "Isabella Rossi", title: "Chief Operating Officer, Tech", city: "Global Hub", tag: "Tech Innovation", img: "photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop" },
            ].map((p, i) => (
              <div key={i} className="group flex flex-col items-center p-8 bg-surface-container-low/50 backdrop-blur rounded-3xl border border-white/5 shadow-luxury hover:border-primary/40 hover:shadow-glow transition-all ease-luxury duration-500 hover:-translate-y-2">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-primary/20 group-hover:border-primary transition-colors shadow-xl">
                  <img alt={p.name} className="w-full h-full object-cover" src={`https://images.unsplash.com/${p.img}`} />
                </div>
                <h4 className="font-label font-bold text-sm tracking-widest uppercase text-on-surface text-center mb-2">{p.name}</h4>
                <p className="text-primary text-[0.7rem] font-bold uppercase tracking-wider text-center">{p.title}</p>
                <p className="text-zinc-500 text-[0.65rem] uppercase tracking-widest mt-2">{p.city}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-[0.5rem] tracking-widest uppercase font-bold text-zinc-400">{p.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-32 relative overflow-hidden reveal">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-110" 
            src="/assets/videos-background-membresia/51022-462807827.mp4"
          ></video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-[#131313]/50 to-[#131313]"></div>
          <div className="max-w-5xl mx-auto px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-surface/90 backdrop-blur p-12 rounded-3xl border border-white/10 relative reveal shadow-2xl">
                <div className="mb-8">
                  <h3 className="italic-display text-3xl mb-2">Regional</h3>
                  <p className="text-primary font-bold text-sm tracking-widest uppercase font-label">Membresía Anual</p>
                </div>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm">check</span><span>Acceso a eventos en tu ciudad sede</span></li>
                  <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm">check</span><span>Directorio de beneficios locales</span></li>
                  <li className="flex items-center gap-3 text-on-surface-variant"><span className="material-symbols-outlined text-primary text-sm">check</span><span>Concierge 24/7</span></li>
                </ul>
                <a href="/membresia"><button className="w-full border border-primary text-primary py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-primary/5 hover:scale-[0.98] active:scale-95 hover:border-primary transition-all ease-luxury duration-400 font-label">Solicitar Aplicación</button></a>
              </div>
              <div className="bg-surface-container-high/90 backdrop-blur p-12 rounded-3xl border border-primary/40 relative transform md:-translate-y-8 reveal shadow-[0_30px_60px_-15px_rgba(230,195,100,0.15)]">
                <div className="absolute -top-4 right-8 bg-primary text-on-primary text-[0.6rem] px-4 py-1.5 font-bold tracking-[0.2rem] uppercase rounded-full font-label">MÁS EXCLUSIVA</div>
                <div className="mb-8">
                  <h3 className="italic-display text-3xl mb-2">Founding Member</h3>
                  <p className="text-primary font-bold text-sm tracking-widest uppercase font-label">Membresía Global</p>
                </div>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-3 text-on-surface"><span className="material-symbols-outlined text-primary text-sm">star</span><span>Acceso VIP a Santiago, NYC y Miami</span></li>
                  <li className="flex items-center gap-3 text-on-surface"><span className="material-symbols-outlined text-primary text-sm">star</span><span>Invitaciones a Cenas de Autor</span></li>
                  <li className="flex items-center gap-3 text-on-surface"><span className="material-symbols-outlined text-primary text-sm">star</span><span>Global Concierge &amp; Private Travel</span></li>
                </ul>
                <a href="/membresia"><button className="w-full bg-primary text-on-primary py-4 rounded-[2px] font-bold tracking-widest uppercase hover:scale-[0.98] active:scale-95 hover:brightness-110 transition-all ease-luxury duration-400 font-label">Aplicar como Fundadora</button></a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-32 testimonial-bg overflow-hidden relative">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 brightness-110" src="/assets/video-background/raining-cards-e35ae06dd5e29ab7f33269c9ed89d1d6c9bcb60eea83d1695eaaa32b275cd2bf.mp4"></video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-[#131313]/60 to-[#131313]"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-12 pb-12 pt-8 hide-scrollbar" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex-none w-[85%] sm:w-[70%] lg:w-[45%] snap-center flex flex-col items-center text-center p-10 md:p-14 bg-surface/40 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl transition-transform hover:scale-[1.02] cursor-grab active:cursor-grabbing">
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden border-2 border-primary mb-8 shadow-xl">
                    <img alt={t.name} className="w-full h-full object-cover" src={t.img} />
                  </div>
                  <p className="italic-display text-xl md:text-3xl text-white leading-relaxed mb-8 font-light drop-shadow-lg">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex flex-col items-center gap-2 mt-auto">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase font-label text-[0.65rem]">{t.name}</span>
                    <span className="text-white/60 font-medium tracking-[0.1em] uppercase font-label text-[0.55rem]">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="py-32 bg-surface-container-low reveal">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { city: "Santiago", mt: "", img: "photo-1541497613813-0780960684f4?q=80&w=800&auto=format&fit=crop" },
                { city: "New York", mt: "md:mt-12", img: "photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop" },
                { city: "Miami", mt: "md:mt-24", img: "photo-1514214246283-d427a95c5d2f?q=80&w=800&auto=format&fit=crop" },
              ].map((c, i) => (
                <div key={i} className={`relative aspect-[3/4] overflow-hidden group rounded-3xl dark-overlay shadow-2xl ${c.mt}`}>
                  <img alt={c.city} className="w-full h-full object-cover grayscale transition-all ease-luxury duration-700 group-hover:grayscale-0 group-hover:scale-110" src={`https://images.unsplash.com/${c.img}`} />
                  <div className="absolute bottom-10 left-10 z-20">
                    <h3 className="italic-display text-4xl text-white">{c.city}</h3>
                    <div className="h-[1px] w-0 group-hover:w-full bg-primary transition-all ease-luxury duration-500 mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] w-full border-t border-zinc-900/50 pt-24 pb-12">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl italic-display text-primary mb-8">ÉLITEmanu</h2>
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <a className="text-zinc-600 hover:text-primary transition-colors duration-300 text-[0.7rem] tracking-[0.2rem] uppercase font-bold font-label" href="#">Privacidad</a>
            <a className="text-zinc-600 hover:text-primary transition-colors duration-300 text-[0.7rem] tracking-[0.2rem] uppercase font-bold font-label" href="#">Términos</a>
            <a className="text-zinc-600 hover:text-primary transition-colors duration-300 text-[0.7rem] tracking-[0.2rem] uppercase font-bold font-label" href="#">Contacto</a>
            <a className="text-zinc-600 hover:text-primary transition-colors duration-300 text-[0.7rem] tracking-[0.2rem] uppercase font-bold font-label" href="#">Prensa</a>
          </div>
          <p className="text-zinc-700 text-[0.6rem] tracking-[0.3rem] uppercase font-body">© 2024 ÉLITEmanu. The Digital Atelier.</p>
        </div>
      </footer>
    </>
  );
}


