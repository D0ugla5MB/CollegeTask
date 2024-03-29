import React, { useState } from 'react';
import '../styles/Navbar.css';
import * as UniParts from "../scripts/UniversidadePartes.mjs";

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    // Example list of items - you can customize it as needed
    const navItems = ['Home', 'About', 'Services', 'Contact'];

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
