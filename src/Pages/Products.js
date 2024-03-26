import './Products.css'
import Navigation from '../Navigation/Nav'
import data from '../data/data'
import { useState } from 'react';
import { IoGrid } from "react-icons/io5";
import { BsList } from "react-icons/bs";
 
 function Products() {

  const [range, setRange] = useState(0)

  const [search, setSearch] = useState('')

  return (
    <>
      <Navigation />

      <div>

        <form className="form">

          <div className="label-container">
            <label className='filter-label' htmlFor="search">Search Product</label>
            <label className='filter-label' htmlFor="category">Select Category</label>
            <label className='filter-label' htmlFor="company">Select Company</label>
            <label className='filter-label' htmlFor="sort">Sort By</label>
          </div>
          <div className='select-container'>
            <input className='filter-select' type="text" name="search" id="search" />
              <select className='filter-select' name="category" id="category">
                <option value="all">all</option>
                <option value="Tables">Tables</option>
                <option value="Chairs">Chairs</option>
                <option value="Kids">Kids</option>
                <option value="Sofas">Sofas</option>
                <option value="Beds">Beds</option>
              </select>
              <select className='filter-select' name="company" id="company">
                <option value="all">all</option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comfora">Comfora</option>
                <option value="HomeStead">Homestead</option>
              </select>
              <select className='filter-select' name="sort" id="sort">
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
          </div>
          <div className='price-container'>
            <label className='filter-price' htmlFor="price"> Select Price </label>
            <label className='filter-price' htmlFor="pricenumber">${range}</label>
            <label className='filter-price' htmlFor="shipping">Free Shipping</label>
            <button className='filter-button-search' type="submit" onClick={(e) => setSearch(e.target.value)}>Search</button>
            <button className='filter-button-reset' type="reset">Reset</button>
          </div>
          <div className='range-container'>
            <input className='filter-range' type="range" name="price" id="price" min={0} max={1000} onChange={(e) => setRange(e.target.value)} />
            <input className='filter-range-checkbox' type="checkbox" name="shipping" id="shipping" />                
          </div>
          <div className='range-details'>
            <label className='zero-range' htmlFor="zero">0</label>
            <label className='max-range' htmlFor="max">Max:$1000.00</label>
          </div>
          <div className='count-container'>
            <label className='product-count' htmlFor="no-of-products">22 Products</label>
          </div>
          <div className='product-display'>    
            <IoGrid className='grid-display' />
            <BsList className='list-display' />
          </div>
          <div>
            <hr className='horizontal' />
          </div>

        </form>

        <div className='main'>

          {data.filter((item) => {
            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
          }).map((item) => <a href={item.id} className='product'>
            <input type="hidden" name="id" value={item.id} />
            <figure className='product-figure'>
              <img src={item.img} alt="Product" className='product-image' />
            </figure>
            <div className='product-details'>
              <h2 className='product-name'>{item.title}</h2>
              <span className='product-price'>{item.price}</span>
            </div>
          </a>)}
          
        </div>

      </div>

    </>
  )
}

export default Products