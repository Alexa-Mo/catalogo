import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CatalogoPage from "./pages/CatalogoPage";
import TiendaDetalle from "./pages/TiendaDetalle";

export default function App() {
  return (
    <HashRouter>
      <div className="app-root">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dama"
              element={
                <CatalogoPage
                  key="dama"
                  genero="DAMA"
                  titulo="Dama"
                  descripcion="Descubre pantalones en tendencia, fajas moldeadoras, brasieres segunda piel y moda femenina de alta calidad"
                />
              }
            />
            <Route
              path="/varon"
              element={
                <CatalogoPage
                  key="varon"
                  genero="VARON"
                  titulo="Varon"
                  descripcion="Descubre boxers de bambú, seda árabe, combos exclusivos y lo más selecto en moda masculina"
                />
              }
            />
            <Route
              path="/interiores"
              element={
                <CatalogoPage
                  key="interiores"
                  categoriaFiltro="Interiores"
                  titulo="Interiores"
                  descripcion="Explora pantys modeladoras, prendas de algodón con encaje y ropa interior de máxima comodidad y frescura"
                />
              }
            />
            <Route path="/tienda/:slug" element={<TiendaDetalle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}