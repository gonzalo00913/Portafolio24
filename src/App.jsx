import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Nav from "./components/Nav/Nav";

function App() {
  // Obtenemos la ubicación actual
  const location = useLocation();

  // Verificamos si estamos en la página de Header
  const isHeaderPage = location.pathname === '/';

  return (
    <div className="main-center">
      <Nav />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
      {isHeaderPage && <Footer />} {/* Renderizamos el Footer solo en la página de Header */}
    </div>
  );
}

export default App;

