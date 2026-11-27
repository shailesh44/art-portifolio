'use client';
import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

/**
 * Displays children's book cover/interior spreads in natural 2:1 proportions
 * with click-to-zoom lightbox support.
 */
export default function BookSpreadGallery({ spreads }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {spreads.map((spread, idx) => (
          <button
            key={spread.src}
            type="button"
            onClick={() => setSelectedIndex(idx)}
            aria-label={`Inspect ${spread.alt}`}
            className="block w-full overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <Image
              src={spread.src}
              alt={spread.alt}
              width={spread.width}
              height={spread.height}
              sizes="(max-width: 896px) 100vw, 896px"
              priority={idx < 2}
              className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.015]"
            />
          </button>
        ))}
      </div>

      <ImageLightbox
        items={spreads}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onSelectIndex={setSelectedIndex}
        showTitle={false}
      />
    </>
  );
}
