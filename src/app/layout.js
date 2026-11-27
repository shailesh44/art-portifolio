import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Karan Sketchbook",
  description: "Illustration and children's book portfolio by Karan Bhanushali.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black font-vividly text-2xl flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 pt-6 sm:pt-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
