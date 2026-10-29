"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Bell, MessageSquare, ChevronDown } from "lucide-react";

export function MemberNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background-primary/95 backdrop-blur-md border-b border-ui-border">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="font-display text-xl tracking-widest text-gold-primary">
            ÉLITEmanu
          </span>
        </Link>

        {/* Search Bar - hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <input 
            type="search" 
            placeholder="Buscar miembras, beneficios..." 
            className="w-full bg-background-tertiary border border-ui-border rounded-full px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-gold-primary transition-colors"
          />
        </div>

        {/* Right Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/mensajes" className="relative text-text-secondary hover:text-gold-light transition-colors">
            <MessageSquare size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-gold-primary border-2 border-background-primary" />
          </Link>
          
          <button className="relative text-text-secondary hover:text-gold-light transition-colors">
            <Bell size={20} strokeWidth={1.5} />
          </button>

          <div className="h-6 w-px bg-ui-border" />

          {/* User Dropdown Toggle */}
          <div className="relative">
            <button 
              className="flex items-center gap-3 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="text-right hidden lg:block">
                <p className="text-sm font-medium text-text-primary">Valentina S.</p>
                <p className="text-xs text-gold-muted uppercase tracking-widest">Founding Member</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" 
                alt="Avatar" 
                className="h-10 w-10 rounded-full border border-gold-muted/50 object-cover"
              />
              <ChevronDown size={16} className="text-text-muted" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 rounded-[2px] bg-background-secondary border border-ui-border shadow-xl py-2 animate-in fade-in zoom-in-95">
                <Link href="/perfil" className="block px-4 py-2 text-sm text-text-primary hover:bg-background-tertiary hover:text-gold-light">Mi Perfil</Link>
                <Link href="/beneficios-miembro" className="block px-4 py-2 text-sm text-text-primary hover:bg-background-tertiary hover:text-gold-light">Beneficios</Link>
                <Link href="/mensajes" className="block px-4 py-2 text-sm text-text-primary hover:bg-background-tertiary hover:text-gold-light">Mensajes</Link>
                <div className="my-1 border-t border-ui-border/50" />
                <Link href="/admin" className="block px-4 py-2 text-sm text-gold-muted hover:bg-background-tertiary hover:text-gold-light">Admin Panel</Link>
                <div className="my-1 border-t border-ui-border/50" />
                <button className="block w-full text-left px-4 py-2 text-sm text-ui-error hover:bg-background-tertiary">Salir</button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="p-2 text-text-primary md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
