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
    if (location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
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
  <Router >
    <App />
  </Router>
);
