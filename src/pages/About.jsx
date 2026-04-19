import React from 'react';
import ReservationForm from '../components/ReservationForm';
import { Link, useLocation } from 'react-router-dom';


export default function About() {
    return (
        <div className="bg-light">
            {/* SECCIÓN HISTORIA */}
            <section className="py-5 bg-white border-bottom">
                <div className="container py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
                                alt="Nuestro equipo"
                                className="img-fluid rounded-4 shadow-lg"
                            />
                        </div>
                        <div className="col-lg-6">
                            <span className="text-warning fw-bold text-uppercase tracking-wider">Nuestra Historia</span>
                            <h1 className="display-4 fw-bold mt-2 mb-4">Artesanos de la hamburguesa.</h1>
                            <p className="lead text-muted">
                                Burger Hub nació en el corazón de la CDMX con una misión clara: elevar el estándar de la comida local usando ingredientes premium y técnicas de parrilla tradicionales.
                            </p>
                            <p className="text-muted">
                                Cada carne es molida diariamente y nuestro pan brioche se hornea cada mañana para asegurar que la experiencia sea perfecta desde el primer bocado hasta el último.
                            </p>
                        <div className="d-flex gap-3 mt-5">
                            {/* Este es el botón crucial que conecta las dos páginas */}
                            <Link to="/menu" className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold shadow">
                                🍔 Ver el Menú Completo
                            </Link>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-lg px-4 py-3 rounded-pill fw-bold">
                                Síguenos
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN DE RESERVAS Y MAPA */}
            <section className="py-5">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* Formulario */}
                        <div className="col-lg-6">
                            <ReservationForm />
                        </div>

                        {/* Google Maps e Información */}
                        <div className="col-lg-6">
                            <div className="h-100 d-flex flex-column">
                                <div className="mb-4">
                                    <h2 className="fw-bold mb-3">Visítanos</h2>
                                    <p className="text-muted fs-5">
                                        📍 Av. Siempre Viva 123, Lindavista, Gustavo A. Madero, CDMX.
                                    </p>
                                </div>

                                {/* MAPA DE GOOGLE */}
                                <div className="flex-grow-1 rounded-4 overflow-hidden shadow-sm border" style={{ minHeight: '350px' }}>
                                    <iframe
                                        title="Ubicación Burger Hub"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.483162799307!2d-99.135249!3d19.432601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDgnMDYuOSJX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}