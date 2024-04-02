import Products from "./Pages/Products";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import Nav from "./Navigation/Nav";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  return (
    <div className="main-div">
      <div>
        <Nav size={cart.length} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductDetails handleClick={handleClick} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
