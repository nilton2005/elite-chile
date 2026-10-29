"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background-primary/80 backdrop-blur-md border-b border-ui-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-widest text-gold-primary">
            ÉLITEmanu
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/directorio"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-gold-light"
          >
            Comunidad
          </Link>
          <Link
            href="/beneficios"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-gold-light"
          >
            Beneficios
          </Link>
          <Link
            href="/membresia"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-gold-light"
          >
            Membresía
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-gold-light"
          >
            Sobre nosotras
          </Link>
          <Link
            href="/admin"
            className="text-sm font-medium text-gold-primary transition-colors hover:text-gold-light"
          >
            Panel Admin
          </Link>

          <div className="ml-4 flex items-center gap-4 border-l border-ui-border pl-8">
            <Link
              href="/login"
              className="text-sm font-medium text-text-primary transition-colors hover:text-gold-primary"
            >
              Iniciar sesión
            </Link>
            <Link href="/membresia">
              <Button variant="secondary" className="hover:bg-gold-primary hover:text-black">
                Solicitar membresía
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="p-2 text-text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full border-b border-ui-border bg-background-primary/95 px-6 py-6 backdrop-blur-md md:hidden animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-6">
            <Link
              href="/directorio"
              className="text-text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Comunidad
            </Link>
            <Link
              href="/beneficios"
              className="text-text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              href="/membresia"
              className="text-text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Membresía
            </Link>
            <Link
              href="/#about"
              className="text-text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre nosotras
            </Link>
            <Link
              href="/admin"
              className="text-gold-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Panel Admin
            </Link>
            <div className="mt-4 flex flex-col gap-4 border-t border-ui-border pt-6">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start px-0 text-gold-primary">
                  Iniciar sesión
                </Button>
              </Link>
              <Link href="/membresia" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Solicitar membresía</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
