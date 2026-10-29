import { Link } from "react-router-dom";
import { tiendas } from "../data/tiendas";

export default function Home() {
  return (
    <div className="home-container">
      {/* SECCION MIRA NUESTROS PRODUCTOS */}
      <section className="seccion-productos-hero">
        <div className="hero-announcement">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="sparkle-icon">
            <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
          </svg>
          <span>NUEVA COLECCION 2026 • MODA & TENDENCIAS EXCLUSIVAS</span>
        </div>

        <h1 className="seccion-titulo">Mira nuestros productos</h1>
        <p className="seccion-subtitulo">
          Explora lo mas selecto en diseño contemporaneo, confort y elegancia para damas y varones
        </p>

        <div className="banners-grid">
          {/* Card Dama */}
          <Link to="/dama" className="banner-card banner-dama">
            <img
              src="/imagenes/dama.jpg"
              alt="Moda Dama"
              className="banner-img"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700";
              }}
            />
            <div className="banner-overlay"></div>
            <div className="banner-content">
              <span className="banner-badge">Coleccion Femenina</span>
              <h2 className="banner-title">Dama</h2>
              <p className="banner-desc">Fajas moldeadoras, brasieres segunda piel y prendas en tendencia</p>
              <div className="banner-btn-wrapper">
                <span className="banner-btn">
                  <span>Explorar Catalogo Dama</span>
                  <span className="banner-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Card Varon */}
          <Link to="/varon" className="banner-card banner-varon">
            <img
              src="/imagenes/varon.jpg"
              alt="Moda Varon"
              className="banner-img"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700";
              }}
            />
            <div className="banner-overlay"></div>
            <div className="banner-content">
              <span className="banner-badge">Coleccion Masculina</span>
              <h2 className="banner-title">Varon</h2>
              <p className="banner-desc">Boxers de bambú, seda árabe, combos exclusivos y ropa interior</p>
              <div className="banner-btn-wrapper">
                <span className="banner-btn">
                  <span>Explorar Catalogo Varon</span>
                  <span className="banner-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* BARRA DE BENEFICIOS */}
      <section className="beneficios-bar">
        <div className="beneficio-item">
          <div className="beneficio-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3c0 .8.3 1.5.8 2.1L2 14v2h20v-2l-7.8-6.9c.5-.6.8-1.3.8-2.1a3 3 0 0 0-3-3z" />
              <line x1="2" y1="20" x2="22" y2="20" />
            </svg>
          </div>
          <div className="beneficio-text">
            <h4>Colecciones 2026</h4>
            <p>Prendas exclusivas de ultima temporada</p>
          </div>
        </div>

        <div className="beneficio-item">
          <div className="beneficio-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <div className="beneficio-text">
            <h4>Calidad Garantizada</h4>
            <p>Prendas seleccionadas con los mejores acabados</p>
          </div>
        </div>

        <div className="beneficio-item">
          <div className="beneficio-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <div className="beneficio-text">
            <h4>Variedad & Estilos</h4>
            <p>Para cada ocasion, gusto y preferencia</p>
          </div>
        </div>

        <div className="beneficio-item">
          <div className="beneficio-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
          </div>
          <div className="beneficio-text">
            <h4>Marcas Exclusivas</h4>
            <p>Lo mejor de nuestras 4 tiendas oficiales</p>
          </div>
        </div>
      </section>

      {/* SECCION NUESTRAS TIENDAS */}
      <section className="seccion-tiendas">
        <div className="tiendas-header-box">
          <span className="tiendas-pill">Marcas del Grupo</span>
          <h2 className="tiendas-heading">Nuestras Tiendas</h2>
          <p className="tiendas-subheading">
            Conoce los sellos y tiendas exclusivas que integran el universo QUH
          </p>
        </div>

        <div className="tiendas-grid">
          {tiendas.map((t) => (
            <div key={t.id} className="tienda-item">
              <div className="tienda-logo-wrapper">
                <div className="tienda-logo-inner">
                  <img
                    src={t.logo}
                    alt={t.nombre}
                    onError={(e) =>
                      (e.currentTarget.src = "https://via.placeholder.com/120?text=Logo")
                    }
                  />
                </div>
              </div>

              <h3 className="tienda-nombre">{t.nombre}</h3>
              <p className="tienda-desc">{t.descripcion}</p>
              <span className="tienda-tag">Marca Oficial</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
