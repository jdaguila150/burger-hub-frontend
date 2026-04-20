import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importamos nuestros componentes modulares
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import ReservationPage from "./pages/ReservationPage";

const infoRestaurante = {
  nombre: "Burger Hub",
  telefono: "525500000000",
  direccion: "Av. Siempre Viva 123, CDMX",
  horario: "Lun - Dom: 1:00 PM - 10:00 PM"
};

export default function App() {
  const [menu, setMenu] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // Lógica de Express
  useEffect(() => {
    fetch('http://localhost:3000/api/menu')
      .then(res => res.json())
      .then(datos => setMenu(datos))
      .catch(error => console.error("Error backend", error));      
  }, []);

  const agregarAlCarrito = (platillo) => {
    const item = { ...platillo, idCompra: Math.random().toString(36).substr(2, 9) };
    setCarrito([...carrito, item]);
  };

  const eliminarDelCarrito = (idCompra) => {
    setCarrito(carrito.filter(item => item.idCompra !== idCompra));
  };

  const totalPagar = carrito.reduce((suma, item) => suma + item.precio, 0);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar nombreRestaurante={infoRestaurante.nombre} carritoItems={carrito.length} />

        {/* AQUÍ ES DONDE OCURRE LA MAGIA DEL ROUTER */}
        <div className="flex-grow-1">
          <Routes>
            {/* Ahora "/" es la página de Conócenos/Landing */}
            <Route path="/" element={<About />} />
            
            <Route path="/menu" element={<Menu menu={menu} agregarAlCarrito={agregarAlCarrito} />} />

            {/*   Rutas a reserva*/}
            <Route path="/reserva" element={<ReservationPage />} />
          </Routes>
        </div>

        <Footer infoRestaurante={infoRestaurante} />

        {/* OFFCANVAS DEL CARRITO (Se queda aquí para que sea global en cualquier página) */}
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="carritoOffcanvas">
          <div className="offcanvas-header border-bottom bg-light">
            <h5 className="offcanvas-title fw-bold">🛒 Tu Orden</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            {carrito.map((item) => (
              <div key={item.idCompra} className="d-flex justify-content-between mb-3 border-bottom pb-2">
                <span>{item.nombre}</span>
                <div>
                  <span className="text-success fw-bold me-3">${item.precio}</span>
                  <button onClick={() => eliminarDelCarrito(item.idCompra)} className="btn btn-sm btn-outline-danger border-0">❌</button>
                </div>
              </div>
            ))}
            {carrito.length > 0 && <h4 className="mt-4">Total: ${totalPagar}</h4>}
          </div>
        </div>

      </div>
    </Router>
  );

  
}