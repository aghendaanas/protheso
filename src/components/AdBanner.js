import React, { useState, useEffect } from 'react';
import './AdBanner.css';

// Import your images
import ads1 from '../assets/ads1.png';
import ads2 from '../assets/ads2.png';
import ads3 from '../assets/ads3.png';
import ads4 from '../assets/ads4.png';
import ads5 from '../assets/ads5.png';
import ads6 from '../assets/ads6.png';
import ads7 from '../assets/ads7.png';
import ads8 from '../assets/ads8.png';

const images = [ads1, ads2, ads3 , ads4 , ads5 ,ads6, ads7 , ads8];

const AdBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    return (
        <div className="ad-banner">
            <img src={images[currentIndex]} alt="Advertisement" className="ad-image" />
        </div>
    );
}

export default AdBanner;
