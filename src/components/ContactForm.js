import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import "./form.css"; // Ensure this CSS file contains the styles
import logo from "../assets/logo.png"; // Ensure the logo path is correct

function ContactForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        medicalConditions: '',
        allergies: '',
        medications: '',
        previousDentalWork: '',
        currentIssues: '',
        desiredTreatments: '',
        insuranceProvider: '',
        policyNumber: '',
        preferredDate: '',
        reasonForVisit: '',
        consent: false,
        privacyPolicy: false,
        howDidYouHear: '',
        specialRequests: '',
        picture: null,
    });

    

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        });
    };

    const generatePDF = () => {
        const doc = new jsPDF();
    
        // Add centered logo
        const img = new Image();
        img.src = logo;
        doc.addImage(img, 'PNG', 80, 10, 50, 20); // Center the logo
    
        // Add Title
        doc.setFontSize(18);
        doc.setFont("Poppins", "bold");
        doc.setTextColor(0, 51, 153); // Darker blue color
        doc.text("Contract", 105, 40, null, null, 'center');
    
        // Add Horizontal Line below the Title
        doc.setDrawColor(0, 51, 153); // Darker blue color
        doc.setLineWidth(0.2);
        doc.line(10, 45, 200, 45);
    
        // Encadrer (Frame) Client Information Section
        doc.setFontSize(14);
        doc.setFont("Poppins", "bold");
        doc.setTextColor(0, 51, 153);
        doc.text("Client Information", 105, 60, null, null, 'center');
    
        // Frame for Client Information
        doc.setDrawColor(0, 51, 153);
        doc.roundedRect(10, 65, 190, 85, 3, 3); // Framing box
    
        // Add Client Information Table
        doc.autoTable({
            startY: 70,
            head: [['Field', 'Value']],
            body: [
                ['Nom Complet', formData.name],
                ['Date de Naissance', formData.dob],
                ['Genre', formData.gender],
                ['Numéro de Téléphone', formData.phone],
                ['Adresse Email', formData.email],
                ['Adresse', formData.address],
                ['Conditions Médicales', formData.medicalConditions],
                ['Allergies', formData.allergies],
                ['Médicaments', formData.medications],
                ['Travaux Dentaires Antérieurs', formData.previousDentalWork],
                ['Problèmes Actuels', formData.currentIssues],
                ['Traitements Désirés', formData.desiredTreatments],
                ['Compagnie d\'Assurance', formData.insuranceProvider],
                ['Numéro de Police', formData.policyNumber],
                ['Date de Rendez-vous Préférée', formData.preferredDate],
                ['Raison de la Visite', formData.reasonForVisit],
            ],
            theme: 'grid',
            headStyles: { fillColor: [0, 51, 153], textColor: [255, 255, 255] },
            styles: { font: 'Poppins', cellPadding: 5, minCellWidth: 20 },
            margin: { top: 10, left: 15 },
            tableWidth: 150,
        });
    
        // Encadrer (Frame) Consent and Privacy Policy Acknowledgment Section
        doc.setFontSize(14);
        doc.setFont("Poppins", "bold");
        doc.setTextColor(0, 51, 153);
        doc.text("Consent and Acknowledgment", 105, doc.autoTable.previous.finalY + 20, null, null, 'center');
    
        // Frame for Consent and Privacy Policy Acknowledgment
        doc.roundedRect(10, doc.autoTable.previous.finalY + 25, 190, 40, 3, 3);
    
        doc.setFontSize(12);
        doc.setFont("Poppins", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(`Consent au Traitement: ${formData.consent ? "Oui" : "Non"}`, 15, doc.autoTable.previous.finalY + 40);
        doc.text(`Acknowledgment of Privacy Policy: ${formData.privacyPolicy ? "Oui" : "Non"}`, 15, doc.autoTable.previous.finalY + 55);
    
        // Encadrer (Frame) Special Requests Section
        doc.setFontSize(14);
        doc.setFont("Poppins", "bold");
        doc.setTextColor(0, 51, 153);
        doc.text("Special Requests or Remarks", 105, doc.autoTable.previous.finalY + 80, null, null, 'center');
    
        // Frame for Special Requests Section
        doc.roundedRect(10, doc.autoTable.previous.finalY + 85, 190, 40, 3, 3);
    
        doc.setFontSize(12);
        doc.setFont("Poppins", "normal");
        doc.setTextColor(0, 0, 0);
        const specialRequestsText = formData.specialRequests || "None";
        doc.text(specialRequestsText, 15, doc.autoTable.previous.finalY + 100, { maxWidth: 180 });
    
        // Center Uploaded Image if available
        if (formData.picture) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgData = e.target.result;
                doc.addImage(imgData, 'PNG', 75, doc.autoTable.previous.finalY + 130, 60, 60); // Center the image
                doc.text("Uploaded Image", 105, doc.autoTable.previous.finalY + 200, null, null, 'center');
                
                // Add signature section
                addSignatureSection(doc, doc.autoTable.previous.finalY + 210);
    
                // Generate PDF as Blob
                doc.save('client-submission.pdf');
            };
            reader.readAsDataURL(formData.picture);
        } else {
            // Add signature section if no image is uploaded
            addSignatureSection(doc, doc.autoTable.previous.finalY + 130);
    
            // Generate PDF as Blob
            doc.save('client-submission.pdf');
        }
    };
    
    const addSignatureSection = (doc, yPosition) => {
        // Add signature section
        doc.setFontSize(14);
        doc.setFont("Poppins", "bold");
        doc.setTextColor(0, 51, 153);
        doc.text("Signatures", 105, yPosition, null, null, 'center');
        
        // Draw signature lines for Prosthetist and Client
        doc.setDrawColor(0, 51, 153);
        doc.text("Prothesiste:", 15, yPosition + 20);
        doc.line(40, yPosition + 20, 100, yPosition + 20); // Prosthetist signature
    
        doc.text("Client:", 120, yPosition + 20);
        doc.line(140, yPosition + 20, 190, yPosition + 20); // Client signature
        
        // Add automatic date section
        const currentDate = new Date().toLocaleDateString();
        doc.setFontSize(12);
        doc.setFont("Poppins", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text(`Date: ${currentDate}`, 15, yPosition + 40);
        doc.line(40, yPosition + 40, 100, yPosition + 40); // Date line
    };
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        generatePDF();

        // Store the submission data in local storage
        const newSubmission = {
            name: formData.name,
            date: new Date().toLocaleDateString(),
            pdfUrl: URL.createObjectURL(new Blob([generatePDF()], { type: 'application/pdf' })),
        };

        const existingSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
        localStorage.setItem('submissions', JSON.stringify([...existingSubmissions, newSubmission]));

        // Call the onSubmit prop to handle the submission and navigate
        if (onSubmit) {
            onSubmit();
        }
        
    };

    return (
        <div className="contact-form-container">
            <h2><span className="french-text">Contactez-Nous</span> / <span className="arabic-text">اتصل بنا</span></h2>
            <form onSubmit={handleSubmit} className="contact-form">
                {/* Form fields */}
                <label>
                    <span className="french-text">Nom Complet</span> / <span className="arabic-text">الاسم الكامل:</span>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    <span className="french-text">Date de Naissance</span> / <span className="arabic-text">تاريخ الميلاد:</span>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                </label>
                <label>
                    <span className="french-text">Genre</span> / <span className="arabic-text">الجنس:</span>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value=""><span className="french-text">Sélectionnez</span> / <span className="arabic-text">اختر</span></option>
                        <option value="male"><span className="french-text">Homme</span> / <span className="arabic-text">ذكر</span></option>
                        <option value="female"><span className="french-text">Femme</span> / <span className="arabic-text">أنثى</span></option>
                        <option value="other"><span className="french-text">Autre</span> / <span className="arabic-text">آخر</span></option>
                    </select>
                </label>
                <label>
                    <span className="french-text">Numéro de Téléphone</span> / <span className="arabic-text">رقم الهاتف:</span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <label>
                    <span className="french-text">Adresse Email</span> / <span className="arabic-text">البريد الإلكتروني:</span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    <span className="french-text">Adresse</span> / <span className="arabic-text">العنوان:</span>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Conditions Médicales</span> / <span className="arabic-text">الحالات الطبية:</span>
                    <textarea name="medicalConditions" value={formData.medicalConditions} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Allergies</span> / <span className="arabic-text">الحساسية:</span>
                    <textarea name="allergies" value={formData.allergies} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Médicaments</span> / <span className="arabic-text">الأدوية:</span>
                    <textarea name="medications" value={formData.medications} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Travaux Dentaires Antérieurs</span> / <span className="arabic-text">أعمال الأسنان السابقة:</span>
                    <textarea name="previousDentalWork" value={formData.previousDentalWork} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Problèmes Actuels</span> / <span className="arabic-text">المشاكل الحالية:</span>
                    <textarea name="currentIssues" value={formData.currentIssues} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Traitements Désirés</span> / <span className="arabic-text">العلاجات المطلوبة:</span>
                    <textarea name="desiredTreatments" value={formData.desiredTreatments} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Compagnie d'Assurance</span> / <span className="arabic-text">شركة التأمين:</span>
                    <input type="text" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Numéro de Police</span> / <span className="arabic-text">رقم بوليصة التأمين:</span>
                    <input type="text" name="policyNumber" value={formData.policyNumber} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Date de Rendez-vous Préférée</span> / <span className="arabic-text">تاريخ الموعد المفضل:</span>
                    <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Raison de la Visite</span> / <span className="arabic-text">سبب الزيارة:</span>
                    <textarea name="reasonForVisit" value={formData.reasonForVisit} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Consentement au Traitement</span> / <span className="arabic-text">الموافقة على العلاج:</span>
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
                </label>
                <label>
                    <span className="french-text">Acknowledgment of Privacy Policy</span> / <span className="arabic-text">الإقرار بسياسة الخصوصية:</span>
                    <input type="checkbox" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} required />
                </label>
                <label>
                    <span className="french-text">Comment Avez-Vous Entendu Parler de Nous?</span> / <span className="arabic-text">كيف سمعت عنا؟:</span>
                    <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange}>
                        <option value=""><span className="french-text">Sélectionnez</span> / <span className="arabic-text">اختر</span></option>
                        <option value="google"><span className="french-text">Google</span></option>
                        <option value="social_media"><span className="french-text">Réseaux Sociaux</span> / <span className="arabic-text">وسائل التواصل الاجتماعي</span></option>
                        <option value="referral"><span className="french-text">Référence</span> / <span className="arabic-text">الإحالة</span></option>
                        <option value="other"><span className="french-text">Autre</span> / <span className="arabic-text">آخر</span></option>
                    </select>
                </label>
                <label>
                    <span className="french-text">Demandes Spéciales ou Remarques</span> / <span className="arabic-text">الطلبات الخاصة أو الملاحظات:</span>
                    <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} />
                </label>
                <label>
                    <span className="french-text">Téléchargez Une Photo de Vos dents </span> / <span className="arabic-text">قم بتحميل صورة من أفكارك:</span>
                    <input type="file" name="picture" onChange={handleChange} accept="image/*" />
                </label>
                <button type="submit" ><span className="french-text">Soumettre</span> / <span className="arabic-text">إرسال</span></button>
            </form>
        </div>
    );
}

export default ContactForm;
