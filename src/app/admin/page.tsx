/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const applicants = [
  { name: "Elena Rossi", date: "Oct 24, 2023", company: "Lumina Creative", role: "Chief Design Officer", location: "Milan, Italy", status: "Pending", img: "AB6AXuAXLyNU2iQrISHBhg_VnwynaNe2K7h90NjQaUsb5IrDuqQ9RlF1U1jh9elijuBTceQHsfeOyRsAx4-m7bNS8uaqtZ7z1FEQmTJvxYFe95j-aO5jZ0C3go8p8jpbE5Caf2rgEd-RAb2M123FpSPeVg9s_dSb25GQctDui74ilaqLHnf8A2kD8VgTVAWLjTvWD1cLuw9LL5V00g_t_SJKLw1gLsKGr67_VnLJhRrh873wt1wHdwBekO5VGc776W5RF3Vv73YxDAENfjCi" },
  { name: "Marcus Thorne", date: "Oct 22, 2023", company: "Vanguard Equity", role: "Managing Partner", location: "London, UK", status: "Approved", img: "AB6AXuCkectuaDLViingrAwPHEDbCIlHrBDJti69TadDjZO3YXsPJGEBQFPb2gmTw3thOSI4Y0dnjElBirrJSQJ2r7G51yqVz1YodDxBncJY3RaalGjrwgbooRBB8uoE74YDUDsOFm0NyrURR0VJEy_EoxPP3_BFLkD98vHielZ0dtq1xE8X2DoR7OfP3AsE6MBruH6WtHN4ZLXA7rqvd-74xwsGQCHFJz7ie1bGmpfRLpVuvPEiuxkFuJwp8nQWxgDm-Ouira6HQ-BJpcfk" },
  { name: "Sophia Chen", date: "Oct 20, 2023", company: "Atlas Global", role: "Operations Director", location: "Singapore", status: "Pending", img: "AB6AXuC51kjA1GTAEy9tXI5Ns-X7q1TKk7vUyb28jLad1hI4Wx4-K4tlgaI22-LZ_rN8sc13ExJNUWqvU1s_SFBZMCXByrM4BSmK-yaIBLLQUaPRuyE47fIXzcET9cvAF3ri9eIpyGyFpkjZmJesxToAZhToDUqEuSDc4fAitlb4ksDGK500Qt5oc0cS2T8N3Qqr6DUxHuddtMw5DF3ZPcPPNDDwXLR--XvPc6A9p2msowP3U4Y_lbWE8LRtxAIRfSdaX_ogB30bAk82JdxA" },
];

