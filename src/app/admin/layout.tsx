import React from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#0E0E0E] border-r border-[#4D4637]/15 flex flex-col z-50">
        <div className="p-8 pb-12">
          <Link href="/admin">
            <h1 className="font-headline italic text-xl text-[#C9A84C] tracking-tight">The Atelier</h1>
            <p className="font-label tracking-widest uppercase text-[9px] font-medium text-neutral-500 mt-1">Elite Admin Console</p>
          </Link>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-1">
            <li className="relative">
              <Link className="flex items-center px-8 py-4 text-[#C9A84C] bg-[#C9A84C]/5 transition-colors duration-300" href="/admin">
                <span className="material-symbols-outlined mr-4 text-lg">dashboard</span>
                <span className="font-label tracking-widest uppercase text-[10px] font-medium">Dashboard</span>
                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#C9A84C]"></div>
              </Link>
            </li>
            <li>
              <Link className="flex items-center px-8 py-4 text-neutral-500 hover:text-[#C9A84C]/80 hover:bg-[#2A2A2A] transition-colors duration-300" href="/admin/directorio">
                <span className="material-symbols-outlined mr-4 text-lg">group</span>
                <span className="font-label tracking-widest uppercase text-[10px] font-medium">Members</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center px-8 py-4 text-neutral-500 hover:text-[#C9A84C]/80 hover:bg-[#2A2A2A] transition-colors duration-300" href="/admin/solicitudes">
                <span className="material-symbols-outlined mr-4 text-lg">assignment_ind</span>
                <span className="font-label tracking-widest uppercase text-[10px] font-medium">Applications</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center px-8 py-4 text-neutral-500 hover:text-[#C9A84C]/80 hover:bg-[#2A2A2A] transition-colors duration-300" href="/admin/curaduria">
                <span className="material-symbols-outlined mr-4 text-lg">star</span>
                <span className="font-label tracking-widest uppercase text-[10px] font-medium">Curation & Benefits</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center px-8 py-4 text-neutral-500 hover:text-[#C9A84C]/80 hover:bg-[#2A2A2A] transition-colors duration-300" href="/admin/eventos">
                <span className="material-symbols-outlined mr-4 text-lg">calendar_today</span>
                <span className="font-label tracking-widest uppercase text-[10px] font-medium">Events</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center px-8 py-4 text-neutral-500 hover:text-[#C9A84C]/80 hover:bg-[#2A2A2A] transition-colors duration-300" href="#">
                <span className="material-symbols-outlined mr-4 text-lg">settings</span>
                <span className="font-label tracking-widest uppercase text-[10px] font-medium">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-8">
          <button className="w-full py-3 bg-primary text-on-primary font-label tracking-widest uppercase text-[10px] font-bold rounded-sm hover:opacity-90 transition-opacity">New Invitation</button>
          <div className="mt-8 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Admin" className="w-10 h-10 rounded-full border border-primary/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWndPU4ifxgNO5X9hsHl-74kDWH86tiKAEwgxGOA0E5d8qTU0Ja37AJJgh6uvEDawRgok1vNpwDQkVrd85mHGjsqoc1A8_rzHN7NRZ1n9x7Kxb13Or0ieO1WASuyQIREDP_mtccf2M66jv2ZIzLC9MoSfDuUvtWDMVkFNYaCGs_UkWxw_YgZaLiEx7-reulUW6oD2Ksg2rXNE5hH0ZOdZJY-9AxIjSMLNl2Yb8zhcyRR-AnflMend79qoFejtofkVtHgDI6TLpC8rZ" />
            <div className="ml-3">
              <p className="text-[11px] font-semibold text-on-surface">Julian Vance</p>
              <p className="text-[9px] text-neutral-500 uppercase tracking-tighter">Executive Curator</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="ml-64 min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 flex justify-between items-center w-full px-12 py-6 bg-[#131313]/80 backdrop-blur-xl shadow-[0_40px_40px_rgba(201,168,76,0.04)]">
          <nav className="flex text-[10px] font-label tracking-widest uppercase text-neutral-500 space-x-4">
            <Link className="hover:text-primary transition-colors" href="/admin">Admin</Link><span>/</span>
            <Link className="text-primary font-semibold border-b border-primary pb-1" href="#">Current View</Link>
          </nav>
          <div className="flex items-center space-x-8">
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-neutral-500 group-focus-within:text-primary transition-colors">search</span>
              <input className="bg-surface-container-high/50 border-none rounded-sm pl-10 pr-4 py-2 text-xs font-body focus:ring-1 focus:ring-primary/20 w-64 transition-all" placeholder="Search archives..." type="text" />
            </div>
            <div className="flex items-center space-x-4 text-neutral-400">
              <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
              <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">help_outline</span></button>
            </div>
          </div>
        </header>

        {children}

        <footer className="mt-auto p-12 border-t border-outline-variant/5 flex justify-between items-center text-neutral-500">
          <div className="text-[10px] font-label uppercase tracking-widest">© 2024 ÉLITEmanu. All Rights Reserved.</div>
          <div className="flex space-x-8 text-[10px] font-label uppercase tracking-widest">
            <Link className="hover:text-primary transition-colors" href="#">Privacy</Link>
            <Link className="hover:text-primary transition-colors" href="#">Terms</Link>
            <Link className="hover:text-primary transition-colors" href="#">Security</Link>
          </div>
        </footer>
      </main>

      <button className="fixed bottom-12 right-12 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform group z-50">
        <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">add</span>
      </button>
    </>
  );
}