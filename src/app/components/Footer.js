export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 pt-8 pb-10 px-4 text-center text-lg text-gray-600 space-y-3">
      <p>© {new Date().getFullYear()} Karan Sketchbook. All rights reserved.</p>
      <p>All artworks are original creations and protected under copyright law.</p>
      <a
        href="https://instagram.com/safarwithsketchbook"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 hover:text-black transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        <span>Follow on Instagram (@safarwithsketchbook)</span>
      </a>
    </footer>
  );
}
