"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-100 dark:border-zinc-800 w-full">
      <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg">
          Massinissa.dev
        </a>

        {/* Menu desktop */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#projects">Projets</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Bouton hamburger (mobile uniquement) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-2xl"
          aria-label="Ouvrir le menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <nav className="sm:hidden flex flex-col gap-4 px-8 pb-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projets
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            À propos
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
