import { useState } from "react";
import { Link } from "react-router-dom";

// Image imports
import cartImg from "/assets/images/inner-img/cart.jpg";
import cart2Img from "/assets/images/inner-img/cart2.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "House Coffee Original",
      price: 110.0,
      quantity: 1,
      image: cartImg,
    },
    {
      id: 2,
      name: "Medium Roast Ground Coffee",
      price: 19.0,
      quantity: 1,
      image: cart2Img,
    },
  ]);

  const shippingFee = 5.0;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const total = subtotal + shippingFee;

  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcumb-area d-flex style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>Cart</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <section className="cart-section">
        <div className="container">
          <div className="row mb-n6 mb-lg-n10">
            <h2 className="cart-title mb-4">Cart List</h2>
            <div className="col-12 mb-6 mb-lg-10">
              {/* Cart Table */}
              <table className="cart-table table table-bordered text-center align-middle mb-6 d-none d-md-table">
                <thead>
                  <tr>
                    <th className="imag">Image</th>
                    <th className="titl">Product</th>
                    <th className="pric">Price</th>
                    <th className="quantit">Quantity</th>
                    <th className="tota">Total</th>
                    <th className="remov">Remove</th>
                  </tr>
                </thead>
                <tbody className="border-top-0">
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <th>
                        <Link to="/shop-details">
                          <img
                            className="cart-thumb"
                            src={item.image}
                            alt={item.name}
                          />
                        </Link>
                      </th>
                      <td>
                        <Link to="/shop-details">{item.name}</Link>
                      </td>
                      <td className="price">${item.price.toFixed(2)}</td>
                      <td>
                        <div className="product-quantity-count">
                          <input
                            className="quantity"
                            type="number"
                            name="quantity"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value))
                            }
                          />
                        </div>
                      </td>
                      <td className="total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td>
                        <button
                          className="remove-btn"
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Cart Action Buttons */}
              <div className="row justify-content-between gap-3">
                <div className="col-auto cat-shop-btn">
                  <Link to="/shop">
                    <button>Continue Shopping</button>
                  </Link>
                </div>
                <div className="col-auto">
                  <button>Update Cart</button>
                  <button onClick={() => setCartItems([])}>Clear Cart</button>
                </div>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="col mb-6 d-none d-md-table">
              <div className="cart-totals">
                <h4 className="title">Cart totals</h4>
                <table className="table table-borderless bg-transparent">
                  <tbody>
                    <tr className="subtotal">
                      <th>Subtotal</th>
                      <td>
                        <span id="subtotal">£{subtotal.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr className="shopping-fee">
                      <th>Shopping Fee</th>
                      <td>
                        <span id="shopping">${shippingFee.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr className="total">
                      <th>Total</th>
                      <td>
                        <strong>
                          <span id="total">£{total.toFixed(2)}</span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link to="/checkout" className="show-alert btn btn-dark">
                  Proceed to checkout
                </Link>
              </div>
            </div>

            {/* Cart Totals For Mobile */}
            <div className="col d-md-none">
              <div className="cart-totals">
                <h4 className="title">Cart totals</h4>
                <table className="table table-borderless">
                  <tbody>
                    <tr className="subtotal">
                      <th>Subtotal</th>
                      <td>
                        <span>£{subtotal.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr className="shopping-fee">
                      <th>Shopping Fee</th>
                      <td>
                        <span>${shippingFee.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr className="total">
                      <th>Total</th>
                      <td>
                        <strong>
                          <span>£{total.toFixed(2)}</span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link to="/checkout" className="show-alert btn btn-dark">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
