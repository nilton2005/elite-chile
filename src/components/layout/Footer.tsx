import React from "react";
import Link from "next/link";
import { Globe, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-ui-border bg-background-primary pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-2xl tracking-widest text-gold-primary">
              ÉLITEmanu
            </span>
            <p className="mt-4 max-w-xs text-center text-sm font-light text-text-secondary md:text-left">
              Red privada para mujeres ejecutivas en Santiago, Nueva York y
              Miami. Un círculo de poder y colaboración.
            </p>
          </div>

          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-3">
              <h4 className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold-muted">
                Plataforma
              </h4>
              <Link href="/membresia" className="text-sm text-text-secondary hover:text-gold-light">
                Membresía
              </Link>
              <Link href="/beneficios" className="text-sm text-text-secondary hover:text-gold-light">
                Beneficios
              </Link>
              <Link href="/eventos" className="text-sm text-text-secondary hover:text-gold-light">
                Eventos
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold-muted">
                Legal
              </h4>
              <Link href="#" className="text-sm text-text-secondary hover:text-gold-light">
                Privacidad
              </Link>
              <Link href="#" className="text-sm text-text-secondary hover:text-gold-light">
                Términos
              </Link>
              <Link href="#" className="text-sm text-text-secondary hover:text-gold-light">
                Contacto
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ui-border pt-8 md:flex-row">
          <p className="text-xs font-light text-text-muted">
            &copy; {new Date().getFullYear()} ÉLITEmanu. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-text-secondary">
            <Link href="#" className="hover:text-gold-light">
              <span className="sr-only">LinkedIn</span>
              <Globe strokeWidth={1} size={20} />
            </Link>
            <Link href="#" className="hover:text-gold-light">
              <span className="sr-only">Instagram</span>
              <Briefcase strokeWidth={1} size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
