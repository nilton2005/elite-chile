import React from "react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Valeria Santoro",
      role: "CEO",
      company: "TechNova Chile",
      quote: "ÉLITEmanu cambió la forma en que hago negocios. Las conexiones que he logrado aquí son de un nivel que no se encuentra en LinkedIn.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Eleanor Wright",
      role: "Partner",
      company: "W&H Capital NYC",
      quote: "El calibre de las mujeres en esta plataforma es extraordinario. Los eventos en Nueva York siempre superan mis expectativas.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Isabella Cruz",
      role: "Founder",
      company: "Lumina Beauty Miami",
      quote: "Más allá de los excelentes beneficios para mi estilo de vida, encontré a mi lead investor a través del directorio privado.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background-secondary border-t border-ui-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar gap-6 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((test, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-0 snap-center flex flex-col bg-background-primary border border-ui-border p-8 rounded-[4px]">
              
              <p className="font-display font-light text-lg italic text-text-primary leading-relaxed flex-1">
                &quot;{test.quote}&quot;
              </p>
              
              <div className="mt-8 flex items-center gap-4 border-t border-ui-border pt-6">
                <img src={test.image} alt={test.name} className="h-12 w-12 rounded-full object-cover border border-gold-muted/30" />
                <div>
                  <h4 className="font-body text-sm font-medium text-text-primary">{test.name}</h4>
                  <p className="text-xs text-text-secondary">{test.role}, <span className="text-gold-muted">{test.company}</span></p>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
