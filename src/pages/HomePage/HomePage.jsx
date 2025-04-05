import React, { useState } from 'react';
import './HomePage.css';

// Import all images
import heroImage from '../../assets/Images/Captain.jpg';
import womenCollection from '../../assets/Images/Deadpool.jpg';
import menCollection from '../../assets/Images/Draco.jpg';
import accessories from '../../assets/Images/Hulk.jpg';
import newArrivals from '../../assets/Images/Dudly.jpg';
import sweater from '../../assets/Images/Loki.jpg';
import leatherJacket from '../../assets/Images/Iron-Man.jpg';
import eveningDress from '../../assets/Images/Longbottom.jpg';
import woodCoat from '../../assets/Images/Thor.jpg';

const HomePage = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setEmailError('Email is required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="header-spacer" style={{ height: '60px' }}></div>
            <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})` }}>
                <div className="hero-content">
                    <h1 className="text-glow">Winter Collection 2024</h1>
                    <p className="text-glow">Discover the latest trends in fashion.</p>
                    <button className="shop-now-btn pulse">Shop Now</button>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section">
                <h2 className="section-title">Shop by Category</h2>
                <div className="categories-grid">
                    <div className="category-card slide-in" style={{ backgroundImage: `url(${womenCollection})` }}>
                        <div className="category-overlay">
                            <h3>Women's Collection</h3>
                        </div>
                    </div>
                    <div className="category-card slide-in" style={{ backgroundImage: `url(${menCollection})` }}>
                        <div className="category-overlay">
                            <h3>Men's Collection</h3>
                        </div>
                    </div>
                    <div className="category-card slide-in" style={{ backgroundImage: `url(${accessories})` }}>
                        <div className="category-overlay">
                            <h3>Accessories</h3>
                        </div>
                    </div>
                    <div className="category-card slide-in" style={{ backgroundImage: `url(${newArrivals})` }}>
                        <div className="category-overlay">
                            <h3>New Arrivals</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Arrivals Section */}
            <section className="new-arrivals">
                <h2 className="section-title">New Arrivals</h2>
                <div className="products-grid">
                    <div className="product-card fade-in">
                        <div className="product-image" style={{ backgroundImage: `url(${sweater})` }}></div>
                        <h3>Over-sized Cotton Sweater</h3>
                        <p>$120</p>
                    </div>
                    <div className="product-card fade-in">
                        <div className="product-image" style={{ backgroundImage: `url(${leatherJacket})` }}></div>
                        <h3>Classic Leather Jacket</h3>
                        <p>$290</p>
                    </div>
                    <div className="product-card fade-in">
                        <div className="product-image" style={{ backgroundImage: `url(${eveningDress})` }}></div>
                        <h3>SIR Evening Dress</h3>
                        <p>$180</p>
                    </div>
                    <div className="product-card fade-in">
                        <div className="product-image" style={{ backgroundImage: `url(${woodCoat})` }}></div>
                        <h3>Wood Blend Coat</h3>
                        <p>$259</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;