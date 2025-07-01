export default function Hero() {
  return (
    <section className="bg-black text-white h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl font-bold mb-4">Твоя історія — твоя фотографія</h1>
        <p className="text-xl mb-6">Знайди фотографа або створіть свою сторінку</p>
        <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
          Почати
        </button>
      </div>
    </section>
  );
}
