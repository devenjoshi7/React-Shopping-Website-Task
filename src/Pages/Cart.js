import "./Cart.css";

const Cart = ({ cart, removeFromCart, setCart }) => {
  const handleQuantityChange = (id, color, newQuantity) => {
    if (newQuantity <= 1) {
      newQuantity = 1;
    } else if (newQuantity > 20) {
      newQuantity = 20;
    }
    const updatedCart = cart.map((item) => {
      if (item.product.id === id && item.color === color) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    totalPrice += item.product.basePrice * item.quantity;
  }

  return (
    <div className="main-div">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h1>Your Shopping Cart is Empty</h1>
          <hr />
        </div>
      ) : (
        <div className="cart-product">
          {cart.map((item) => (
            <div className="cart-box" key={item.id}>
              <div className="cart-img">
                <img src={item.product.featuredImage} alt="" />
              </div>
              <div className="cart-details">
                <p>{item.product.name}</p>
                <p>{item.product.brand}</p>
                <p>{item.color}</p>
              </div>
              <div className="cart-button">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.product.id,
                      item.color,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.product.id,
                      item.color,
                      item.quantity - 1
                    )
                  }
                >
                  -
                </button>
              </div>
              <div className="cart-price">
                <span>${item.product.basePrice * item.quantity}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <hr />
          <div className="cart-total">
            <span className="amount-text">Total Amount :</span>
            <span className="amount-figure">Rs - ${totalPrice}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
