import Products from "./Pages/Products";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import {Routes, Route} from 'react-router-dom' 

function App() {
  return (
    <Routes>
      <Route path = '/Home' element = {<Home />} />
      <Route path = '/About' element = {<About />} />
      <Route path = '/Cart' element = {<Cart />} />
      <Route path = '/' element = {<Products />} />

    </Routes>
  );
}

export default App;
