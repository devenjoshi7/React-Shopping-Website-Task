import React, { useState } from "react";

const Cart = ({ cart, removeFromCart }) => {
  const [quantity, setQuantity] = useState(1);

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

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    totalPrice += item.product.basePrice * quantity;
  }

  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <h1>Your Shopping Cart is Empty</h1>
          <hr />
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-box" key={item.id}>
              <div className="cart-img">
                <img
                  src={item.product.featuredImage}
                  alt=""
                  height={100}
                  width={200}
                />
                <p>{item.product.name}</p>
                <p>{item.product.brand}</p>
                <p>{item.color}</p>
              </div>
              <div>
                <button onClick={increment}>+</button>
                <span>{item.quantity}</span>
                <button onClick={decrement}>-</button>
              </div>
              <div>
                <span>${item.product.basePrice * quantity}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              <div className="total"></div>
            </div>
          ))}
          <span>Total Amount : </span>
          <span>Rs - ${totalPrice}</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
