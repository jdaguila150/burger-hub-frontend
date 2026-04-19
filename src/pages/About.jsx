import React from 'react';
import ReservationForm from '../components/ReservationForm';
import { Link } from 'react-router-dom'; // <--- ESTA LÍNEA ES IMPRESCINDIBLE

export default function About() {
    return (
        <div className="bg-light">
            {/* SECCIÓN HISTORIA */}
            <section className="container my-5 py-5">
                {/* SECCIÓN 1: Historia y Texto */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                    <h2 className="display-4 fw-bold mb-4">Nuestra Historia</h2>
                    <p className="lead text-muted">
                        En <strong>Burger Hub</strong>, nuestra pasión es crear la hamburguesa perfecta. 
                        Utilizamos ingredientes frescos, carne de primera calidad y recetas que 
                        han pasado de generación en generación.
                    </p>
                    <p className="mb-4">
                        Desde nuestro inicio en la CDMX, nos hemos dedicado a ofrecer una experiencia 
                        única para los amantes de la buena comida y los momentos inolvidables.
                    </p>
                    </div>
                    <div className="col-lg-6 text-center">
                    {/* Aquí podrías poner una imagen del local o de una hamburguesa */}
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" className="img-fluid rounded-4 shadow" alt="Sobre nosotros" />
                    </div>
                </div>

                {/* SECCIÓN 2: Llamada a la acción (Call to Action) */}
                <div className="row justify-content-center my-5 py-5 bg-light rounded-4">
                    <div className="col-md-8 text-center">
                    <h3 className="h1 fw-bold mb-3">¿Listo para vivir la experiencia?</h3>
                    <p className="fs-5 text-muted mb-4">
                        No te quedes sin tu mesa. Reserva ahora y disfruta del sabor auténtico.
                    </p>
                    <Link to="/reserva" className="btn btn-warning btn-lg px-5 py-3 fw-bold shadow">
                        Haz una reservación aquí
                    </Link>
                    </div>
                </div>

                {/* SECCIÓN 3: Ubicación */}
                <div className="row mt-5">
                    <div className="col-12 text-center mb-4">
                    <h2 className="fw-bold">Donde encontrarnos</h2>
                    </div>
                    <div className="col-12">
                    <div className="rounded-4 overflow-hidden shadow">
                        {/* Tu iframe de Google Maps aquí */}
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.483162799307!2d-99.135249!3d19.432601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDgnMDYuOSJX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy">
                        </iframe>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
