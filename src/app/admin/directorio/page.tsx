/* eslint-disable @next/next/no-img-element */
import React from "react";

const members = [
  { name: "Alexandra Sterling", email: "alexandra@sterling.io", industry: "Venture Capital", city: "London, UK", date: "Oct 12, 2023", tier: "Founding", status: "Active", color: "emerald", img: "AB6AXuD8aX4jtK_nKKcjmYteyt2eIv7PVFXO5Hsl1aEOUFE0IoXGIg41EIwyX8DgZ0_qL_9mK5lLp77L5f3AIAERglIQKCMi6DXyCh40gqj2dVOWkZtgpBDj_IdHo3dwBupnUQOEvsDTZm6K7veg7cYeJuayxdvinFVEo42koQwn2RBRje7X5C1UPh6TCxWuCCcxGIECj5l72BP1iXyLP9aureiNs2WcrKmjnwtox2PCh-IlI1ByyhHXfRIQ4bIJyX2OxwUGVIgsoQD3PmE_" },
  { name: "Julian Vane", email: "vane.j@vane-atelier.com", industry: "Fine Arts", city: "Paris, FR", date: "Jan 05, 2024", tier: "Annual", status: "Active", color: "emerald", img: "AB6AXuDuP1mMt2Py61up0xPwma9vKhu9Ma3IDCTVWwtWLgjFmsI2eT9HUKhUJV49EAhHKwrKNr9_Dal8r5jEMR-iCL6FJ3_R9IwkN0lshOEliNPQwrRkZUAcujnZw3K0bTl1w7HvVqo3_3vTy6cqnopqj9WcscAnY4tZsHbMEV8-naU_be6gBuE4cTI065DN9ROj7pe4Zm00gA2lswbNVoqJonL1x338K8dBquulJ_INFIzs-jEz8K-i-hPxvxB1ylC0hd1dplI_bUxhXar8" },
  { name: "Elena Rossi", email: "e.rossi@milan-capital.it", industry: "Fintech", city: "Milan, IT", date: "Nov 22, 2023", tier: "Founding", status: "On Hold", color: "amber", img: "AB6AXuBw6ZK4QH4hzFSjTY70LvUBWgkJwL0w0ZxNu2Vn1muzxZ2_GkpwbQql-Bz5nUf6YMxONRu_YcKEFbMCEmXy-pXe4wJ0KI96eSl1_AvMKZXv4Mz0oYo4FiOr-8K2oNq_P23P2j4Y_ACDVhAY6k_lgOvNg_cZKkuB6Cfza062elqxQygZTl5lh44HCQFE0W3zRKdnAI-ozT55j3-axPjuRt6HKaSMVCJniiUwJ0jv0pmCWONHvFCYIVxP1l8JRUXAe5mj5BuIzUc-bOfQ" },
  { name: "Marcus Thorne", email: "marcus@thorne-global.com", industry: "Biotech", city: "New York, USA", date: "Feb 14, 2024", tier: "Annual", status: "Active", color: "emerald", img: "AB6AXuAjQOchoiiy54ibj3F_oHA6yqzwQE_Pe4TuF8MBHk5K6p-6ZpvZ3ax6lcMxpLnKHO1D-jUUVWzfkgi2WBoojVR_mW6BV0aed5SjFYjxhMMScmkt8iK_9kWjTIcFW9VqkdhxkwOybOX8_kApU8Y75lsQMK5pXgicxo8LSugdJf7IE4l_si-8v--Al6L0cSbxcTEsNTT8x9XzgBTbGQzMdO2lm02BpT_Dkvp7fhPxHweyWmMBlgVH6AE7kV8EUsqDoeeG3QNJKRCK8AHm" },
];

