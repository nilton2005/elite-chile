/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const candidates = [
  { name: "Eleanor Sterling", title: "Founder & CEO", org: "Aether Dynamics Int.", sector: "Aerospace Tech", date: "Oct 24, 2023", hasImg: true, img: "AB6AXuDJN0DF53cRWGI_TmYEm0b9EiioDnkQsdIz0_Sw1ZUvtDH12_UGO25GpQ9ngwUbBEMOnWKjWQlnfI--dWdaMFRtvOn2x-v5NwbbssWRrgUHuYG6ZPwQmS1FBKWmkI_I5qyec0FQt8jEyTD_wKogGXvu007Zf7B9u_Geo1A_ymqP2YM_jzcIwEdSG5HS8s9S57Z70BcZ3B1679weEB882D9Wn7COaaLjTbNJ8oOyZAYMNkWtdQ9v7tCwMqZw_TdhnR7dBLa6I42X6TCP" },
  { name: "Julian Vane", title: "Managing Partner", org: "Vane & Associates", sector: "Hedge Fund Management", date: "Oct 23, 2023", hasImg: true, img: "AB6AXuA-nXH-PFmSnso5BBnwyyz1Rsr5jJiPGvLGYrCNzE-lVQYdMNXF3JeC19iRmel6VNvd3ip3DYKzVKmNMwqNtDdsmGrYrfUPcLhs1PsnHHHNuGiaCFY1ExZASE8GwMMht6ReWKL7AT1Wt3UjbDo-iDGYThutvVor1hFVL64BAF3t8PFtDOTCsKlW8uQ4xbR7e4HRcpXCv9a9AlhXcMNMzrGi7AFEusdvEsoDYORQYs2Jf_AEjSVvD6Cbvgg1PW-TuvRD0_wihg1Be_rW" },
  { name: "Marcus Chen", title: "Lead Architect", org: "Neo-Construct Studio", sector: "Luxury Architecture", date: "Oct 21, 2023", hasImg: false, initials: "MC" },
  { name: "Sienna Thorne", title: "Philanthropist", org: "Thorne Global Foundation", sector: "Non-Profit / NGO", date: "Oct 20, 2023", hasImg: true, img: "AB6AXuCDhwOxPr5AGbAh_ICxdbXMa-BdaVrAhjB8MoYhnZadXmgusZC-IiG8iXhO-IxOva2r8qZu3-F1L80XJBZmFTL-S0PiJXKME-Tu4PpC7Xfez2jkG7y6dNjQ07JsjqzlFoUZtqoJWmySLuqCViPaJtoAtBJA6f2dIAO-EUW9ZmHk05BxdBLawi5MaWtHEv1oXi_YMSHMhKTEciV-iPri-b2at7vGQs-H07mdQQMYtGe8KwSp-ek6OmCRW5fG3oj-vLMOc3lGgJNWnHHi" },
];

