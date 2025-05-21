'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const imageUrls = Array.from({ length: 15 }, (_, i) => `https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${i}.jpg`);

export default function GalleryPage() {
  const [showButton, setShowButton] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="mt-10 relative">
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imageUrls.map((url, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedIndex(idx)}
          >
            <img src={url} alt={`Artwork ${idx + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          ↑
        </button>
      )}

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 backdrop-blur-md bg-white/70 flex items-center justify-center"
          >
            <div className="relative max-w-4xl w-full px-4">
              <button
                className="absolute top-4 right-4 text-black text-2xl"
                onClick={() => setSelectedIndex(null)}
              >
                ×
              </button>
              <img
                src={imageUrls[selectedIndex]}
                alt="Full view"
                className="max-h-screen w-full object-contain mx-auto"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-3xl cursor-pointer"
                onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))}>
                ❮
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-3xl cursor-pointer"
                onClick={() => setSelectedIndex((prev) => (prev < imageUrls.length - 1 ? prev + 1 : prev))}>
                ❯
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}