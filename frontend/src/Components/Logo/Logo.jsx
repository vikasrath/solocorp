import React from 'react';
import LogoImage from "../../assets/Logo.png"; // Renamed the import to avoid conflicts

function Logo() {
    return (
        <a href="/">
            <img 
                src={LogoImage} 
                alt="Company logo" 
                className="p-2 h-16 md:h-20" 
            />
        </a>
    );
}

export default Logo;
