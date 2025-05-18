import "./globals.css"
import Header from "./components/Header";

export const metadata = {
  title: "Karan Sketchbook",
  description: "Art Portfolio by Karan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black font-sans">
        <Header />
        <main className="max-w-5xl mx-auto px-4 pt-8">{children}</main>
      </body>
    </html>
  );
}