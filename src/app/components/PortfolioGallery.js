'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { galleryArtworks } from "../data/galleryArtworks";
import ImageLightbox from "./ImageLightbox";

/**
 * Main portfolio gallery grid preserving each artwork's natural aspect ratio.
 * Titles are omitted from the main grid and displayed only inside the lightbox.
 */
export default function PortfolioGallery() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="mt-4 sm:mt-6 relative">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
        {galleryArtworks.map((artwork, idx) => (
          <button
            key={artwork.id}
            type="button"
            onClick={() => setSelectedIndex(idx)}
            aria-label={`View ${artwork.title}`}
            className="break-inside-avoid mb-5 block w-full overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <Image
              src={artwork.src}
              alt={artwork.title}
              width={artwork.width}
              height={artwork.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={idx < 6}
              className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {showTopButton && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition cursor-pointer"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <ImageLightbox
        items={galleryArtworks}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelectIndex={setSelectedIndex}
        showTitle={true}
      />
    </section>
  );
}
