import React, { useState } from 'react';
import './CheckOutPage.css';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      details: "Black | Size: L",
      price: 49.99,
      quantity: 2,
      image: "https://loremflickr.com/300/300/t-shirt",
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      details: "Dark Blue | Size: 32",
      price: 89.99,
      quantity: 1,
      image: "https://loremflickr.com/300/300/jeans",
    },
    {
      id: 3,
      name: "Classic Leather Jacket",
      details: "Brown | Size: M",
      price: 159.99,
      quantity: 1,
      image: "https://loremflickr.com/300/300/leatherjacket",
    }
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const shipping = 9.99;
  const total = subtotal + tax + shipping;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    alert(`Payment of ₹${total.toFixed(2)} processed successfully!`);
  };

  return (
    <div className="checkout-page bg-dark min-vh-100">
      {/* Header spacer - adjust height based on your actual header height */}
      <div className="header-spacer" style={{ height: '80px' }}></div>

      <div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '90%' }}>
        <div className="row g-3 g-md-4">
          {/* Left Column - Cart Items */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card bg-dark text-white border-secondary h-100">
              <div className="card-header bg-secondary py-3">
                <h2 className="mb-0 fs-4 fs-md-3">Your Cart</h2>
                <span className="text-muted small">{cartItems.length} items</span>
              </div>
              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  {cartItems.map((item, index) => (
                    <div key={item.id} className="list-group-item bg-dark border-secondary p-2 p-md-3">
                      <div className="row align-items-center">
                        <div className="col-1 text-center text-primary fw-bold d-none d-md-block">
                          {index + 1}
                        </div>
                        <div className="col-4 col-md-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid rounded border border-secondary w-100"
                            style={{ minHeight: '100px', objectFit: 'cover' }}
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/300/333/fff?text=${item.name.split(' ')[0]}`;
                            }}
                          />
                        </div>
                        <div className="col-8 col-md-5">
                          <h5 className="mb-1 fs-6 fs-md-5 text-truncate" title={item.name}>
                            {item.name}
                          </h5>
                          <p className="mb-2 text-light small">
                            {item.details.split(' | ').map((detail, i) => (
                              <span key={i} className="d-block d-md-inline-block">
                                {detail}{i < item.details.split(' | ').length - 1 ? ' | ' : ''}
                              </span>
                            ))}
                          </p>
                          <button
                            className="btn btn-sm btn-outline-danger mt-2"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="col-12 col-md-3 mt-3 mt-md-0">
                          <div className="d-flex flex-column">
                            <span className="text-muted mb-1 small">₹ {item.price.toFixed(2)}</span>
                            <div className="d-flex align-items-center mb-2 justify-content-start justify-content-md-center">
                              <button
                                className="btn btn-sm btn-outline-light py-0 px-2"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="mx-2">{item.quantity}</span>
                              <button
                                className="btn btn-sm btn-outline-light py-0 px-2"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <span className="fw-bold">₹ {(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="col-lg-4">
            <div className="card bg-dark text-white border-secondary h-100">
              <div className="card-header bg-secondary py-3">
                <h2 className="mb-0 fs-4 fs-md-3">Order Summary</h2>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2 small">
                    <span>Subtotal</span>
                    <span>₹ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 small">
                    <span>Tax</span>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3 small">
                    <span>Shipping</span>
                    <span>₹ {shipping.toFixed(2)}</span>
                  </div>
                  <hr className="border-secondary my-2" />
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>₹ {total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  className="btn btn-primary w-100 py-2 py-md-3 mb-3 fw-bold"
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                >
                  Pay ₹ {total.toFixed(2)}
                </button>
                <button className="btn btn-outline-light w-100 py-2">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;