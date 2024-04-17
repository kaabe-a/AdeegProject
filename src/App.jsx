import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Unicons from "@iconscout/react-unicons";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TopNavbar from "./components/TopNavbar";
import Navbar from "./components/Navbar";
import Product from "./pages/product/Product";
import Footer from "./components/Footer";
import ProductDetail from "./pages/productDetail/ProductDetail";

function App() {

  return (
    <div>
      <Router>
        <div>
          <TopNavbar />
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
