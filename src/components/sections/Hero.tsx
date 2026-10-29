import React from "react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background-primary pt-20">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/60" />
        {/* Placeholder for video or high-end image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-text-hero italic font-light tracking-wide text-text-primary leading-tight">
          La comunidad que define el <span className="text-gold-primary">estándar.</span>
        </h1>
        <p className="mt-6 max-w-2xl font-body text-lg font-light text-text-secondary md:text-xl">
          Red privada para mujeres ejecutivas en Santiago, Nueva York y Miami.
        </p>
        
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:mt-16">
          <Button size="lg" className="w-full sm:w-auto">
            Solicitar membresía
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            Conoce los beneficios
          </Button>
        </div>
      </div>
    </section>
  );
}
