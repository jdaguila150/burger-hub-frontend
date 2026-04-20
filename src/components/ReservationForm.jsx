import React, { useState } from 'react';

export default function ReservationForm() {
  const [datos, setDatos] = useState({ nombre: '', personas: '2', fecha: '', hora: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ==========================================
    // PON AQUÍ EL NÚMERO DEL RESTAURANTE
    // Solo los 10 dígitos con el código de país (52 para México)
    // Sin el signo + y sin espacios
    // ==========================================
    const numeroRestaurante = "525578316713";

    // Armamos el mensaje usando %0A para los saltos de línea en WhatsApp
    let mensaje = `¡Hola! Me gustaría hacer una reservación. %0A%0A`;
    mensaje += `*A nombre de:* ${datos.nombre}%0A`;
    mensaje += `*Para:* ${datos.personas} personas%0A`;
    mensaje += `*Fecha:* ${datos.fecha}%0A`;
    mensaje += `*Hora:* ${datos.hora}%0A%0A`;
    mensaje += `¿Me podrían confirmar si tienen disponibilidad?`;

    // Abrimos la pestaña de WhatsApp con el mensaje prellenado
    window.open(`https://wa.me/${numeroRestaurante}?text=${mensaje}`, '_blank');

    // (Opcional) Limpiar el formulario después de enviar
    setDatos({ nombre: '', personas: '2', fecha: '', hora: '' });
  };

  return (
    <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white">
      <h2 className="fw-bold mb-4">Reserva tu Mesa</h2>
      <p className="text-muted mb-4">Llena tus datos y te confirmaremos la disponibilidad enseguida por WhatsApp.</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre Completo</label>
          <input
            type="text" className="form-control form-control-lg bg-light border-0"
            placeholder="Ej. Juan Pérez" required
            value={datos.nombre}
            onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">No. de Personas</label>
            <select className="form-select form-select-lg bg-light border-0" value={datos.personas} onChange={(e) => setDatos({ ...datos, personas: e.target.value })}>
              <option value="2">2 Personas</option>
              <option value="4">4 Personas</option>
              <option value="6">6 o más</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Fecha</label>
            <input type="date" className="form-control form-control-lg bg-light border-0" required value={datos.fecha} onChange={(e) => setDatos({ ...datos, fecha: e.target.value })} />
          </div>
        </div>
        <div className="mb-4">
          <label className="form-label fw-bold">Hora</label>
          <input type="time" className="form-control form-control-lg bg-light border-0" required value={datos.hora} onChange={(e) => setDatos({ ...datos, hora: e.target.value })} />
        </div>

        <button
          type="submit"
          className="btn btn-warning w-100 btn-lg fw-bold rounded-pill py-3 d-flex justify-content-center align-items-center"
        >
          <span className="me-2 fs-4">💬</span> Confirmar Reserva por WhatsApp
        </button>
      </form>
    </div>
  );
}