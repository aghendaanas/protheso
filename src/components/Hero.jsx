import React from 'react';
import './Hero.css';
import { RiInstagramFill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { SiFacebook } from "react-icons/si";
import { TbDental } from "react-icons/tb";



const Hero = () => {
  const handleCall = () => {
    window.location.href = 'tel:+212623480407';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/+212623480407';
  };
    return (
        <section className="hero">
            <TbDental  style={{fontSize:"30px"}}/>
            <div className="hero-text">
            
                <h1>Votre expert en prothèses dentaires<br></br><span style={{fontFamily:"Noto Kufi Arabic"}} >خبيرك في تركيب الأسنان</span></h1>
                <p>
  Une question ? Appelez-nous au 
  <br/> 
  <button 
    className="consult-btn" 
    onClick={handleCall}
  >
    +212623480407
  </button><br/>
     ou <br/>
  <button 
    className="consult-btn" 
    onClick={handleWhatsApp}
  >
    contactez-nous
  </button>
</p>
<br/>
                
            </div>
            <div className="social-media">
                <a href="https://www.instagram.com/prothesedental?igsh=MWtyc3FtdnNld3R2bA=="><RiInstagramFill /></a>
                <a href="https://wa.me/+212623480407"><ImWhatsapp /></a>
                <a href="https://www.facebook.com/profile.php?id=61563875090658&mibextid=LQQJ4d"><SiFacebook /></a>
            </div>
        </section>
    );
};

export default Hero;
