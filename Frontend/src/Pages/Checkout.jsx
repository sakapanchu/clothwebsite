import React, { useContext, useState } from "react";
import { ShopContext } from '../Context/ShopContext';
import "./CSS/Checkout.css";

const Checkout = () => {
  const { cartItems, all_product, getTotalCartAmount } = useContext(ShopContext);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState({});

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({ ...billingAddress, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Payment validation
    if (!paymentDetails.cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = "Invalid card number.";
    }
    if (!paymentDetails.expirationDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      newErrors.expirationDate = "Invalid expiration date (MM/YY).";
    }
    if (!paymentDetails.cvv.match(/^\d{3}$/)) {
      newErrors.cvv = "Invalid CVV.";
    }

    // Shipping address validation
    if (!shippingAddress.fullName.trim()) {
      newErrors.shippingFullName = "Full name is required.";
    }
    if (!shippingAddress.address.trim()) {
      newErrors.shippingAddress = "Address is required.";
    }
    if (!shippingAddress.city.trim()) {
      newErrors.shippingCity = "City is required.";
    }
    if (!shippingAddress.state.trim()) {
      newErrors.shippingState = "State is required.";
    }
    if (!shippingAddress.zipCode.match(/^\d{5}$/)) {
      newErrors.shippingZipCode = "Invalid ZIP code.";
    }

    // Billing address validation (optional, can be same as shipping)
    if (!billingAddress.fullName.trim()) {
      newErrors.billingFullName = "Full name is required.";
    }
    if (!billingAddress.address.trim()) {
      newErrors.billingAddress = "Address is required.";
    }
    if (!billingAddress.city.trim()) {
      newErrors.billingCity = "City is required.";
    }
    if (!billingAddress.state.trim()) {
      newErrors.billingState = "State is required.";
    }
    if (!billingAddress.zipCode.match(/^\d{5}$/)) {
      newErrors.billingZipCode = "Invalid ZIP code.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with payment (e.g., call an API)
      alert("Payment successful! Thank you for your purchase.");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-container">
        <div className="order-summary">
          <h3>Order Summary</h3>
          {Object.keys(cartItems).map((itemId) => {
            if (cartItems[itemId] > 0) {
              const product = all_product.find((p) => p.id === Number(itemId));
              return (
                <div key={itemId} className="order-item">
                  <img src={product.image} alt={product.name} />
                  <div className="item-details">
                    <p>{product.name}</p>
                    <p>Quantity: {cartItems[itemId]}</p>
                    <p>Price: ${product.new_price * cartItems[itemId]}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <p className="total">Total: ${getTotalCartAmount().toFixed(2)}</p>
        </div>

        <form className="payment-form" onSubmit={handleSubmit}>
          <h3>Payment Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentChange}
                placeholder="1234 5678 9012 3456"
                required
              />
              {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
            </div>
            <div className="form-group">
              <label>Expiration Date</label>
              <input
                type="text"
                name="expirationDate"
                value={paymentDetails.expirationDate}
                onChange={handlePaymentChange}
                placeholder="MM/YY"
                required
              />
              {errors.expirationDate && <p className="error">{errors.expirationDate}</p>}
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentChange}
                placeholder="123"
                required
              />
              {errors.cvv && <p className="error">{errors.cvv}</p>}
            </div>
          </div>

          <h3>Shipping Address</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={shippingAddress.fullName}
                onChange={handleShippingChange}
                required
              />
              {errors.shippingFullName && <p className="error">{errors.shippingFullName}</p>}
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={shippingAddress.address}
                onChange={handleShippingChange}
                required
              />
              {errors.shippingAddress && <p className="error">{errors.shippingAddress}</p>}
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={shippingAddress.city}
                onChange={handleShippingChange}
                required
              />
              {errors.shippingCity && <p className="error">{errors.shippingCity}</p>}
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={shippingAddress.state}
                onChange={handleShippingChange}
                required
              />
              {errors.shippingState && <p className="error">{errors.shippingState}</p>}
            </div>
            <div className="form-group">
              <label>ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={shippingAddress.zipCode}
                onChange={handleShippingChange}
                required
              />
              {errors.shippingZipCode && <p className="error">{errors.shippingZipCode}</p>}
            </div>
          </div>

          <h3>Billing Address</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={billingAddress.fullName}
                onChange={handleBillingChange}
                required
              />
              {errors.billingFullName && <p className="error">{errors.billingFullName}</p>}
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={billingAddress.address}
                onChange={handleBillingChange}
                required
              />
              {errors.billingAddress && <p className="error">{errors.billingAddress}</p>}
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={billingAddress.city}
                onChange={handleBillingChange}
                required
              />
              {errors.billingCity && <p className="error">{errors.billingCity}</p>}
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={billingAddress.state}
                onChange={handleBillingChange}
                required
              />
              {errors.billingState && <p className="error">{errors.billingState}</p>}
            </div>
            <div className="form-group">
              <label>ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={billingAddress.zipCode}
                onChange={handleBillingChange}
                required
              />
              {errors.billingZipCode && <p className="error">{errors.billingZipCode}</p>}
            </div>
          </div>

          <button type="submit" className="submit-button">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;