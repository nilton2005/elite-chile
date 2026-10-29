import React from "react";

export function SocialProof() {
  const partners = [
    "Hermès",
    "Four Seasons",
    "Emirates",
    "Bulgari",
    "American Express",
  ];

  return (
    <section className="border-y border-ui-border bg-background-secondary py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 lg:px-8">
        <h3 className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold-muted text-center">
          Beneficios exclusivos en colaboración con
        </h3>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:grayscale-0">
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-display text-2xl tracking-wider text-text-primary transition-colors hover:text-gold-light"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
