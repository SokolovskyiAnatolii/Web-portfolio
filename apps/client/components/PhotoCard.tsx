export default function PhotoCard() {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md max-w-sm">
      <img src="https://via.placeholder.com/400" alt="photo" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">Ім'я Фотографа</h2>
        <p className="text-sm text-gray-600">Місто, стиль зйомки</p>
      </div>
    </div>
  );
}
