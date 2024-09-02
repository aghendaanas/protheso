import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/logo.png'; // Adjust the path to your logo image
import { FaPhone, FaQuestion } from 'react-icons/fa'; // Adjust the import for icons
import { FaFileWaveform } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";

const Header = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('/about-us'); // Use navigate function to redirect
    };

    return (
        <>
            <header className="header">
                <div className="left-side">
                    <button className="appointment-btn" onClick={handleNavigate}>
                        <FaQuestion />
                    </button>
                    <a href="/contact" className="appointment-btn"><FaFileWaveform /></a>
                    
                </div>
                <div className="logo">
                    <Link to="/">
                        <img src={logoImage} alt="Logo" />
                    </Link>
                </div>
                <div className="right-side">
                    <a href="tel:+212623480407" className="appointment-btn"><FaPhone /></a>
                    <a href="/admin-login" className="appointment-btn"><RiAdminFill/></a>
                    
                </div>
            </header>
            <div className="scrolling-text">
                <p>
                    <span style={{fontFamily:"poppins"}}><strong>Prothèses dentaires:</strong> Conception de prothèses complètes, partielles, et amovibles.</span>
                    <span style={{fontFamily:"poppins"}}><strong>Couronnes dentaires:</strong> Fabrication de couronnes en céramique, métal-céramique, et zirconium.</span>
                    <span style={{fontFamily:"poppins"}}><strong>Bridges dentaires:</strong> Conception de bridges traditionnels et collés.</span>
                    <span style={{fontFamily:"poppins"}}><strong>Facettes dentaires:</strong> Création de facettes en céramique ou composite.</span>
                    <span style={{fontFamily:"poppins"}}><strong>Inlays et onlays:</strong> Restauration dentaire en céramique ou composite.</span>
                    <span style={{fontFamily:"poppins"}}><strong>Appareils orthodontiques:</strong> Fabrication d’appareils amovibles et de rétention.</span>
                    <span style={{fontFamily:"poppins"}}><strong>Prothèses sur implants:</strong> Couronnes, bridges, et prothèses complètes sur implants.</span>
                    <span style={{fontFamily:"poppins"}}><strong>Réparations:</strong> Réparations, ajustements, rebasage de prothèses.</span>
                    <span style={{fontFamily:"poppins"}}><strong>Gouttières de protection:</strong> Dispositifs pour le bruxisme (grincement des dents).</span>
                    <span style={{fontFamily:"poppins"}}><strong>Prothèses esthétiques personnalisées:</strong> Solutions adaptées pour une apparence naturelle.</span>
                    <span style={{fontFamily:"Noto Kufi Arabic"}}><strong>تركيبات الأسنان:</strong> تصميم تركيبات كاملة، جزئية، وقابلة للإزالة</span>
                    <span style={{fontFamily:"Noto Kufi Arabic"}}><strong>تيجان الأسنان:</strong> تصنيع التيجان من السيراميك، المعدن-سيراميك، وزركونيوم</span>
                    <span style={{fontFamily:"Noto Kufi Arabic"}}><strong>جسور الأسنان:</strong> تصميم الجسور التقليدية والملصقة</span>
                    <span style={{fontFamily:"Noto Kufi Arabic"}}><strong>قشور الأسنان:</strong> إنشاء القشور من السيراميك أو المركب</span>
                    <span style={{fontFamily:"Noto Kufi Arabic"}}><strong>التركيبات الداخلية والخارجية:</strong> ترميم الأسنان من السيراميك أو المركب</span>
                    <span style={{fontFamily:"Noto Kufi Arabic"}}><strong>الأجهزة التقويمية:</strong> تصنيع الأجهزة القابلة للإزالة والتثبيت</span>
                    <span style={{fontFamily:"Noto Kufi Arabic"}}><strong>تركيبات على الزرع:</strong> تيجان، جسور، وتركيبات كاملة على الزرع</span>
                    <span style={{fontFamily:"Noto Kufi Arabic"}}><strong>الإصلاحات:</strong> إصلاحات، تعديلات، وإعادة تركيب التركيبات</span>
                    <span style={{fontFamily:"Noto Kufi Arabic"}}><strong>المقابس الواقية:</strong> أجهزة للصرير (طحن الأسنان)</span>
                    <span style={{fontFamily:"Noto Kufi Arabic"}}><strong>تركيبات جمالية مخصصة:</strong> حلول مصممة لمظهر طبيعي</span>
                </p>
            </div>
        </>
    );
};

export default Header;
