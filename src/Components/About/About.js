// components/About.js

import React from 'react';
import './about.css'; // Import the CSS file for About component

const About = () => {
    return (
        <div id="about" className="about-section">
            <div className="container">
                <h2>About Restaurant 64</h2>
                <p>Welcome to Restaurant 64, where culinary excellence meets unparalleled service. Located in the heart of Madurai, we are dedicated to creating memorable dining experiences by combining local flavors with global influences.</p>
                <p>Our team of talented chefs, led by our Head Chef John Doe, crafts each dish with passion and creativity. Whether you're joining us for a casual lunch, a romantic dinner, or a special event, our commitment to quality and hospitality ensures every visit is extraordinary.</p>
                <p>Explore our diverse menu featuring seasonal specialties and carefully curated wine pairings selected by our Sommelier, Jane Smith. We invite you to indulge in our stylish yet welcoming ambiance, perfect for both intimate gatherings and celebrations.</p>
                <p>Experience the essence of fine dining at Restaurant 64, where every dish tells a story and every guest is treated like family.</p>
            </div>
        </div>
    );
}

export default About;
