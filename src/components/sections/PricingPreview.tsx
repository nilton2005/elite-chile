import React from "react";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function PricingPreview() {
  const plans = [
    {
      name: "Membresía Anual",
      price: "$2,400",
      period: "/ año",
      description: "Acceso completo a la red global de ejecutivas.",
      features: [
        "Directorio privado global",
        "Beneficios premium (Hoteles, Viajes)",
        "Acceso a eventos (1 por trimestre gratuito)",
        "Programa de mentoría cruzada",
      ],
      recommended: false,
    },
    {
      name: "Founding Member",
      price: "$15,000",
      period: "/ lifetime",
      description: "Estatus vitalicio y privilegios inigualables.",
      features: [
        "Todos los beneficios de Membresía Anual vitalicios",
        "Concierge dedicado 24/7",
        "Eventos elite y cenas privadas a puertas cerradas",
        "Oportunidades de co-inversión",
        "Badge exclusivo de fundadora"
      ],
      recommended: true,
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-text-h2 font-light">
            Tu lugar en la <span className="italic text-gold-light">cima.</span>
          </h2>
          <p className="mt-4 text-text-secondary font-body font-light max-w-xl mx-auto">
            Elige la modalidad que mejor se adapte a tu proyección y estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-8 rounded-[4px] bg-background-secondary border transition-all duration-300 ${
                plan.recommended 
                  ? "border-gold-primary shadow-[0_0_40px_rgba(201,168,76,0.08)] scale-100 md:scale-105 z-10" 
                  : "border-ui-border hover:border-gold-muted"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="membership">Más Popular</Badge>
                </div>
              )}
              
              <h3 className="font-display text-2xl text-text-primary mb-2">{plan.name}</h3>
              <p className="text-sm font-light text-text-secondary mb-6">{plan.description}</p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-display text-4xl text-gold-primary">{plan.price}</span>
                <span className="text-sm text-text-muted">{plan.period}</span>
              </div>

              <div className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-text-secondary font-light items-start">
                      <Check className="h-5 w-5 text-gold-primary flex-shrink-0" strokeWidth={1.5} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.recommended ? "primary" : "secondary"} 
                className="w-full mt-10"
              >
                Solicitar membresía
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
