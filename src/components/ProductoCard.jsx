export default function ProductoCard({ producto, onVerDetalle, esFavorito, onToggleFavorito }) {
  return (
    <div className="card-producto" onClick={() => onVerDetalle(producto)}>
      <div className="card-img-wrapper">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600";
          }}
        />

        <div className="card-badges-row">
          {producto.tag && <span className="card-badge">{producto.tag}</span>}
          {producto.tieneVideo && (
            <span className="card-video-pill">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Video</span>
            </span>
          )}
        </div>

        <button
          type="button"
          className={`card-btn-fav ${esFavorito ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorito(producto.id);
          }}
          title={esFavorito ? "Quitar de favoritos" : "Guardar en favoritos"}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={esFavorito ? "#ef4444" : "none"}
            stroke={esFavorito ? "#ef4444" : "#ffffff"}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <div className="card-quick-overlay">
          <span className="btn-quick-view">Vista Rapida</span>
        </div>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <span className="card-cat">{producto.categoria}</span>
        </div>

        <h3 className="card-title">{producto.nombre}</h3>

        <div className="card-footer-price">
          <div className="price-tag">
            <span className="price-prefix">S/</span>
            <span className="price-val">{producto.precio.toFixed(2)}</span>
          </div>

          <span className="btn-card-ver">
            <span>Ver detalle</span>
            <span className="ver-arrow">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
