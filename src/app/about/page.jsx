export default function AboutPage() {
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p>
          Hi! I'm Karan, a passionate illustrator and visual storyteller. My work spans across children's books,
          character design, sketchbooks, and commission work.
        </p>
        <p>
          I love drawing inspiration from daily life, fantasy, and folk tales. I hope you enjoy exploring my creative
          journey.
        </p>
        <p className="font-semibold">Follow my work and behind-the-scenes on Instagram:</p>
        <div className="flex justify-center">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @yourusername
          </a>
        </div>
      </div>
      {/* TODO: Embed Instagram preview via API or embed tool */}
    </section>
  );
}