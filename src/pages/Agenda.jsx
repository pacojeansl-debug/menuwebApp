import { useState } from "react";

export default function Agenda() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedStaffFilter, setSelectedStaffFilter] = useState("TODOS");
    const [showAppointmentModal, setShowAppointmentModal] = useState(false);

    // Lista de servicios disponibles en la estética
    const servicesList = [
        "Corte de Cabello",
        "Manicure",
        "Pedicure",
        "Tinte",
        "Maquillaje",
        "Depilación",
        "Tratamiento Capilar",
        "Barba y Corte"
    ];

    // Lista de personal/estilistas disponibles
    const staffList = [
        "Carla Gómez",
        "Sofía Ruiz",
        "Marioán",
        "Lucía Méndez"
    ];

    // Lista de citas
    const [appointments, setAppointments] = useState([
        { id: 1, client: "María López", service: "Corte de Cabello", staff: "Carla Gómez", date: "2026-07-20", time: "09:00", phone: "5217205694078" },
        { id: 2, client: "Ana Pérez", service: "Manicure", staff: "Sofía Ruiz", date: "2026-07-20", time: "11:00", phone: "5215584485881" },
        { id: 3, client: "Juan Torres", service: "Tinte", staff: "Marioán", date: "2026-07-20", time: "15:30", phone: "5215540482377" },
    ]);

    const [newAppointment, setNewAppointment] = useState({
        client: "",
        service: servicesList[0],
        staff: staffList[0],
        time: "09:00",
        phone: ""
    });

    const formatDateKey = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const monthsNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const changeMonth = (direction) => {
        const newDate = new Date(selectedDate);
        newDate.setMonth(newDate.getMonth() + direction);
        setSelectedDate(newDate);
    };

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysCount = new Date(year, month + 1, 0).getDate();
        const days = [];
        for (let i = 1; i <= daysCount; i++) {
            days.push(new Date(year, month, i));
        }
        return days;
    };

    const daysInCurrentMonth = getDaysInMonth(selectedDate);

    const timeSlots = [];
    for (let hour = 8; hour <= 20; hour++) {
        timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
        timeSlots.push(`${hour.toString().padStart(2, "0")}:30`);
    }

    const saveAppointment = () => {
        if (!newAppointment.client || !newAppointment.service || !newAppointment.staff) return;
        const currentDateStr = formatDateKey(selectedDate);
        setAppointments([...appointments, { id: Date.now(), ...newAppointment, date: currentDateStr }]);
        setNewAppointment({ 
            client: "", 
            service: servicesList[0], 
            staff: staffList[0], 
            time: "09:00", 
            phone: "" 
        });
        setShowAppointmentModal(false);
    };

    const filteredAppointments = appointments.filter((a) => {
        const matchesDate = a.date === formatDateKey(selectedDate);
        const matchesStaff = selectedStaffFilter === "TODOS" || a.staff === selectedStaffFilter;
        return matchesDate && matchesStaff;
    });

    return (
        <div className="min-h-screen bg-neutral-900 text-neutral-100 pb-10">
            {/* Cabecera Elegante */}
            <div className="bg-neutral-950 border-b border-neutral-800 shadow-md p-4 sticky top-0 z-20">
                <div className="max-w-xl mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-light tracking-wide text-neutral-100">Agenda</h1>
                        <h1 className="text-3xl font-bold ml-1 text-amber-400">360</h1>
                    </div>

                    <button 
                        onClick={() => alert("Perfil clickeado")}
                        className="w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400 transition hover:scale-105 shadow-sm"
                    >
                        <img className="w-full h-full object-cover" src="/mixea.png" alt="Perfil" />
                    </button>
                </div>
            </div>

            <div className="p-4 max-w-xl mx-auto">
                {/* Botones de Navegación Superiores */}
                <div className="flex gap-2 mb-4">
                    <button onClick={() => setShowAppointmentModal(true)} className="w-full bg-neutral-800 border border-neutral-700 text-neutral-200 py-3 rounded-xl font-medium shadow hover:bg-neutral-700 hover:border-amber-400/40 transition">Cita</button>
                    <button onClick={() => setShowAppointmentModal(true)} className="w-full bg-neutral-800 border border-neutral-700 text-neutral-200 py-3 rounded-xl font-medium shadow hover:bg-neutral-700 hover:border-amber-400/40 transition">Clientes</button>
                    <button onClick={() => setShowAppointmentModal(true)} className="w-full bg-neutral-800 border border-neutral-700 text-neutral-200 py-3 rounded-xl font-medium shadow hover:bg-neutral-700 hover:border-amber-400/40 transition">Finanzas</button>
                </div>

                {/* Filtro por Personal */}
                <div className="bg-neutral-950 border border-neutral-800 p-3 rounded-xl shadow mb-4">
                    <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1">Filtrar por Personal</label>
                    <select 
                        className="w-full border border-neutral-700 p-2 rounded-lg bg-neutral-900 font-medium text-amber-400 focus:outline-none focus:border-amber-400"
                        value={selectedStaffFilter}
                        onChange={(e) => setSelectedStaffFilter(e.target.value)}
                    >
                        <option value="TODOS">Todos</option>
                        {staffList.map((staff, index) => (
                            <option key={index} value={staff}>{staff}</option>
                        ))}
                    </select>
                </div>

                {/* Selector de Mes con Flechas y Botón Hoy */}
                <div className="bg-neutral-950 border-x border-t border-neutral-800 p-3 rounded-t-xl shadow flex items-center justify-between">
                    <button onClick={() => changeMonth(-1)} className="p-2 bg-neutral-900 hover:bg-neutral-800 text-amber-400 rounded-full transition border border-neutral-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    
                    <div className="flex items-center gap-3">
                        <h2 className="text-lg font-medium tracking-wide text-neutral-200">
                            {monthsNames[selectedDate.getMonth()]} <span className="font-light text-neutral-400">{selectedDate.getFullYear()}</span>
                        </h2>
                        <button 
                            onClick={() => setSelectedDate(new Date())} 
                            className="text-xs bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 border border-amber-400/30 px-2.5 py-1 rounded-md transition font-medium tracking-wide"
                        >
                            Hoy
                        </button>
                    </div>

                    <button onClick={() => changeMonth(1)} className="p-2 bg-neutral-900 hover:bg-neutral-800 text-amber-400 rounded-full transition border border-neutral-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>

                {/* Scroll Horizontal para cambiar el Día */}
                <div className="bg-neutral-950 border-x border-b border-neutral-800 p-3 rounded-b-xl shadow mb-4 flex overflow-x-auto gap-2 scrollbar-thin">
                    {daysInCurrentMonth.map((dateObj, index) => {
                        const isSelected = formatDateKey(dateObj) === formatDateKey(selectedDate);
                        const dayName = dateObj.toLocaleDateString('es-ES', { weekday: 'short' });
                        const dayNumber = dateObj.getDate();

                        return (
                            <button
                                key={index}
                                onClick={() => setSelectedDate(dateObj)}
                                className={`flex flex-col items-center justify-center min-w-[55px] py-2 px-1 rounded-xl transition ${
                                    isSelected 
                                        ? "bg-amber-400 text-neutral-950 font-bold shadow-md" 
                                        : "bg-neutral-900 text-neutral-400 border border-neutral-800 hover:bg-neutral-800 hover:text-neutral-200"
                                }`}
                            >
                                <span className="text-[10px] uppercase font-medium">{dayName}</span>
                                <span className="text-base">{dayNumber}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Lista de Horarios y Citas */}
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl shadow overflow-hidden">
                    {timeSlots.map((slot) => {
                        const appointment = filteredAppointments.find((a) => a.time === slot);

                        let whatsappUrl = "";
                        if (appointment) {
                            const mensaje = `Hola ${appointment.client}, te contacto para tu cita de ${appointment.service} con ${appointment.staff} a las ${appointment.time}.\n\n¿Me confirmas tu asistencia?\n\n1. Sí, confirmo\n2. Necesito reprogramar/cancelar`;
                            whatsappUrl = `https://wa.me/${appointment.phone}?text=${encodeURIComponent(mensaje)}`;
                        }

                        return (
                            <div key={slot} className="flex border-b border-neutral-800/60 min-h-[65px] items-center">
                                <div className="w-20 border-r border-neutral-800 p-2 text-xs text-neutral-400 bg-neutral-900/50 h-full flex items-center justify-center font-mono">
                                    {slot}
                                </div>
                                <div className="flex-1 p-2">
                                    {appointment ? (
                                        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700/80 text-neutral-100 rounded-lg p-2.5 shadow flex justify-between items-center">
                                            <div>
                                                <p className="font-semibold text-neutral-100">{appointment.client}</p>
                                                <p className="text-xs text-neutral-400">{appointment.service} — <span className="text-amber-400">{appointment.staff}</span></p>
                                            </div>

                                            <a
                                                href={whatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-emerald-600 hover:bg-emerald-500 p-2 rounded-full transition shadow-lg"
                                            >
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
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
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md p-6 shadow-2xl">
                        <h2 className="text-xl font-medium tracking-wide text-neutral-100 mb-4 border-b border-neutral-800 pb-2">Nueva Cita</h2>
                        
                        <input 
                            type="text" 
                            placeholder="Nombre del cliente" 
                            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 p-3 mb-3 rounded-lg focus:outline-none focus:border-amber-400 placeholder:text-neutral-500" 
                            value={newAppointment.client}
                            onChange={(e) => setNewAppointment({ ...newAppointment, client: e.target.value })} 
                        />
                        
                        <div className="mb-3">
                            <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1">Servicio</label>
                            <select 
                                className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 p-3 rounded-lg focus:outline-none focus:border-amber-400"
                                value={newAppointment.service}
                                onChange={(e) => setNewAppointment({ ...newAppointment, service: e.target.value })}
                            >
                                {servicesList.map((service, index) => (
                                    <option key={index} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="block text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-1">¿Quién atiende?</label>
                            <select 
                                className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 p-3 rounded-lg focus:outline-none focus:border-amber-400"
                                value={newAppointment.staff}
                                onChange={(e) => setNewAppointment({ ...newAppointment, staff: e.target.value })}
                            >
                                {staffList.map((staffMember, index) => (
                                    <option key={index} value={staffMember}>{staffMember}</option>
                                ))}
                            </select>
                        </div>

                        <input 
                            type="text" 
                            placeholder="Teléfono (ej: 521...)" 
                            className="w-full bg-neutral-950 border border-neutral-800 text-neutral-100 p-3 mb-5 rounded-lg focus:outline-none focus:border-amber-400 placeholder:text-neutral-500" 
                            value={newAppointment.phone}
                            onChange={(e) => setNewAppointment({ ...newAppointment, phone: e.target.value })} 
                        />

                        <div className="flex gap-2">
                            <button onClick={() => setShowAppointmentModal(false)} className="flex-1 bg-neutral-800 text-neutral-300 py-3 rounded-xl font-medium hover:bg-neutral-700 transition">Cancelar</button>
                            <button onClick={saveAppointment} className="flex-1 bg-amber-400 text-neutral-950 py-3 rounded-xl font-bold hover:bg-amber-300 transition shadow-md">Guardar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}