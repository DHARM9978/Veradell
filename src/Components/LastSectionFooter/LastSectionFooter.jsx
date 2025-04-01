import React, { useEffect } from "react";
import './LastSectionFooter.css';
import Logo from '../../assets/Images/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function LastSectionFooter() {
    useEffect(() => {
        const footerColumns = document.querySelectorAll('.footer-column');
        footerColumns.forEach((column, index) => {
            column.style.animation = `colorfulFadeIn 0.6s ease forwards ${index * 0.15}s`;
            column.style.opacity = '0';
        });
    }, []);

    return (
        <div className="mainFooter">
            <footer className="footer">
                <div className="footer-column">
                    <div className="footer-logo">
                        <img src={Logo} alt="Logo" className="logo-animate" />
                    </div>
                    <p className="description-animate">Making technology accessible and convenient for everyone.</p>
                    <div className="social-icons">
                        <a href="#" className="social-icon fb"><FaFacebookF /></a>
                        <a href="#" className="social-icon tw"><FaTwitter /></a>
                        <a href="#" className="social-icon ig"><FaInstagram /></a>
                        <a href="#" className="social-icon li"><FaLinkedinIn /></a>
                    </div>
                </div>

                <div className="footer-column">
                    <h3 className="section-title">Quick Links</h3>
                    <ul>
                        <li className="link-animate"><a href="#">About Us</a></li>
                        <li className="link-animate"><a href="#">Contact</a></li>
                        <li className="link-animate"><a href="#">FAQ</a></li>
                        <li className="link-animate"><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="section-title">Resources</h3>
                    <ul>
                        <li className="link-animate"><a href="#">Blog</a></li>
                        <li className="link-animate"><a href="#">News</a></li>
                        <li className="link-animate"><a href="#">Documentation</a></li>
                        <li className="link-animate"><a href="#">Support</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="section-title">Newsletter</h3>
                    <p className="newsletter-description">Subscribe to our newsletter for updates</p>
                    <div className="newsletter-container">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter-input"
                        />
                        <button className="newsletter-btn">Subscribe</button>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom bottom-animate">
                &copy; 2024 Company Name. All rights reserved.
            </div>
        </div>
    );
}