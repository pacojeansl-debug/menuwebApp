import { useState } from "react";

export default function Menu() {
  const [category, setCategory] = useState("tacos");
  const [selectedItem, setSelectedItem] = useState(null);

  const menuData = {
    tacos: [
      {
        name: "Taco al Pastor",
        price: 18,
        description: "Carne al pastor con piña, cebolla y cilantro",
        image: "/tpastor.webp"
      },
      {
        name: "Taco de Suadero",
        price: 20,
        description: "Suadero suave con cebolla y cilantro",
        image: "/tsuadero.webp"
      },
      {
        name: "Taco de Bistec",
        price: 20,
        description: "Carne de res asada con cebolla y cilantro",
        image: "/tbistec.webp"
      },
      {
        name: "Taco de Longaniza",
        price: 18,
        description: "Longaniza dorada tradicional",
        image: "/tlonganiza.webp"
      },
      {
        name: "Taco Campechano",
        price: 22,
        description: "Mezcla de bistec y longaniza",
        image: "/tcampechano.webp"
      },
      {
        name: "Taco de Tripa",
        price: 25,
        description: "Tripa dorada crujiente",
        image: "/ttripa.webp"
      },
      {
        name: "Taco de Pollo",
        price: 18,
        description: "Pollo a la plancha con cebolla y cilantro",
        image: "/tpollo.webp"
      },
      {
        name: "Taco Vegetariano",
        price: 17,
        description: "Nopales, champiñones y queso",
        image: "/tvegetariano.webp"
      },
    ],

    volcanes: [
      {
        name: "Volcán al Pastor",
        price: 35,
        description: "Tortilla dorada con pastor y queso gratinado",
        image: "/vpastor.webp"
      },
      {
        name: "Volcán de Suadero",
        price: 38,
        description: "Suadero con queso fundido",
        image: "/vsuadero.webp"
      },
      {
        name: "Volcán de Bistec",
        price: 38,
        description: "Bistec con queso gratinado",
        image: "/vbistec.webp"
      },
      {
        name: "Volcán Campechano",
        price: 40,
        description: "Mezcla de carnes con queso",
        image: "/vcampechano.webp"
      },
      {
        name: "Volcán de Longaniza",
        price: 35,
        description: "Longaniza con queso fundido",
        image: "/vlonganiza.webp"
      },
      {
        name: "Volcán de Tripa",
        price: 42,
        description: "Tripa dorada con queso",
        image: "/vtripa.webp"
      },
      {
        name: "Volcán de Pollo",
        price: 34,
        description: "Pollo con queso gratinado",
        image: "/vpollo.webp"
      },
    ],

    bebidas: [
      { name: "Agua de Horchata", price: 25, description: "500ml", image: "/taco.jpg" },
      { name: "Agua de Jamaica", price: 25, description: "500ml", image: "/taco.jpg" },
      { name: "Refresco Cola", price: 28, description: "600ml", image: "/taco.jpg" },
      { name: "Refresco Naranja", price: 28, description: "600ml", image: "/taco.jpg" },
      { name: "Agua Mineral", price: 30, description: "600ml", image: "/taco.jpg" },
      { name: "Cerveza", price: 35, description: "355ml", image: "/taco.jpg" },
      { name: "Limonada", price: 27, description: "500ml", image: "/taco.jpg" },
      { name: "Naranjada", price: 27, description: "500ml", image: "/taco.jpg" },
    ],

    postres: [
      { name: "Flan Napolitano", price: 30, description: "Flan casero", image: "/taco.jpg" },
      { name: "Gelatina", price: 20, description: "Gelatina de sabores", image: "/taco.jpg" },
      { name: "Arroz con Leche", price: 25, description: "Con canela", image: "/taco.jpg" },
      { name: "Churros", price: 30, description: "3 piezas", image: "/taco.jpg" },
      { name: "Pay de Limón", price: 35, description: "Pay frío", image: "/taco.jpg" },
      { name: "Helado", price: 28, description: "1 bola", image: "/taco.jpg" },
      { name: "Brownie", price: 32, description: "Chocolate", image: "/taco.jpg" },
      { name: "Fresas con Crema", price: 35, description: "Postre frío", image: "/taco.jpg" },
    ],
  };

  const categories = ["tacos", "volcanes", "bebidas", "postres"];

  return (

    <div className="w-full bg-white">

      {/* HEADER */}
      <div className="p-2 text-center font-semibold text-lg flex items-center justify-center">
        <img
          src="/logoMenu.svg"
          alt="logo tacos"
          className=" w-20" />

      </div>

      {/* CATEGORIAS */}
      <div className="sticky top-0 bg-orange-600 text-white flex justify-around py-3 text-sm z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`capitalize ${category === cat
              ? "border-b-2 border-white font-semibold"
              : "opacity-70"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex justify-center text-center p-2 pb-3">
        <p className="text-3xl text-orange-600 font-bold capitalize">
          {category}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4 pb-8 pr-3 pl-3">
        {menuData[category].map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(item)}
            className="bg-orange-500 text-white rounded-xl p-3 shadow cursor-pointer active:scale-95 transition"
          >
            <div className="flex justify-between text-xs mb-2">
              <span>Disponible</span>
              <span>${item.price}</span>
            </div>

            {/* imagen placeholder */}
            <div className="w-full h-34 mb-1">
              <img
                src={item.image || "/taco.jpg"}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <h3 className="text-sm font-semibold">{item.name}</h3>

            {/* <p className="text-xs opacity-90">
              {item.description}
            </p> */}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-2xl w-full max-w-sm p-4 relative animate-fadeIn">

            {/* BOTON CERRAR */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 text-gray-500 text-xl"
            >
              ✕
            </button>

            {/* IMAGEN */}
            <div className="w-full h-40 mb-3">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* INFO */}
            <h2 className="text-xl font-bold text-orange-600 mb-1">
              {selectedItem.name}
            </h2>

            <p className="text-gray-600 text-sm mb-3">
              {selectedItem.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-orange-600">
                ${selectedItem.price}
              </span>

              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                Disponible
              </span>
            </div>

          </div>
        </div>
      )}
    </div>

  );
}