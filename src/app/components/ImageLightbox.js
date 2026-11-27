'use client';
import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * Full-screen lightbox modal for viewing artworks and book spreads without cropping.
 * Supports keyboard navigation (Escape, ArrowLeft, ArrowRight) and backdrop dismissal.
 */
export default function ImageLightbox({
  items,
  selectedIndex,
  onClose,
  onSelectIndex,
  showTitle = true,
}) {
  const isOpen = selectedIndex !== null && items[selectedIndex];
  const currentItem = isOpen ? items[selectedIndex] : null;
  const hasPrev = selectedIndex > 0;
  const hasNext = selectedIndex !== null && selectedIndex < items.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onSelectIndex(selectedIndex - 1);
  }, [hasPrev, onSelectIndex, selectedIndex]);

  const goNext = useCallback(() => {
    if (hasNext) onSelectIndex(selectedIndex + 1);
  }, [hasNext, onSelectIndex, selectedIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {currentItem && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title || currentItem.alt || "Artwork preview"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 backdrop-blur-md bg-white/85 flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full text-black hover:bg-black/5 transition cursor-pointer"
          >
            <X size={28} strokeWidth={2} />
          </button>

          {hasPrev && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
              className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-black bg-white/75 hover:bg-white transition cursor-pointer"
            >
              <ChevronLeft size={30} strokeWidth={2} />
            </button>
          )}

          {hasNext && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
              className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-black bg-white/75 hover:bg-white transition cursor-pointer"
            >
              <ChevronRight size={30} strokeWidth={2} />
            </button>
          )}

          <div
            className="relative max-w-5xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentItem.src}
              alt={currentItem.alt || currentItem.title || "Artwork"}
              width={currentItem.width}
              height={currentItem.height}
              sizes="95vw"
              priority
              className="max-h-[82vh] w-auto max-w-full h-auto object-contain rounded-lg"
            />
            {showTitle && currentItem.title && (
              <p className="mt-4 text-center text-2xl text-black tracking-wide">
                {currentItem.title}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
