// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css'; // Optional: Add a CSS file for styling if needed
import { GoHomeFill } from "react-icons/go";
import { FaClock } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";
import { TbDental } from "react-icons/tb";
const Testimonials = () => {
    
    return (
        <section className="home-service">
        <div className="home-service-content">
            <button className="consulta-btn">Service à Domicile | <span style={{fontFamily:"Noto Kufi Arabic"}} >خدمة منزلية</span></button>
            <div className="home-service-info">
                <div className="service-block">
                    <GoHomeFill  size={30} className="service-icon" />
                    <h3 style={{fontFamily:"poppins" }}>Prise de Mesures à Domicile</h3>
                    <p style={{fontFamily:"poppins"}}>Après validation, notre prothésiste se déplacera à domicile pour prendre les mesures nécessaires.</p>
                    <p style={{fontFamily:"Noto Kufi Arabic"}}>بعد التحقق، سيقوم أخصائي الأطراف الصناعية بزيارة منزلك لأخذ القياسات اللازمة</p>
                </div>
                
                <div className="service-block">
                    <FaClock size={30} className="service-icon" />
                    <h3 style={{fontFamily:"poppins" }}>Service Rapide et Flexible</h3>
                    <p style={{fontFamily:"poppins"}}>Nous nous engageons à vous offrir un service rapide et flexible selon votre emploi du temps.</p>
                    <p style={{fontFamily:"Noto Kufi Arabic"}}>نحن ملتزمون بتقديم خدمة سريعة ومرنة وفقًا لجدولك الزمني</p>
                </div>
                
                <div className="service-block">
                    <PiMapPinAreaFill size={30} className="service-icon" />
                    <h3 style={{fontFamily:"poppins" }}>Disponible à Agadir</h3>
                    <p style={{fontFamily:"poppins"}}>Ce service est disponible dans toute la région de la ville d'Agadir.</p>
                    <p style={{fontFamily:"Noto Kufi Arabic"}}>هذه الخدمة متاحة في جميع أنحاء مدينة أغادير</p>
                </div>
            </div>
            <TbDental  style={{marginTop:'15px' , color:"#0f3061"}}/>
            
        </div>
        <p className='text01'>
                    نحن هنا نصمم كل طقم أسنان بعناية وخبرة لنقدم ليس فقط حلاً عمليًا، بل أيضًا ابتسامة طبيعية تعيد الثقة. نؤمن بأن كل مريض يستحق استعادة متعة الأكل، والكلام، والابتسام دون تردد. بفضل تقنياتنا المتقدمة وحرفيتنا الرفيعة، نصنع أطقم أسنان مخصصة تتناسب تمامًا مع احتياجات وتوقعات كل مريض. الابتسامة هي مفتاح القلب، ومهمتنا هي استعادتها بكل جمالها
                </p>
    </section>
    );
};

export default Testimonials;
