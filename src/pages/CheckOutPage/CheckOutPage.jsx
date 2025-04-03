import React from "react";
import "./CheckoutPage.css";

// Random clothing image URLs (using fashion-specific placeholder service)
const clothingImages = [
  "https://loremflickr.com/100/100/t-shirt",
  "https://loremflickr.com/100/100/jeans",
  "https://loremflickr.com/100/100/leatherjacket",
];

const CheckoutPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      details: "Black | Size: L",
      price: 49.99,
      quantity: 2,
      subtotal: 99.98,
      image: clothingImages[0],
    },
    {
      id: 2,
      name: "Slim Fit Denim Jeans",
      details: "Dark Blue | Size: 32",
      price: 89.99,
      quantity: 1,
      subtotal: 89.99,
      image: clothingImages[1],
    },
    {
      id: 3,
      name: "Classic Leather Jacket",
      details: "Brown | Size: M",
      price: 159.99,
      quantity: 1,
      subtotal: 159.99,
      image: clothingImages[2],
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const tax = 35.0;
  const shipping = 9.99;
  const total = subtotal + tax + shipping;

  return (
    <div className="checkout-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <span className="item-count">{cartItems.length} items</span>
      </div>

      <div className="cart-items-container">
        {cartItems.map((item, index) => (
          <div key={item.id} className="cart-item">
            <div className="item-number">{index + 1}</div>
            <div className="item-image">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => {
                  e.target.src = `https://loremflickr.com/100/100/clothing?random=${index}`;
                }}
              />
            </div>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-attributes">{item.details}</p>
              <button className="remove-btn">Remove</button>
            </div>
            <div className="item-pricing">
              <span className="price">$ {item.price.toFixed(2)}</span>
              <div className="quantity-control">
                <button className="qty-btn">-</button>
                <span className="qty-value">{item.quantity}</span>
                <button className="qty-btn">+</button>
              </div>
              <span className="subtotal">$ {item.subtotal.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-container">
        <div className="order-summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span>$ {tax.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>$ {shipping.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>$ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button className="pay-button">Pay $ {total.toFixed(2)}</button>
      <button className="continue-shopping">Continue Shopping</button>
    </div>
  );
};

export default CheckoutPage;
