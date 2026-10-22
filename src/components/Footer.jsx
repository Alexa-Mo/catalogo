import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-site">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffd166" strokeWidth="2">
              <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
            </svg>
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
