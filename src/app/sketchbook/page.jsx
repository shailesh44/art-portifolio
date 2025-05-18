'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const watercolors = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
];

const randomSketches = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
];

export default function SketchbookPage() {
  const [activeTab, setActiveTab] = useState('watercolor');

  const images = activeTab === 'watercolor' ? watercolors : randomSketches;

  return (
    <section className="mt-10">

      <div className="flex justify-center gap-8 mb-6">
        <button
          onClick={() => setActiveTab('watercolor')}
          className={`text-lg font-bold uppercase ${
            activeTab === 'watercolor' ? 'underline underline-offset-4' : ''
          }`}
        >
          Watercolors
        </button>
        <button
          onClick={() => setActiveTab('sketches')}
          className={`text-lg font-bold uppercase ${
            activeTab === 'sketches' ? 'underline underline-offset-4' : ''
          }`}
        >
          Random Sketches
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {images.map((url, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img src={url} alt={`Sketch ${idx + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}