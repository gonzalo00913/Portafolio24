import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import Certifications from "./components/Cerifications/Certifications";

function App() {
  const location = useLocation();

  const showFooter = location.pathname !== "/Certifications";
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Certifications" element={<Certifications />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
