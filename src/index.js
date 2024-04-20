import "./index.css";
import { createRoot } from "react-dom/client";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/3D_Portfolio_website/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/3D_Portfolio_website/" element={<Home />} />
        <Route path="/3D_Portfolio_website/about" element={<About />} />
        <Route path="/3D_Portfolio_website/projects" element={<Projects />} />
        <Route path="/3D_Portfolio_website/contact" element={<Contact />} />
      </Routes>

      {location.pathname === "/" && (
        <div class="controls">
          <p>press w a s d to move</p>
          <p>press k to swap camera</p>
          <p>press r to reset</p>
          <p>press arrows for flips</p>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
