import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

function ProductDetails({ addToCart }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyapi.online/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  const handleColorSelection = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null);
    } else {
      setSelectedColor(color);
    }
  };

  const handleQuantityChange = (e) => {
    setSelectedQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    if (selectedColor) {
      addToCart(product, selectedColor, selectedQuantity);
    }
  };

  return (
    <div>
      <div className="main-container">
        <div className="Navigation">
          <ul className="unordered-list">
            <li className="list-item">
              {" "}
              <a href="/Home"> Home </a>{" "}
            </li>
            <li className="list-item">&gt;</li>
            <li className="list-item">
              {" "}
              <a href="/"> Products </a>{" "}
            </li>
          </ul>
        </div>

        {loading ? (
          <PuffLoader
            className="loader"
            color="hsla(231, 62%, 59%, 1)"
            loading={loading}
            size={80}
          />
        ) : (
          <div>
            <div className="product-container">
              <div key={product.id}>
                <img
                  className="product-image"
                  src={product.featuredImage}
                  alt=""
                />
                <div className="product-description">
                  <h1 className="product-name">{product.name}</h1>
                  <h4 className="product-company">{product.brand}</h4>
                  <p className="product-price">${product.basePrice}</p>
                  <p className="product-details">{product.description}</p>
                </div>
              </div>
            </div>

            <div className="choice-container">
              <div className="colors-container">
                <h4 className="available-colors">Colors</h4>
              </div>

              <div className="button-container">
                {product.colorOptions.map((color, index) => (
                  <button
                    key={index}
                    className={`color-button${
                      selectedColor === color ? " selected" : ""
                    }`}
                    onClick={() => handleColorSelection(color)}
                  >
                    {selectedColor === color ? <span>&#10003;</span> : color}
                  </button>
                ))}
              </div>

              <div className="quantity-container">
                <h4 className="product-amount">Amount</h4>
                <select
                  className="product-quantity"
                  id="quantity"
                  value={selectedQuantity}
                  onChange={handleQuantityChange}
                >
                  {[...Array(20).keys()].map((quantity) => (
                    <option key={quantity} value={quantity + 1}>
                      {quantity + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="add-to-bag-container">
                <button className="product-bag" onClick={handleAddToCart}>
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
