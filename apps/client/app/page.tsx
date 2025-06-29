import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoCard from "@/components/PhotoCard";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Галерея фотографів</h1>
        <PhotoCard />
      </main>
      <Footer />
    </div>
  );
}
