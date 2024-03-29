import Products from "./Pages/Products";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import Nav from "./Navigation/Nav";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="main-div">
      {loading ? (
        <PuffLoader
          className="loader"
          color="hsla(231, 62%, 59%, 1)"
          loading={loading}
          size={80}
        />
      ) : (
        <div>
          <Nav />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
