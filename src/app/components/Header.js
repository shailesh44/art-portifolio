'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "GALLERY",
    href: "/",
    gif: "/navbar/gallery.gif",
    gifWidth: 244,
    gifHeight: 50,
    isActivePath: (pathname) => pathname === "/" || pathname.startsWith("/gallery"),
  },
  {
    label: "CHILDRENS BOOK",
    href: "/childrensbook",
    gif: "/navbar/childrenbook.gif",
    gifWidth: 497,
    gifHeight: 50,
  },
  {
    label: "SKETCHBOOK",
    href: "/sketchbook",
    gif: "/navbar/sketchbook.gif",
    gifWidth: 426,
    gifHeight: 50,
    hidden: true,
  },
  {
    label: "COMMISSION WORK",
    href: "/commissionwork",
    gif: "/navbar/commissionwork.gif",
    gifWidth: 559,
    gifHeight: 50,
    hidden: true,
  },
  {
    label: "ABOUT",
    href: "/about",
    gif: "/navbar/about.gif",
    gifWidth: 203,
    gifHeight: 50,
  },
];

const visibleNavItems = navItems.filter((item) => !item.hidden);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex flex-col items-center py-6 px-4 space-y-4">
      <Link href="/" className="block" aria-label="Karan Sketchbook Home">
        <Image
          src="/images/branding/karan-sketchbook-logo.gif"
          alt="Karan Sketchbook Logo"
          width={2011}
          height={481}
          unoptimized
          priority
          className="h-auto w-60 sm:w-72 md:w-80 bg-white"
        />
      </Link>

      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          className="p-2 cursor-pointer"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        aria-label="Main Navigation"
        className={`flex-col md:flex-row items-center gap-4 md:gap-8 font-bold tracking-wider uppercase ${
          menuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        {visibleNavItems.map((item) => {
          const isActive = item.isActivePath
            ? item.isActivePath(pathname)
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative h-6 flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
            >
              {isActive ? (
                <Image
                  src={item.gif}
                  alt={item.label}
                  width={item.gifWidth}
                  height={item.gifHeight}
                  unoptimized
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
