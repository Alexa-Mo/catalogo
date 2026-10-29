import { useState } from "react";
import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import ModalDetalle from "../components/ModalDetalle";

export default function CatalogoPage({ genero, titulo, descripcion, categoriaFiltro }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSel, setCategoriaSel] = useState("TODOS");
  const [orden, setOrden] = useState("defecto");
  const [favoritos, setFavoritos] = useState({});
  const [productoModal, setProductoModal] = useState(null);

  const toggleFavorito = (id) => {
    setFavoritos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const listaGenero = categoriaFiltro
    ? productos.filter(
        (p) => p.categoria && p.categoria.toLowerCase() === categoriaFiltro.toLowerCase()
      )
    : productos.filter((p) => p.genero === genero || p.genero === "UNISEX");

  const categorias = [
    "TODOS",
    ...Array.from(
      new Set(listaGenero.map((p) => (categoriaFiltro ? p.genero : p.categoria)))
    ),
  ];

  const filtrados = listaGenero.filter((p) => {
    const coincideCat =
      categoriaSel === "TODOS" ||
      (categoriaFiltro ? p.genero === categoriaSel : p.categoria === categoriaSel);
    const coincideTexto =
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      (p.categoria && p.categoria.toLowerCase().includes(busqueda.toLowerCase())) ||
      (p.descripcion && p.descripcion.toLowerCase().includes(busqueda.toLowerCase())) ||
      (p.tiendaNombre && p.tiendaNombre.toLowerCase().includes(busqueda.toLowerCase()));
    return coincideCat && coincideTexto;
  });

  const ordenados = [...filtrados].sort((a, b) => {
    if (orden === "menor") return a.precio - b.precio;
    if (orden === "mayor") return b.precio - a.precio;
    return 0;
  });

  return (
    <div className="container catalogo-container">
      {/* Header de la categoria */}
      <div className="catalogo-header">
        <div className="catalogo-badge">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: "inline-block", verticalAlign: "-2px", marginRight: "6px" }}
          >
            <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
          </svg>
          <span>Catalogo {titulo}</span>
        </div>
        <h1 className="catalogo-title">Coleccion {titulo}</h1>
        <p className="catalogo-subtitle">{descripcion}</p>
      </div>

      {/* Barra de Filtros e Interaccion */}
      <div className="filtros-control-bar">
        <div className="search-box">
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder={`Buscar en ${titulo.toLowerCase()} (prenda, categoria)...`}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />
          {busqueda && (
            <button className="search-clear" onClick={() => setBusqueda("")}>
              ×
            </button>
          )}
        </div>

        <div className="sort-box">
          <label htmlFor="sort-select">Ordenar por:</label>
          <select
            id="sort-select"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            className="sort-select"
          >
            <option value="defecto">Destacados</option>
            <option value="menor">Precio: Menor a Mayor</option>
            <option value="mayor">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>

      {/* Categorias Pills */}
      <div className="categorias-chips">
        {categorias.map((cat) => {
          const count =
            cat === "TODOS"
              ? listaGenero.length
              : listaGenero.filter((p) =>
                  categoriaFiltro ? p.genero === cat : p.categoria === cat
                ).length;

          const label =
            cat === "TODOS"
              ? "Ver Todo"
              : cat === "DAMA"
              ? "Dama"
              : cat === "VARON"
              ? "Varon"
              : cat;

          return (
            <button
              key={cat}
              className={`chip-btn ${categoriaSel === cat ? "active" : ""}`}
              onClick={() => setCategoriaSel(cat)}
            >
              <span>{label}</span>
              <span className="chip-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Contador de resultados */}
      <div className="resultados-info">
        <span>
          Mostrando <strong>{ordenados.length}</strong>{" "}
          {ordenados.length === 1 ? "prenda" : "prendas"}
        </span>
      </div>

      {/* Grilla de productos */}
      {ordenados.length > 0 ? (
        <div className="grid-productos">
          {ordenados.map((p) => (
            <ProductoCard
              key={p.id}
              producto={p}
              onVerDetalle={setProductoModal}
              esFavorito={!!favoritos[p.id]}
              onToggleFavorito={toggleFavorito}
            />
          ))}
        </div>
      ) : (
        <div className="sin-resultados">
          <div className="sin-res-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h3>No se encontraron prendas</h3>
          <p>Intenta con otra palabra clave o selecciona otra categoria.</p>
          <button
            className="btn-limpiar-filtros"
            onClick={() => {
              setBusqueda("");
              setCategoriaSel("TODOS");
            }}
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Modal interactivo de detalle */}
      {productoModal && (
        <ModalDetalle
          producto={productoModal}
          onClose={() => setProductoModal(null)}
        />
      )}
    </div>
  );
}
