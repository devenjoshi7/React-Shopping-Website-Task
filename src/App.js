import Products from "./Pages/Products";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import AvantLampDetails from "./ProductDetails/AvantLampDetails";
import ChicChairDetails from "./ProductDetails/ChicChairDetails";
import CoffeeTableDetails from "./ProductDetails/CoffeeTableDetails";
import ComfyBedDetails from "./ProductDetails/ComfyBedDetails";
import ContempSofaDetails from "./ProductDetails/ContempSofaDetails";
import CuttingEdgeBed from "./ProductDetails/CuttingEdgeBed";
import FuturisticShelvesDetails from "./ProductDetails/FuturisticShelvesDetails";
import GlassTableDetails from "./ProductDetails/GlassTableDetails";
import KingBedDetails from "./ProductDetails/KingBedDetails";
import LoungeChairDetails from "./ProductDetails/LoungeChairDetails"
import {Routes, Route} from 'react-router-dom' 

function App() {
  return (
    <Routes>
      <Route path = '/Home' element = {<Home />} />
      <Route path = '/About' element = {<About />} />
      <Route path = '/Cart' element = {<Cart />} />
      <Route path = '/' element = {<Products />} />
      <Route path = '/AvantLampDetails' element = {<AvantLampDetails />} />
      <Route path = '/ChicChairDetails' element = {<ChicChairDetails />} />
      <Route path = '/CoffeeTableDetails' element = {<CoffeeTableDetails />} />
      <Route path = '/ComfyBedDetails' element = {<ComfyBedDetails />} />
      <Route path = '/ContempSofaDetails' element = {<ContempSofaDetails />} />
      <Route path = '/CuttingEdgeBed' element = {<CuttingEdgeBed />} />
      <Route path = '/FuturisticShelvesDetails' element = {<FuturisticShelvesDetails />} />
      <Route path = '/GlassTableDetails' element = {<GlassTableDetails />} />
      <Route path = '/KingBedDetails' element = {<KingBedDetails />} />
      <Route path = '/LoungeChairDetails' element = {<LoungeChairDetails />} />
    </Routes>
  );
}

export default App;
