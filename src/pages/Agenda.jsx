import { useState } from "react";

export default function Agenda() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [showAppointmentModal, setShowAppointmentModal] = useState(false);

    const [appointments, setAppointments] = useState([
        {
            id: 1,
            client: "María López",
            service: "Corte de Cabello",
            time: "09:00",
        },
        {
            id: 2,
            client: "Ana Pérez",
            service: "Manicure",
            time: "11:00",
        },
        {
            id: 3,
            client: "Juan Torres",
            service: "Tinte",
            time: "15:30",
        },
    ]);

    const [newAppointment, setNewAppointment] = useState({
        client: "",
        service: "",
        time: "09:00",
    });

    const timeSlots = [];

    for (let hour = 8; hour <= 20; hour++) {
        timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
        timeSlots.push(`${hour.toString().padStart(2, "0")}:30`);
    }

    const previousDay = () => {
        setSelectedDate(
            new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000)
        );
    };

    const nextDay = () => {
        setSelectedDate(
            new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000)
        );
    };

    const saveAppointment = () => {
        if (!newAppointment.client || !newAppointment.service) return;

        setAppointments([
            ...appointments,
            {
                id: Date.now(),
                ...newAppointment,
            },
        ]);

        setNewAppointment({
            client: "",
            service: "",
            time: "09:00",
        });

        setShowAppointmentModal(false);
    };

    return (
        <div className="min-h-screen bg-pink-50">

            {/* HEADER */}
            <div className="bg-white shadow-sm p-4 sticky top-0 z-20">

                <div className="flex items-center justify-center gap-3">

                    <img
                        src="/logoAgenda.png"
                        alt="Agenda"
                        className="w-12 h-12 object-contain"
                    />

                    <div>
                        <h1 className="text-2xl font-bold text-pink-500">
                            Agenda de Citas
                        </h1>

                        <p className="text-xs text-gray-500">
                            Belleza, citas y clientes
                        </p>
                    </div>

                </div>

            </div>

            <div className="p-4">

                {/* BOTON */}
                <button
                    onClick={() => setShowAppointmentModal(true)}
                    className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold shadow mb-4 hover:bg-pink-600 transition"
                >
                    + Agendar Cita
                </button>

                {/* RESUMEN */}
                <div className="bg-white rounded-xl p-3 shadow border border-pink-100 mb-4">

                    <p className="text-sm text-gray-500">
                        Hoy tienes
                    </p>

                    <p className="text-lg font-semibold text-pink-500">
                        {appointments.length} citas programadas
                    </p>

                </div>

                {/* FECHA */}
                <div className="bg-white rounded-xl p-3 shadow mb-4">

                    <div className="flex items-center justify-between">

                        <button
                            onClick={previousDay}
                            className="bg-white p-2 rounded-full shadow"
                        >
                            <img
                                src="/arrowL.png"
                                alt="Anterior"
                                className="w-8 h-8"
                            />
                        </button>

                        <input
                            type="date"
                            value={selectedDate.toISOString().split("T")[0]}
                            onChange={(e) =>
                                setSelectedDate(new Date(e.target.value))
                            }
                            className="border border-pink-200 rounded-lg p-2"
                        />

                        <button
                            onClick={nextDay}
                            className="bg-white p-2 rounded-full shadow"
                        >
                            <img
                                src="/arroeR.png"
                                alt="Siguiente"
                                className="w-8 h-8"
                            />
                        </button>

                    </div>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-3 mb-4">

                    <div className="bg-white rounded-xl p-3 text-center shadow border border-pink-100">
                        <p className="text-2xl font-bold text-pink-500">
                            {appointments.length}
                        </p>
                        <p className="text-xs text-gray-500">
                            Citas
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-3 text-center shadow border border-pink-100">
                        <p className="text-2xl font-bold text-green-600">
                            $2,450
                        </p>
                        <p className="text-xs text-gray-500">
                            Ventas
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-3 text-center shadow border border-pink-100">
                        <p className="text-2xl font-bold text-blue-600">
                            3
                        </p>
                        <p className="text-xs text-gray-500">
                            Pendientes
                        </p>
                    </div>

                </div>

                {/* AGENDA */}
                <div className="bg-white rounded-xl shadow overflow-hidden">

                    {timeSlots.map((slot) => {
                        const appointment = appointments.find(
                            (a) => a.time === slot
                        );

                        return (
                            <div
                                key={slot}
                                className="flex border-b min-h-[65px]"
                            >

                                <div className="w-20 border-r p-2 text-xs text-gray-500 bg-pink-50">
                                    {slot}
                                </div>

                                <div className="flex-1 p-2">

                                    {appointment ? (
                                        <div className="bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white rounded-lg p-2 shadow">

                                            <p className="font-semibold">
                                                {appointment.client}
                                            </p>

                                            <p className="text-xs opacity-90">
                                                {appointment.service}
                                            </p>

                                        </div>
                                    ) : (
                                        <div className="h-full"></div>
                                    )}

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

            {/* MODAL */}
            {showAppointmentModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

                    <div className="bg-white rounded-2xl w-full max-w-md p-5">

                        <h2 className="text-xl font-bold text-pink-500 mb-4">
                            Agendar Cita
                        </h2>

                        <input
                            type="text"
                            placeholder="Nombre del cliente"
                            value={newAppointment.client}
                            onChange={(e) =>
                                setNewAppointment({
                                    ...newAppointment,
                                    client: e.target.value,
                                })
                            }
                            className="w-full border border-pink-200 rounded-lg p-3 mb-3"
                        />

                        <input
                            type="text"
                            placeholder="Servicio"
                            value={newAppointment.service}
                            onChange={(e) =>
                                setNewAppointment({
                                    ...newAppointment,
                                    service: e.target.value,
                                })
                            }
                            className="w-full border border-pink-200 rounded-lg p-3 mb-3"
                        />

                        <select
                            value={newAppointment.time}
                            onChange={(e) =>
                                setNewAppointment({
                                    ...newAppointment,
                                    time: e.target.value,
                                })
                            }
                            className="w-full border border-pink-200 rounded-lg p-3 mb-4"
                        >
                            {timeSlots.map((slot) => (
                                <option key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>

                        <div className="flex gap-2">

                            <button
                                onClick={() =>
                                    setShowAppointmentModal(false)
                                }
                                className="flex-1 bg-gray-200 py-3 rounded-xl"
                            >
                                Cancelar
                            </button>

                            <button
                                onClick={saveAppointment}
                                className="flex-1 bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition"
                            >
                                Guardar
                            </button>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}