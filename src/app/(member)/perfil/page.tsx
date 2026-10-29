/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function PerfilPage() {
  return (
    <>

      {/* Main Content */}
      <main className="flex flex-col w-full">
        {/* Hero Cover */}
        <section className="relative h-[614px] w-full overflow-hidden">
          <img alt="Luxury Workspace" className="w-full h-full object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALlNNwoGTGzB43Vr6gAmZVn8mh4oyHTBCYtnWLbMaYAgvuEgNTIL18zfPTMVdw0iqENBIJLOn-i-CCPOA75xyMFJgSunSACpXE2qfebBd66Va53wbHr6BlAu7FjW1O1HwrS_1tpeCWxle3V8jigZOP4S28XycJoffSkXBafFx3G2gYLDWXMakfCMvggcqFWVvLTb78-Ip07sAPRYSpq4YWxucBpogNuvhX4Dwj85C3AtthkKDzNa1_vTV87KlJsHApZYPuOlHHZJHh" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 flex items-end">
            <div className="flex flex-col md:flex-row items-end space-y-6 md:space-y-0 md:space-x-12">
              <div className="w-64 h-80 flex-shrink-0 relative overflow-hidden shadow-2xl">
                <img alt="Victoria Valdés" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjQlLC6EMxNQqkNtN06Gfdd2IwBsLnSus10aOyad63LXUHjlHHI2nLOJ_7LLK8bH0pjw4-YloDVXv6SAzEv238FCSggwM10d4I0_FDyhqdl2FUHLoFWoPew5gu8w2pS1BmroK2-5aegEP3jcJ7KI6K_42wVg2pKCV5l22i2051AjXjTnN6PfAjWGSGm4GfaQzC5zHxhlMH6kJJy9KahM142lDYPBdqbnDgPXd9cu9C6OACvTBFrFCDTXaBt8BSV9sHIZTORTLuHsUW" />
                <div className="absolute inset-0 border border-outline-variant/10"></div>
              </div>
              <div className="flex flex-col mb-4">
                <span className="font-label text-primary tracking-[0.4em] uppercase text-xs mb-4">Executive Member</span>
                <h1 className="font-headline text-6xl md:text-7xl font-bold text-on-surface leading-none tracking-tighter">Victoria Valdés</h1>
                <p className="font-headline italic text-on-surface-variant text-xl mt-4">Managing Partner, Valdés Global Capital</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="px-8 lg:px-16 py-16 grid grid-cols-12 gap-6">
          {/* Left: Bio */}
          <div className="col-span-12 lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <h3 className="font-label text-primary tracking-[0.2em] uppercase text-sm border-b border-outline-variant/10 pb-4 inline-block">The Curator&apos;s Perspective</h3>
              <p className="font-headline text-3xl leading-relaxed text-on-surface font-light">&ldquo;Excellence is not a singular act, but a sequence of curated choices. In the world of high-stakes capital, the most valuable asset is clarity.&rdquo;</p>
              <div className="space-y-6 text-on-surface-variant leading-loose max-w-2xl text-lg">
                <p>With over two decades of experience navigating the complexities of international markets, Victoria Valdés has established herself as a pivotal figure in strategic investment and executive mentorship.</p>
                <p>Under her leadership, Valdés Global Capital has pivoted towards sustainable luxury assets, redefining what it means to invest with purpose and aesthetic integrity.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-label text-on-surface-variant tracking-[0.1rem] uppercase text-xs">Primary Sectors</h4>
              <div className="flex flex-wrap gap-3">
                {["Venture Capital", "Luxury Hospitality", "FinTech Architecture", "Art Acquisition"].map(t => (
                  <span key={t} className="px-5 py-2 border border-outline-variant/20 text-on-surface text-sm uppercase tracking-wider font-medium hover:border-primary/50 transition-colors cursor-default">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="col-span-12 lg:col-span-5 space-y-12">
            <div className="bg-surface-container-high p-10 border-l-[0.35rem] border-primary space-y-8">
              <div className="space-y-2">
                <h4 className="font-label text-on-surface tracking-[0.1rem] uppercase text-xs">Engagement Status</h4>
                <p className="text-primary font-medium tracking-wide flex items-center"><span className="w-2 h-2 rounded-full bg-primary mr-3 animate-pulse"></span>ACTIVE MEMBER / ACCEPTING INQUIRIES</p>
              </div>
              <button className="w-full bg-primary text-on-primary py-5 font-bold tracking-[0.2em] uppercase text-sm hover:shadow-[0_0_20px_rgba(230,195,100,0.2)] transition-all">Send Message</button>
              <div className="flex justify-between items-center pt-4">
                <div className="flex space-x-6">
                  <Link className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-2xl">share</span></Link>
                  <Link className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-2xl">bookmark</span></Link>
                </div>
                <div className="flex space-x-4">
                  <Link className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:border-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></Link>
                  <Link className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:border-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></Link>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-low p-8 space-y-6 col-span-2">
                <h4 className="font-label text-primary tracking-[0.1rem] uppercase text-xs">Available for</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-4"><span className="material-symbols-outlined text-primary mt-1">psychology</span><div><p className="text-on-surface font-semibold text-sm">Mentorship</p><p className="text-on-surface-variant text-xs mt-1">High-level executive coaching for founders.</p></div></div>
                  <div className="flex items-start space-x-4"><span className="material-symbols-outlined text-primary mt-1">monetization_on</span><div><p className="text-on-surface font-semibold text-sm">Investing</p><p className="text-on-surface-variant text-xs mt-1">Strategic capital for Seed &amp; Series A.</p></div></div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 border border-outline-variant/10"><p className="font-headline text-3xl font-bold text-primary">15+</p><p className="font-label text-on-surface-variant text-[0.6rem] uppercase tracking-widest mt-2">Active Board Positions</p></div>
              <div className="bg-surface-container-lowest p-6 border border-outline-variant/10"><p className="font-headline text-3xl font-bold text-primary">2.4B</p><p className="font-label text-on-surface-variant text-[0.6rem] uppercase tracking-widest mt-2">Managed Portfolio (USD)</p></div>
            </div>

            <div className="space-y-4">
              <h4 className="font-label text-on-surface-variant tracking-[0.1rem] uppercase text-xs">Global Base</h4>
              <div className="relative h-48 w-full overflow-hidden">
                <img alt="Madrid Map" className="w-full h-full object-cover grayscale opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABObJtfGUkK3V2RzroNEatqCOcaPkyUkI9drt125Njh_66nCmvofwxfyIN3AACTfwTzs6FL8FllDm9-8wwLq6M1VfXuQnbdwxACvO9bInEK0lvAFRpkETY_cPeq8gpmph7A3ZEyc3kF4CCGOQaxSpXc1x4SS3UmbHY7OeTHsfJQe1OtGdtu796MWzXkdt7Z3mgtyJL-lb-EgtDiwyuB77Q8mif00IvCTc42twcgIe7hW-pPUumeAyASJ2W5bENxXNYn-Fwf4hAO2BW" />
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="absolute bottom-4 left-4 flex items-center bg-background/80 backdrop-blur px-4 py-2 border border-outline-variant/10"><span className="material-symbols-outlined text-primary text-sm mr-2">location_on</span><span className="text-xs uppercase tracking-widest font-bold">Madrid, Spain</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
