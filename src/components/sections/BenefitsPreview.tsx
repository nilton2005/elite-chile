import React from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Plane, Building, ShoppingBag, Calendar, UtensilsCrossed, Heart } from "lucide-react";

export function BenefitsPreview() {
  const categories = [
    {
      title: "Hoteles & Resorts",
      count: "45 Privilegios",
      icon: <Building className="h-6 w-6 text-gold-muted group-hover:text-gold-primary transition-colors" strokeWidth={1} />,
    },
    {
      title: "Aviación & Viajes",
      count: "12 Alianzas",
      icon: <Plane className="h-6 w-6 text-gold-muted group-hover:text-gold-primary transition-colors" strokeWidth={1} />,
    },
    {
      title: "Moda & Lifestyle",
      count: "28 Marcas",
      icon: <ShoppingBag className="h-6 w-6 text-gold-muted group-hover:text-gold-primary transition-colors" strokeWidth={1} />,
    },
    {
      title: "Eventos Privados",
      count: "Acceso Prioritario",
      icon: <Calendar className="h-6 w-6 text-gold-muted group-hover:text-gold-primary transition-colors" strokeWidth={1} />,
    },
    {
      title: "Gastronomía",
      count: "30+ Restaurantes",
      icon: <UtensilsCrossed className="h-6 w-6 text-gold-muted group-hover:text-gold-primary transition-colors" strokeWidth={1} />,
    },
    {
      title: "Wellness & Spa",
      count: "15 Santuarios",
      icon: <Heart className="h-6 w-6 text-gold-muted group-hover:text-gold-primary transition-colors" strokeWidth={1} />,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background-primary group/section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        
        <h2 className="font-display text-text-h2 font-light text-center">
          Acceso a un mundo <span className="italic text-gold-light">diferente.</span>
        </h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {categories.map((cat, i) => (
            <Card key={i} hoverable className="group cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="bg-background-tertiary p-3 rounded-sm border border-ui-border transition-colors group-hover:border-gold-muted">
                  {cat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg mt-4">{cat.title}</CardTitle>
                <CardDescription className="uppercase tracking-widest text-xs mt-2 text-gold-muted">
                  {cat.count}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 opacity-0 transition-opacity duration-500 group-hover/section:opacity-100">
          <Button variant="secondary">
            Ver todos los beneficios
          </Button>
        </div>

      </div>
    </section>
  );
}
