import Link from 'next/link';
import { childrensBooks } from '../data/childrensBooks';

export default function ChildrensBookPage() {
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Children's Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {childrensBooks.map((book) => (
          <Link key={book.slug} href={`/childrensbook/${book.slug}`} className="block group">
            <div className="overflow-hidden rounded-lg">
              <img src={book.cover} alt={book.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <h2 className="mt-2 text-lg font-semibold text-center group-hover:underline">{book.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}