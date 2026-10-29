import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { tiendas } from "../data/tiendas";
import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import ModalDetalle from "../components/ModalDetalle";

export default function TiendaDetalle() {
  const { slug } = useParams();
  const tienda = tiendas.find((t) => t.slug === slug);
  const [filtro, setFiltro] = useState("TODOS");
  const [productoModal, setProductoModal] = useState(null);
  const [favoritos, setFavoritos] = useState({});

  if (!tienda) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h2>Tienda no encontrada</h2>
        <Link to="/" className="btn-back-link">
          ← Volver al inicio
        </Link>
      </div>
    );
  }

  const deTienda = productos.filter((p) => p.tiendaSlug === slug);
  const visibles = filtro === "TODOS" ? deTienda : deTienda.filter((p) => p.genero === filtro);

  return (
    <div className="container catalogo-container">
      <Link to="/" className="btn-back-link">
        ← Volver al inicio
      </Link>

      <div className="tienda-detalle-header">
        <div className="tienda-detalle-logo">
          <img
            src={tienda.logo}
            alt={tienda.nombre}
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/120?text=Logo")}
          />
        </div>
        <div>
          <h1 className="tienda-detalle-title">{tienda.nombre}</h1>
          <p className="tienda-detalle-desc">{tienda.descripcion}</p>
        </div>
      </div>

      <div className="filtros-control-bar" style={{ marginTop: "2rem" }}>
        <div className="categorias-chips" style={{ margin: 0 }}>
          {["TODOS", "DAMA", "VARON"].map((f) => (
            <button
              key={f}
              className={`chip-btn ${filtro === f ? "active" : ""}`}
              onClick={() => setFiltro(f)}
            >
              {f === "TODOS" ? "Todos los productos" : f === "DAMA" ? "Dama" : "Varon"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-productos" style={{ marginTop: "2rem" }}>
        {visibles.map((p) => (
          <ProductoCard
            key={p.id}
            producto={p}
            onVerDetalle={setProductoModal}
            esFavorito={!!favoritos[p.id]}
            onToggleFavorito={(id) => setFavoritos((prev) => ({ ...prev, [id]: !prev[id] }))}
          />
        ))}
      </div>

      {visibles.length === 0 && (
        <div className="sin-resultados">
          <p>No hay prendas registradas en esta categoria para {tienda.nombre}.</p>
        </div>
      )}

      {productoModal && (
        <ModalDetalle
          producto={productoModal}
          onClose={() => setProductoModal(null)}
        />
      )}
    </div>
  );
}
