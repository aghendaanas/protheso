import React from 'react';
import { TbDental } from "react-icons/tb";
const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 style={{fontFamily:"poppins" , color:"#0f3160" }}>About Us  |  <span style={{fontFamily:"Noto Kufi Arabic"}}>من نحن</span></h1>

      <p style={{fontFamily:"Noto Kufi Arabic" , color:"#0f3160" }}>
        نحن متخصصون في صناعة لأسنان، نقدم خدمات شاملة لجميع احتياجاتك .  نقدم عروض خاصة بأسعار معقولة وخدمة منزلية بعد تقديم وتأكيد العرض. سيأتي أخصائيونا إلى
        منزلك لأخذ القياسات، إجراء الاختبارات، وتقديم المنتج النهائي مع ضمان الجودة العالية
      </p>

      <TbDental />
      
      <p style={{fontFamily:"poppins" }}>
        Nous sommes spécialisés dans les prothèses dentaires, offrant des services complets pour toutes vos
        besoins en prothèse dentaire. Nous proposons des offres spéciales à des prix raisonnables et un service
        à domicile après la commande et la validation de l'offre. Nos prothésistes se déplacent jusqu'à votre
        domicile pour prendre les mesures, effectuer les tests, et fournir le produit final tout en maintenant
        une qualité optimale.
      </p>

      <TbDental />
      
      <p style={{fontFamily:"poppins" }}>
        We specialize in dental prosthetics, offering comprehensive services for all your dental prosthesis needs.
        We provide special offers at reasonable prices and home service after placing and validating the offer.
        Our prosthetists will come to your home to take measurements, perform tests, and deliver the final product,
        while ensuring the highest quality.
      </p>
      
      
    </div>
  );
};

export default AboutUs;
