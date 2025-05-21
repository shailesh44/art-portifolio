'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "GALLERY", href: "/gallery", gif: "/navbar/gallery.gif" },
  { label: "CHILDRENS BOOK", href: "/childrensbook", gif: "/navbar/childrenbook.gif" },
  { label: "SKETCHBOOK", href: "/sketchbook", gif: "/navbar/sketchbook.gif" },
  { label: "COMMISSION WORK", href: "/commissionwork", gif: "/navbar/commissionwork.gif" },
  { label: "ABOUT", href: "/about", gif: "/navbar/about.gif" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex flex-col items-center py-6 space-y-4">
      <a href="/">
        <img
  src="/gifs/artlogo.gif"
  alt="Karan Sketchbook Logo"
  width={300}
  height={100}
  className="h-auto bg-white rounded-md"
/>
      </a>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        className={`flex flex-col md:flex-row gap-4 md:gap-6 font-bold tracking-wider uppercase ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative h-6 w-auto flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              {isActive ? (
                <img
                  src={item.gif}
                  alt={item.label}
                  className="h-6 w-auto object-contain"
                />
              ) : (
                <span className="hover:underline underline-offset-4">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}