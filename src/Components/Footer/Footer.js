import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>We are a premier lounge offering the best services and environment for relaxation and socialization.</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: contact@lounge64.com</p>
                    <p>Phone: +91 9876543210</p>
                    <p>Address: 1/11 Lounge St, Madurai,625001</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Lounge64. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
