const commissions = [
  {
    title: "Pet Portrait",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  },
  {
    title: "Family Illustration",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  },
  {
    title: "Character Design",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  },
  {
    title: "Custom Greeting Card",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  },
];

export default function CommissionPage() {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {commissions.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="overflow-hidden rounded-lg mb-2 hover:scale-105 transition-transform duration-300">
              <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
            </div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}