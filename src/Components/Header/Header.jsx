import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaRobot, FaSearch, FaUser, FaHeart, FaShoppingBag, FaChevronDown } from "react-icons/fa";
import Logo from '../../assets/Images/Logo.png';
import "./Header.css";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <header className="header">
            {/* Left Side Toggle Button */}
            <button className="menu-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            {/* Centered Logo */}
            <div className="logo">
                <img src={Logo} alt="Veradell" />
            </div>

            {/* Right Side Icons */}
            {!isMobileView && (
                <div className="header-icons">
                    <FaRobot className="icon" />
                    <FaSearch className="icon" />
                    <FaUser className="icon" />
                    <FaHeart className="icon" />
                    <div className="cart-icon">
                        <FaShoppingBag className="icon" />
                        <span className="cart-badge">2</span>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="sidebar-content">
                    {/* Close Button Inside Sidebar */}
                    <button className="close-btn" onClick={toggleSidebar}>
                        <FaTimes />
                    </button>

                    <nav className="nav-links">
                        <ul>
                            <li>New Arrivals</li>
                            <li>Best Sellers</li>
                            <li>Sale</li>
                            <li>Deal of the Day</li>
                            <li className="has-submenu" onClick={() => toggleMenu('shop')}>
                                <div className="menu-item">
                                    Shop
                                    <FaChevronDown className={`dropdown-icon ${activeMenu === 'shop' ? 'open' : ''}`} />
                                </div>
                                <ul className={`submenu ${activeMenu === 'shop' ? 'open' : ''}`}>
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

                    {/* Mobile Icons */}
                    {isMobileView && (
                        <div className="sidebar-icons">
                            <FaRobot className="icon" />
                            <FaSearch className="icon" />
                            <FaUser className="icon" />
                            <FaHeart className="icon" />
                            <div className="cart-icon">
                                <FaShoppingBag className="icon" />
                                <span className="cart-badge">2</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </header>
    );
};

export default Header;