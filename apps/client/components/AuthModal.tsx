import { useState } from "react";

export default function AuthModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn">Увійти</button>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl mb-2">Авторизація</h2>
            <button onClick={() => setOpen(false)}>Закрити</button>
          </div>
        </div>
      )}
    </>
  );
}
