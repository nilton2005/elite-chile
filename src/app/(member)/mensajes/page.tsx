/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function MensajesPage() {
  return (
    <>

      <div className="flex h-full w-full">

        {/* Chat Interface */}
        <main className="flex-1 flex flex-row overflow-hidden bg-surface relative">
          {/* Conversation List */}
          <section className="w-[380px] flex flex-col border-r border-outline-variant/10 bg-surface-container-lowest">
            <div className="p-8 pb-4">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-2">Concierge</h2>
              <p className="text-[0.65rem] tracking-[0.2em] text-primary/60 uppercase">Active Curations</p>
            </div>
            <div className="flex-1 overflow-y-auto px-4 space-y-2 pb-8">
              {/* Active */}
              <div className="group flex items-center gap-4 p-4 bg-surface-container-high rounded-lg cursor-pointer transition-all duration-300 border-l-2 border-primary">
                <div className="relative">
                  <div className="w-12 h-12 rounded overflow-hidden"><img alt="Julianne S." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUW0XJX3ycOARn9eoBIrlRk-TIOTw3Z7WOTKPQc04LwDOIkXbr-0buUTZ_Ca4oOej7Oe_QsSq8pydYLgQbRbq0jfWbh1sMKlLixDxhuAltdMiMa-0fdn-CalO72q5oHpYOscBTEfMRJjL0pzAo6-ynymVleHiSGHcFxvE8Qs_0lN36zZIP0s8VK1gK5jSQu6zqQEJJ7RaeuuHFRUGhOywNPfPVabwd3bDlHMrEMXBz8ZavDFX7SvGs32DlO1vDoR5n5EtosdUQa7k0" /></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-surface-container-high"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5"><h4 className="font-semibold text-on-surface text-sm">Julianne S.</h4><span className="text-[10px] text-on-surface-variant/50">14:05</span></div>
                  <p className="text-xs text-on-surface-variant/80 truncate font-medium">The itinerary for the Milan gala is...</p>
                </div>
              </div>
              {/* Other conversations */}
              {[
                { name: "Alexander V.", time: "YESTERDAY", msg: "Confirming the private charter flight...", img: "AB6AXuAF3KZ57PeonSEEfteqRG21CGlba-J99IsrVOFPAcjK6j4Ph1VY7viNYmf5xzTOcCbH5gfToLNbirRP2KRYR_fmnlV3zFGTHTh6o6BPrUdLvAviI45cHrxkOcmKHBczg7GXCJP7aHyPbmdTsHAxPYKjDyqnNZbPeUuR29cR2y1ywYeVg4eFQZqav8ukfrq2JGYYhz0n_jdlyLWbm2Dy5ZTAQiRHAn6R7SCCofD4yKpQuDdFo_NpqTbQ3Df9SDOX-MouGZn_Lv1uaKtT" },
                { name: "Sophia L.", time: "MON", msg: "The Bordeaux collection has arrived...", img: "AB6AXuBEx0XOCiQWHSb83o6N5KjcDqj0AeKNeiPumxvVNV-YI4OaIH5zK2m1quMmgW6tcCuvn-oJqQqokIYLnWG8kanY7wD1WCmLay587e_LOJ0S-oxQSs-hfW0HCYZhxqgrRniPsH1Y5W80r6Nz_SyBDyACiiyZdtc4J_Gw8LEpwyidoIrX2325eOIaz0eCDxm8ZSQDbcF9akbMgEozvWSnF1CtzaxCDXu0QAObrPU0bAaBVvSsZ0ZOR8uH9Ip8szOL0q05QhvuB07CrOLN" },
                { name: "Marcus K.", time: "OCT 12", msg: "Table reserved at Guy Savoy for 8 PM.", img: "AB6AXuBOYePYmw0PK7oh1cqJG9p3IhAtbPkElzvwgbNzGZYrTiruztUI2Y27pRD7FmvszUD1Ztiyher5WWb0ua8tdloz_66aeKTiEBH8-Cg3_Y0kspcE2VePAFR8pJIjB5Bk5NGXeES974kpMZb0uKeMH1-5EiaEqAGz2gm8DISSRo5nY9IP0dpg6VbOMjJz0404bGwpI1aKEtgk_TbAtplQaLr7-bcPZxV-w73KuBMGZugjqo35XfcbAVBrriDMpZ8lRfM8lostQlJd1Tt0" },
              ].map((c, i) => (
                <div key={i} className="group flex items-center gap-4 p-4 hover:bg-surface-container-high/50 rounded-lg cursor-pointer transition-all duration-300">
                  <div className="w-12 h-12 rounded overflow-hidden grayscale hover:grayscale-0 transition-all"><img alt={c.name} className="w-full h-full object-cover" src={`https://lh3.googleusercontent.com/aida-public/${c.img}`} /></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5"><h4 className="font-semibold text-on-surface/80 text-sm group-hover:text-on-surface">{c.name}</h4><span className="text-[10px] text-on-surface-variant/50">{c.time}</span></div>
                    <p className="text-xs text-on-surface-variant/40 truncate">{c.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Active Chat */}
          <section className="flex-1 flex flex-col bg-surface overflow-hidden">
            <div className="h-20 px-8 flex items-center justify-between border-b border-outline-variant/5 bg-surface-container-low/30 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded overflow-hidden"><img alt="Julianne S." className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyr6VVPgQmrLDq-Ni39D5sZ7zsf3gRRemJVMu5JgdRW_qq5FKIflWfYspIZ06fJ-Sla6JOd1JziF2xeU4u2ffIYBEeVd-MY5GfLwReHjdPP1RdRLAaZi9Um-Fi0LjhEkqAp7TPaVDcRp9xY8wEEJmMSh5mBaDdfDpuvPW9LWYdr7IM_t-DfIzeKHOgTgsRYZ1uTYLjxROPxvuRFm2h703TL2ZM-6lXolWGY054xnHyN4GawlQ6NTjy60ICr0LVdRfPmm4F_IGJTdnd" /></div>
                <div><h3 className="font-headline font-bold text-on-surface text-lg leading-tight">Julianne S.</h3><div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span><span className="text-[10px] text-primary tracking-widest uppercase font-semibold">Senior Lifestyle Curator</span></div></div>
              </div>
              <div className="flex items-center gap-6">
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">videocam</button>
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">call</button>
                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">more_vert</button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 flex flex-col">
              <div className="flex justify-center"><span className="px-4 py-1 text-[10px] font-bold tracking-[0.2em] text-on-surface-variant/30 uppercase bg-surface-container-low rounded-full">October 14, 2023</span></div>

              {/* Incoming */}
              <div className="flex items-start gap-4 max-w-[80%]">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0"><img alt="Julianne" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgIKXLcj9Eh2kHCcPIT9ufoBBlSnTjWNfdl4a6qEkh50MSFzmnZg7ux3SO3cUkh7ehWXM6O1Iw9Mwe5Bh_9rXjjexJgxLLD8SDHKtGzqUtJcZnhPIJl3yKDFhDJ4XkqWdCrxX1yLVVzLBB7C_Ze6tz1NDrHm0cIGH3OVG9QsQz6gEZ230F1NfB_uQyCehq62YI4ia74Hewd4Vdq_bZUQ0VYfW0W9WtGzn7M9xtL-EB-lfBIf_dQ-KKSRr60dtkd_JeKpKtqiBUk5YR" /></div>
                <div className="space-y-1"><div className="bg-surface-container-high p-4 rounded-xl rounded-tl-none border border-outline-variant/10 shadow-sm"><p className="text-sm text-on-surface-variant leading-relaxed">Good morning, Mr. Executive. I have finalized the arrangements for your visit to the Milan Atelier next week.</p></div><p className="text-[10px] text-on-surface-variant/40 ml-1">10:12 AM</p></div>
              </div>

              {/* Outgoing */}
              <div className="flex items-start gap-4 self-end max-w-[80%] flex-row-reverse">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0"><img alt="Me" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL1OfpJFmMvcU-SwTqbZgConqUrDDp_Jc-p5TKlT4LIynrpfwRBwzaopJSgmWlGR2zd-sPZyIaCQz6cT_SWm4uhj57XTj7KGq6mDqkpHG5NkWM_3PvNBJg_P55L6jCb92rgoKW6Qb7Kl5l_14fpnjoU1fb7g_jUVbWeJcu2h3Oi25EQj4Z6SbnzjNj9uSbH4nZ2Zka0hrhosCFeTbp6ICgHozr49rW-0ZyPiepgOZeo1AyrNyJ3BvRHuT4JXE9MliF9yTpoPfTkh6j" /></div>
                <div className="space-y-1 items-end flex flex-col"><div className="bg-primary p-4 rounded-xl rounded-tr-none shadow-[0_10px_20px_-5px_rgba(201,168,76,0.2)]"><p className="text-sm text-on-primary font-medium leading-relaxed">Excellent. Have you confirmed the private viewing of the Caravaggio in the Sforza collection?</p></div><div className="flex items-center gap-1 mt-1 mr-1"><p className="text-[10px] text-on-surface-variant/40">10:15 AM</p><span className="material-symbols-outlined text-[12px] text-primary">done_all</span></div></div>
              </div>

              {/* Incoming with image */}
              <div className="flex items-start gap-4 max-w-[80%]">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0"><img alt="Julianne" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn7xoxl3Maj50FEUkQAdmrQ04l9OT-It3TJJma10n7dCCl3bSiWowuIE9NXn9P8UeFYza8fGAqdGeC8eZuOd4JjgW7nmv8LgNmBEmxGG6IrxAEHkxWHj8Y6Dt1I57z55a9Svh2r0PmnmyZr2qJukGGVfauqLBNFcHSrdV4L7QcLZRD-0DiHeCFUPyysxmqxxYzVeXHSXOlJH2-2AhcjxCmtW8mTJQTctV2pEwvHwh_XmWJmyRXLOGrGDrGR-2f5dXLH9-QwYs636XK" /></div>
                <div className="space-y-4">
                  <div className="bg-surface-container-high p-4 rounded-xl rounded-tl-none border border-outline-variant/10 shadow-sm"><p className="text-sm text-on-surface-variant leading-relaxed">Yes, it is confirmed for Tuesday at 7 PM, strictly private. I am currently reviewing the dinner menu at <em>Cracco</em>. The itinerary for the Milan gala is now being compiled into your digital vault.</p></div>
                  <div className="w-64 rounded-xl overflow-hidden border border-outline-variant/20 shadow-xl group cursor-pointer relative">
                    <img alt="Milan Duomo" className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCanOXxW_Zo_iOqxM8190bOrkDab_qSOhqyHWPqWOTfEByI1Dp_aoSFAZZQoRKeien7kF_GO5UQM7buVlVko7bvLgbrgPErSGFaavs8ESm_A5ckgHPc1u018afO8CKXJCMCu2hLYLcwcp4U7vNVfNmGcBXi6Jtcse9Xui0W5wdoPcwVjKrYupcQuT3h1gmu88Vpce8c-xqcole5wedBLeW01vjbJyqlzISpUhDvkyAepIpb9bdZjkAv1_I89g4WW5znB4w-maPXD4pG" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-2"><span className="material-symbols-outlined text-white text-sm">attachment</span><span className="text-white text-[10px] font-bold tracking-widest uppercase">Itinerary_Preview.jpg</span></div>
                  </div>
                  <p className="text-[10px] text-on-surface-variant/40 ml-1">14:05 PM</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-8 pt-4">
              <div className="bg-surface-container-highest rounded-xl p-2 border border-outline-variant/10 focus-within:border-primary/40 transition-all duration-300">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-outline-variant/5">
                  {["format_bold", "format_italic", "link"].map(ic => (<button key={ic} className="material-symbols-outlined text-on-surface-variant/60 hover:text-primary transition-colors text-lg">{ic}</button>))}
                  <div className="w-px h-4 bg-outline-variant/20 mx-1"></div>
                  {["image", "attach_file"].map(ic => (<button key={ic} className="material-symbols-outlined text-on-surface-variant/60 hover:text-primary transition-colors text-lg">{ic}</button>))}
                </div>
                <div className="flex items-end gap-4 p-4">
                  <textarea className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface text-sm placeholder:text-on-surface-variant/30 resize-none min-h-[40px] max-h-32" placeholder="Message Julianne..."></textarea>
                  <button className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-on-primary shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all"><span className="material-symbols-outlined">send</span></button>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-[10px] text-on-surface-variant/40 italic"><span className="w-1 h-1 bg-primary rounded-full animate-pulse"></span>Julianne is typing...</div>
                <p className="text-[10px] text-on-surface-variant/40 tracking-wider">SECURE END-TO-END ENCRYPTED ATELIER PORTAL</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
