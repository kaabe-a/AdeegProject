import { useEffect, useState } from "react";
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
import Cart from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/ShopContext";
import Contact from "./pages/Contact";
import { ProductContextProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.screenY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <ProductContextProvider>
      <CartProvider>
        <ShopContextProvider>
          <Router>
            <div
              className={`${
                isActive ? "bg-white" : "bg-white fixed-top z-index-1"
              }`}
            >
              <TopNavbar />
              <Navbar />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/products" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="*" element={<h3>Page Not Found</h3>} />
            </Routes>
            <Footer />
          </Router>
        </ShopContextProvider>
      </CartProvider>
    </ProductContextProvider>
  );
}

export default App;
