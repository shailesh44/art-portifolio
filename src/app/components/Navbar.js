"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "GALLERY", path: "/gallery" },
    { name: "CHILRENS BOOK", path: "/childrenbook" },
    { name: "SKETCH BOOK", path: "/sketchbook" },
    { name: "COMISSION WORK", path: "/comissionwork" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-4">
        {navItems.map(({ name, path }) => (
          <Link key={name} href={path}>
            <span
              className={`text-sm px-3 py-1 ${
                pathname === path
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}