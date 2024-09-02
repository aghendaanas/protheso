import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Offers from './components/Offers';
import OfferDetail from './components/OfferDetail';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm'; // Import the new ContactForm component
import './App.css';
import { ImWhatsapp } from "react-icons/im";
import logo from "../src/assets/logo.png";
import { RiInstagramFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { FaFileWaveform } from "react-icons/fa6";
import AdminLogin from './components/AdminLogin';
import SubmissionsPage from './components/Submissions';
import AdBanner from './components/AdBanner';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<><Hero /><SpeedInsights /><AdBanner /><Offers /><Testimonials /></>} />
                    <Route path="/offer/:offerId" element={<OfferDetail />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/submissions" element={<SubmissionsPage />} />
                </Routes>

                {/* Footer Component */}
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="footer-info">
                            <p className="address">AGADIR</p>
                            <p className="phone">+212623480407</p>
                            <p className="email">Email: soufianeaourir63@gmail.com</p>
                        </div>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/profile.php?id=61563875090658&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="social-icon"><SiFacebook /></a>
                            <a href="https://wa.me/+212623480407" target="_blank" rel="noopener noreferrer" className="social-icon"><ImWhatsapp /></a>
                            <a href="https://www.instagram.com/prothesedental?igsh=MWtyc3FtdnNld3R2bA==" target="_blank" rel="noopener noreferrer" className="social-icon"><RiInstagramFill /></a>
                        </div>
                        <div className="footer-quote">
                            <p>"Redonner le sourire avec précision et passion."</p>
                        </div>
                    </div>
                </footer>
                
                {/* WhatsApp Button */}
                <a href="https://wa.me/+212623480407" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
                    <ImWhatsapp size={24}/>
                </a>
                <a href="/contact" className="form-button">
                    <FaFileWaveform size={24}/>
                </a>
                {/* Added contact button */}

            </div>
        </Router>
    );
}

export default App;
