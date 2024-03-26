import Products from "./Pages/Products";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import AvantLampDetails from "./ProductDetails/1";
import ChicChairDetails from "./ProductDetails/2";
import CoffeeTableDetails from "./ProductDetails/3";
import ComfyBedDetails from "./ProductDetails/4";
import ContempSofaDetails from "./ProductDetails/5";
import CuttingEdgeBed from "./ProductDetails/6";
import FuturisticShelvesDetails from "./ProductDetails/7";
import GlassTableDetails from "./ProductDetails/8";
import KingBedDetails from "./ProductDetails/9";
import LoungeChairDetails from "./ProductDetails/10"
import {Routes, Route} from 'react-router-dom' 

function App() {
  return (
    <Routes>
      <Route path = '/Home' element = {<Home />} />
      <Route path = '/About' element = {<About />} />
      <Route path = '/Cart' element = {<Cart />} />
      <Route path = '/' element = {<Products />} />
      <Route path = '/1' element = {<AvantLampDetails />} />
      <Route path = '/2' element = {<ChicChairDetails />} />
      <Route path = '/3' element = {<CoffeeTableDetails />} />
      <Route path = '/4' element = {<ComfyBedDetails />} />
      <Route path = '/5' element = {<ContempSofaDetails />} />
      <Route path = '/6' element = {<CuttingEdgeBed />} />
      <Route path = '/7' element = {<FuturisticShelvesDetails />} />
      <Route path = '/8' element = {<GlassTableDetails />} />
      <Route path = '/9' element = {<KingBedDetails />} />
      <Route path = '/10' element = {<LoungeChairDetails />} />
    </Routes>
  );
}

export default App;
