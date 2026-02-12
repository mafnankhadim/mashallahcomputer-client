import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    createAccount: false,
    shipToDifferent: false,
    paymentMethod: "check",
    acceptTerms: false,
  });

  const cartItems = [
    { name: "House Coffee Original x 1", price: 110.0 },
    { name: "Medium Roast Ground Coffee x 1", price: 19.0 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shippingFee = 5.0;
  const grandTotal = subtotal + shippingFee;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
  };

  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcumb-area d-flex style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>Checkout</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="shop-product-section">
        <div className="container">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-7">
                {/* Billing Address */}
                <div id="billing-form">
                  <h4 className="check_title">Billing Address</h4>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <label className="lebel_name">First Name*</label>
                      <input
                        className="form-field"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label className="lebel_name">Last Name*</label>
                      <input
                        className="form-field"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label className="lebel_name">Email Address*</label>
                      <input
                        className="form-field"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label className="lebel_name">Phone no*</label>
                      <input
                        className="form-field"
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <label className="lebel_name">Company Name</label>
                      <input
                        className="form-field"
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <label className="lebel_name">Address*</label>
                      <input
                        className="form-field"
                        type="text"
                        name="address"
                        placeholder="Address line 1"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <label className="lebel_name">Town/City*</label>
                      <input
                        className="form-field"
                        type="text"
                        name="city"
                        placeholder="Town/City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label className="lebel_name">State*</label>
                      <input
                        className="form-field"
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <label className="lebel_name">Zip Code*</label>
                      <input
                        className="form-field"
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-check pt-10">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="create_account"
                          name="createAccount"
                          checked={formData.createAccount}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="create_account"
                        >
                          Create an Account?
                        </label>
                      </div>
                      <div className="form-check m-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="shiping_address"
                          name="shipToDifferent"
                          checked={formData.shipToDifferent}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="shiping_address"
                        >
                          Ship to Different Address
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                {/* Checkout Summary */}
                <h4 className="check_title two">Cart Total</h4>
                <div className="checkout-box">
                  <div className="table_box">
                    <table className="checkout-summary-table table table-borderless">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item, index) => (
                          <tr key={index}>
                            <td>{item.name}</td>
                            <td>${item.price.toFixed(2)}</td>
                          </tr>
                        ))}
                        <tr>
                          <td className="border-top">Sub Total</td>
                          <td className="border-top">${subtotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td className="border-top">Shipping Fee</td>
                          <td className="border-top">
                            ${shippingFee.toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th className="border-top">Grand Total</th>
                          <th className="border-top">
                            ${grandTotal.toFixed(2)}
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="checkout-box">
                  <h4 className="mb-4">Payment Method</h4>
                  <div className="checkout-payment-method">
                    <div className="single-method form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="payment_check"
                        name="paymentMethod"
                        value="check"
                        checked={formData.paymentMethod === "check"}
                        onChange={handleInputChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="payment_check"
                      >
                        Check Payment
                      </label>
                      {formData.paymentMethod === "check" && (
                        <p>
                          Please send a Check to Store name with Store Street,
                          Store Town, Store State, Store Postcode, Store
                          Country.
                        </p>
                      )}
                    </div>

                    <div className="single-method form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="payment_bank"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === "bank"}
                        onChange={handleInputChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="payment_bank"
                      >
                        Direct Bank Transfer
                      </label>
                      {formData.paymentMethod === "bank" && (
                        <p>Make your payment directly into our bank account.</p>
                      )}
                    </div>

                    <div className="single-method form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="payment_cash"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === "cash"}
                        onChange={handleInputChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="payment_cash"
                      >
                        Cash on Delivery
                      </label>
                      {formData.paymentMethod === "cash" && (
                        <p>Pay with cash upon delivery.</p>
                      )}
                    </div>

                    <div className="single-method form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="payment_card"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleInputChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="payment_card"
                      >
                        Card Payment
                      </label>
                      {formData.paymentMethod === "card" && (
                        <p>Pay securely using your credit or debit card.</p>
                      )}
                    </div>

                    <div className="single-method form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="accept_terms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        required
                      />
                      <label
                        className="form-check-label mb-4"
                        htmlFor="accept_terms"
                      >
                        I've read and accept the terms & conditions
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn two rounded-0 mt-6">
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
