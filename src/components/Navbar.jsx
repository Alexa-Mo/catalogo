import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img
            src="/imagenes/que-usar-hoy.jpg"
            alt="Logo CATALOGO QUH"
            className="logo-img"
          />
          <span className="logo-text">CATALOGO QUH</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Inicio
          </NavLink>
          <NavLink to="/dama" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Dama
          </NavLink>
          <NavLink to="/varon" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Varon
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
