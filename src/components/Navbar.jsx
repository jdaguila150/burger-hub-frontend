import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ nombreRestaurante, carritoItems }) {
    // Usamos useLocation para saber en qué página estamos y pintar el botón activo
    const location = useLocation();

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
        {/* ms-auto empuja todo a la derecha, gap-3 separa los botones entre sí */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
                <Link className={`nav-link fs-5 px-3 rounded ${location.pathname === '/' ? 'active fw-bold bg-dark text-white' : ''}`} to="/">
                    Conócenos
                </Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link fs-5 px-3 rounded ${location.pathname === '/menu' ? 'active fw-bold bg-dark text-white' : ''}`} to="/menu">
                    Menú
                </Link>
            </li>
        </ul>
    </div>
</div>
        </nav>
    );
}