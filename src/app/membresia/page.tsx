/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function MembresiaPage() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-[#131313]/90 backdrop-blur-2xl sticky top-0 z-50 shadow-[0_40px_40px_-15px_rgba(201,168,76,0.04)]">
        <div className="flex justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto">
          <a href="/"><span className="text-2xl font-serif italic text-amber-500">ÉLITEmanu</span></a>
          <div className="hidden md:flex gap-12 items-center">
            <a className="text-zinc-400 hover:text-amber-200 transition-colors font-label text-[0.75rem] tracking-[0.1rem] uppercase" href="/">Comunidad</a>
            <a className="text-zinc-400 hover:text-amber-200 transition-colors font-label text-[0.75rem] tracking-[0.1rem] uppercase" href="/beneficios">Beneficios</a>
            <a className="text-amber-500 font-bold border-b border-amber-500/50 pb-1 font-label text-[0.75rem] tracking-[0.1rem] uppercase" href="/membresia">Membresía</a>
            <a className="text-zinc-400 hover:text-amber-200 transition-colors font-label text-[0.75rem] tracking-[0.1rem] uppercase" href="#">Sobre nosotras</a>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2.5 font-label text-[0.75rem] tracking-[0.1rem] uppercase font-bold hover:bg-primary-container transition-all active:scale-[0.99] duration-300">
            Solicitar membresía
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Header */}
        <section className="relative min-h-[614px] flex items-end px-12 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
            <img className="w-full h-full object-cover grayscale opacity-40" alt="Luxurious dark boardroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAou0QYcpe8r3GOI3fs7bK99TdS2VpXCJ_AJB78qoRZomFO0kSvEpZpFFSrG_jb2N7dfist7H8-sg0bKKIjqV0FvidPt4MO-3ixRjzpXnY0HP-xV4qWkfjbfDeaGQW5ILgVksf8k5esSvWZ_H-xdC1Ppeae28O8-Dd7TEmzBJSIu92mCfT66Pgc6bAsaJLBqZIPN-VIkvuqnofJZQ6ZrhoK4mMggDq_6mUrAdDtABj0aNECjnWKRYa8If-FJqgg4IRfapfPXLBt4Lqu" />
          </div>
          <div className="relative z-20 max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="font-label uppercase tracking-[0.2rem] text-primary text-sm">Exclusividad Curada</span>
            </div>
            <h1 className="font-headline text-6xl md:text-8xl text-on-surface leading-[1.1] tracking-tight mb-6">
              Membresía: <br />
              <span className="italic font-serif text-primary">Tu lugar en el círculo.</span>
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Un ecosistema diseñado para líderes que buscan trascender. Acceso a red global, beneficios exclusivos y experiencias de alto impacto.
            </p>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-20 px-12 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-outline-variant/15">
              <div className="py-12 pr-12 hidden md:block">
                <h3 className="font-headline text-2xl mb-4">Planes de Acceso</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Seleccione el nivel de integración que mejor se adapte a su trayectoria ejecutiva.</p>
              </div>
              {/* Annual Plan */}
              <div className="p-12 border-l border-outline-variant/15 bg-surface">
                <span className="font-label uppercase tracking-widest text-xs text-on-surface-variant mb-4 block">Nivel Ejecutivo</span>
                <h4 className="font-headline text-3xl mb-2">Anual</h4>
                <div className="text-primary text-4xl font-serif mb-8 italic">€1.200 <span className="text-sm font-body not-italic text-on-surface-variant">/ año</span></div>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Acceso al Directorio ÉLITE
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Eventos Mensuales de Networking
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    Alianzas Comerciales Premium
                  </li>
                </ul>
              </div>
              {/* Founding Member */}
              <div className="p-12 border-l border-outline-variant/15 bg-surface-container-high relative overflow-hidden">
                <div className="absolute top-6 right-6 font-label text-[0.6rem] bg-primary text-on-primary px-3 py-1 rounded-full uppercase font-bold">Invitación Única</div>
                <span className="font-label uppercase tracking-widest text-xs text-primary mb-4 block">Nivel Vitalicio</span>
                <h4 className="font-headline text-3xl mb-2">Founding Member</h4>
                <div className="text-primary text-4xl font-serif mb-8 italic">€5.000 <span className="text-sm font-body not-italic text-on-surface-variant">/ pago único</span></div>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
                    Todas las ventajas de Membresía Anual
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
                    Acceso a la Junta Consultiva VIP
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
                    Invitaciones a Retiros Internacionales
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
                    Reconocimiento Permanente en el Muro de Honor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form & Payment Preview */}
        <section className="py-20 px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-7">
              <div className="mb-16">
                <h2 className="font-headline text-4xl mb-4">Postulación al Círculo</h2>
                <p className="text-on-surface-variant max-w-md">Nuestra comunidad se basa en la curación de perfiles. Complete los detalles para iniciar su proceso de admisión.</p>
              </div>
              <form className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-2">
                    <label className="font-label uppercase text-xs tracking-widest text-on-surface-variant">Nombre Completo</label>
                    <input className="bg-surface-container-highest border-b border-outline-variant/30 py-4 px-0 text-on-surface placeholder:text-outline focus:border-primary transition-colors" placeholder="Ej. Alexandra Valdés" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label uppercase text-xs tracking-widest text-on-surface-variant">Cargo / Título</label>
                    <input className="bg-surface-container-highest border-b border-outline-variant/30 py-4 px-0 text-on-surface placeholder:text-outline focus:border-primary transition-colors" placeholder="Directora Ejecutiva" type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-2">
                    <label className="font-label uppercase text-xs tracking-widest text-on-surface-variant">Empresa</label>
                    <input className="bg-surface-container-highest border-b border-outline-variant/30 py-4 px-0 text-on-surface placeholder:text-outline focus:border-primary transition-colors" placeholder="Compañía S.A." type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label uppercase text-xs tracking-widest text-on-surface-variant">Ciudad de Residencia</label>
                    <input className="bg-surface-container-highest border-b border-outline-variant/30 py-4 px-0 text-on-surface placeholder:text-outline focus:border-primary transition-colors" placeholder="Madrid, España" type="text" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label uppercase text-xs tracking-widest text-on-surface-variant">Perfil LinkedIn (URL)</label>
                  <input className="bg-surface-container-highest border-b border-outline-variant/30 py-4 px-0 text-on-surface placeholder:text-outline focus:border-primary transition-colors" placeholder="linkedin.com/in/usuario" type="url" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label uppercase text-xs tracking-widest text-on-surface-variant">Motivación para unirse</label>
                  <textarea className="bg-surface-container-highest border-b border-outline-variant/30 py-4 px-0 text-on-surface placeholder:text-outline focus:border-primary transition-colors resize-none" placeholder="¿Qué espera aportar a la comunidad?" rows={4}></textarea>
                </div>
              </form>
            </div>
            {/* Payment Preview */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32 p-10 border border-primary/10 rounded-lg" style={{background: 'rgba(201, 168, 76, 0.05)', backdropFilter: 'blur(24px)'}}>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-headline text-xl">Resumen de Reserva</h3>
                  <span className="text-primary material-symbols-outlined">lock</span>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-2 border-b border-outline-variant/10">
                    <span className="text-on-surface-variant text-sm">Membresía Seleccionada</span>
                    <span className="font-bold text-sm">Anual</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-outline-variant/10">
                    <span className="text-on-surface-variant text-sm">Cuota de Inscripción</span>
                    <span className="font-bold text-sm">€0.00</span>
                  </div>
                  <div className="flex justify-between pt-4">
                    <span className="text-on-surface font-bold">Total a Pagar</span>
                    <span className="text-primary font-headline text-2xl italic">€1.200</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#1a1a1a] p-4 border border-outline-variant/20 rounded">
                    <label className="font-label text-[0.6rem] uppercase text-zinc-500 block mb-2">Información de Tarjeta</label>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-zinc-500">credit_card</span>
                      <span className="text-sm text-zinc-400">4242 4242 4242 4242</span>
                      <span className="ml-auto text-[0.6rem] text-zinc-500">12/26 • CVC</span>
                    </div>
                  </div>
                  <Link href="/dashboard" className="block w-full">
                    <button className="w-full bg-primary text-on-primary py-4 font-label uppercase tracking-widest font-bold hover:shadow-[0_0_20px_rgba(230,195,100,0.2)] transition-all">
                      Confirmar y Postular
                    </button>
                  </Link>
                  <p className="text-[0.65rem] text-center text-zinc-500 leading-relaxed mt-4">
                    Su tarjeta solo será procesada una vez que su perfil haya sido validado por nuestro comité de admisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 px-12 bg-surface">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl mb-4 italic">Preguntas Frecuentes</h2>
              <div className="h-1 w-12 bg-primary mx-auto"></div>
            </div>
            <div className="space-y-2">
              <div className="group border-b border-outline-variant/10 py-8">
                <button className="w-full flex justify-between items-center text-left">
                  <span className="font-headline text-lg group-hover:text-primary transition-colors">¿Cuál es el criterio de selección para nuevas miembros?</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">expand_more</span>
                </button>
                <div className="mt-4 text-on-surface-variant text-sm leading-relaxed max-w-2xl">
                  Buscamos mujeres en posiciones de liderazgo C-level, fundadoras de startups con tracción comprobada y líderes de pensamiento en sus industrias.
                </div>
              </div>
              <div className="group border-b border-outline-variant/10 py-8">
                <button className="w-full flex justify-between items-center text-left">
                  <span className="font-headline text-lg group-hover:text-primary transition-colors">¿Puedo cambiar mi plan de Anual a Founding Member?</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">expand_more</span>
                </button>
                <div className="mt-4 text-on-surface-variant text-sm leading-relaxed max-w-2xl">
                  Sí, las miembros anuales pueden solicitar el upgrade a Founding Member sujeto a disponibilidad de plazas limitadas.
                </div>
              </div>
              <div className="group border-b border-outline-variant/10 py-8">
                <button className="w-full flex justify-between items-center text-left">
                  <span className="font-headline text-lg group-hover:text-primary transition-colors">¿Qué incluye el acceso a la red internacional?</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">expand_more</span>
                </button>
                <div className="mt-4 text-on-surface-variant text-sm leading-relaxed max-w-2xl">
                  Nuestra red se extiende por las principales capitales financieras. Como miembro, tendrá acceso a espacios de coworking aliados, eventos privados y un conserje digital.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#131313] w-full border-t border-zinc-900/50 pt-24 pb-12">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-8 text-center">
          <div className="text-4xl font-serif text-amber-500 mb-8 italic">ÉLITEmanu</div>
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <a className="text-zinc-600 hover:text-amber-200 transition-colors duration-300 font-label text-xs uppercase tracking-[0.1rem]" href="#">Privacidad</a>
            <a className="text-zinc-600 hover:text-amber-200 transition-colors duration-300 font-label text-xs uppercase tracking-[0.1rem]" href="#">Términos</a>
            <a className="text-zinc-600 hover:text-amber-200 transition-colors duration-300 font-label text-xs uppercase tracking-[0.1rem]" href="#">Contacto</a>
            <a className="text-zinc-600 hover:text-amber-200 transition-colors duration-300 font-label text-xs uppercase tracking-[0.1rem]" href="#">Prensa</a>
          </div>
          <p className="text-zinc-600 font-body text-sm mb-4">© 2024 ÉLITEmanu. The Digital Atelier.</p>
        </div>
      </footer>
    </>
  );
}
