import './Filters.css'
import { IoGrid } from "react-icons/io5";
import { BsList } from "react-icons/bs";

function Filters() {
    return(
        <div className="filter-container">
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
                        <label className='filter-price' htmlFor="pricenumber">$1,000.00</label>
                        <label className='filter-price' htmlFor="shipping">Free Shipping</label>
                        <button className='filter-button-search' type="submit">Search</button>
                        <button className='filter-button-reset' type="reset">Reset</button>
                </div>
                <div className='range-container'>
                        <input className='filter-range' type="range" name="price" id="price" min={0} max={1000} />
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
        </div>
    );
}

export default Filters