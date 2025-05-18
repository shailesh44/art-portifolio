// src/components/Header.js

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons

const navItems = [
  { label: "GALLERY", href: "/gallery" },
  { label: "CHILDRENS BOOK", href: "/childrensbook" },
  { label: "SKETCHBOOK", href: "/sketchbook" },
  { label: "COMMISSION WORK", href: "/comissionwork" },
  { label: "ABOUT", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-center py-6 space-y-4">
      <Link href="/">
        <Image
          src="/images/artlogo.png"
          alt="Karan Sketchbook Logo"
          width={300}
          height={120}
          priority
        />
      </Link>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Nav links */}
      <nav
        className={`flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-bold tracking-wider uppercase ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:underline underline-offset-4"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
