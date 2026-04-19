import React from 'react';

export default function Footer({ infoRestaurante }) {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
            <div className="container">
                <div className="row g-4 mb-4">
                    <div className="col-lg-4">
                        <h4 className="fw-bold mb-3 d-flex align-items-center">🍔 {infoRestaurante.nombre}</h4>
                        <p className="text-secondary pe-4">Transformando la manera de comer hamburguesas. Calidad, rapidez y el mejor servicio directo a tu puerta.</p>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3">Contacto</h5>
                        <p className="mb-1 text-secondary">📍 {infoRestaurante.direccion}</p>
                        <p className="mb-1 text-secondary">📞 {infoRestaurante.telefono}</p>
                        <p className="mb-0 text-secondary">✉️ pedidos@burgerhub.com</p>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3">Horarios</h5>
                        <p className="mb-0 text-secondary">🕒 {infoRestaurante.horario}</p>
                        <p className="mt-2 text-secondary">Descansamos los martes.</p>
                    </div>
                </div>
                <hr className="border-secondary" />
                <div className="text-center text-secondary small pt-2">
                    © {new Date().getFullYear()} {infoRestaurante.nombre}. Desarrollado con 💻 para el mundo.
                </div>
            </div>
        </footer>
    );
}