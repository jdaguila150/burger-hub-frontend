import React, { useState } from 'react';

// Movimos los datos del carrusel aquí porque solo le pertenecen al Inicio
const carruselData = [
    {
        id: 1,
        titulo: "Nuestro Menú Digital",
        subtitulo: "Lleva nuestra carta siempre contigo en formato PDF.",
        imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1500&q=80",
        esDescarga: true,
        archivo: "/menu_tacoGame.pdf", 
        textoBoton: "⬇️ Descargar Menú (PDF)"
    },
    { id: 2, titulo: "Sabor a la parrilla", subtitulo: "Ingredientes 100% frescos todos los días.", imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1500&q=80" },
    { id: 3, titulo: "¡Promo de Locura!", subtitulo: "2x1 en hamburguesas clásicas todos los martes.", imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1500&q=80" },
    { id: 4, titulo: "Nuevas Entradas", subtitulo: "Prueba nuestras papas gajo con receta secreta.", imagen: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=1500&q=80" }
];

export default function Menu({ menu, agregarAlCarrito }) {
    const [filtroActivo, setFiltroActivo] = useState("Todos");
    const menuSeguro = menu || [];
    // Derivados para los filtros
    const categoriasUnicas = ["Todos", ...new Set(menu.map(item => item.categoria))];
    const menuFiltrado = filtroActivo === "Todos" ? menu : menu.filter(item => item.categoria === filtroActivo);

    return (
        <>
            {/* --- HERO SECTION (CARRUSEL) CON 3 SLIDES --- */}
            <header>
                <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                    <div className="carousel-indicators">
                        {carruselData.map((_, index) => (
                            <button key={index} type="button" data-bs-target="#heroCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
                        ))}
                    </div>

                    <div className="carousel-inner" style={{ height: '70vh' }}>
                        {carruselData.map((slide, index) => (
                            <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''} h-100`}>
                                <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
                                <img src={slide.imagen} className="d-block w-100 h-100" style={{ objectFit: 'cover' }} alt={slide.titulo} />
                                <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100" style={{ zIndex: 2, top: 0 }}>
                                    <h1 className="display-2 fw-bolder text-white text-uppercase tracking-wide mb-3">{slide.titulo}</h1>
                                    <p className="fs-4 text-light mb-5 fw-light">{slide.subtitulo}</p>

                                    {/* LÓGICA DE BOTÓN DINÁMICO */}
                                    {slide.esDescarga ? (
                                        /* Botón de descarga para el PDF */
                                        <a
                                            href={slide.archivo}
                                            download
                                            className="btn btn-warning btn-lg fw-bold px-5 py-3 rounded-pill shadow animate__animated animate__pulse animate__infinite"
                                        >
                                            {slide.textoBoton}
                                        </a>
                                    ) : (
                                        /* Botón normal de navegación */
                                        <a href="#menu" className="btn btn-warning btn-lg fw-bold px-5 py-3 rounded-pill shadow">
                                            {slide.textoBoton}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev" style={{ zIndex: 3 }}>
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next" style={{ zIndex: 3 }}>
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </header>

            {/* --- SECCIÓN DE BENEFICIOS --- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row text-center g-4">
                        <div className="col-md-4">
                            <div className="p-4">
                                <div className="display-4 mb-3">🔥</div>
                                <h4 className="fw-bold">A la parrilla</h4>
                                <p className="text-muted">Carne 100% de res, cocinada al momento para garantizar el mejor sabor.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4">
                                <div className="display-4 mb-3">🛵</div>
                                <h4 className="fw-bold">Envío Rápido</h4>
                                <p className="text-muted">Pide directo con nosotros y recibe tu comida caliente en la puerta de tu casa.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4">
                                <div className="display-4 mb-3">🥑</div>
                                <h4 className="fw-bold">Ingredientes Premium</h4>
                                <p className="text-muted">Seleccionamos vegetales frescos y pan horneado artesanalmente cada mañana.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN DEL MENÚ --- */}
            <main id="menu" className="container py-5 mt-4">
                <div className="text-center mb-5">
                    <span className="text-warning fw-bold text-uppercase tracking-wider">Descubre</span>
                    <h2 className="fw-bold display-5 mt-2">Nuestro Menú</h2>
                    <div className="mx-auto bg-dark mt-3" style={{ height: '3px', width: '80px' }}></div>
                </div>

                {/* Filtros Profesionales */}
                <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
                    {categoriasUnicas.map((categoria, index) => (
                        <button
                            key={index}
                            onClick={() => setFiltroActivo(categoria)}
                            className={`btn px-4 py-2 rounded-pill fw-bold transition-all ${filtroActivo === categoria ? 'btn-dark shadow' : 'btn-outline-secondary'}`}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>

                {/* Grid de Platillos */}
                <div className="row g-4">
                    {menuFiltrado.map((platillo) => (
                        <div className="col-12 col-md-6 col-xl-4" key={platillo.id}>
                            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden" style={{ transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>

                                {platillo.destacado && (
                                    <span className="position-absolute top-0 end-0 bg-danger text-white px-3 py-2 m-3 rounded-pill text-uppercase fw-bold shadow-sm" style={{ fontSize: '0.7rem', zIndex: 1 }}>
                                        ⭐ Estrella
                                    </span>
                                )}

                                <img src={platillo.imagen} className="card-img-top" alt={platillo.nombre} style={{ height: '240px', objectFit: 'cover' }} />

                                <div className="card-body d-flex flex-column p-4">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <h5 className="card-title fw-bolder mb-0 fs-4">{platillo.nombre}</h5>
                                        <span className="fs-5 fw-bold text-success bg-success bg-opacity-10 px-3 py-1 rounded-pill">${platillo.precio}</span>
                                    </div>
                                    <p className="card-text text-muted mb-4">{platillo.descripcion}</p>

                                    {/* <div className="mt-auto">
                                        <button
                                            className="btn btn-dark w-100 fw-bold py-2 rounded-3 text-uppercase"
                                            onClick={() => agregarAlCarrito(platillo)}
                                        >
                                            + Agregar
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}