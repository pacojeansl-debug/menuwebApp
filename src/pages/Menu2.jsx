import { useState } from "react";

export default function Menu2() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const menuData = {
    pizzas: [
      {
        name: "Pizza Pepperoni",
        price: 120,
        description: "Clásica con queso y pepperoni",
        image: "/taco.jpg"
      },
      {
        name: "Pizza Hawaiana",
        price: 130,
        description: "Jamón y piña",
        image: "/taco.jpg"
      }
    ],
    ensaladas: [
      {
        name: "Ensalada César",
        price: 90,
        description: "Pollo, crutones y aderezo césar",
        image: "/taco.jpg"
      },
      {
        name: "Ensalada Verde",
        price: 80,
        description: "Lechuga, pepino y aguacate",
        image: "/taco.jpg"
      }
    ],
    bebidas: [
      {
        name: "Refresco",
        price: 30,
        description: "600ml",
        image: "/taco.jpg"
      }
    ]
  };

  const categories = Object.keys(menuData);

  return (
    <div className="min-h-screen bg-red-500 p-4">

      {/* HEADER */}
      <h1 className="text-white text-2xl font-bold mb-6">
        Menú
      </h1>

      {/* 👉 SI NO HAY CATEGORIA SELECCIONADA */}
      {!selectedCategory && (
        <div className="flex flex-col gap-4">
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="bg-white rounded-2xl p-4 flex items-center justify-between shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/taco.jpg"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-bold capitalize">{cat}</h2>
                  <p className="text-sm text-gray-500">
                    {menuData[cat].length} items
                  </p>
                </div>
              </div>

              <span>›</span>
            </div>
          ))}
        </div>
      )}

      {/* 👉 LISTA DE PRODUCTOS */}
      {selectedCategory && (
        <div className="flex flex-col gap-4">

          {/* BOTON BACK */}
          <button
            onClick={() => {
              setSelectedCategory(null);
              setActiveItem(null);
            }}
            className="text-white mb-2"
          >
            ← Regresar
          </button>

          <h2 className="text-white text-xl font-bold capitalize">
            {selectedCategory}
          </h2>

          {menuData[selectedCategory].map((item, index) => {
            const isActive = activeItem === index;

            return (
              <div
                key={index}
                onClick={() =>
                  setActiveItem(isActive ? null : index)
                }
                className={`bg-white rounded-2xl p-4 shadow cursor-pointer transition-all duration-300 ${
                  isActive ? "scale-105" : ""
                }`}
              >
                <div className="flex gap-4">

                  <img
                    src={item.image}
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold">{item.name}</h3>

                    {isActive && (
                      <p className="text-sm text-gray-600 mt-2">
                        {item.description}
                      </p>
                    )}

                    <p className="text-red-500 font-bold mt-2">
                      ${item.price}
                    </p>
                  </div>

                  <div className="text-xl">
                    {isActive ? "-" : "+"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}