export default function AdminSummaryPage() {
  return (
    <div className="p-12 space-y-12 max-w-[1600px]">
      <section className="flex justify-between items-end">
        <div>
          <h2 className="font-serif text-5xl font-light text-on-surface tracking-tight">Executive Dashboard</h2>
          <p className="text-neutral-500 mt-2 font-body max-w-md italic">A curated perspective of your membership ecosystem and strategic engagement metrics.</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-6 py-2 border border-outline-variant/30 text-[10px] font-label uppercase tracking-widest hover:bg-surface-container transition-colors">Generate Report</button>
          <button className="px-6 py-2 bg-primary text-on-primary text-[10px] font-label uppercase tracking-widest font-bold">Export Data</button>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Members", value: "1,240", sub: "+12% vs last month", icon: "group", subColor: "text-primary", subIcon: "trending_up" },
          { label: "Pending Applications", value: "42", sub: "Action required", icon: "assignment_ind", subColor: "text-error", subIcon: "hourglass_empty" },
          { label: "Monthly Revenue", value: "€124,500", sub: "Record high", icon: "euro", subColor: "text-primary", subIcon: "payments" },
          { label: "Active Benefits", value: "85", sub: "across 12 categories", icon: "workspace_premium", subColor: "text-neutral-400", subIcon: "star" },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container-low p-8 border-l-2 border-primary/30 relative overflow-hidden group">
            <p className="font-label text-[9px] uppercase tracking-[0.2em] text-neutral-500">{stat.label}</p>
            <h3 className="font-serif text-4xl mt-3 text-on-surface">{stat.value}</h3>
            <div className={`mt-4 flex items-center text-[10px] ${stat.subColor}`}>
              <span className="material-symbols-outlined text-xs mr-1">{stat.subIcon}</span>
              <span>{stat.sub}</span>
            </div>
            <div className="absolute right-[-10px] bottom-[-10px] opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-8xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Applications Table + Benefits */}
      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant/5">
          <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center">
            <h4 className="font-serif text-2xl">Recent Membership Applications</h4>
            <Link href="/admin/solicitudes" className="text-[9px] font-label uppercase tracking-widest text-primary hover:underline">View All Applicants</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[9px] font-label uppercase tracking-widest text-neutral-500 border-b border-outline-variant/5">
                  <th className="px-8 py-6 font-medium">Member Name</th>
                  <th className="px-6 py-6 font-medium">Company / Position</th>
                  <th className="px-6 py-6 font-medium">Location</th>
                  <th className="px-6 py-6 font-medium">Status</th>
                  <th className="px-8 py-6 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {applicants.map((a, i) => (
                  <tr key={i} className="group hover:bg-surface-container-high transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-neutral-800 flex items-center justify-center rounded-sm overflow-hidden">
                          <img alt={a.name} className="w-full h-full object-cover" src={`https://lh3.googleusercontent.com/aida-public/${a.img}`} />
                        </div>
                        <div className="ml-4">
                          <p className="text-xs font-semibold text-on-surface">{a.name}</p>
                          <p className="text-[10px] text-neutral-500">{a.date}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-[11px] text-on-surface">{a.company}</p>
                      <p className="text-[10px] text-neutral-500 italic">{a.role}</p>
                    </td>
                    <td className="px-6 py-6"><p className="text-[11px] text-on-surface">{a.location}</p></td>
                    <td className="px-6 py-6">
                      <span className={`px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded-full ${a.status === 'Pending' ? 'bg-primary/10 text-primary' : 'bg-green-500/10 text-green-500'}`}>{a.status}</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        {a.status === 'Pending' && (<><button className="text-primary hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">check_circle</span></button><button className="text-error hover:text-white transition-colors"><span className="material-symbols-outlined text-lg">cancel</span></button></>)}
                        <button className="text-neutral-500 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">visibility</span></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant/5">
            <h4 className="font-serif text-2xl mb-8">Top Benefits Usage</h4>
            {[
              { name: "Private Jet Concierge", cat: "Travel", pct: "82%", w: "82%" },
              { name: "Michelin Priority Booking", cat: "Lifestyle", pct: "64%", w: "64%" },
              { name: "Global Health Concierge", cat: "Wellness", pct: "48%", w: "48%" },
            ].map((b, i) => (
              <div key={i} className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-sm">{i === 0 ? 'flight_takeoff' : i === 1 ? 'restaurant' : 'health_and_safety'}</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-xs font-semibold">{b.name}</p>
                      <p className="text-[9px] text-neutral-500 uppercase">{b.cat}</p>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-primary">{b.pct}</p>
                </div>
                <div className="w-full h-[2px] bg-neutral-800"><div className="h-full bg-primary" style={{width: b.w}}></div></div>
              </div>
            ))}
          </div>
          <div className="bg-primary/5 p-8 border border-primary/20 relative overflow-hidden">
            <h4 className="font-serif text-xl mb-4 text-primary">Next Elite Event</h4>
            <p className="text-[10px] font-label text-primary/70 uppercase tracking-widest">Paris Fashion Week Gala</p>
            <p className="text-xs mt-1">October 28th, 2023 • Hôtel de Crillon</p>
            <div className="flex items-center text-[10px] text-neutral-400 mt-4"><span className="material-symbols-outlined text-xs mr-2">group</span><span>142 Members RSVP&apos;d</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}
