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
                  genero="DAMA"
                  titulo="Dama"
                  descripcion="Descubre fajas moldeadoras, brasieres segunda piel y moda femenina de alta calidad"
                />
              }
            />
            <Route
              path="/varon"
              element={
                <CatalogoPage
                  genero="VARON"
                  titulo="Varon"
                  descripcion="Explora camisas casuales, trajes sastre, ropa interior y lo mas selecto en moda masculina"
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