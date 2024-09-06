import React, { useState, useEffect } from 'react';
import './AdBanner.css';

// Import your images
import ads1 from '../assets/ads1.png';
import ads2 from '../assets/ads2.jpg';
import ads3 from '../assets/ads3.jpg';

const images = [ads1, ads2, ads3];

const AdBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    return (
        <div className="ad-banner">
            <img src={images[currentIndex]} alt="Advertisement" className="ad-image" />
        </div>
    );
}

export default AdBanner;
