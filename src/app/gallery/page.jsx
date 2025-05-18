'use client';
import { useEffect, useState } from 'react';

const imageUrls = Array.from({ length: 12 }, (_, i) => `https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${i}.jpg`);

export default function GalleryPage() {
  const [showButton, setShowButton] = useState(false);

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
          <div key={idx} className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
            <img src={url} alt={`Artwork ${idx + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          ↑ Back to Top
        </button>
      )}
    </section>
  );
}