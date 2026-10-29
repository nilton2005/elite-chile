/* eslint-disable @next/next/no-img-element */
import React from "react";
import SponsorsBar from "@/components/SponsorsBar";

export default function EventosPage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0E0E0E]/80 backdrop-blur-2xl flex justify-between items-center px-12 py-6 shadow-[0_40px_40px_rgba(201,168,76,0.04)]">
        <a href="/"><div className="text-2xl font-serif italic text-primary tracking-tighter">ÉLITEmanu</div></a>
        <div className="hidden md:flex items-center gap-12 font-label text-sm">
          <a className="text-zinc-400 hover:text-on-surface transition-colors" href="/">Comunidad</a>
          <a className="text-zinc-400 hover:text-on-surface transition-colors" href="/beneficios">Beneficios</a>
          <a className="text-primary border-b border-primary/30 pb-1" href="/eventos">Eventos</a>
          <a className="text-zinc-400 hover:text-on-surface transition-colors" href="/membresia">Membresía</a>
        </div>
        <a href="/membresia"><button className="text-primary flex items-center gap-2 px-6 py-2 border border-primary/20 hover:bg-primary/5 transition-all duration-300 font-label text-sm uppercase tracking-widest">Solicitar</button></a>
      </nav>

      {/* Sidebar */}
      <aside className="h-screen w-72 fixed left-0 top-0 bg-[#0E0E0E] flex-col hidden lg:flex border-r border-neutral-800/20 z-40 pt-28">
        <div className="px-8 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-surface-container-high rounded-full overflow-hidden">
              <img alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Uhcu9GM72rchix1KFvpPEjx_J4vkwrfVjYgpSLFrowF6W_6nCSzbAxXK3sWPQPr2XEcNMOS2zn4YqX7RPRmNBffrCg8PP77hWYPsrFcrJ4cFQTBb-6kC324CQqti5cAHAXjPiqbGMyevx1apivYOKKdN5Pa_0Ce7ZtWWRLJknWBwmfKmu7NUIU1wfFdFj8QbmVuVc7RW418_2SX21dF9PoClUSEFJSoqE1KxQhm8k5E9fMl2nN9k0X7O6kj8v8SXX70uIv3jjoYL" />
            </div>
            <div>
              <p className="font-serif text-sm text-primary">Victoria St. James</p>
              <p className="font-label tracking-wider uppercase text-[10px] text-neutral-500">Legacy Member</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-col flex-1 gap-1">
          <a className="flex items-center gap-4 text-neutral-500 py-4 px-8 hover:text-neutral-200 hover:bg-neutral-800/30 transition-all font-label tracking-wider uppercase text-[10px]" href="/dashboard"><span className="material-symbols-outlined">auto_awesome</span>Curated Feed</a>
          <a className="flex items-center gap-4 text-primary bg-primary/5 border-r-2 border-primary py-4 px-8 font-label tracking-wider uppercase text-[10px]" href="/eventos"><span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>diversity_3</span>Eventos</a>
          <a className="flex items-center gap-4 text-neutral-500 py-4 px-8 hover:text-neutral-200 hover:bg-neutral-800/30 transition-all font-label tracking-wider uppercase text-[10px]" href="/mensajes"><span className="material-symbols-outlined">chat_bubble</span>Private Salon</a>
          <a className="flex items-center gap-4 text-neutral-500 py-4 px-8 hover:text-neutral-200 hover:bg-neutral-800/30 transition-all font-label tracking-wider uppercase text-[10px]" href="/directorio"><span className="material-symbols-outlined">public</span>Global Summits</a>
        </nav>
        <div className="p-8">
          <button className="w-full py-4 border border-outline-variant/20 text-primary font-label tracking-widest uppercase text-[10px] hover:bg-primary/5 transition-all">Book Concierge</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-72 pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl serif-display text-on-surface mb-6 leading-tight">El Calendario de <span className="text-primary italic">Distinción</span></h1>
              <p className="text-on-surface-variant font-body text-lg max-w-lg leading-relaxed">
                Experiencias curadas para la visionaria. Conecta, influye y evoluciona dentro de nuestros círculos privados.
              </p>
            </div>
            <div className="flex items-center bg-surface-container-low p-1 rounded-lg">
              <button className="flex items-center gap-2 px-6 py-2 bg-surface-container-high text-primary rounded shadow-sm text-xs font-label uppercase tracking-widest"><span className="material-symbols-outlined text-sm">calendar_month</span>Calendario</button>
              <button className="flex items-center gap-2 px-6 py-2 text-on-surface-variant hover:text-on-surface transition-colors text-xs font-label uppercase tracking-widest"><span className="material-symbols-outlined text-sm">list_alt</span>Lista</button>
            </div>
          </header>

          <div className="mb-24">
            <SponsorsBar />
          </div>

          {/* Featured Event */}
          <section className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-lg bg-surface-container-low group">
              <div className="lg:col-span-8 relative h-[500px] overflow-hidden">
                <img alt="Featured Gala" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzCFUGhWUyoGmuOOCQWJ0M6s4GSa5sX5PFSHTtk_cElWv9VXTo7aeR7s2NvzxMvszo0acggf1xkV6vbG7r-664YkgnDbyQh0FeNy_s636W0x-AkpCULYlfkqBJ-77FvIVLwag0-G9p2yLCWwzdA0K9id_k815AU1WYQrRP9qnWzw1uXpL41AvrnLrKHZFynhVOChw8GISIVgGE-j8KdSQkSP-S_dt8qR9eOCFVeAetpv7MkFlNCAnYGq2mBGxytrQ0e21KNgBjQ1nu" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10">
                  <span className="bg-primary text-on-primary px-4 py-1 text-[10px] font-label uppercase tracking-[0.2em] mb-4 inline-block">Evento Signature</span>
                  <h2 className="text-4xl md:text-5xl serif-display text-white max-w-md">The Luminary Gala: Equinoccio de Otoño</h2>
                </div>
              </div>
              <div className="lg:col-span-4 p-12 flex flex-col justify-between border-l border-outline-variant/10">
                <div>
                  <div className="flex items-center gap-4 text-primary mb-8">
                    <span className="material-symbols-outlined">schedule</span>
                    <span className="font-label text-xs uppercase tracking-widest">Oct 24 • 19:00 — 23:00</span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed mb-8">
                    Una velada dedicada al legado y el linaje. Únete a visionarias en The Glass Pavilion para una experiencia de networking multisensorial.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 text-sm text-on-surface"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Dress Code: Sofisticación Noir</li>
                    <li className="flex items-center gap-3 text-sm text-on-surface"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Valet &amp; Concierge Incluido</li>
                  </ul>
                </div>
                <button className="w-full py-5 bg-primary text-on-primary font-label uppercase tracking-[0.3em] text-xs hover:brightness-110 transition-all active:scale-[0.98]">Solicitar RSVP</button>
              </div>
            </div>
          </section>

          {/* Upcoming Galas */}
          <section className="mb-24">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4"><div className="w-1 h-8 bg-primary"></div><h3 className="text-2xl serif-display">Próximas Galas</h3></div>
              <a className="text-primary font-label text-[10px] uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary/60 transition-all" href="#">Ver Todas</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Soirée de Invierno Parisina", date: "12 Nov", loc: "Hotel Particulier, Paris", img: "AB6AXuBjXrHJ0Dnb_5EHNNJwl7Q_LkozavWSa0sz4sEME7RvhOIEDrk22BYnVZCnS5PPWVo6d01f8NGi0eOB_PmiPKLcTHW3RawZb2WAEF5B9POi-p7iSATwDJRp3y7CwuteAF6-ZKTCcuvKou9VUqR6hPeLIe2NLmfvv5msNAzbIeAh3UQxVDBBtg08EdsWw3Z3MhAcliWffiS0iY5R7TtdgChRU9b6HraE1V10oJwnRTLqo-FBynMf_6Jx_Qr6vfQYQkBZV4G2rQ7-UZ43" },
                { title: "La Cena del Alquimista", date: "05 Dic", loc: "Residencia Privada, London", img: "AB6AXuDhcA-Vi8eytTPFmn_EJQEU4tEA5JBACV4OJJYLqOU2kVe1s5POaHoPGbYFcSdnZRxy6f8o8XsUeUrZ5FiFg5oQw4E6vTCpp4IyK-RPBvzL2a7-LUBfhOdHd0Az_wJI5sTEcGNw5sVFOp1S2mPpfmm6N6iB6bkvrLvJ343rk-zOxh1XbCNp2-ruodgZSkehnTVtzUJYyOChqVZXZzH5vxvGrGwiOoUytlbS7ZCzcEIHMNx4fdlkG_6u6x_eTyQLvdW6PThXl8Tf0ofb" },
                { title: "Brindis de Medianoche Fundadoras", date: "31 Dic", loc: "The Penthouse, NYC", img: "AB6AXuAvgvxqNFC29RuWLs5WTLwV8LytIDdFdhHpuYbTxnpdIT2bCOnGclt34ddU7ONtx09UiHjW0YxDYEH0lUeVN0EkErUR71fwimWS1l4Dry00KtFz-aWsKntkjZIkuFhHHHjD2gKR1UuD29G0Zr1OzqQ6Q7LckNtvES7OxCEjiNCPfVDlGRwCz8azu_FgpNVZN8x8YvaVyHGZnp8m1yXlyggpjoFtoZgMlhm_H-4m6_2jMbbZm4rdZ19V2VojMnnSlPu9jTY5b_H8-_dK" },
              ].map((e, i) => (
                <div key={i} className="bg-surface-container rounded group">
                  <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                    <img alt={e.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={`https://lh3.googleusercontent.com/aida-public/${e.img}`} />
                    <div className="absolute top-4 right-4 bg-surface-container-lowest/80 backdrop-blur-md px-4 py-2 text-primary serif-display text-lg">{e.date}</div>
                  </div>
                  <div className="px-2 pb-6">
                    <h4 className="text-xl serif-display mb-2 text-on-surface">{e.title}</h4>
                    <p className="text-on-surface-variant text-sm font-body tracking-wide flex items-center gap-2 uppercase">
                      <span className="material-symbols-outlined text-xs">location_on</span>{e.loc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Quote */}
          <footer className="mt-40 pt-20 border-t border-outline-variant/10 text-center">
            <blockquote className="max-w-3xl mx-auto">
              <p className="serif-display text-3xl text-on-surface leading-relaxed mb-8 italic">
                &quot;La calidad de nuestro colectivo se define por la profundidad de nuestros encuentros.&quot;
              </p>
              <cite className="font-label text-[10px] uppercase tracking-[0.4em] text-primary not-italic">— ÉLITE Curatorial Board</cite>
            </blockquote>
          </footer>
        </div>
      </main>
    </>
  );
}
