/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function DashboardHomePage() {
  return (
    <>
      <header className="flex justify-between items-center px-12 py-8 max-w-[1400px] mx-auto">
          <div className="space-y-1">
            <h2 className="text-5xl font-serif italic text-on-surface tracking-tight">Bienvenida, Alexandra.</h2>
            <p className="text-zinc-500 font-label text-xs uppercase tracking-[0.2em]">Lunes, 14 de Octubre</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-on-surface">Alexandra Sterling</p>
              <p className="text-[10px] font-label uppercase text-primary tracking-widest">Miembro Élite</p>
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20">
              <img alt="Executive Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyoLKNjfSCQ6eJYAQ6g9XwTy0r3O3vD7e8cHn9ns9HA7sqrzqFcCoSDaG0qEirnSzurBIO8E4-41VEJTkKqFkhK5j1NmYuoJTJMDQdqqz6bEOjUHGKi46Zqb0gH5i5NPJ77mUEBYhvJqKW23BYdK8tO2tix73jJl4n-Fyy-sUQx6lh-ruDTwIRb9bGiBtfyK47Ly1RnhQbnDqAqa3qEOm4RAgfS2GwjcjgsqlxAFbqQxA6320Ac2ZH9yUyFCpxehRPC4aJFRLAiZY7" />
            </div>
          </div>
        </header>

        <section className="px-12 max-w-[1400px] mx-auto pb-24">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-surface-container-low p-8 rounded border-b border-primary/10 group hover:bg-surface-container-high transition-colors">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
                <span className="text-[10px] font-label text-primary tracking-[0.2em] border border-primary/20 px-2 py-1">NUEVO</span>
              </div>
              <p className="text-3xl font-headline mb-1">12 Beneficios</p>
              <p className="text-xs font-label text-zinc-500 uppercase tracking-widest">Actualizados esta semana</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded group hover:bg-surface-container-high transition-colors">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-zinc-400 text-3xl">mail</span>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>
              <p className="text-3xl font-headline mb-1">4 Mensajes</p>
              <p className="text-xs font-label text-zinc-500 uppercase tracking-widest">En tu bandeja de entrada</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded group hover:bg-surface-container-high transition-colors">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-zinc-400 text-3xl">calendar_today</span>
              </div>
              <p className="text-3xl font-headline mb-1">2 Eventos</p>
              <p className="text-xs font-label text-zinc-500 uppercase tracking-widest">Programados próximamente</p>
            </div>
          </div>

          {/* Asymmetric Layout: Feed & Carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="flex items-end justify-between mb-10">
                <h3 className="text-2xl font-headline italic">Comunidad Ejecutiva</h3>
              <Link className="text-[10px] font-label uppercase tracking-widest text-primary border-b border-primary/30 pb-1" href="#">Ver todo el feed</Link>
              </div>
              <div className="space-y-8">
                <div className="bg-surface-container-lowest p-6 rounded-lg flex gap-6 group hover:translate-x-1 transition-transform">
                  <img alt="Member profile" className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR01uol32-EbAk7vNAN-yhT_hGcJVZYLIZMcIgOB-2_IpTL91M-Alr7Q2aVdR9YRF9Qs_0YU_GXaYfNnzyAJg0d5Ns9WCKOBwxxCn341eRlgIKWGiLKFXf8gIP0GTEI9cA5D7l7K3BW9cZq7DTm1zczHfTv3dp79iybo_YVoRqeEMmlGefFG305t216MktfVr1X1hxGhskLcSaNi8mEoPKj6Kx53d1kPZRHSX_VT0V9FEamGGEL4qnyo-_f26riMJ6I2-xp1kMCaPX" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-sm">Julian Rossi <span className="text-zinc-500 font-normal ml-2 text-xs">• Hace 2h</span></h4>
                      <span className="material-symbols-outlined text-zinc-600 text-lg">more_horiz</span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                      Acabo de concluir una ronda de inversión para el nuevo atelier en Madrid. Buscando recomendaciones para interiorismo corporativo de alto nivel.
                    </p>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1 text-[10px] font-label uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">favorite</span> 24
                      </button>
                      <button className="flex items-center gap-1 text-[10px] font-label uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">chat_bubble</span> 8
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-lg flex gap-6 group hover:translate-x-1 transition-transform">
                  <img alt="Member profile" className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7phMSVI18s2CgoGMFNnJsuHxzoUq7F5izM31Fa5Oe3uPVrZU9ET2g1iAclfWJoKz95zsns8x6l1yEh76PZZJkdDyCBPzIZpdtTouwPf7OjFaCIF3fogLjnq5y4_4nXKOBd8liY_fmv41oP-yH6PNyJmYX1eAq-r5VmlQWEB-qaKf8z5KFfVtD2W5ygr4o557qtlnrPHfEk_DrqxuZfj6ueyBFoMcvyj3YBbKX3-ZA4n4fm-EkVWt3mkbKUEDK13H6aXFIyCcYJJjH" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-sm">Elena Valance <span className="text-zinc-500 font-normal ml-2 text-xs">• Hace 5h</span></h4>
                      <span className="material-symbols-outlined text-zinc-600 text-lg">more_horiz</span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                      Encantada de unirme a ÉLITEmanu. Espero conectar con otras líderes en el sector tecnológico durante la cena de gala en París.
                    </p>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1 text-[10px] font-label uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span> 152
                      </button>
                      <button className="flex items-center gap-1 text-[10px] font-label uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">chat_bubble</span> 12
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Highlights */}
            <div className="lg:col-span-5">
              <div className="flex items-end justify-between mb-10">
                <h3 className="text-2xl font-headline italic">Exclusivos de la Semana</h3>
              </div>
              <div className="relative overflow-hidden group">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4" style={{scrollbarWidth: 'none'}}>
                  <div className="flex-none w-full snap-start relative aspect-[4/5] rounded overflow-hidden">
                    <img alt="Private Jet Interior" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMJ4-qbw2b6T97vDkhIlY23EA88SXYUYzi6ViS6N8zV0kC4O0YB5sKu-GVpGVPci4jvVh4HYtAWoNJ787VPlDIcf398lJhdG4Ypl24k7DeQ-9CHTdTYxdbXnM3kjKaDMn5bCODfb41yOFYTxGEYpxe0Mc0wHR78h-q5tPeu99keEx1WU6s51Cnwp_DnsmSnfEAvR1pA0BjzgF3IjQPlQfBtFi1r0OxTOWVVuhpiYNiVJpKEgfPyWO5KBKycPyfoDvv0tp2r8bAoqEw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <p className="text-[10px] font-label text-primary uppercase tracking-[0.3em] mb-2">AVIACIÓN PRIVADA</p>
                      <h4 className="text-2xl font-headline text-white mb-4">Vuelos Chárter: 20% Privilege</h4>
                      <button className="px-6 py-2 border border-white/20 text-white text-[10px] font-label uppercase tracking-widest hover:bg-white/10 transition-colors">
                        Explorar
                      </button>
                    </div>
                  </div>
                  <div className="flex-none w-full snap-start relative aspect-[4/5] rounded overflow-hidden">
                    <img alt="Luxury Resort" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAYhrIdZN0YTgtAFj2Zq3ilzU6VzzZ1B86R5S9imd9b9LUChtJOAmB5m9SQ_b0g1sWd8w0jU1GixW81wCgN7WNLbm7tzH5oLRgEo7VFfsF5Ex2X5j6IpL87MgZqJeAASjVsBozUreq63hwJL0eUoYmKlXQE0T2L8cMIzPl9q6FaozhdE2l25AAGX2oUDOvKdmVNDMcse-W0TibbqjhHe9oxylfL1pWSeoF-LBWK86Gan-dGtGY2g16Alo3MH97xqfXkFTCRwi_BFc6" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <p className="text-[10px] font-label text-primary uppercase tracking-[0.3em] mb-2">RETIRO EJECUTIVO</p>
                      <h4 className="text-2xl font-headline text-white mb-4">Amalfi Coast: Suite Executive</h4>
                      <button className="px-6 py-2 border border-white/20 text-white text-[10px] font-label uppercase tracking-widest hover:bg-white/10 transition-colors">
                        Explorar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <div className="w-8 h-[1px] bg-primary"></div>
                  <div className="w-8 h-[1px] bg-zinc-800"></div>
                  <div className="w-8 h-[1px] bg-zinc-800"></div>
                </div>
              </div>

              {/* Upcoming Event */}
              <div className="mt-12 p-8 bg-surface-container-high border-l-2 border-primary rounded-r">
                <p className="text-[10px] font-label text-primary uppercase tracking-[0.2em] mb-4">PRÓXIMO EVENTO</p>
                <h4 className="text-xl font-headline mb-2">Simposio de Filantropía</h4>
                <p className="text-sm text-zinc-400 mb-6">Jueves 24 Oct • Madrid • Exclusivo Miembros Gold</p>
                <button className="text-xs font-label text-on-surface uppercase tracking-widest underline decoration-primary/50 underline-offset-8">
                  Confirmar Asistencia
                </button>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
