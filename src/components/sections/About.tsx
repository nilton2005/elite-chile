import React from "react";
import { Shield, Users, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-background-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-text-h2 font-light leading-tight">
              Más que una red.<br />
              <span className="italic text-gold-light">Un círculo de poder.</span>
            </h2>
            <div className="mt-8 flex flex-col gap-10">
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 rounded-sm bg-background-tertiary p-2 border border-ui-border">
                  <Shield className="h-5 w-5 text-gold-primary" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="font-body text-sm uppercase tracking-widest text-text-primary mb-2">Exclusividad</h4>
                  <p className="text-text-secondary font-light text-sm leading-relaxed">
                    Un proceso de selección riguroso asegura que conectarás únicamente con líderes de alto calibre en tu nivel.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 rounded-sm bg-background-tertiary p-2 border border-ui-border">
                  <Users className="h-5 w-5 text-gold-primary" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="font-body text-sm uppercase tracking-widest text-text-primary mb-2">Conexión</h4>
                  <p className="text-text-secondary font-light text-sm leading-relaxed">
                    Networking estructurado y directorios privados para forjar alianzas estratégicas en las principales ciudades de negocios.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1 rounded-sm bg-background-tertiary p-2 border border-ui-border">
                  <Sparkles className="h-5 w-5 text-gold-primary" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="font-body text-sm uppercase tracking-widest text-text-primary mb-2">Oportunidades</h4>
                  <p className="text-text-secondary font-light text-sm leading-relaxed">
                    Acceso a deal flow exclusivo, mesas redondas privadas y beneficios diseñados para el estilo de vida ejecutivo.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-[2px] border border-ui-border group">
            <div className="absolute inset-0 bg-black/30 z-10 transition-opacity group-hover:opacity-10" />
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
              alt="Mujer ejecutiva" 
              className="object-cover w-full h-full scale-105 transition-transform duration-1000 group-hover:scale-100"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
