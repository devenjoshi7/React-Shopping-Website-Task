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

  const addToCart = (product, color, quantity) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.color === color
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { product, color, quantity }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  let totalQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity += cart[i].quantity;
  }

  return (
    <div className="main-div">
      <div>
        <Nav size={totalQuantity} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                setCart={setCart}
              />
            }
          />
          <Route path="/" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
