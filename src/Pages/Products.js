import avantlamp from '../Images/pexels-photo-943150.webp'
import chicchair from '../Images/pexels-photo-5705090.webp'
import coffeetable from '../Images/pexels-photo-3679601.jpeg'
import comfybed from '../Images/pexels-photo-1034584.jpeg'
import contempsofa from '../Images/pexels-photo-1571459.webp'
import cuttingedgebed from '../Images/pexels-photo-2029694.jpeg'
import futuristicshelves from '../Images/pexels-photo-2177482.jpeg'
import glasstable from '../Images/pexels-photo-1571452.jpeg'
import kingbed from '../Images/pexels-photo-6489083.webp'
import loungechair from '../Images/pexels-photo-2082090.webp'
import './Products.css'
import Navigation from '../Navigation/Nav'
import Filters from '../Filters/Filters'
 
 function Products() {
  return (
    <>
      <Navigation />
      <Filters />

      <div>

        <div className='main'>
          
          <a href="/AvantLampDetails" className='avant-lamp'>
            <figure className='lamp-figure'>
              <img src={avantlamp} alt="Product" className='lamp-image' />
            </figure>
            <div className='lamp-details'>
              <h2 className='lamp-name'>Avant-Garde Lamp</h2>
              <span className='lamp-price'>$179.99</span>
            </div>
          </a>

          <a href="/ChicChairDetails" className='chic-chair'>
            <figure className='chic-chair-figure'>
              <img src={chicchair} alt="Product" className='chic-chair-image' />
            </figure>
            <div className='chic-chair-details'>
              <h2 className='chic-chair-name'>Chic Chair</h2>
              <span className='chic-chair-price'>$339.99</span>
            </div>
          </a>

          <a href="/CoffeeTableDetails" className='coffee-table'>
            <figure className='coffee-table-figure'>
              <img src={coffeetable} alt="Product" className='coffee-table-image' />
            </figure>
            <div className='coffee-table-details'>
              <h2 className='coffee-table-name'>Coffee Table</h2>
              <span className='coffee-table-price'>$179.99</span>
            </div>
          </a>

          <a href="/ComfyBedDetails" className='comfybed'>
            <figure className='comfybed-figure'>
              <img src={comfybed} alt="Product" className='comfybed-image' />
            </figure>
            <div className='comfybed-details'>
              <h2 className='comfybed-name'>Comfy Bed</h2>
              <span className='comfybed-price'>$339.99</span>
            </div>
          </a>
          
          <a href="/ContempSofaDetails" className='contempsofa'>
            <figure className='contempsofa-figure'>
              <img src={contempsofa} alt="Product" className='contempsofa-image' />
            </figure>
            <div className='contempsofa-details'>
              <h2 className='contempsofa-name'>Contemporary Sofa</h2>
              <span className='contempsofa-price'>$339.99</span>
            </div>
          </a>
          
          <a href="/CuttingEdgeBed" className='cuttingedgebed'>
            <figure className='cuttingedgebed-figure'>
              <img src={cuttingedgebed} alt="Product" className='cuttingedgebed-image' />
            </figure>
            <div className='cuttingedgebed-details'>
              <h2 className='cuttingedgebed-name'>Cutting-Edge Bed</h2>
              <span className='cuttingedgebed-price'>$339.99</span>
            </div>
          </a>
          
          <a href="/FuturisticShelvesDetails" className='futuristicshelves'>
            <figure className='futuristicshelves-figure'>
              <img src={futuristicshelves} alt="Product" className='futuristicshelves-image' />
            </figure>
            <div className='futuristicshelves-details'>
              <h2 className='futuristicshelves-name'>Futuristic Shelves</h2>
              <span className='futuristicshelves-price'>$339.99</span>
            </div>
          </a>

          <a href="/GlassTableDetails" className='glasstable'>
            <figure className='glasstable-figure'>
              <img src={glasstable} alt="Product" className='glasstable-image' />
            </figure>
            <div className='glasstable-details'>
              <h2 className='glasstable-name'>Glass Table</h2>
              <span className='glasstable-price'>$339.99</span>
            </div>
          </a>

          <a href="/KingBedDetails" className='kingbed'>
            <figure className='kingbed-figure'>
              <img src={kingbed} alt="Product" className='kingbed-image' />
            </figure>
            <div className='kingbed-details'>
              <h2 className='kingbed-name'>King Bed</h2>
              <span className='kingbed-price'>$339.99</span>
            </div>
          </a>

          <a href="/LoungeChairDetails" className='loungechair'>
            <figure className='loungechair-figure'>
              <img src={loungechair} alt="Product" className='loungechair-image' />
            </figure>
            <div className='loungechair-details'>
              <h2 className='loungechair-name'>Lounge Chair</h2>
              <span className='loungechair-price'>$339.99</span>
            </div>
          </a>

        </div>

      </div>

    </>
  )
}

export default Products