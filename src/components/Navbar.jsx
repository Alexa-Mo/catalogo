import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="logo-icon"
          >
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
          </svg>
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
