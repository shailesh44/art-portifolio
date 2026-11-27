import Image from "next/image";
import Link from "next/link";
import { childrensBooks } from "../data/childrensBooks";

export const metadata = {
  title: "Children's Books | Karan Sketchbook",
};

export default function ChildrensBookPage() {
  return (
    <section className="mt-6 sm:mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">Children&apos;s Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {childrensBooks.map((book, idx) => (
          <Link key={book.slug} href={`/childrensbook/${book.slug}`} className="block group">
            <div className="overflow-hidden rounded-lg bg-white">
              <Image
                src={book.banner.src}
                alt={book.banner.alt}
                width={book.banner.width}
                height={book.banner.height}
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={idx < 2}
                className="w-full h-auto block transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-3 text-xl font-semibold text-center group-hover:underline underline-offset-4">
              {book.cardTitle}
            </h2>
            {book.publication && (
              <p className="text-center text-lg text-gray-600">{book.publication}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