export default function AdminDirectorioPage() {
  return (
    <>
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col py-8 gap-2 bg-[#131313] border-r border-neutral-800/40 z-50">
        <div className="px-6 mb-10">
          <a href="/admin"><h1 className="text-primary font-bold tracking-widest uppercase text-xl serif-display">ÉLITE</h1></a>
          <p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] mt-1">Admin Console</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="text-neutral-500 mx-2 px-4 py-2 flex items-center gap-3 hover:bg-neutral-800/50 transition-all duration-150" href="/admin"><span className="material-symbols-outlined">analytics</span><span className="font-medium text-xs">Analytics</span></a>
          <a className="text-neutral-100 bg-neutral-800 rounded-md mx-2 px-4 py-2 flex items-center gap-3" href="/admin/directorio"><span className="material-symbols-outlined">verified_user</span><span className="font-medium text-xs">Directorio General</span></a>
          <a className="text-neutral-500 mx-2 px-4 py-2 flex items-center gap-3 hover:bg-neutral-800/50 transition-all duration-150" href="/admin/curaduria"><span className="material-symbols-outlined">edit_note</span><span className="font-medium text-xs">Curaduría</span></a>
          <a className="text-neutral-500 mx-2 px-4 py-2 flex items-center gap-3 hover:bg-neutral-800/50 transition-all duration-150" href="/admin/solicitudes"><span className="material-symbols-outlined">how_to_reg</span><span className="font-medium text-xs">Solicitudes</span></a>
        </nav>
        <div className="mt-auto px-4 py-4 space-y-1">
          <div className="flex items-center gap-3 px-2 py-4 mb-4">
            <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center overflow-hidden">
              <img className="w-full h-full object-cover" alt="Admin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiaRcvKTN9ASs9kamAfZ4PbRc5XrD9VabHgpNk2tZugzDC1U4qVvDSVP8JtbiUqlZ43wnyzNN4iKEG920r3wJy9jbHpfAI6aF1YFNIElFR9ePmZqsBpolfTfizLG-JE-ePa93KPAl_wbkmp7U4ZKaIjNKMhO_yEctsIR0z4bCs5oQfV4iMVyh5eveAN_JLqOvg_ZEVi_2TaytsASVkjEFvYhzNqlnnYK9-9lS-jJswfIOgG2BDkc-78p8jTFLyMm_EoEvVX3xbxDg4" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-on-surface">Admin Console</p>
              <p className="text-[9px] text-neutral-500 uppercase tracking-tighter">System Architect</p>
            </div>
          </div>
          <a className="text-neutral-500 mx-2 px-4 py-2 flex items-center gap-3 hover:bg-neutral-800/50 transition-all duration-150" href="#"><span className="material-symbols-outlined">logout</span><span className="font-medium text-xs">Sign Out</span></a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen bg-surface p-12">
        {/* Header */}
        <header className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="italic-display text-5xl text-on-surface mb-4">Directorio de Miembras</h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed max-w-lg">
              Gestiona el colectivo exclusivo de visionarias globales. Monitorea actividad, cura membresías y mantiene la integridad del ecosistema ÉLITE.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-transparent border border-outline-variant/30 hover:bg-surface-container-high px-6 py-2.5 text-xs font-label uppercase tracking-widest text-primary transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">ios_share</span>Export CSV
            </button>
            <button className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-2.5 text-xs font-label uppercase tracking-widest transition-all">Invitar Miembra</button>
          </div>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-container-low p-6 border-l-2 border-primary">
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">Total Miembras</p>
            <p className="italic-display text-3xl">1,284</p>
          </div>
          <div className="bg-surface-container-low p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">Founding Tier</p>
            <p className="italic-display text-3xl">412</p>
          </div>
          <div className="bg-surface-container-low p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">Solicitudes Pendientes</p>
            <p className="italic-display text-3xl">89</p>
          </div>
          <div className="bg-surface-container-low p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">Crecimiento Rev.</p>
            <p className="italic-display text-3xl text-primary">+14.2%</p>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="mb-6 flex justify-between items-center border-b border-outline-variant/10 pb-4">
          <div className="flex-1 flex items-center gap-4">
            <span className="material-symbols-outlined text-outline">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-neutral-600 font-body" placeholder="Buscar por nombre, industria o ciudad..." type="text" />
          </div>
          <div className="flex gap-8 items-center">
            {["Tier", "Región", "Status"].map((f) => (
              <div key={f} className="flex items-center gap-2 cursor-pointer group">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-primary transition-colors">{f}</span>
                <span className="material-symbols-outlined text-[14px] text-neutral-600">expand_more</span>
              </div>
            ))}
          </div>
        </section>

        {/* Table */}
        <div className="bg-surface-container-lowest overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.15em] text-on-surface-variant border-b border-outline-variant/5">
                <th className="py-5 px-6 font-medium">Nombre</th>
                <th className="py-5 px-6 font-medium">Industria</th>
                <th className="py-5 px-6 font-medium">Ciudad</th>
                <th className="py-5 px-6 font-medium">Fecha Ingreso</th>
                <th className="py-5 px-6 font-medium">Tier</th>
                <th className="py-5 px-6 font-medium">Status</th>
                <th className="py-5 px-6 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm font-body">
              {members.map((m, i) => (
                <tr key={i} className="hover:bg-surface-container/50 transition-colors border-b border-outline-variant/5">
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-container-high overflow-hidden rounded-full border border-outline-variant/20">
                        <img className="w-full h-full object-cover" alt={m.name} src={`https://lh3.googleusercontent.com/aida-public/${m.img}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-on-surface">{m.name}</p>
                        <p className="text-[10px] text-neutral-500">{m.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-on-surface-variant">{m.industry}</td>
                  <td className="py-6 px-6 text-on-surface-variant">{m.city}</td>
                  <td className="py-6 px-6 text-on-surface-variant">{m.date}</td>
                  <td className="py-6 px-6">
                    <span className={`px-3 py-1 text-[10px] uppercase tracking-widest border ${m.tier === "Founding" ? "bg-primary/10 text-primary border-primary/20" : "bg-neutral-800 text-neutral-400 border-neutral-700"}`}>{m.tier}</span>
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${m.color === "emerald" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.3)]"}`}></div>
                      <span className={`text-[11px] uppercase tracking-wider ${m.status === "On Hold" ? "text-neutral-400" : ""}`}>{m.status}</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-right">
                    <button className="text-neutral-500 hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <footer className="mt-8 flex justify-between items-center text-xs">
          <p className="text-neutral-500 font-label tracking-widest uppercase">Mostrando 1-10 de 1,284 Miembras</p>
          <div className="flex gap-4">
            <button className="p-2 text-neutral-500 hover:text-primary transition-colors"><span className="material-symbols-outlined">arrow_back_ios</span></button>
            <div className="flex items-center gap-1">
              <span className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary font-bold">1</span>
              <span className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer">2</span>
              <span className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer">3</span>
              <span className="px-2 text-neutral-600">...</span>
              <span className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer">128</span>
            </div>
            <button className="p-2 text-neutral-500 hover:text-primary transition-colors"><span className="material-symbols-outlined">arrow_forward_ios</span></button>
          </div>
        </footer>
      </main>

      {/* FAB */}
      <div className="fixed bottom-10 right-10">
        <button className="w-14 h-14 bg-primary rounded-full shadow-[0_20px_40px_rgba(230,195,100,0.3)] flex items-center justify-center text-on-primary hover:scale-110 transition-transform duration-300 group">
          <span className="material-symbols-outlined text-[24px]">support_agent</span>
        </button>
      </div>
    </>
  );
}
