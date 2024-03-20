import Navigation from "./Navigation/Nav";
import Filters from "./Filters/Filters";
import Products from "./Pages/Products";
import avantlamp from './Images/pexels-photo-943150.webp'
import chicchair from './Images/pexels-photo-5705090.webp'
import coffeetable from './Images/pexels-photo-3679601.jpeg'
import comfybed from './Images/pexels-photo-1034584.jpeg'
import contempsofa from './Images/pexels-photo-1571459.webp'
import cuttingedgebed from './Images/pexels-photo-2029694.jpeg'
import futuristicshelves from './Images/pexels-photo-2177482.jpeg'
import glasstable from './Images/pexels-photo-1571452.jpeg'
import kingbed from './Images/pexels-photo-6489083.webp'
import loungechair from './Images/pexels-photo-2082090.webp'

function App() {
  return (
    <>  
        <Navigation />
        <Filters />
        <Products image = {avantlamp} name = 'Avant-Garde Lamp' price={179.99} />
        <Products image = {chicchair} name = 'Chic Chair' price={339.99} />
        <Products image = {coffeetable} name = 'Coffee Table' price={179.99} />
        <Products image = {comfybed} name = 'Comfy Bed' price={129.99} />
        <Products image = {contempsofa} name = 'Contemporary Sofa' price={159.99} />
        <Products image = {cuttingedgebed} name = 'Cutting-Edge Bed' price={84.99} />
        <Products image = {futuristicshelves} name = 'Futuristic Shelves' price={94.99} />
        <Products image = {glasstable} name = 'Glass Table' price={159.99} />
        <Products image = {kingbed} name = 'King Bed' price={189.99} />
        <Products image = {loungechair} name = 'Lounge Chair' price={259.99} />
    </>  
  );
}

export default App;
