import React, { useState } from "react";
import "./Header.css";
import Logo from '../../assets/Images/logo.png';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const updateView = () => {
        setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateView);

    return (
        <header className="header">
            {/* Left Side Toggle Button */}
            <button className="menu-toggle" onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </button>

            {/* Logo */}
            <div className="logo">
                <img src={Logo} alt="Veradell" />
            </div>

            {/* Right Side Icons */}
            {!isMobileView ? (
                <div className="header-icons">
                    <i className="fas fa-robot"></i>
                    <i className="fas fa-search"></i>
                    <i className="fas fa-user"></i>
                    <i className="fas fa-heart"></i>
                    <div className="cart-icon">
                        <i className="fas fa-shopping-bag"></i>
                        {/* <span className="cart-badge"></span> */}
                    </div>
                </div>
            ) : null}

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={toggleSidebar}>
                    <i className="fas fa-times"></i>
                </button>
                <nav className="nav-links">
                    <ul>
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                        <li>Sale</li>
                        <li>Deal of the Day</li>
                        <li>Shop
                            <ul className="submenu">
                                <li>Shirt</li>
                                <li>T-shirt</li>
                                <li>Trousers</li>
                                <li>Winterwear</li>
                                <li>Summerwear</li>
                            </ul>
                        </li>
                        <li>Help Center</li>
                        <li>Settings</li>
                    </ul>
                </nav>

                {/* Move icons inside sidebar for mobile */}
                {isMobileView && (
                    <div className="sidebar-icons">
                        <i className="fas fa-robot"></i>
                        <i className="fas fa-search"></i>
                        <i className="fas fa-user"></i>
                        <i className="fas fa-heart"></i>
                        <div className="cart-icon">
                            <i className="fas fa-shopping-bag"></i>
                            <span className="cart-badge">2</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay for sidebar */}
            {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </header>
    );
};

export default Header;
