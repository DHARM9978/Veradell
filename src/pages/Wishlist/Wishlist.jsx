import React, { useState } from 'react';
import './Wishlist.css';

// Import images (you should replace these with your actual image imports)
import leatherJacket from '../../assets/Images/Captain.jpg';
import sunglasses from '../../assets/Images/Harrry Potter.jpg';
import luxuryWatch from '../../assets/Images/Hulk.jpg';
import sneakers from '../../assets/Images/Thor.jpg';
import handbag from '../../assets/Images/Hermione.jpg';
import scarf from '../../assets/Images/Deadpool.jpg';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            title: "Premium Leather Jacket",
            description: "Genuine leather jacket with quilted lining and metal hardware",
            inStock: true,
            price: 299.99,
            image: leatherJacket
        },
        {
            id: 2,
            title: "Designer Sunglasses",
            description: "UV protection sunglasses with premium metal frame",
            inStock: true,
            price: 189.99,
            image: sunglasses
        },
        {
            id: 3,
            title: "Luxury Watch Collection",
            description: "Stainless steel automatic watch with leather strap",
            inStock: false,
            price: 599.99,
            image: luxuryWatch
        },
        {
            id: 4,
            title: "Premium Sneakers",
            description: "Limited edition sneakers with premium materials",
            inStock: true,
            price: 249.99,
            image: sneakers
        },
        {
            id: 5,
            title: "Designer Handbag",
            description: "Genuine leather handbag with gold-tone hardware",
            inStock: true,
            price: 399.99,
            image: handbag
        },
        {
            id: 6,
            title: "Cashmere Scarf",
            description: "100% pure cashmere scarf in classic design",
            inStock: true,
            price: 129.99,
            image: scarf
        }
    ]);

    const [sortBy, setSortBy] = useState("newest");

    const removeItem = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    const sortItems = (type) => {
        setSortBy(type);
        if (type === "newest") {
            setWishlistItems([...wishlistItems].sort((a, b) => b.id - a.id));
        } else if (type === "price-low") {
            setWishlistItems([...wishlistItems].sort((a, b) => a.price - b.price));
        } else if (type === "price-high") {
            setWishlistItems([...wishlistItems].sort((a, b) => b.price - a.price));
        }
    };

    const totalPrice = wishlistItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="wishlist-container">
            <div className="header-spacer" style={{ height: '80px' }}></div>
            <div className="wishlist-header">
                <h1>Wishlist ({wishlistItems.length})</h1>
                <div className="sort-options">
                    <span>Sort by:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => sortItems(e.target.value)}
                        className="sort-select"
                    >
                        <option value="newest">Newest First</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>
                <button className="share-btn">Share Wishlist</button>
            </div>

            <div className="wishlist-items">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="wishlist-item animate-fade-in">
                        <div className="item-image-container">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="item-image"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
                                }}
                            />
                        </div>
                        <div className="item-content">
                            <div className="item-info">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="stock-status">
                                    {item.inStock ? (
                                        <span className="in-stock">In Stock</span>
                                    ) : (
                                        <span className="out-of-stock">Out of Stock</span>
                                    )}
                                </div>
                                <div className="item-price">${item.price.toFixed(2)}</div>
                            </div>
                            <div className="item-actions">
                                <button className="add-to-cart">Add to Cart</button>
                                <button
                                    className="remove-item"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="wishlist-footer">
                <div className="total-price">
                    <span>Total:</span>
                    <span className="price">${totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;