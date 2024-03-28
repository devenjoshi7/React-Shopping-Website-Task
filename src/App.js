import Products from "./Pages/Products";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Nav from "./Navigation/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
