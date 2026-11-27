import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { childrensBooks } from "../../data/childrensBooks";
import BookSpreadGallery from "../../components/BookSpreadGallery";

export function generateStaticParams() {
  return childrensBooks.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const book = childrensBooks.find((b) => b.slug === slug);
  if (!book) return { title: "Book Not Found | Karan Sketchbook" };
  return {
    title: `${book.title} | Karan Sketchbook`,
    description: book.description,
  };
}

export default async function BookDetail({ params }) {
  const { slug } = await params;
  const book = childrensBooks.find((b) => b.slug === slug);

  if (!book) return notFound();

  return (
    <section className="mt-6 sm:mt-8">
      <div className="mb-6">
        <Link
          href="/childrensbook"
          className="inline-flex items-center gap-2 text-lg text-gray-600 hover:text-black transition"
        >
          <ArrowLeft size={18} />
          <span>Back to Children&apos;s Books</span>
        </Link>
      </div>

      <header className="max-w-3xl mx-auto text-center mb-10 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold">{book.title}</h1>
        {book.subtitle && (
          <p className="text-xl sm:text-2xl text-gray-700">{book.subtitle}</p>
        )}
        <p className="text-lg text-gray-600">
          Author &amp; Illustrator: {book.illustrator}
          {book.publication ? ` · ${book.publication}` : ""}
        </p>
        {book.scope && (
          <p className="text-lg text-gray-600">{book.scope}</p>
        )}
        <p className="text-xl text-gray-800 pt-1 leading-relaxed">{book.description}</p>

        {book.includedBooks && book.includedBooks.length > 0 && (
          <p className="text-base sm:text-lg text-gray-500 pt-2">
            Titles included: {book.includedBooks.join(" · ")}
          </p>
        )}
      </header>

      <BookSpreadGallery spreads={book.spreads} />
    </section>
  );
}
