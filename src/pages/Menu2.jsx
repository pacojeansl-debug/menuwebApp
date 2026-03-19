import { useState } from "react";

export default function Menu2() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeItem, setActiveItem] = useState(null);

    const menuData = {
  pizzas: [
    {
      name: "Pizza Pepperoni",
      price: 120,
      description: "Deliciosa pizza de masa artesanal crujiente por fuera y suave por dentro, cubierta con abundante queso mozzarella derretido y rebanadas de pepperoni ligeramente doradas.",
      image: "/pizza.png"
    },
    {
      name: "Pizza Hawaiana",
      price: 130,
      description: "Exquisita combinación de jamón jugoso y piña dulce sobre salsa de tomate casera y queso gratinado.",
      image: "/pizza.png"
    },
    {
      name: "Pizza Mexicana",
      price: 140,
      description: "Carne sazonada, jalapeños, cebolla y un toque de cilantro sobre queso fundido con base crujiente.",
      image: "/pizza.png"
    },
    {
      name: "Pizza 4 Quesos",
      price: 150,
      description: "Mozzarella, cheddar, parmesano y queso azul perfectamente derretidos con un toque de orégano.",
      image: "/pizza.png"
    },
    {
      name: "Pizza Vegetariana",
      price: 135,
      description: "Champiñones, pimientos, aceitunas negras y jitomate fresco sobre queso fundido.",
      image: "/pizza.png"
    },
    {
      name: "Pizza BBQ",
      price: 145,
      description: "Pollo a la parrilla con salsa BBQ, cebolla caramelizada y queso derretido con un sabor ahumado irresistible.",
      image: "/pizza.png"
    },
    {
      name: "Pizza Carnes Frías",
      price: 155,
      description: "Pepperoni, jamón, salchicha y tocino sobre una base de queso extra, ideal para los amantes de la carne.",
      image: "/pizza.png"
    },
    {
      name: "Pizza Especial de la Casa",
      price: 165,
      description: "Nuestra receta estrella con mezcla de carnes, vegetales frescos y queso extra gratinado.",
      image: "/pizza.png"
    }
  ],

  hamburguesas: [
    {
      name: "Hamburguesa Clásica",
      price: 90,
      description: "Carne jugosa a la parrilla con queso, lechuga, jitomate y aderezo especial en pan suave tostado.",
      image: "/pizza.png"
    },
    {
      name: "Hamburguesa Doble",
      price: 120,
      description: "Doble carne con doble queso, tocino crujiente y salsa especial, para los que tienen buen apetito.",
      image: "/pizza.png"
    },
    {
      name: "Hamburguesa BBQ",
      price: 110,
      description: "Carne a la parrilla con salsa BBQ, aros de cebolla y queso fundido con un toque ahumado.",
      image: "/pizza.png"
    },
    {
      name: "Hamburguesa Hawaiana",
      price: 115,
      description: "Carne con jamón, piña asada y queso derretido, mezcla dulce y salada irresistible.",
      image: "/pizza.png"
    }
  ],

  ensaladas: [
    {
      name: "Ensalada César",
      price: 90,
      description: "Lechuga romana fresca, pollo a la parrilla, crutones y aderezo césar cremoso.",
      image: "/pizza.png"
    },
    {
      name: "Ensalada Verde",
      price: 80,
      description: "Lechuga, pepino, aguacate y limón, ligera y refrescante.",
      image: "/pizza.png"
    },
    {
      name: "Ensalada Mediterránea",
      price: 95,
      description: "Jitomate cherry, aceitunas, queso feta y aceite de oliva con hierbas.",
      image: "/pizza.png"
    },
    {
      name: "Ensalada con Pollo",
      price: 105,
      description: "Lechuga fresca con pollo a la parrilla, zanahoria y aderezo ligero.",
      image: "/pizza.png"
    }
  ],

  entradas: [
    {
      name: "Papas a la Francesa",
      price: 60,
      description: "Papas doradas y crujientes por fuera, suaves por dentro, acompañadas de catsup.",
      image: "/pizza.png"
    },
    {
      name: "Papas Gajo",
      price: 70,
      description: "Papas estilo rústico con especias y un toque crujiente.",
      image: "/pizza.png"
    },
    {
      name: "Alitas BBQ",
      price: 110,
      description: "Alitas bañadas en salsa BBQ con un toque dulce y ahumado.",
      image: "/pizza.png"
    },
    {
      name: "Alitas Picantes",
      price: 110,
      description: "Alitas con salsa picante intensa para los amantes del picante.",
      image: "/pizza.png"
    },
    {
      name: "Dedos de Queso",
      price: 95,
      description: "Crujientes por fuera con queso derretido por dentro, acompañados de salsa.",
      image: "/pizza.png"
    }
  ],

  bebidas: [
    {
      name: "Refresco",
      price: 30,
      description: "Refresco bien frío de 600ml.",
      image: "/pizza.png"
    },
    {
      name: "Agua Natural",
      price: 20,
      description: "Agua purificada refrescante.",
      image: "/pizza.png"
    },
    {
      name: "Agua de Horchata",
      price: 35,
      description: "Bebida tradicional dulce con canela.",
      image: "/pizza.png"
    },
    {
      name: "Agua de Jamaica",
      price: 35,
      description: "Refrescante con un toque ácido.",
      image: "/pizza.png"
    },
    {
      name: "Malteada",
      price: 65,
      description: "Malteada cremosa de chocolate, fresa o vainilla.",
      image: "/pizza.png"
    },
    {
      name: "Café",
      price: 40,
      description: "Café caliente recién preparado.",
      image: "/pizza.png"
    }
  ],

  postres: [
    {
      name: "Pastel de Chocolate",
      price: 70,
      description: "Suave y esponjoso pastel con intenso sabor a chocolate.",
      image: "/pizza.png"
    },
    {
      name: "Pay de Queso",
      price: 65,
      description: "Cremoso pay con base crujiente y toque dulce perfecto.",
      image: "/pizza.png"
    },
    {
      name: "Helado",
      price: 50,
      description: "Helado refrescante en diferentes sabores.",
      image: "/pizza.png"
    }
  ]
};

    const categories = Object.keys(menuData);

    return (
        <div className="min-h-screen bg-red-500 p-4">

            {/* HEADER */}
            <div className="pb-4 text-center font-semibold text-lg flex flex-col items-center justify-center">
                <img
                    src="/logoMenu2.svg"
                    alt="logo tacos"
                    className=" w-20" />
                <h1 className="font-bold text-2xl text-white">
                    Menu
                </h1>
            </div>

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
                                    src="/pizza.png"
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
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                setSelectedCategory(null);
                                setActiveItem(null);
                            }}
                            className="font-semibold mb-2 bg-white rounded-md pt-1 pb-1 pl-2 pr-3 flex justify-center items-center"
                        >
                            <img
                                src="/back.svg"
                                alt=""
                                className="w-7" />
                            <p >
                                Regresar
                            </p>
                        </button>
                    </div>


                    <h2 className="text-white text-2xl font-bold capitalize">
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
                                className={`bg-white rounded-2xl p-4 shadow cursor-pointer transition-all duration-300 ${isActive ? "scale-105" : ""
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