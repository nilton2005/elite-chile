/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function DirectorioPage() {
  return (
    <>

      {/* Main Content */}
      <main className="flex-1 w-full pb-20">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-12">
          <section className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div className="max-w-2xl">
                <span className="font-label uppercase tracking-[0.2rem] text-primary text-xs mb-4 block">The Global Collective</span>
                <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] mb-6 tracking-tight">Executive <br /><span className="italic font-normal">Directory</span></h1>
                <p className="text-on-surface-variant max-w-md text-lg leading-relaxed font-light">Discover and connect with the world&apos;s most influential executive women across premium industries.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="relative"><select className="bg-surface-container-low border-b-2 border-outline-variant/20 text-on-surface py-3 px-6 pr-10 focus:outline-none focus:border-primary appearance-none font-label text-xs uppercase tracking-widest cursor-pointer"><option>City: All</option><option>Santiago</option><option>NYC</option><option>Miami</option></select><span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-sm">expand_more</span></div>
                <div className="relative"><select className="bg-surface-container-low border-b-2 border-outline-variant/20 text-on-surface py-3 px-6 pr-10 focus:outline-none focus:border-primary appearance-none font-label text-xs uppercase tracking-widest cursor-pointer"><option>Industry: All</option><option>Fintech</option><option>Luxury</option><option>Media</option></select><span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-sm">expand_more</span></div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Valentina Ross", role: "SVP Strategy at Goldman Sachs", loc: "NYC • Fintech", mt: "", img: "AB6AXuBeMKqU1w5q_bCLzjVwZOfIK031sjRfRDcwQla1fsRnAJ14Qjv1bgWpPthAEQINUD7XVJuYj6cEmInH4uG51TJRLzCZaAKcHgfAlvyJFZqYUm8WdCvyawRay5MomvARo3d004SozO8SxOXGfmsYEInkNmmIvrPW7GtdF1ZKBURW6kcXB8hhCIV6pZ4sO9uHmzFvhkSaql5YoT9I-Iq8PNR4mcjD6PsI5If5XVg5j30r2uibsSrOPXb36yf1c61NpCtHQ6XVkFRmJtGy" },
              { name: "Isabella Montalva", role: "Creative Director, LVMH Chile", loc: "Santiago • Luxury", mt: "mt-12 lg:mt-24", img: "AB6AXuCS5NlCl5L2wrqXo8FwIEpAlcCRioThLPlxjpO1vI-j_8EtF5WgdiZEC-8mZtDyK9yCk2G8gE-N4K44d5ryXutZhhcC-HqV5rZhIHfArIaDgSuwiBhkiW5v6wCcKewal0hbmdHsm75es3mq17kPoHvJkE8ZbXvQUmFVBkQlmGtTysASJpCPyXVzlm6p49bXgpQTOcXndyxKvshy2YGlDz7RcozsNyoNjA2bTX12Z0tfiF2vQeC-8dbHPuglwMQ_L7aFp5hHZvJLJtZ5" },
              { name: "Camille Dubois", role: "VP of Brand Partnerships, Condé Nast", loc: "Miami • Media", mt: "", img: "AB6AXuD6KMSTnOY4e_eDzZswj2rZhXcQTIiUqrRHEMHcp6b3yeFivUBCXUxuTj_ER3nf90ZQK1pYwz5rpiKxCmHB0Az9KqXGoDg4lDIqZYPNYBiYustWnSUlkUlBtN3N4rV0CZWOMFG0v3vxCw1nfuIRq1Pxq4i6rRcoyKf4rnqyCrYKF9pzgf9l82nMw57XKcKrnlm0dlnLTGIz71OsA0Ff4Hniu7fdlP9WJisJ1LjG0AmW_P9ENvcgOhrJ5F2liDMuZAt45FZIThLc3dH0" },
              { name: "Sofia Herrera", role: "Managing Partner, Andes Ventures", loc: "Santiago • Fintech", mt: "lg:-mt-12", img: "AB6AXuAGlIEYlOSEoa6jN7frcs5KRDW_3Y1Qut7TzCNnBGnaS-5gP5sKNQQ9DKoLBUpFqVXIbY0MIg3p3c_DUd76LtNp-aI2jEyHtmw6u140jYBL15SPT5Vi9ZlHwR9uGreVaHAz9FGROw6mh--yxXI4UJv0_8UYsjLAR-ruRuSUQ1i-5layzQU1mecZvDZTkEnXbrA4htq9L8WYNw68_Ex8OuU7bvbnVqstFA6UQzMjngHVZZsamM6XzgWEy69YbJmEXXTYat5sWI2IylqQ" },
              { name: "Elena Varma", role: "Head of Digital, Hearst Media", loc: "NYC • Media", mt: "mt-12 lg:mt-0", img: "AB6AXuAoPw9rzv33b4BR_TdYANmYGO4Bi4vSn0UYSKVZAtoHLvmEqoUnLJ6tqjtD50NPb8uXH6m2m7Q95KFB22nmAYWjfmp9hDZCn74VFnSN9sB7eaFiMrUpA9UogarM2wczp8at11Z7g_lM8_SSJxHHcO2D6pRghCC_xWFhzTMA2toSGcPM2TI-ymO56rovKfBIqjsh0i0R5NigpoaTGJJmliaDJkbLC6RlSn2YxHSiVuUnJ6Zl6M9x6eEiNqToYXCOdEf0SWL_ZCugSNpt" },
              { name: "Lucia Mendez", role: "Global Retail Lead, Richemont", loc: "Miami • Luxury", mt: "mt-12 lg:mt-32", img: "AB6AXuAL0svC7WgwlNZD2oYr4Eoj1Yp8SOtpJM4274gV_7TRKJ0FhHXJs_853QrTG58sf_ZSO6hLR_Z1LYr9o5vIpdzqQ2sTYnknhZfhjKpeikyYwjlFFssdeeJF_f6f0sl4WwJ6xqdX9bxmX2ZaZB8f7gvyMW4LngBJO2I7cQUnvFr64L5OQDXngGnbWllh_PjcNJA4ItctFRUgnNJafAT-JlpxQH80nuuDrsRCcyyq2iqRekwwJvtoHLBeJzo2_DpZyIoT12B4oS3WsbNu" },
            ].map((m, i) => (
              <article key={i} className={`group relative bg-surface-container-lowest overflow-hidden border border-outline-variant/5 hover:border-primary/20 transition-all duration-500 ${m.mt}`}>
                <div className="relative h-[480px] overflow-hidden">
                  <img alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src={`https://lh3.googleusercontent.com/aida-public/${m.img}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-8 h-1 bg-primary mb-4"></div>
                    <p className="font-label uppercase tracking-[0.15rem] text-[0.65rem] text-primary/80 mb-1">{m.loc}</p>
                    <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">{m.name}</h3>
                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{m.role}</p>
                    <button className="flex items-center space-x-2 text-primary font-label text-[0.7rem] uppercase tracking-[0.2rem]"><span>Connect</span><span className="w-8 h-px bg-primary/30"></span></button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-32 flex flex-col items-center">
            <p className="font-label text-xs uppercase tracking-[0.3rem] text-on-surface-variant/40 mb-8">End of Directory</p>
            <div className="h-24 w-px bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </div>
      </main>
    </>
  );
}
