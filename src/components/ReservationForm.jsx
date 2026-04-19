import React, { useState } from 'react';

export default function ReservationForm() {
    const [datos, setDatos] = useState({ nombre: '', personas: '2', fecha: '', hora: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí es donde en el futuro conectarás con tu Backend de Express
        const mensaje = `¡Hola! Me gustaría reservar una mesa para ${datos.personas} personas el día ${datos.fecha} a las ${datos.hora}. A nombre de ${datos.nombre}.`;
        window.open(`https://wa.me/525500000000?text=${encodeURIComponent(mensaje)}`, '_blank');
    };

    return (
        <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white">
            <h2 className="fw-bold mb-4">Reserva tu Mesa</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Nombre Completo</label>
                    <input
                        type="text" className="form-control form-control-lg bg-light border-0"
                        placeholder="Ej. Juan Pérez" required
                        onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
                    />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">No. de Personas</label>
                        <select className="form-select form-select-lg bg-light border-0" onChange={(e) => setDatos({ ...datos, personas: e.target.value })}>
                            <option value="2">2 Personas</option>
                            <option value="4">4 Personas</option>
                            <option value="6">6 o más</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label fw-bold">Fecha</label>
                        <input type="date" className="form-control form-control-lg bg-light border-0" required onChange={(e) => setDatos({ ...datos, fecha: e.target.value })} />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="form-label fw-bold">Hora</label>
                    <input type="time" className="form-control form-control-lg bg-light border-0" required onChange={(e) => setDatos({ ...datos, hora: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-warning w-100 btn-lg fw-bold rounded-pill py-3">
                    Confirmar Reserva por WhatsApp
                </button>
            </form>
        </div>
    );
}