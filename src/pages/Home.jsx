import { useState } from "react";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Agenda from "./Agenda";
import MenuLosMixes from "./MenuD";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("menu1");

  const renderMenu = () => {
    switch (selectedMenu) {
      case "menu1":
        return <Menu />;
      case "menu2":
        return <Menu2 />;
      case "menu3":
        return <Menu3 />;
      case "menu4":
        return <Menu4 />;
      case "menud":
        return <MenuLosMixes />;
      case "agenda":
        return <Agenda />;
      default:
        return <Menu />;
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Barra superior negra */}
      <div className="w-full flex bg-black">
        <button
          onClick={() => setSelectedMenu("menud")}
          className="flex-1 text-white py-4 border border-white"
        >
          Menú Digital
        </button>

        <button
          onClick={() => setSelectedMenu("menu1")}
          className="flex-1 text-white py-4 border border-white"
        >
          Menú 1
        </button>

        <button
          onClick={() => setSelectedMenu("menu2")}
          className="flex-1 text-white py-4 border border-white"
        >
          Menú 2
        </button>

        <button
          onClick={() => setSelectedMenu("menu3")}
          className="flex-1 text-white py-4 border border-white"
        >
          Menú 3
        </button>

        <button
          onClick={() => setSelectedMenu("menu4")}
          className="flex-1 text-white py-4 border border-white"
        >
          Menú 4
        </button>

        <button
          onClick={() => setSelectedMenu("agenda")}
          className="flex-1 text-white py-4 border border-white"
        >
          Agenda
        </button>
      </div>

      {/* Contenido */}
      <div className="">
        {renderMenu()}
      </div>
    </div>
  );
}