import React, { useState } from 'react';

export default function ReservationForm() {
  const [datos, setDatos] = useState({ nombre: '', personas: '2', fecha: '', hora: '' });
  const [estado, setEstado] = useState('idle'); // idle, enviando, exito, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado('enviando');

    try {
      // Le enviamos los datos a nuestra nueva ruta de Express
      const respuesta = await fetch('http://localhost:3000/api/reservar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
      });

      if (respuesta.ok) {
        setEstado('exito');
        setDatos({ nombre: '', personas: '2', fecha: '', hora: '' }); // Limpiar formulario
      } else {
        setEstado('error');
      }
    } catch (error) {
      console.error("Error:", error);
      setEstado('error');
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white">
      <h2 className="fw-bold mb-4">Reserva tu Mesa</h2>
      
      {/* Alertas de éxito o error */}
      {estado === 'exito' && (
        <div className="alert alert-success fw-bold">¡Tu reserva fue enviada al restaurante! Nos vemos pronto.</div>
      )}
      {estado === 'error' && (
        <div className="alert alert-danger fw-bold">Hubo un problema al enviar la reserva. Intenta de nuevo.</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre Completo</label>
          <input 
            type="text" className="form-control form-control-lg bg-light border-0" 
            placeholder="Ej. Juan Pérez" required 
            value={datos.nombre}
            onChange={(e) => setDatos({...datos, nombre: e.target.value})}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">No. de Personas</label>
            <select className="form-select form-select-lg bg-light border-0" value={datos.personas} onChange={(e) => setDatos({...datos, personas: e.target.value})}>
              <option value="2">2 Personas</option>
              <option value="4">4 Personas</option>
              <option value="6">6 o más</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Fecha</label>
            <input type="date" className="form-control form-control-lg bg-light border-0" required value={datos.fecha} onChange={(e) => setDatos({...datos, fecha: e.target.value})} />
          </div>
        </div>
        <div className="mb-4">
          <label className="form-label fw-bold">Hora</label>
          <input type="time" className="form-control form-control-lg bg-light border-0" required value={datos.hora} onChange={(e) => setDatos({...datos, hora: e.target.value})} />
        </div>
        
        <button 
          type="submit" 
          className="btn btn-warning w-100 btn-lg fw-bold rounded-pill py-3"
          disabled={estado === 'enviando'}
        >
          {estado === 'enviando' ? 'Enviando...' : 'Confirmar Reserva'}
        </button>
      </form>
    </div>
  );
}