import React from "react";
import './LastSectionFooter.css';
import Logo from '../../assets/Images/logo.png';

export default function LastSectionFooter() {
    return (
        <>
            <div className="mainFooter">
                <footer className="footer">
                    <div className="footer-column">
                        <div className="footer-logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <p>Making technology accessible and convenient for everyone.</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Newsletter</h3>
                        <p>Subscribe to our newsletter for updates</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Enter your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>



                </footer>
                <div className="footer-bottom">
                    &copy; 2024 Company Name. All rights reserved.
                </div>
            </div>
        </>
    );
}