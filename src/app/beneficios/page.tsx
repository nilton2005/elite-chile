/* eslint-disable @next/next/no-img-element */
import React from "react";
import SponsorsBar from "@/components/SponsorsBar";

export default function BeneficiosPage() {
  return (
    <>
      {/* TopNavBar */}
      <div className="fixed top-6 left-0 right-0 w-full z-[60] flex justify-center pointer-events-none px-6 transition-all duration-500">
        <nav className="pointer-events-auto w-full max-w-6xl bg-black/60 backdrop-blur-2xl border border-white/10 flex justify-between items-center px-8 py-4 rounded-2xl shadow-2xl">
          <a href="/"><div className="text-2xl font-serif italic text-primary tracking-tighter">ÉLITEmanu</div></a>
          <div className="hidden md:flex items-center space-x-12 font-label text-sm">
            <a className="text-zinc-400 hover:text-white transition-colors tracking-[0.1rem] uppercase text-[0.7rem]" href="/">Comunidad</a>
            <a className="text-primary font-bold border-b border-primary/50 pb-1 tracking-[0.1rem] uppercase text-[0.7rem]" href="/beneficios">Beneficios</a>
            <a className="text-zinc-400 hover:text-white transition-colors tracking-[0.1rem] uppercase text-[0.7rem]" href="/membresia">Membresía</a>
            <a className="text-zinc-400 hover:text-white transition-colors tracking-[0.1rem] uppercase text-[0.7rem]" href="/eventos">Eventos</a>
          </div>
          <a href="/membresia">
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-[0.7rem] tracking-[0.1rem] font-bold uppercase transition-all ease-luxury hover:brightness-110 font-label shadow-lg">Solicitar</button>
          </a>
        </nav>
      </div>

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="px-12 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <span className="font-label uppercase tracking-[0.3em] text-primary text-xs mb-6 block">The Sovereign Experience</span>
            <h1 className="italic-display text-7xl md:text-9xl leading-[0.9] font-light text-on-surface mb-8">
              El Privilegio <br /> <span className="italic pl-12 md:pl-24 text-primary">de Pertenecer</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
              El acceso es la moneda definitiva. ÉLITEmanu cura un ecosistema de experiencias imposibles, reservadas para quienes dirigen las salas más influyentes del mundo.
            </p>
          </div>
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-low overflow-hidden rounded-3xl shadow-2xl border border-white/5">
              <img className="w-full h-full object-cover opacity-80 grayscale-[0.3] hover:grayscale-0 hover:scale-105 transition-all duration-700" alt="Luxury watch" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-highest/90 backdrop-blur p-8 max-w-[240px] rounded-2xl shadow-2xl border border-white/10">
              <span className="text-primary italic-display text-4xl mb-2 block">01</span>
              <p className="text-[10px] font-label uppercase tracking-widest leading-relaxed">Curado exclusivamente para la élite ejecutiva global.</p>
            </div>
          </div>
        </section>

        <SponsorsBar />

        {/* Benefits Grid */}
        <section className="px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
            <h2 className="italic-display text-5xl font-light">El Catálogo <span className="text-primary">Exclusivo</span></h2>
            <div className="flex flex-wrap gap-6 font-label text-[10px] tracking-[0.2em] uppercase">
              <button className="text-primary border-b border-primary pb-1">Todos</button>
              <button className="text-on-surface-variant hover:text-primary transition-colors">Hoteles</button>
              <button className="text-on-surface-variant hover:text-primary transition-colors">Aviación</button>
              <button className="text-on-surface-variant hover:text-primary transition-colors">Moda</button>
              <button className="text-on-surface-variant hover:text-primary transition-colors">Lifestyle</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Large */}
            <div className="md:col-span-2 relative group overflow-hidden h-[600px] rounded-3xl bg-surface-container-lowest shadow-2xl border border-white/5">
              <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" alt="Private jet" src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1200&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <div className="flex justify-between items-end">
                  <div className="max-w-md">
                    <span className="font-label text-[10px] tracking-widest text-primary uppercase mb-4 block">Aviación</span>
                    <h3 className="italic-display text-5xl mb-6 text-white drop-shadow-lg">Acceso Jet Privado</h3>
                    <p className="text-on-surface-variant font-body mb-8 drop-shadow">Disponibilidad preferencial de flota y despacho sin aviso previo a nivel global.</p>
                    <a href="/membresia"><button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-label font-bold uppercase tracking-widest text-[10px] shadow-lg hover:brightness-110 transition-all">Únete para acceder</button></a>
                  </div>
                  <div className="hidden lg:block">
                    <span className="text-white/10 italic-display text-[12rem] leading-none select-none">01</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group overflow-hidden h-[600px] rounded-3xl bg-surface-container-lowest shadow-2xl border border-white/5">
              <img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" alt="Luxury hotel" src="https://images.unsplash.com/photo-1542314831-c6a4d14fff60?q=80&w=800&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-label text-[10px] tracking-widest text-primary uppercase mb-4 block">Hoteles</span>
                <h3 className="italic-display text-3xl mb-4 text-white drop-shadow-lg">Upgrades de Lujo</h3>
                <p className="text-on-surface-variant font-body text-sm mb-6 drop-shadow">Suite garantizada y servicio de butler 24/7 en propiedades Ritz-Carlton y Aman.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group overflow-hidden h-[400px] rounded-3xl bg-surface-container-lowest shadow-2xl border border-white/5">
              <img className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" alt="Fashion" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-label text-[10px] tracking-widest text-primary uppercase mb-3 block">Moda</span>
                <h4 className="italic-display text-2xl mb-4 text-white drop-shadow-lg">Personal Shopping</h4>
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Solo por invitación</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative group overflow-hidden h-[400px] rounded-3xl bg-surface-container-lowest shadow-2xl border border-white/5">
              <img className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" alt="Fine dining" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-label text-[10px] tracking-widest text-primary uppercase mb-3 block">Gastronomía</span>
                <h4 className="italic-display text-2xl mb-4 text-white drop-shadow-lg">Michelin Reservado</h4>
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Únete para acceder</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative group overflow-hidden h-[400px] rounded-3xl bg-surface-container-lowest shadow-2xl border border-white/5">
              <img className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" alt="Events" src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-label text-[10px] tracking-widest text-primary uppercase mb-3 block">Eventos</span>
                <h4 className="italic-display text-2xl mb-4 text-white drop-shadow-lg">Front Row Global</h4>
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Únete para acceder</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="mt-48 px-12 text-center">
          <div className="max-w-4xl mx-auto border-t border-outline-variant/20 pt-24">
            <span className="material-symbols-outlined text-primary text-5xl mb-8">format_quote</span>
            <blockquote className="italic-display text-5xl md:text-6xl italic leading-tight text-on-surface mb-12">
              &quot;El lujo no es posesión. Es la integración perfecta de servicio excepcional en una vida con propósito.&quot;
            </blockquote>
            <cite className="font-label text-[10px] tracking-[0.4em] uppercase text-primary not-italic">— Victoria St. James, Fundadora</cite>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest px-12 py-24 border-t border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl italic-display text-primary mb-8">ÉLITEmanu</h2>
            <p className="font-body text-sm text-on-surface-variant max-w-sm leading-relaxed">
              La plataforma de membresía más exclusiva para ejecutivas, fundadoras y visionarias.
            </p>
          </div>
          <div>
            <h6 className="font-label text-[10px] tracking-widest uppercase text-primary mb-6">Concierge</h6>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li className="hover:text-primary transition-colors cursor-pointer">Planes de Membresía</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Aviación Privada</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Lifestyle Management</li>
            </ul>
          </div>
          <div>
            <h6 className="font-label text-[10px] tracking-widest uppercase text-primary mb-6">Legal</h6>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li className="hover:text-primary transition-colors cursor-pointer">Privacidad</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Términos</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Gobernanza</li>
            </ul>
          </div>
        </div>
        <div className="mt-24 pt-12 border-t border-outline-variant/5 text-center">
          <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/50">© 2024 ÉLITEmanu. The Digital Atelier. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
