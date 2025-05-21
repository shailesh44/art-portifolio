export default function Footer() {
  return (
    <footer className="mt-20 border-t pt-8 text-center text-lg text-gray-600 space-y-3">
      <p>© {new Date().getFullYear()} Karan Sketchbook. All rights reserved.</p>
      <p>All artworks are original creations and protected under copyright law.</p>
      <a
        href="https://instagram.com/safarwithsketchbook"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 hover:text-black transition"
      >
        <img src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg?semt=ais_hybrid&w=740" alt="Instagram" className="h-5 w-5" />
        Follow on Instagram
      </a>
    </footer>
  );
}