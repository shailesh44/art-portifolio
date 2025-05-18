import { notFound } from 'next/navigation';
import { childrensBooks } from '../../data/childrensBooks';

export default function BookDetail({ params }) {
  const book = childrensBooks.find((b) => b.slug === params.slug);

  if (!book) return notFound();

  return (
    <section className="mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">{book.title}</h1>
      <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">{book.description}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {book.images.map((img, idx) => (
          <img key={idx} src={img} alt={`Page ${idx + 1}`} className="rounded-lg w-full h-auto object-cover" />
        ))}
      </div>
    </section>
  );
}