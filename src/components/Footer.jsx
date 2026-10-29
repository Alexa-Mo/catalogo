import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-site">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/imagenes/que-usar-hoy.jpg"
              alt="Logo CATALOGO QUH"
              className="footer-logo-img"
            />
            <span>CATALOGO QUH</span>
          </div>
          <p className="footer-text">
            Tu destino de exhibicion de moda y estilo. Calidad garantizada, prendas exclusivas y las ultimas tendencias.
          </p>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-title">Navegacion</h4>
          <Link to="/" className="footer-link">Inicio</Link>
          <Link to="/dama" className="footer-link">Catalogo Dama</Link>
          <Link to="/varon" className="footer-link">Catalogo Varon</Link>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-title">Marcas QUH</h4>
          <span className="footer-item">UNIWEAR</span>
          <span className="footer-item">QUE USAR HOY</span>
          <span className="footer-item">LAMI BRA</span>
          <span className="footer-item">ESTATUS QUH</span>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-title">Informacion</h4>
          <span className="footer-item">Catalogo digital de exhibicion</span>
          <span className="footer-item">Temporada Verano - Otoño 2026</span>
          <span className="footer-item">Actualizaciones constantes</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CATALOGO QUH. Catalogo de moda y tendencias. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
