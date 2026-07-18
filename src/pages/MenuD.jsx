import { useState } from "react";

export default function MenuLosMixes() {
    const [category, setCategory] = useState("tacos");

    const menuData = {
        tacos: [
            { name: "Taco Pastor", price: 16, desc: "" },
            { name: "Taco Tripa", price: 21, desc: "" },
            { name: "Taco Suadero", price: 17, desc: "" },
            { name: "Taco Longaniza", price: 17, desc: "" },
            { name: "Taco Campechano", price: 17, desc: "" },

        ],
        ordenes: [
            { name: "Bistec", price: 100, desc: "" },
            { name: "Costilla", price: 100, desc: "" },
            { name: "Chuleta", price: 100, desc: "" },
            { name: "Pastor", price: 100, desc: "" },
        ],
        quesadas: [
            { name: "Pastor", price: 110, desc: "Incluye queso, tocino, hongos, chorizo o nopales" },
            { name: "Bistec", price: 110, desc: "Incluye queso, tocino, hongos, chorizo o nopales" },
            { name: "Chuleta", price: 110, desc: "Incluye queso, tocino, hongos, chorizo o nopales" },
            { name: "Costilla", price: 110, desc: "Incluye queso, tocino, hongos, chorizo o nopales" },
            { name: "Pollo", price: 125, desc: "Incluye queso, tocino, hongos, chorizo o nopales" },
            { name: "Suadero", price: 125, desc: "Incluye queso, tocino, hongos, chorizo o nopales" },
            { name: "Campechano", price: 125, desc: "Incluye queso, tocino, hongos, chorizo o nopales" },
            { name: "Tripa", price: 140, desc: "Incluye queso, tocino, hongos, chorizo o nopales" },

        ],
        alambres: [
            { name: "Pastor", price: 135, cheesePrice: 145, desc: "" },
            { name: "Bistec", price: 135, cheesePrice: 145, desc: "" },
            { name: "Costilla", price: 135, cheesePrice: 145, desc: "" },
            { name: "Chuleta", price: 135, cheesePrice: 145, desc: "" },
            { name: "Pollo", price: 135, cheesePrice: 155, desc: "" },
            { name: "Suadero", price: 135, cheesePrice: 155, desc: "" },
            { name: "Campechano", price: 135, cheesePrice: 155, desc: "" },
            { name: "Tripa", price: 155, cheesePrice: 170, desc: "" },
            { name: "Vegetariano", price: 135, cheesePrice: "", desc: "Morron, champiñon, nopales y cebolla" },
        ],
        gringas: [
            { name: "Pastor", price: 60, desc: "" },
            { name: "Bistec", price: 70, desc: "" },
            { name: "Costilla", price: 70, desc: "" },
            { name: "Chuleta", price: 70, desc: "" },
            { name: "Pollo", price: 75, desc: "" },
            { name: "Suadero", price: 75, desc: "" },
            { name: "Campechano", price: 75, desc: "" },
            { name: "Tripa", price: 80, desc: "" },
        ],
        tortas: [
            { name: "Pastor", price: 60, cheesePrice: 70, desc: "" },
            { name: "Bistec", price: 60, cheesePrice: 70, desc: "" },
            { name: "Costilla", price: 60, cheesePrice: 70, desc: "" },
            { name: "Chuleta", price: 60, cheesePrice: 70, desc: "" },
            { name: "Pollo", price: 70, cheesePrice: 75, desc: "" },
            { name: "Suadero", price: 70, cheesePrice: 75, desc: "" },
            { name: "Campechana", price: 70, cheesePrice: 75, desc: "" },
            { name: "Tripa", price: 80, cheesePrice: 85, desc: "" },
        ],
        especialidades: [
            { name: "Especial de la Casa", price: 160, desc: "Incluye todo" },
            { name: "No te entumas", price: 160, desc: "Especialidad mixta" },
            { name: "Que me vez", price: 160, desc: "Especialidad mixta" },
            { name: "Hawaiana", price: 160, desc: "Especialidad mixta" },
        ],
        quesos: [
            { name: "Costilla", price: 120, desc: "Con rajas y queso" },
            { name: "Bistec", price: 120, desc: "Con rajas y queso" },
            { name: "Pastor", price: 120, desc: "Con rajas y queso" },
            { name: "Pollo", price: 135, desc: "Con rajas y queso" },
            { name: "Hongos", price: 80, desc: "Con queso" },
            { name: "Rajas", price: 80, desc: "Con queso" },
            { name: "Queso fundido", price: 80, desc: "" },
            { name: "Sincronizadas", price: 65, desc: "" },
            { name: "Quesadillas", price: 65, desc: "" },
            { name: "Chori-queso", price: 80, desc: "" },
        ]
    };

    const categories = ["tacos", "ordenes", "quesadas", "alambres", "gringas", "tortas", "especialidades", "quesos"];

    return (
        <div className="w-full max-w-lg mx-auto bg-orange-50 min-h-screen pb-10">

            {/* HEADER */}
            <header className="bg-orange-600 p-6 flex flex-col items-center text-white shadow-md">
                <div className="w-120 h-40 flex items-center justify-center mb-0">
                    <img src="/mixea.png" alt="Logo" />
                </div>
            </header>

            {/* BANNER PUBLICITARIO */}
            <div className="bg-yellow-400 text-orange-900 py-2 font-bold text-xl shadow-sm overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block">
                    <span className="mx-4"> TODOS LOS MIÉRCOLES: 2x1 EN TACOS AL PASTOR</span>
                    <span className="mx-4"> ¡TE ESPERAMOS EN TAQUERÍA LOS MIXES!</span>
                    <span className="mx-4"> TODOS LOS MIÉRCOLES: 2x1 EN TACOS AL PASTOR</span>
                    <span className="mx-4"> ¡TE ESPERAMOS EN TAQUERÍA LOS MIXES!</span>
                </div>
            </div>

            {/* NAV CATEGORÍAS */}
            <nav className="sticky top-0 bg-orange-600/95 backdrop-blur-sm overflow-x-auto whitespace-nowrap py-4 px-2 flex gap-2 z-20 shadow-md">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`uppercase font-extrabold px-4 py-2 rounded-full transition-all border ${category === cat
                            ? "bg-white text-orange-600 border-white"
                            : "text-orange-100 border-orange-400 hover:bg-orange-500"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </nav>

            {/* LISTA DE PLATILLOS */}
            <main className="px-4 py-6 space-y-3">
                <h2 className="text-blue-900 font-extrabold capitalize text-4xl mb-4 ml-1">{category}</h2>
                {menuData[category]?.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100 flex justify-between items-center">
                        <div className="mr-4">
                            <h3 className="font-bold text-gray-800 text-xl">{item.name}</h3>
                            <p className="text-gray-500 mt-0">{item.desc}</p>
                        </div>

                        {/* Lógica de precios: si tiene cheesePrice muestra ambos */}
                        <div className="text-right">
                            <div className="font-black text-orange-600 text-lg">
                                <span className="text-sm text-gray-400 font-normal"></span> ${item.price}
                            </div>
                            {item.cheesePrice && (
                                <div className="font-black text-orange-800 text-lg">
                                    <span className="text-base text-gray-400 font-normal">c/Queso</span>  ${item.cheesePrice}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}