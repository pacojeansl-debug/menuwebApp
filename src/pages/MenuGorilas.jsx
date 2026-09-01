import { useState } from "react";

export default function MenuGorilas() {
    const [category, setCategory] = useState("burgers");

    const menuData = {
        burgers: [
            {
                name: "Gorilla Clasic",
                price: 75,
                desc: "Carne de res, queso amarillo gratinado, pierna, jitomate, cebolla y lechuga"
            },
            {
                name: 'Gorilla Burger "Hawaiana"',
                price: 100,
                desc: "Carne de res, piña, jamón, pierna y queso gratinado"
            },
            {
                name: "Gorilla Prime",
                price: 110,
                desc: "Carne de res, arrachera, pierna, tocino crujiente y queso gratinado"
            },
            {
                name: "Gorilla Titan",
                price: 115,
                desc: "Doble carne de res, salchicha, jamón de pavo, tocino, piña y queso gratinado"
            },
            {
                name: "Gorilla Cheese Bomb",
                price: 130,
                desc: "Carne de res, pierna, tocino y baño de queso"
            },
            {
                name: "Gorilla Deluxe",
                price: 105,
                desc: "Carne de res, tocino, salchicha y 3 quesos gratinados"
            },
            {
                name: "Gorilla Crunch Chicken",
                price: 100,
                desc: "Pollo crujiente, pierna, queso gratinado y tocino crujiente"
            },
            {
                name: "Gorilla BBQ",
                price: 95,
                desc: "Carne de res marinada en BBQ, queso gratinado, lechuga y aros de cebolla empanizados"
            },
            {
                name: "Gorilla Gold",
                price: 100,
                desc: "Boneless crujientes con salsa especial y queso gratinado"
            }
        ],

        hotdogs: [
            {
                name: "Sencillo",
                price: 35,
                desc: "Salchicha, pan, jitomate y aderezos"
            },
            {
                name: "Especial Manchego",
                price: 65,
                desc: "Queso manchego gratinado, tocino, pan, jitomate y salchicha de pavo"
            },
            {
                name: "Especial Tocino",
                price: 65,
                desc: "Tocino crujiente, queso gratinado, pan y jitomate"
            },
            {
                name: "Especial Piña",
                price: 60,
                desc: "Piña, tocino crujiente, pan, jitomate y aderezos especiales"
            },
            {
                name: "Especial Queso y Piña",
                price: 70,
                desc: "Queso gratinado, piña, tocino crujiente, pan, jitomate y salchicha"
            },
            {
                name: "Revienta Estómagos",
                price: 70,
                desc: "Salchicha rellena de queso envuelta en tocino, pan, jitomate y pierna crujiente"
            }
        ],

        boneless: [
            { name: "10 piezas", price: 100, desc: "" },
            { name: "15 piezas", price: 130, desc: "" }
        ],

        bebidas: [
            {
                name: "Jarritos",
                price: 19,
                desc: "Naranja, uva, tutifruti, piña, tamarindo, manzana y limón"
            },
            { name: "Coca-Cola", price: 25, desc: "" },
            { name: "Agua de temporada", price: 30, desc: "" }
        ],

        adicionales: [
            { name: "Baño de queso", price: 40, desc: "" },
            { name: "Carne de res", price: 20, desc: "" },
            { name: "Agregar papas", price: 35, desc: "Agrega papas a tu hamburguesa" },
            { name: "Orden de papas con aderezo", price: 50, desc: "" }
        ]
    };

    const categories = [
        { id: "burgers", label: "Burgers" },
        { id: "hotdogs", label: "Hot Dogs" },
        { id: "boneless", label: "Boneless" },
        { id: "bebidas", label: "Bebidas" },
        { id: "adicionales", label: "Adicionales" }
    ];

    const categoryTitles = {
        burgers: "Gorilas Burgers",
        hotdogs: "Hot Dogs",
        boneless: "Boneless",
        bebidas: "Bebidas",
        adicionales: "Adicionales"
    };

    return (
        <div className="min-h-screen bg-[#f4b400] relative overflow-x-hidden">

            {/* CAPA DE PATRÓN */}
            <div
                className="absolute inset-0 pointer-events-none burger-pattern"
                style={{
                    backgroundImage: "url('/burger-pattern.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "220px 220px",
                    opacity: 0.38,
                    filter: "contrast(1.15) saturate(1.1)"
                }}
            />

            {/* CONTENEDOR CENTRAL */}
            <div className="relative z-10 w-full max-w-lg mx-auto px-4 py-6">

                {/* PANEL NEGRO */}
                <div className="bg-black rounded-[28px] overflow-hidden shadow-2xl border-4 border-black">

                    {/* HEADER */}
                    <header className="px-6 pt-6 pb-4 flex flex-col items-center text-white">
                        <div className="w-full max-w-[180px] flex items-center justify-center">
                            <img
                                src="/gorilas.png"
                                alt="Gorilas Burger's"
                                className="w-full object-contain bg-black"
                            />
                        </div>

                        <p className="text-yellow-400 font-extrabold tracking-[0.2em] text-3xl mt-2">
                            GORILAS BURGER'S
                        </p>
                    </header>

                    {/* BANNER */}
                    <div className="bg-yellow-400 text-black py-3 font-black text-base overflow-hidden whitespace-nowrap">
                        <div className="animate-marquee inline-block">
                            <span className="mx-5">
                                🍔 TODAS NUESTRAS BURGERS LLEVAN CEBOLLA CARAMELIZADA Y PIERNA
                            </span>
                            <span className="mx-5">🍟 AGREGA PAPAS POR $35</span>
                            <span className="mx-5">
                                🍔 TODAS NUESTRAS BURGERS LLEVAN CEBOLLA CARAMELIZADA Y PIERNA
                            </span>
                            <span className="mx-5">🍟 AGREGA PAPAS POR $35</span>
                        </div>
                    </div>

                    {/* NAV */}
                    <nav className="sticky top-0 bg-black/95 backdrop-blur-sm overflow-x-auto whitespace-nowrap py-4 px-3 flex gap-2 z-20 border-b border-yellow-500/20">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setCategory(cat.id)}
                                className={`uppercase font-extrabold px-5 py-2 rounded-full transition-all border ${category === cat.id
                                    ? "bg-yellow-400 text-black border-yellow-400"
                                    : "text-yellow-400 border-yellow-500/40 hover:bg-yellow-400 hover:text-black"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </nav>

                    {/* CONTENIDO */}
                    <main className="px-4 py-7">
                        <div className="mb-6">
                            <p className="text-yellow-500 uppercase tracking-[0.3em] text-xs font-bold mb-1">
                                Menú
                            </p>

                            <h2 className="text-white font-black uppercase text-3xl">
                                {categoryTitles[category]}
                            </h2>

                            <div className="w-16 h-1 bg-yellow-400 rounded-full mt-2" />
                        </div>

                        <div className="space-y-3">
                            {menuData[category]?.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 flex justify-between items-center gap-4 shadow-lg"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-black text-yellow-400 text-lg uppercase">
                                            {item.name}
                                        </h3>

                                        {item.desc && (
                                            <p className="text-zinc-300 text-sm mt-1 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        )}
                                    </div>

                                    <div className="shrink-0">
                                        <div className="bg-yellow-400 text-black font-black text-lg rounded-xl px-3 py-2">
                                            ${item.price}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>

                    {/* SERVICIO */}
                    <a
                        href="https://wa.me/525554679551?text=Hola%20quiero%20hacer%20un%20pedido%20en%20Gorilas%20Burgers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-4 mb-5 border border-yellow-500/40 rounded-2xl p-5 text-center block cursor-pointer transition-all hover:bg-yellow-400/10 hover:border-yellow-400"
                    >
                        <p className="text-yellow-400 uppercase text-sm font-black tracking-widest">
                            Servicio a domicilio
                        </p>

                        <p className="text-white font-black text-3xl mt-2">
                            555 467 9551
                        </p>
                    </a>

                    {/* FOOTER */}
                    <footer className="bg-yellow-400 py-5 text-center">
                        <p className="text-black font-black uppercase text-xl">
                            Gorilas Burger's
                        </p>
                        <p className="text-black/70 text-xs mt-1">
                            Una experiencia única 🦍🍔
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}