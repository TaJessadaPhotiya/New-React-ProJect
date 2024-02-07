import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./App.css";

//Pages
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Epic1 from "./pages/about/epic1/Epic1";
import Epic2 from "./pages/about/epic2/Epic2";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about/epic1" element={<Epic1 />} />
        <Route path="about/epic2" element={<Epic2 />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
