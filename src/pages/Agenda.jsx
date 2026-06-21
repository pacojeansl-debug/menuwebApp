import { useState } from "react";

export default function Agenda() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showAppointmentModal, setShowAppointmentModal] = useState(false);

    // Lista de citas con sus números de teléfono
    const [appointments, setAppointments] = useState([
        { id: 1, client: "María López", service: "Corte de Cabello", time: "09:00", phone: "5217205694078" },
        { id: 2, client: "Ana Pérez", service: "Manicure", time: "11:00", phone: "5215584485881" },
        { id: 3, client: "Juan Torres", service: "Tinte", time: "15:30", phone: "5215540482377" },
    ]);

    const [newAppointment, setNewAppointment] = useState({
        client: "",
        service: "",
        time: "09:00",
        phone: ""
    });

    const timeSlots = [];
    for (let hour = 8; hour <= 20; hour++) {
        timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
        timeSlots.push(`${hour.toString().padStart(2, "0")}:30`);
    }

    const saveAppointment = () => {
        if (!newAppointment.client || !newAppointment.service) return;
        setAppointments([...appointments, { id: Date.now(), ...newAppointment }]);
        setNewAppointment({ client: "", service: "", time: "09:00", phone: "" });
        setShowAppointmentModal(false);
    };

    return (
        <div className="min-h-screen bg-pink-50">
            <div className="bg-white shadow-sm p-4 sticky top-0 z-20">
                <div className="flex items-center justify-center gap-3">
                    <h1 className="text-2xl font-bold text-pink-500">Agenda de Citas</h1>
                </div>
            </div>

            <div className="p-4">
                <button
                    onClick={() => setShowAppointmentModal(true)}
                    className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold shadow mb-4 hover:bg-pink-600 transition"
                >
                    + Agendar Cita
                </button>

                <div className="bg-white rounded-xl shadow overflow-hidden">
                    {timeSlots.map((slot) => {
                        const appointment = appointments.find((a) => a.time === slot);
                        
                        let whatsappUrl = "";
                        if (appointment) {
                            // Mensaje limpio, solo texto y números sin emojis
                            const mensaje = `Hola ${appointment.client}, te contacto para tu cita de ${appointment.service} a las ${appointment.time}.\n\n¿Me confirmas tu asistencia?\n\n1. Sí, confirmo\n2. Necesito reprogramar/cancelar`;
                            
                            whatsappUrl = `https://wa.me/${appointment.phone}?text=${encodeURIComponent(mensaje)}`;
                        }

                        return (
                            <div key={slot} className="flex border-b min-h-[65px] items-center">
                                <div className="w-20 border-r p-2 text-xs text-gray-500 bg-pink-50 h-full flex items-center justify-center">
                                    {slot}
                                </div>
                                <div className="flex-1 p-2">
                                    {appointment ? (
                                        <div className="bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white rounded-lg p-2 shadow flex justify-between items-center">
                                            <div>
                                                <p className="font-semibold">{appointment.client}</p>
                                                <p className="text-xs opacity-90">{appointment.service}</p>
                                            </div>

                                            <a
                                                href={whatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition shadow-lg"
                                            >
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.613-.918-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </svg>
                                            </a>
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
                        <h2 className="text-xl font-bold text-pink-500 mb-4">Nueva Cita</h2>
                        <input type="text" placeholder="Nombre" className="w-full border p-3 mb-3 rounded-lg" onChange={(e) => setNewAppointment({ ...newAppointment, client: e.target.value })} />
                        <input type="text" placeholder="Servicio" className="w-full border p-3 mb-3 rounded-lg" onChange={(e) => setNewAppointment({ ...newAppointment, service: e.target.value })} />
                        <input type="text" placeholder="Teléfono (ej: 521...)" className="w-full border p-3 mb-3 rounded-lg" onChange={(e) => setNewAppointment({ ...newAppointment, phone: e.target.value })} />
                        <div className="flex gap-2">
                            <button onClick={() => setShowAppointmentModal(false)} className="flex-1 bg-gray-200 py-3 rounded-xl">Cancelar</button>
                            <button onClick={saveAppointment} className="flex-1 bg-pink-500 text-white py-3 rounded-xl">Guardar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}