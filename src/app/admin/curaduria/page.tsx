/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function AdminCuraduriaPage() {
  return (
    <>
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#131313] border-r border-neutral-800/40 flex flex-col py-8 gap-2 z-40">
        <div className="px-8 mb-10">
          <a href="/admin"><h1 className="text-primary font-bold tracking-widest text-lg uppercase serif-display">ÉLITE</h1></a>
          <p className="text-neutral-500 text-[10px] tracking-[0.2em] uppercase mt-1">Admin Console</p>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          <a className="text-neutral-500 mx-2 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800/50 transition-all duration-150 rounded-md" href="/admin"><span className="material-symbols-outlined text-lg">analytics</span><span className="text-xs font-medium">Analytics</span></a>
          <a className="text-neutral-500 mx-2 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800/50 transition-all duration-150 rounded-md" href="/admin/directorio"><span className="material-symbols-outlined text-lg">verified_user</span><span className="text-xs font-medium">Directorio</span></a>
          <a className="text-neutral-100 bg-neutral-800 rounded-md mx-2 px-4 py-3 flex items-center gap-3 border-l-2 border-primary" href="/admin/curaduria"><span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>edit_note</span><span className="text-xs font-medium">Curaduría</span></a>
          <a className="text-neutral-500 mx-2 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800/50 transition-all duration-150 rounded-md" href="/admin/solicitudes"><span className="material-symbols-outlined text-lg">how_to_reg</span><span className="text-xs font-medium">Solicitudes</span></a>
        </nav>
        <div className="mt-auto px-2 flex flex-col gap-1 pt-6 border-t border-neutral-800/20">
          <a className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800/50 transition-all duration-150 rounded-md" href="#"><span className="material-symbols-outlined text-lg">help_outline</span><span className="text-xs font-medium">Soporte</span></a>
          <a className="text-neutral-500 px-4 py-3 flex items-center gap-3 hover:bg-neutral-800/50 transition-all duration-150 rounded-md" href="#"><span className="material-symbols-outlined text-lg">logout</span><span className="text-xs font-medium">Cerrar Sesión</span></a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-12 min-h-screen">
        {/* Header */}
        <header className="mb-16 max-w-6xl">
          <div className="flex items-end justify-between border-b border-outline-variant/10 pb-8">
            <div>
              <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase block mb-4">Management Dashboard</span>
              <h2 className="text-5xl serif-display font-light tracking-tight text-on-surface leading-none">Beneficios &amp; Eventos</h2>
            </div>
            <div className="text-right">
              <p className="text-on-surface-variant font-body text-xs leading-relaxed max-w-xs uppercase tracking-tighter">
                Curando la experiencia ejecutiva a través de puntos de contacto estratégicos globales y acceso exclusivo.
              </p>
            </div>
          </div>
        </header>

        {/* Analytics Bento */}
        <section className="grid grid-cols-12 gap-6 mb-16 max-w-6xl">
          <div className="col-span-8 bg-surface-container-low p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-6 bg-primary"></span>
                <h3 className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Tendencia de Engagement</h3>
              </div>
              <div className="flex items-end gap-12">
                <div>
                  <p className="text-4xl serif-display text-primary mb-1">12.4k</p>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Total Redenciones</p>
                </div>
                <div className="flex-1 h-24 flex items-end gap-1 pb-2">
                  {[50, 66, 75, 100, 80, 50, 66].map((h, i) => (
                    <div key={i} className={`w-full ${h === 100 ? "bg-primary" : "bg-primary/20"} hover:bg-primary/40 transition-all`} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
          </div>

          <div className="col-span-4 bg-surface-container-low p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-6 bg-outline-variant"></span>
              <h3 className="text-xs font-label uppercase tracking-widest text-on-surface-variant">RSVPs de Eventos</h3>
            </div>
            <div className="space-y-6">
              {[
                { name: "Private Salon - Paris", pct: 94 },
                { name: "Global Summit Tokyo", pct: 62 },
              ].map((ev, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[10px] uppercase tracking-tighter mb-2">
                    <span className="text-on-surface">{ev.name}</span>
                    <span className="text-primary">{ev.pct}% Full</span>
                  </div>
                  <div className="h-1 bg-surface-container-high w-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${ev.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-12 gap-12 max-w-6xl">
          {/* Benefits Management */}
          <section className="col-span-7">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl serif-display font-light tracking-tight">Beneficios Activos</h3>
              <button className="text-[10px] font-label uppercase tracking-widest border border-primary/30 px-4 py-2 hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">add</span>Nuevo Beneficio
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "The Carlton Collection", cat: "Hospitalidad • Tier 1", img: "AB6AXuB5gnPVZYUZbvTJJy38VEK5gVQs-bzNZBTsbqXT_5c0tY224YMo930e28VQeTCEu-j67Toq2BsA6My3y4bN504QjqsQxvV1K-oRTzJjDRXp3JOYJB5fnCHnOhs7dDkIt8pcr3wMWroze3RsASnQPbz1_bcyZV7lThXwSfoiDJ1JLeg7o9Y4qQ1Jl6KPaYsgjXJY2wxeU7n1SDmad2isD59TsyZMQinYuBV04gWTlm92Q7lzUA3kikM-KjX01huxNU8DuuuzFXekhtOr" },
                { name: "Aero Private Charter", cat: "Travel • Tier 2", img: "AB6AXuAlkcM5Ye0YmDmJCt_rzzGDy5foN8eywbWSxzZ8gyj6Qpk4TW59DmYbnRlScv5N394sRfxfMIIQGQ-itTvTdmJIgMRizMeHI-tQ3IWgcap28TKkGRJ29fYVWHS3TcTMWj2zJzZN0c9oxLknOlwfyWRYhFiRlySybjNbRtleDub5r4-JAWSx-826LiKH4qAH22XJgkT-8RdeXacbL-FP8S_E9_9rEt0mqq8LmVU1W0bzgXxyIRhGznhaY6xnuZvNvRS5CVPYOCih9JoA" },
                { name: "24/7 Lifestyle Concierge", cat: "Servicio • All Access", img: "AB6AXuBxAvzJOZyAc4rJB7jfS8QTxasT0lJiqkIkDa7kPDw3xjYq8O2A46JAunDe8ubF6ikg07r71IkuH3jW5ZS0njtGlEpXfiCSZ945jTc6OKRHl6v2bzoOr4udeFDvWVza3GX9ZN1_ACe2blcNCjBlyYOvKBadozAH5VyoJmzLprK4v0JT7bllNGQAOW3sFZ13tqIZh6OAXwIMSJYLEKJd0WYSrjkx_l5ainM_hhCwYhpNtqbQopiuwyiognuesq69HdCqylR2IIFbF0kR" },
              ].map((b, i) => (
                <div key={i} className="bg-surface-container-low p-5 flex items-center justify-between group">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-surface-container-high overflow-hidden">
                      <img alt={b.name} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src={`https://lh3.googleusercontent.com/aida-public/${b.img}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-on-surface">{b.name}</h4>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">{b.cat}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">edit_square</span></button>
                    <button className="text-on-surface-variant hover:text-error transition-colors"><span className="material-symbols-outlined">delete</span></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Event Form */}
          <section className="col-span-5">
            <div className="bg-surface-container-high p-10 border-l-4 border-primary shadow-2xl">
              <h3 className="text-xs font-label uppercase tracking-[0.3em] text-primary mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">event</span>Crear Nuevo Evento
              </h3>
              <form className="space-y-8">
                <div className="w-full aspect-video bg-surface-container-highest border border-dashed border-outline-variant/30 flex flex-col items-center justify-center cursor-pointer group hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-neutral-600 mb-2 group-hover:text-primary transition-colors">add_photo_alternate</span>
                  <span className="text-[10px] font-label uppercase tracking-widest text-neutral-500">Subir Visual del Evento</span>
                </div>
                <div className="space-y-6">
                  <div className="relative">
                    <label className="text-[9px] font-label uppercase tracking-widest text-neutral-500 block mb-1">Título del Evento</label>
                    <input className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/20 py-3 text-sm text-on-surface focus:ring-0 transition-all" placeholder="ej. Monaco Yacht Summit" type="text" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-[9px] font-label uppercase tracking-widest text-neutral-500 block mb-1">Fecha</label>
                      <input className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/20 py-3 text-sm text-on-surface focus:ring-0 appearance-none" type="date" />
                    </div>
                    <div>
                      <label className="text-[9px] font-label uppercase tracking-widest text-neutral-500 block mb-1">Categoría</label>
                      <select className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/20 py-3 text-sm text-on-surface focus:ring-0">
                        <option>Private Salon</option>
                        <option>Global Summit</option>
                        <option>Archive Preview</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-label uppercase tracking-widest text-neutral-500 block mb-1">Resumen Ejecutivo</label>
                    <textarea className="w-full bg-surface-container-highest border-0 border-b border-outline-variant/20 py-3 text-sm text-on-surface focus:ring-0 resize-none" placeholder="Detalles breves para el feed curado..." rows={3}></textarea>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="w-full bg-primary text-on-primary font-label uppercase tracking-widest py-4 text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-3" type="button">
                    Publicar en Atelier<span className="material-symbols-outlined text-sm">send</span>
                  </button>
                  <p className="text-center text-[9px] text-neutral-600 mt-4 uppercase tracking-tighter">El evento será visible para miembras activas inmediatamente.</p>
                </div>
              </form>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-24 max-w-6xl flex justify-between items-center text-[10px] text-neutral-600 uppercase tracking-widest">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500/50"></span>Servidores Operativos</span>
            <span>Versión 4.2.0-Elite</span>
          </div>
          <div className="flex items-center gap-4">
            <span>© 2024 ÉLITEmanu</span>
            <span className="w-px h-3 bg-neutral-800"></span>
            <span className="text-primary/50">Acceso: Legacy Admin</span>
          </div>
        </footer>
      </main>

      {/* Decorative Edge */}
      <div className="fixed right-0 top-0 h-full w-2 bg-primary/20 hover:w-4 transition-all cursor-pointer" title="Quick Insights Drawer"></div>
    </>
  );
}
