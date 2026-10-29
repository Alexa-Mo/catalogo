import { useState } from "react";

export default function ModalDetalle({ producto, onClose }) {
  const [tallaSel, setTallaSel] = useState(producto?.tallas?.[0] || "M");
  const [colorSel, setColorSel] = useState(producto?.colores?.[0]?.nombre || "");
  const [idxMedia, setIdxMedia] = useState(0);

  if (!producto) return null;

  const galeria =
    producto.galeria && producto.galeria.length > 0
      ? producto.galeria
      : [{ tipo: "imagen", url: producto.imagen }];

  const itemActivo = galeria[idxMedia] || galeria[0];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
          ×
        </button>

        <div className="modal-grid">
          {/* Columna Izquierda: Visor Multimedia */}
          <div className="modal-img-col">
            <div className="modal-media-viewport">
              {itemActivo.tipo === "video" ? (
                <video
                  key={itemActivo.url}
                  src={itemActivo.url}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="modal-video"
                />
              ) : (
                <img
                  key={itemActivo.url}
                  src={itemActivo.url}
                  alt={producto.nombre}
                  className="modal-img"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600";
                  }}
                />
              )}
              {producto.tag && <span className="modal-tag-badge">{producto.tag}</span>}
              {itemActivo.tipo === "video" && (
                <span className="modal-video-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <span>Video Demostrativo</span>
                </span>
              )}
            </div>

            {/* Miniaturas de fotos y video */}
            {galeria.length > 1 && (
              <div className="modal-thumbnails">
                {galeria.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`thumb-btn ${idx === idxMedia ? "active" : ""}`}
                    onClick={() => setIdxMedia(idx)}
                    title={item.tipo === "video" ? "Ver video" : `Foto ${idx + 1}`}
                  >
                    {item.tipo === "video" ? (
                      <div className="thumb-video-placeholder">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        <span>Video</span>
                      </div>
                    ) : (
                      <img src={item.url} alt={`Miniatura ${idx + 1}`} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Columna Derecha: Especificaciones */}
          <div className="modal-info-col">
            <div className="modal-header-meta">
              <span className="modal-category">
                {producto.categoria} • {producto.genero === "DAMA" ? "Dama" : producto.genero === "UNISEX" ? "Unisex" : "Varón"}
              </span>
              <div className="modal-price-box">
                <span className="modal-price-currency">S/</span>
                <span className="modal-price-amount">{producto.precio.toFixed(2)}</span>
              </div>
            </div>

            <h2 className="modal-title">{producto.nombre}</h2>

            {/* Caja de Promocion simple */}
            {producto.promo && (
              <div className="modal-promo-box">
                <div className="modal-promo-header">
                  <span className="promo-badge-tag">{producto.promo.titulo}</span>
                  {producto.promo.ahorro && (
                    <span className="promo-saving-tag">{producto.promo.ahorro}</span>
                  )}
                </div>
                <div className="modal-promo-body">
                  <span className="promo-main-offer">{producto.promo.texto}</span>
                </div>
              </div>
            )}

            {/* Promociones en lista / tiers */}
            {producto.promos && producto.promos.length > 0 && (
              <div className="modal-promo-box">
                <div className="modal-promo-header">
                  <span className="promo-badge-tag">Promociones Especiales</span>
                </div>
                <div className="modal-promos-list">
                  {producto.promos.map((pr, idx) => (
                    <div key={idx} className="promo-tier-row">
                      <span className="promo-tier-name">{pr.nombre}</span>
                      <span className="promo-tier-price">{pr.precio}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="modal-description">{producto.descripcion}</p>

            {/* Lista de Beneficios */}
            {producto.beneficios && producto.beneficios.length > 0 && (
              <div className="modal-beneficios-box">
                <label className="modal-label">Beneficios clave:</label>
                <ul className="modal-beneficios-list">
                  {producto.beneficios.map((b, idx) => (
                    <li key={idx} className="modal-beneficio-item">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Selector de Colores */}
            {producto.colores && producto.colores.length > 0 && (
              <div className="modal-section-group">
                <label className="modal-label">
                  Colores: <strong>{colorSel || producto.colores[0].nombre}</strong>
                </label>
                <div className="modal-colores-pills">
                  {producto.colores.map((c) => (
                    <button
                      key={c.nombre}
                      type="button"
                      className={`color-pill ${colorSel === c.nombre ? "active" : ""}`}
                      onClick={() => setColorSel(c.nombre)}
                    >
                      <span className="color-swatch" style={{ backgroundColor: c.hex }}></span>
                      <span>{c.nombre}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Selector de Tallas */}
            {producto.tallas && producto.tallas.length > 0 && (
              <div className="modal-section-group">
                <label className="modal-label">
                  Tallas Disponibles: <strong>{tallaSel}</strong>
                </label>
                <div className="modal-tallas-pills">
                  {producto.tallas.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`talla-pill ${tallaSel === t ? "active" : ""}`}
                      onClick={() => setTallaSel(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-actions">
              <button
                type="button"
                className="btn-modal-close"
                onClick={onClose}
              >
                Cerrar Detalle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
