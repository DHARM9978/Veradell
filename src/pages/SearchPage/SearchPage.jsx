import React, { useState, useEffect } from 'react';
import './SearchPage.css';

const SearchPage = () => {
    // State for suggested items
    const [suggestedItems, setSuggestedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch suggested items
    useEffect(() => {
        const fetchSuggestedItems = async () => {
            try {
                setLoading(true);
                // Simulate API call with timeout
                await new Promise(resolve => setTimeout(resolve, 800));

                // Mock data with image URLs
                const mockData = [
                    {
                        id: 1,
                        category: "Outerwear",
                        name: "Premium Leather Jacket",
                        price: 299.99,
                        image: "https://images.unsplash.com/photo-1551028719-001c6bc7f236?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        id: 2,
                        category: "Footwear",
                        name: "Classic White Sneakers",
                        price: 129.99,
                        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        id: 3,
                        category: "Accessories",
                        name: "Minimalist Watch",
                        price: 199.99,
                        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        id: 4,
                        category: "Bags",
                        name: "Designer Handbag",
                        price: 399.99,
                        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        id: 5,
                        category: "Dresses",
                        name: "Silk Summer Dress",
                        price: 159.99,
                        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        id: 6,
                        category: "Jewelry",
                        name: "Gold Necklace",
                        price: 89.99,
                        image: "https://images.unsplash.com/photo-1611591437281-460914d0e9c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        id: 7,
                        category: "Suits",
                        name: "Meris Blazer",
                        price: 249.99,
                        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    },
                    {
                        id: 8,
                        category: "Accessories",
                        name: "Premium Sunglasses",
                        price: 179.99,
                        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    }
                ];

                setSuggestedItems(mockData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchSuggestedItems();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        // Add your search functionality here
        console.log("Searching for:", searchQuery);
    };

    return (
        <div className="search-container">
            {/* Space for header */}
            <div className="header-space"></div>

            {/* Full-width Search Bar */}
            <div className="search-bar-fullwidth">
                <form className="search-bar-container" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search for products, brands, and more..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </form>
            </div>

            <div className="search-page">
                <div className="recent-searches-container">
                    <h1 className="search-title">Recent Searches</h1>
                    <div className="recent-searches">
                        <div className="search-item">Summer Collection 2024</div>
                        <div className="search-item">Designer Bags</div>
                        <div className="search-item">Minimalist Jewelry</div>
                        <div className="search-item">Sustainable Fashion</div>
                        <div className="search-item">Luxury Watches</div>
                    </div>
                </div>

                <h2 className="section-title">Suggested for You</h2>

                {loading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading suggestions...</p>
                    </div>
                ) : error ? (
                    <div className="error-message">
                        <p>Error loading suggestions: {error}</p>
                        <button onClick={() => window.location.reload()}>Try Again</button>
                    </div>
                ) : (
                    <div className="suggestions-grid">
                        {suggestedItems.map((item) => (
                            <div className="suggestion-item" key={item.id}>
                                <div
                                    className="item-image"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                >
                                    <div className="image-overlay"></div>
                                    <div className="product-name-on-image">{item.name}</div>
                                </div>
                                <div className="item-details">
                                    <div className="category">{item.category}</div>
                                    <div className="item-price">${item.price.toFixed(2)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;