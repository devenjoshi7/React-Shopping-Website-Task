import React, { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const increment = () => {
    setQuantity(quantity + 1);
    if (quantity === 20) {
      setQuantity(20);
    }
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
      setQuantity(1);
    }
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <h1>Your Shopping Cart is Empty</h1>
          <hr />
        </div>
      ) : (
        cart.map((item) => (
          <div className="cart-box" key={item.id}>
            <div className="cart-img">
              <img src={item.featuredImage} alt="" />
              <p>{item.name}</p>
            </div>
            <div>
              <button onClick={increment}>+</button>
              <span>{quantity}</span>
              <button onClick={decrement}>-</button>
            </div>
            <div>
              <span>${item.basePrice * quantity}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
            <div className="total">
              <span>Total Amount : </span>
              <span>Rs - ${item.basePrice * quantity}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
