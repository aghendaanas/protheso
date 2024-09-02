import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Offers.css';
import f1 from "../assets/1.png"
import f2 from "../assets/2.png"
import f3 from "../assets/3.png"
import f4 from "../assets/4.png"
import f5 from "../assets/5.png"
import f6 from "../assets/6.png"
import f7 from "../assets/7.png"
import f8 from "../assets/8.png"



const offersData = [
    { 
        title: (
            <>
                Bridges dentaires<br/><span className="arabic-text">الجسور السنية</span>
            </>
        ), 
        description: (
            <>
                Conception de bridges traditionnels et collés.<br/><span className="arabic-text">تصميم جسور تقليدية ومثبتة</span>
            </>
        ), 
        imgSrc: f1, 
        id: "bridges-dentaires" 
    },
    { 
        title: (
            <>
                Facettes dentaires<br/><span className="arabic-text">قشور الأسنان</span>
            </>
        ), 
        description: (
            <>
                Création de facettes en céramique ou composite.<br/><span className="arabic-text">إنشاء قشور من السيراميك أو المركب</span>
            </>
        ), 
        imgSrc: f3, 
        id: "facettes-dentaires" 
    },
    { 
        title: (
            <>
                Inlays et onlays<br/><span className="arabic-text">الحشوات الداخلية والخارجية</span>
            </>
        ), 
        description: (
            <>
                Restauration dentaire en céramique ou composite.<br/><span className="arabic-text">ترميم الأسنان بالسيراميك أو المركب</span>
            </>
        ), 
        imgSrc: f4, 
        id: "inlays-onlays" 
    },
    { 
        title: (
            <>
                Appareils orthodontiques<br/><span className="arabic-text">أجهزة تقويم الأسنان</span>
            </>
        ), 
        description: (
            <>
                Fabrication d’appareils amovibles et de rétention.<br/><span className="arabic-text">تصنيع أجهزة قابلة للإزالة والتثبيت</span>
            </>
        ), 
        imgSrc: f8, 
        id: "appareils-orthodontiques" 
    },
    { 
        title: (
            <>
                Prothèses sur implants<br/><span className="arabic-text">التركيبات على الغرسات</span>
            </>
        ), 
        description: (
            <>
                Couronnes, bridges, et prothèses complètes sur implants.<br/><span className="arabic-text">تيجان، جسور، وتركيبات كاملة على الغرسات</span>
            </>
        ), 
        imgSrc: f6, 
        id: "protheses-sur-implants" 
    },
    { 
        title: (
            <>
                Réparations<br/><span className="arabic-text">إصلاحات</span>
            </>
        ), 
        description: (
            <>
                Réparations, ajustements, rebasage de prothèses.<br/><span className="arabic-text">إصلاحات، تعديلات، وإعادة تبطين التركيبات</span>
            </>
        ), 
        imgSrc: f7, 
        id: "reparations" 
    },
    { 
        title: (
            <>
                Gouttières de protection<br/><span className="arabic-text">واقيات الفم</span>
            </>
        ), 
        description: (
            <>
                Dispositifs pour le bruxisme (grincement des dents).<br/><span className="arabic-text">أجهزة لحماية الأسنان من صرير الأسنان</span>
            </>
        ), 
        imgSrc: f5, 
        id: "goutieres-protection" 
    },
    { 
        title: (
            <>
                Prothèses esthétiques personnalisées<br/><span className="arabic-text">التركيبات التجميلية المخصصة</span>
            </>
        ), 
        description: (
            <>
                Solutions adaptées pour une apparence naturelle.<br/><span className="arabic-text">حلول مخصصة لمظهر طبيعي</span>
            </>
        ), 
        imgSrc: f2, 
        id: "protheses-esthetiques-personnalisees" 
    },
];



const Offers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');

    const nextOffer = () => {
        setSlideDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % offersData.length);
    };

    const prevOffer = () => {
        setSlideDirection('prev');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? offersData.length - 1 : prevIndex - 1
        );
    };

    const handleAnimationEnd = () => {
        setSlideDirection(''); // Reset the animation class
    };

    return (
        <section className="offers">
        <button className="consulta-btn">
            Nos services | <span style={{ fontFamily: "Noto Kufi Arabic" }}>خدماتنا</span>
        </button>
        <div className="offers-container">
            <button className="nav-button" onClick={prevOffer}>❮</button>
            <div
                className={`offer slide-${slideDirection}`}
                onAnimationEnd={handleAnimationEnd}
            >
                <img className='image' src={offersData[currentIndex].imgSrc} alt={offersData[currentIndex].title} />
                <h3>{offersData[currentIndex].title}</h3>
                <p>{offersData[currentIndex].description}</p>
                <Link to={`/offer/${offersData[currentIndex].id}`} className="consultana-btn">
                    Voir plus
                </Link>
            </div>
            <button className="nav-button" onClick={nextOffer}>❯</button>
        </div>
        
    </section>
    
    
    );
};

export default Offers;
