export default function Menu4() {
    return (
        <div className="w-full min-h-screen bg-[#f5f0e6] p-4">

            {/* HEADER */}
            <div className="text-center mb-6">
                <h2 className="text-sm bg-yellow-400 inline-block px-3 py-1 font-semibold">
                    La Casa
                </h2>
                <h1 className="text-4xl font-extrabold tracking-wide text-gray-800">
                    COCINA OAXAQUEÑA
                </h1>
            </div>

            {/* CONTENIDO */}
            <div className="grid md:grid-cols-2 gap-6">

                {/* ANTOJITOS */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-xl font-bold text-green-700 mb-2">
                        ANTOJITOS
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">
                        Entradas típicas para abrir el apetito
                    </p>

                    <img
                        src="/volcan.png"
                        className="w-full h-32 object-cover rounded-lg mb-3"
                    />

                    {[
                        ["Tlayuda sencilla", 85],
                        ["Memelas (3)", 65],
                        ["Empanadas de amarillo", 70],
                        ["Quesillo con chapulines", 90],
                        ["Tamal oaxaqueño", 50],
                    ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between py-1 border-b">
                            <span>{name}</span>
                            <span>${price}</span>
                        </div>
                    ))}
                </div>

                {/* PLATILLOS */}
                <div className="bg-white p-4 rounded-xl shadow border-2 border-yellow-400">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                        PLATILLOS
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">
                        Platillos tradicionales con sabor auténtico
                    </p>

                    <img
                        src="/volcan.png"
                        className="w-full h-32 object-cover rounded-lg mb-3"
                    />

                    {[
                        ["Mole negro con pollo", 120],
                        ["Mole coloradito", 115],
                        ["Estofado oaxaqueño", 110],
                        ["Tasajo con nopales", 130],
                        ["Cecina enchilada", 125],
                        ["Chile relleno", 105],
                    ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between py-1 border-b">
                            <span>{name}</span>
                            <span>${price}</span>
                        </div>
                    ))}
                </div>

                {/* TLAYUDAS */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-xl font-bold text-orange-600 mb-2">
                        TLAYUDAS
                    </h2>

                    <img
                        src="/volcan.png"
                        className="w-full h-32 object-cover rounded-lg mb-3"
                    />

                    {[
                        ["Tlayuda con tasajo", 110],
                        ["Tlayuda con cecina", 115],
                        ["Tlayuda mixta", 130],
                        ["Tlayuda vegetariana", 95],
                    ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between py-1 border-b">
                            <span>{name}</span>
                            <span>${price}</span>
                        </div>
                    ))}
                </div>

                {/* BEBIDAS */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-xl font-bold text-green-700 mb-2">
                        BEBIDAS
                    </h2>

                    <img
                        src="/volcan.png"
                        className="w-full h-32 object-cover rounded-lg mb-3"
                    />

                    {[
                        ["Agua de chilacayota", 35],
                        ["Horchata oaxaqueña", 35],
                        ["Chocolate de agua", 40],
                        ["Tejate", 45],
                    ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between py-1 border-b">
                            <span>{name}</span>
                            <span>${price}</span>
                        </div>
                    ))}
                </div>

                {/* POSTRES */}
                <div className="bg-white p-4 rounded-xl shadow md:col-span-2">
                    <h2 className="text-xl font-bold text-yellow-600 mb-2">
                        POSTRES
                    </h2>

                    <img
                        src="/volcan.png"
                        className="w-full h-32 object-cover rounded-lg mb-3"
                    />

                    {[
                        ["Nicuatole", 40],
                        ["Pan de yema", 35],
                        ["Nieve artesanal", 50],
                    ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between py-1 border-b">
                            <span>{name}</span>
                            <span>${price}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}