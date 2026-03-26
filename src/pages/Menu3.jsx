import { useState } from "react";

export default function Menu3() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const menuData = {
    cafes: [
      {
        name: "Latte",
        price: 55,
        description:
          "Suave mezcla de espresso con leche vaporizada y una ligera capa de espuma. Perfecto para quienes buscan un café cremoso y equilibrado.",
        image: "/Latte.png",
      },
      {
        name: "Capuccino",
        price: 60,
        description:
          "Clásico italiano con espresso intenso, leche caliente y abundante espuma. Ideal para disfrutar un sabor fuerte pero suave al mismo tiempo.",
        image: "/Capuccino.png",
      },
      {
        name: "Americano",
        price: 45,
        description:
          "Café negro preparado con espresso y agua caliente. Ligero, aromático y perfecto para quienes prefieren un sabor más puro.",
        image: "/Americano.png",
      },
      {
        name: "Mocha",
        price: 65,
        description:
          "Deliciosa combinación de café espresso con chocolate y leche. Dulce, cremoso y perfecto para los amantes del chocolate.",
        image: "/Mocha.png",
      },
    ],
    frappes: [
      {
        name: "Frappé Oreo",
        price: 75,
        description:
          "Bebida fría mezclada con galleta Oreo, hielo y crema. Refrescante, dulce y con trocitos crujientes en cada sorbo.",
        image: "/FrappeOreo.png",
      },
      {
        name: "Frappé Caramelo",
        price: 70,
        description:
          "Refrescante frappé con sabor a caramelo, hielo triturado y un toque de crema. Perfecto para los días calurosos.",
        image: "/FrappeCaram.png",
      },
      {
        name: "Frappé Chocolate",
        price: 72,
        description:
          "Intenso frappé de chocolate con textura cremosa y fría. Ideal para un antojo dulce y refrescante.",
        image: "/FrappeChoco.png",
      },
    ],
    postres: [
      {
        name: "Cheesecake",
        price: 80,
        description:
          "Postre cremoso de queso con base de galleta crujiente. Suave, dulce y perfecto para acompañar con café.",
        image: "/Cheesecake.png",
      },
      {
        name: "Brownie",
        price: 50,
        description:
          "Bizcocho de chocolate húmedo y denso, con sabor intenso. Ideal para los amantes del chocolate.",
        image: "/Brownie.png",
      },
      {
        name: "Panqué",
        price: 45,
        description:
          "Pan dulce esponjoso y suave, perfecto para acompañar con una bebida caliente.",
        image: "/Panque.png",
      },
    ],
    snacks: [
      {
        name: "Croissant",
        price: 40,
        description:
          "Pan hojaldrado, crujiente por fuera y suave por dentro, con un ligero sabor a mantequilla.",
        image: "/Croissant.png",
      },
      {
        name: "Sandwich",
        price: 65,
        description:
          "Clásico sandwich de jamón y queso en pan suave, perfecto para un snack rápido y delicioso.",
        image: "/Sandwich.png",
      },
      {
        name: "Bagel",
        price: 50,
        description:
          "Pan estilo bagel tostado con queso crema. Su textura firme y sabor suave lo hacen ideal para cualquier momento.",
        image: "/Bagel.png",
      },
    ],
  };

  const categories = [
    { key: "cafes", label: "Cafés", color: "bg-orange-200" },
    { key: "frappes", label: "Frappés", color: "bg-green-200" },
    { key: "postres", label: "Postres", color: "bg-pink-200" },
    { key: "snacks", label: "Snacks", color: "bg-yellow-200" },
  ];

  return (
    <div className="p-5 max-w-md mx-auto">
      {/* Logo */}
      <div className="pb-4 flex justify-center">
        <img src="/logoMenu3.svg" alt="logo" className="w-16" />
      </div>

      {categories.map((cat) => (
        <div key={cat.key}>
          {/* Categoría */}
          <div
            onClick={() =>
              setActiveCategory(
                activeCategory === cat.key ? null : cat.key
              )
            }
            className={`${cat.color} p-4 rounded-2xl mb-3 cursor-pointer flex justify-between items-center shadow-sm hover:scale-[1.02] transition`}
          >
            <div>
              <h3 className="font-semibold text-lg">{cat.label}</h3>
              <p className="text-xs text-gray-600">
                Toca para ver productos
              </p>
            </div>

            <span className="text-xl">
              {activeCategory === cat.key ? "−" : "+"}
            </span>
          </div>

          {/* Productos */}
          {activeCategory === cat.key && (
            <div className="flex gap-4 overflow-x-auto pb-4 mb-5">
              {menuData[cat.key].map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setSelectedItem(
                      selectedItem === index ? null : index
                    )
                  }
                  className={`
                    ${selectedItem === index ? "min-w-[340px]" : "min-w-[180px]"}
                    h-[220px]
                    bg-white rounded-2xl shadow-md 
                    hover:shadow-lg transition-all duration-300 cursor-pointer
                    flex overflow-hidden
                  `}
                >
                  {/* IZQUIERDA */}
                  <div className="w-[180px] p-3 flex flex-col">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full object-cover rounded-xl"
                    />

                    <h4 className="font-semibold">{item.name}</h4>

                    <p className=" font-bold text-green-600">
                      ${item.price}
                    </p>
                  </div>

                  {/* DERECHA */}
                  <div
                    className={`
                      transition-all duration-300 overflow-hidden
                      ${
                        selectedItem === index
                          ? "w-[160px] opacity-100 p-3"
                          : "w-0 opacity-0 p-0"
                      }
                    `}
                  >
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}