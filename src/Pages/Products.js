import "./Products.css";
import { useState, useEffect } from "react";
import { IoGrid } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PuffLoader } from "react-spinners";

function Products() {
  const [range, setRange] = useState(0);
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyapi.online/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <PuffLoader
          className="loader"
          color="hsla(231, 62%, 59%, 1)"
          loading={loading}
          size={80}
        />
      ) : (
        <div>
          <form className="form">
            <div className="label-container">
              <label className="filter-label" htmlFor="search">
                Search Product
              </label>
              <label className="filter-label" htmlFor="category">
                Select Category
              </label>
              <label className="filter-label" htmlFor="company">
                Select Company
              </label>
              <label className="filter-label" htmlFor="sort">
                Sort By
              </label>
            </div>
            <div className="select-container">
              <input
                className="filter-select"
                type="text"
                name="search"
                id="search"
              />
              <select className="filter-select" name="category" id="category">
                <option value="all">all</option>
                <option value="Tables">Tables</option>
                <option value="Chairs">Chairs</option>
                <option value="Kids">Kids</option>
                <option value="Sofas">Sofas</option>
                <option value="Beds">Beds</option>
              </select>
              <select className="filter-select" name="company" id="company">
                <option value="all">all</option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comfora">Comfora</option>
                <option value="HomeStead">Homestead</option>
              </select>
              <select className="filter-select" name="sort" id="sort">
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
            </div>
            <div className="price-container">
              <label className="filter-price" htmlFor="price">
                {" "}
                Select Price{" "}
              </label>
              <label className="filter-price" htmlFor="pricenumber">
                ${range}
              </label>
              <label className="filter-price" htmlFor="shipping">
                Free Shipping
              </label>
              <button className="filter-button-search">Search</button>
              <button className="filter-button-reset" type="reset">
                Reset
              </button>
            </div>
            <div className="range-container">
              <input
                className="filter-range"
                type="range"
                name="price"
                id="price"
                min={0}
                max={1000}
                onChange={(e) => setRange(e.target.value)}
              />
              <input
                className="filter-range-checkbox"
                type="checkbox"
                name="shipping"
                id="shipping"
              />
            </div>
            <div className="range-details">
              <label className="zero-range" htmlFor="zero">
                0
              </label>
              <label className="max-range" htmlFor="max">
                Max:$1000.00
              </label>
            </div>
            <div className="count-container">
              <label className="product-count" htmlFor="no-of-products">
                24 Products
              </label>
            </div>
            <div className="product-display">
              <IoGrid className="grid-display" />
              <BsList className="list-display" />
            </div>
            <div>
              <hr className="horizontal" />
            </div>
          </form>

          <div className="main">
            {Array.isArray(products) &&
              products.map((product) => (
                <Link
                  key={product.id}
                  className="product"
                  to={`/products/${product.id}`}
                >
                  <input type="hidden" name="id" value={product.id} />
                  <figure className="product-figure">
                    <img
                      src={product.featuredImage}
                      alt="Product"
                      className="product-image"
                    />
                  </figure>
                  <div className="product-details">
                    <h2 className="product-name">{product.name}</h2>
                    <span className="product-price">${product.basePrice}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