export default function SolicitudesPage() {
  return (
    <>

      <main className="flex flex-col flex-1">

        {/* Hero */}
        <section className="px-12 pt-16 pb-8">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface">Membership Applications</h2>
              <p className="font-body text-neutral-500 mt-4 max-w-lg leading-relaxed">Reviewing the next generation of industry titans. Only 4% of applicants meet the Atelier&apos;s stringent criteria for professional excellence and visionary leadership.</p>
            </div>
            <div className="flex gap-4 pb-2">
              <div className="text-center px-6 py-2 border-r border-outline-variant/15"><p className="text-2xl font-headline text-primary">12</p><p className="text-[10px] uppercase tracking-tighter text-neutral-500">Pending</p></div>
              <div className="text-center px-6 py-2 border-r border-outline-variant/15"><p className="text-2xl font-headline text-on-surface">142</p><p className="text-[10px] uppercase tracking-tighter text-neutral-500">Waitlist</p></div>
              <div className="text-center px-6 py-2"><p className="text-2xl font-headline text-on-surface">8.4%</p><p className="text-[10px] uppercase tracking-tighter text-neutral-500">Acceptance</p></div>
            </div>
          </div>
        </section>

        {/* Applications Table */}
        <section className="px-12 pb-24 flex-1">
          <div className="bg-surface-container-low border border-outline-variant/10 overflow-hidden">
            <div className="px-6 py-4 flex justify-between items-center border-b border-outline-variant/10 bg-surface-container-lowest/50">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-primary"><span className="material-symbols-outlined text-sm">filter_list</span>All Tiers</button>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-neutral-500 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">sort</span>Newest First</button>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-neutral-500 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">download</span></button>
                <button className="p-2 text-neutral-500 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">more_vert</span></button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-lowest">
                    <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500">Candidate</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500">Organization</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500">Digital Identity</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500">Submission Date</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-500 text-right">Administrative Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {candidates.map((c, i) => (
                    <tr key={i} className="group hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          {c.hasImg ? (
                            <img alt={c.name} className="w-10 h-10 rounded-sm object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={`https://lh3.googleusercontent.com/aida-public/${c.img}`} />
                          ) : (
                            <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center border border-primary/20"><span className="text-primary font-headline text-sm">{c.initials}</span></div>
                          )}
                          <div><p className="font-headline text-sm font-semibold text-on-surface">{c.name}</p><p className="text-[10px] text-primary uppercase tracking-wider">{c.title}</p></div>
                        </div>
                      </td>
                      <td className="px-6 py-5"><p className="text-xs font-body text-on-surface-variant tracking-wide">{c.org}</p><p className="text-[9px] text-neutral-600 uppercase">{c.sector}</p></td>
                      <td className="px-6 py-5"><Link className="inline-flex items-center gap-1.5 text-[10px] text-neutral-400 hover:text-primary transition-colors uppercase tracking-widest" href="#"><span className="material-symbols-outlined text-xs">link</span>LinkedIn Profile</Link></td>
                      <td className="px-6 py-5"><p className="text-xs font-body text-neutral-500">{c.date}</p></td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="px-4 py-1.5 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest hover:brightness-110">Approve</button>
                          <button className="px-4 py-1.5 border border-error/30 text-error text-[10px] font-bold uppercase tracking-widest hover:bg-error/10">Reject</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-6 py-6 flex justify-between items-center border-t border-outline-variant/10 bg-surface-container-lowest/30">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">Showing <span className="text-on-surface">4</span> of <span className="text-on-surface">12</span> applications</p>
              <div className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center text-neutral-600 opacity-20" disabled><span className="material-symbols-outlined">chevron_left</span></button>
                <button className="w-8 h-8 flex items-center justify-center text-primary font-bold text-xs border border-primary/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center text-neutral-400 font-bold text-xs hover:bg-surface-container-highest transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center text-neutral-400 font-bold text-xs hover:bg-surface-container-highest transition-colors">3</button>
                <button className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Editorial */}
        <section className="px-12 pb-16 grid grid-cols-12 gap-8">
          <div className="col-span-4 bg-surface-container-high p-8 flex flex-col justify-between">
            <div>
              <h4 className="font-headline text-2xl text-primary italic mb-4">The Selection Protocol</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-body">Our algorithm cross-references candidate LinkedIn profiles with current member networks to ensure high-cohesion community growth.</p>
            </div>
            <div className="pt-8 border-t border-outline-variant/10 mt-8">
              <Link className="text-[10px] uppercase tracking-widest font-bold text-primary flex items-center gap-2" href="#">Read Guidelines<span className="material-symbols-outlined text-xs">arrow_forward</span></Link>
            </div>
          </div>
          <div className="col-span-8 grid grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest border border-outline-variant/10 p-6 flex items-start gap-4">
              <div className="p-3 bg-primary/5 rounded-full text-primary"><span className="material-symbols-outlined">verified_user</span></div>
              <div><h5 className="text-xs uppercase font-bold tracking-widest text-on-surface mb-2">Automated Vetting</h5><p className="text-[10px] text-neutral-500 leading-normal">Initial digital identity verification is 98% complete for the current batch.</p></div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/10 p-6 flex items-start gap-4">
              <div className="p-3 bg-primary/5 rounded-full text-primary"><span className="material-symbols-outlined">history_edu</span></div>
              <div><h5 className="text-xs uppercase font-bold tracking-widest text-on-surface mb-2">Heritage Review</h5><p className="text-[10px] text-neutral-500 leading-normal">Legacy member referrals are prioritized for board-level review sessions.</p></div>
            </div>
            <div className="col-span-2 relative overflow-hidden h-32">
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10"></div>
              <img alt="Office" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJHAmiMABRwIDRFsWbyPxMS56bKYbmmvDvEyWA6lLpWmduQDpVb_T_fYVaGASGjq-6bkZhUBGZPTymJ6uxiOdvikceAhfCyTMKgaxfXCmpNBllgQ7hD8YEXGw5y8uD9rEq7PaO_dga1rAQ4xKlH5NC5s2GBb8dVCJ_Z2rH5IjNYVjWBcFwVXROBxGS66Bxq7QjxWmMP0oHOfIsLUnjNizJ3lBzFmjUHEHRg16yZVxLU4tVLqfTIZYh8BAztR_SCxO1wuLauwTv0S9e" />
              <div className="relative z-20 h-full flex flex-col justify-center px-12">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Consolidated Status</p>
                <h3 className="font-headline text-3xl mt-1">Batch #42 Active</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
