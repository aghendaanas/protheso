import React from 'react';
import './AdBanner.css'; // Make sure to create a CSS file for styling
import adImage from '../assets/ads.jpg'; // Import your ad image

const AdBanner = () => {
    return (
        <div className="ad-banner">
            <img src={adImage} alt="Advertisement" className="ad-image" />
        </div>
    );
}

export default AdBanner;
