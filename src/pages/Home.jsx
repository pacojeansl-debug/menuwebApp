import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6">
      
      <h1 className="text-2xl font-bold">Selecciona un menú</h1>

      <button
        onClick={() => navigate("/menu")}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        Menú 1
      </button>

      <button
        onClick={() => navigate("/menu2")}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        Menú 2
      </button>

      <button
        onClick={() => navigate("/menu3")}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        Menú 3
      </button>

      <button
        onClick={() => navigate("/menu4")}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        Menú 4
      </button>

    </div>
  );
}