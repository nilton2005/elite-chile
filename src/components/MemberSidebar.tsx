"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MemberSidebar() {
  const pathname = usePathname();

  const navItems = [
    { path: "/dashboard", icon: "dashboard", label: "Dashboard" },
    { path: "/perfil", icon: "person", label: "Perfil" },
    { path: "/directorio", icon: "groups", label: "Directorio" },
    { path: "/mensajes", icon: "chat", label: "Mensajes" },
    { path: "/beneficios", icon: "military_tech", label: "Beneficios" },
    { path: "/eventos", icon: "event", label: "Eventos" },
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen w-72 fixed left-0 top-0 bg-[#0E0E0E] py-10 z-50">
      <div className="px-8 mb-12">
        <Link href="/">
          <h1 className="text-xl font-serif text-amber-500 tracking-wider">ÉLITEmanu</h1>
        </Link>
        <p className="text-[10px] font-label uppercase tracking-[0.2em] text-zinc-500 mt-1">Executive Portal</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.path || pathname?.startsWith(`${item.path}/`);
          return (
            <Link
              key={item.path}
              className={`flex items-center gap-4 px-8 py-4 transition-all duration-300 ${
                isActive
                  ? "text-amber-500 bg-amber-500/5 border-r-2 border-amber-500"
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900"
              }`}
              href={item.path}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label text-sm font-bold tracking-widest uppercase">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-8 pt-8 border-t border-zinc-900/50">
        <button className="w-full py-3 bg-primary text-on-primary font-label text-xs font-bold tracking-[0.15em] uppercase rounded hover:shadow-[0_0_20px_rgba(230,195,100,0.2)] transition-all ease-luxury">
          Nueva Invitación
        </button>
      </div>
    </aside>
  );
}
