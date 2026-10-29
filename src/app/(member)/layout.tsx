import React from "react";
import Link from "next/link";
import MemberSidebar from "@/components/MemberSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MemberSidebar />

      <main className="md:ml-72 min-h-screen bg-surface flex flex-col">
        {children}

        {/* Footer */}
        <footer className="w-full border-t border-zinc-900/50 mt-auto pt-24 pb-12 bg-[#131313]">
          <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-serif text-amber-500 mb-8 tracking-tighter">ÉLITEmanu</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <Link className="text-zinc-600 hover:text-amber-200 transition-colors duration-300 font-label text-[10px] uppercase tracking-[0.2em]" href="#">Privacidad</Link>
              <Link className="text-zinc-600 hover:text-amber-200 transition-colors duration-300 font-label text-[10px] uppercase tracking-[0.2em]" href="#">Términos</Link>
              <Link className="text-zinc-600 hover:text-amber-200 transition-colors duration-300 font-label text-[10px] uppercase tracking-[0.2em]" href="#">Contacto</Link>
            </div>
            <p className="text-zinc-600 text-xs font-serif italic">
              Conectando el Liderazgo Femenino del Mañana.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}