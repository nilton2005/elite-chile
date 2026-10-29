import React from "react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Solicita tu membresía",
      desc: "Completa el formulario de postulación detallando tu trayectoria."
    },
    {
      num: "02",
      title: "Revisamos tu perfil",
      desc: "Nuestro comité evalúa cada solicitud para mantener el estándar."
    },
    {
      num: "03",
      title: "Bienvenida al círculo",
      desc: "Accede inmediatamente a beneficios, eventos y directorio privado."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background-secondary border-y border-ui-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-text-h2 font-light">
            Cómo <span className="italic text-gold-light">funciona.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[10%] right-[10%] hidden md:block h-[1px] bg-ui-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background-primary border border-gold-muted text-gold-primary font-display text-xl mb-6 shadow-[0_0_20px_rgba(201,168,76,0.1)]">
                  {step.num}
                </div>
                <h3 className="font-body font-medium text-lg mb-3">{step.title}</h3>
                <p className="text-text-secondary font-light text-sm max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
