import Image from "next/image";

export const metadata = {
  title: "About | Karan Sketchbook",
};

export default function AboutPage() {
  return (
    <section className="mt-6 sm:mt-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 sm:mb-10">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/about/karan-bhanushali.webp"
              alt="Karan Bhanushali"
              width={1225}
              height={1400}
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
              className="w-full h-auto block"
            />
          </div>
        </div>

        <div className="md:col-span-7 space-y-5 leading-relaxed text-xl sm:text-2xl">
          <p>
            Hi, I’m Karan Bhanushali, an illustrator based in Mumbai, India. I love making picture books that feel
            warm, playful, and full of life. Most of my work centres around expressive animal characters and the small,
            everyday moments that make childhood feel like a big adventure. I’m always experimenting with my
            illustrations and love playing with colourful palettes—whether I’m working on a full book series or
            developing a personal story from scratch, I want to build worlds that kids genuinely want to spend time in.
          </p>

          <p>
            I absolutely love nature and trees, and a lot of my ideas come from simply observing the world around me.
            When I’m not at my desk, you’ll usually find me out on a trek with my watercolours, filling up my sketchbook
            with travel moments, fussing over my houseplants, or stopping to make friends with the neighbourhood dogs.
          </p>

          <div className="pt-3 border-t border-gray-200 space-y-3">
            <h2 className="text-2xl font-bold">Let’s work together</h2>
            <p>
              If you have a story you’d love to bring to life, I’d be happy to hear about it. I’m currently open for
              picture book commissions, book covers, and literary representation. Drop me an email at{" "}
              <a
                href="mailto:karansketchbook@gmail.com"
                className="underline underline-offset-4 hover:text-gray-600 transition"
              >
                karansketchbook@gmail.com
              </a>{" "}
              and tell me what you’re working on.
            </p>
          </div>

          <div className="pt-2">
            <p className="text-lg text-gray-600">
              Follow my work and behind-the-scenes on Instagram:{" "}
              <a
                href="https://instagram.com/safarwithsketchbook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline underline-offset-4 hover:text-gray-600 transition"
              >
                @safarwithsketchbook
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
