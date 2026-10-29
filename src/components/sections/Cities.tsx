import React from "react";
import { Badge } from "@/components/ui/Badge";

export function Cities() {
  const cities = [
    {
      name: "Santiago",
      members: "450+",
      upcomingEvents: 3,
      image: "https://images.unsplash.com/photo-1588665798950-68160db10196?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "New York",
      members: "1,200+",
      upcomingEvents: 8,
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Miami",
      members: "800+",
      upcomingEvents: 5,
      image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background-primary border-t border-ui-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-text-h2 font-light">
            Presencia <span className="italic text-gold-light">Global.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city, i) => (
            <div key={i} className="group relative aspect-[4/5] rounded-[2px] overflow-hidden border border-ui-border bg-background-secondary cursor-pointer">
              
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <img src={city.image} alt={city.name} className="object-cover w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" />
              </div>

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="font-display text-3xl text-white mb-4">{city.name}</h3>
                
                <div className="flex items-center gap-3">
                  <Badge variant="city" className="text-white border-white/30">{city.members} miembras</Badge>
                  <Badge variant="city" className="text-white border-white/30">{city.upcomingEvents} eventos</Badge>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
