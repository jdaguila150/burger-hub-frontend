import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ nombreRestaurante, carritoItems }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm py-3">
            <div className="container">
                <Link className="navbar-brand fs-3 fw-bold d-flex align-items-center" to="/">
                    🍔 <span className="ms-2">{nombreRestaurante}</span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/conocenos">Conócenos</Link>
                        </li>
                        {/* El botón de reserva con mejor formato */}
                        <li className="nav-item ms-lg-3 mt-1"> {/* ms-lg-3 da separación a la izquierda en pantallas grandes */}
                            <Link 
                            className="btn btn-warning fw-bold px-4 shadow-sm" 
                            to="/reserva"
                            style={{ borderRadius: '25px' }} // Bordes redondeados para un look más moderno
                            >
                            ¡Reserva ahora!
                            </Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center mt-3 mt-lg-0">
                        <button
                            className="btn btn-warning fw-bold px-4 rounded-pill position-relative shadow-sm"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#carritoOffcanvas"
                        >
                            🛒 Mi Orden
                            {carritoItems > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {carritoItems}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}