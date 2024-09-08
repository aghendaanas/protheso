import React, { useState } from 'react';
import '../components/ContactForm.css';

const ContactForm = () => {
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
        mouthPicture: null,
    });

    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setFormData({ ...formData, mouthPicture: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Add the current date to formData
        const submissionDate = new Date().toLocaleDateString();
    
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, submissionDate }),
            });
    
            // Check if response is OK
            if (!response.ok) {
                const errorText = await response.text(); // Read response as text
                throw new Error(errorText);
            }
    
            // Optionally: You can check if you need to do something with the response here
            // const result = await response.json(); // Removed if not needed
    
            setMessage("La soumission a été effectuée avec succès ! / تم إرسال النموذج بنجاح!");
        } catch (error) {
            setMessage(`Erreur : ${error.message}`);
        }
    
        // Reset form after submission
        setFormData({
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
            mouthPicture: null,
        });
    };
    
    
    
    return (
        <div className="contact-form-container">
    <h2>
        Formulaire de Contact / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>استمارة الاتصال</span>
    </h2>
    <form className="contact-form" onSubmit={handleSubmit}>
        {/* Input fields */}
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nom / الاسم" required />
        <label>
            Date de naissance / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>تاريخ الميلاد</span>
        </label>
        <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} placeholder="Date de naissance / تاريخ الميلاد" required />
        <select name="gender" value={formData.gender} onChange={handleInputChange} required>
            <option value="">Sélectionnez le genre / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>اختر الجنس</span></option>
            <option value="Male">Homme / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>ذكر</span></option>
            <option value="Female">Femme / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>أنثى</span></option>
        </select>
        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Téléphone / الهاتف" required />
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="E-mail / البريد الإلكتروني" required />
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Adresse / العنوان" />
        <input type="text" name="medicalConditions" value={formData.medicalConditions} onChange={handleInputChange} placeholder="Conditions médicales / الحالات الطبية" />
        <input type="text" name="allergies" value={formData.allergies} onChange={handleInputChange} placeholder="Allergies / الحساسية" />
        <input type="text" name="medications" value={formData.medications} onChange={handleInputChange} placeholder="Médicaments / الأدوية" />
        <input type="text" name="previousDentalWork" value={formData.previousDentalWork} onChange={handleInputChange} placeholder="Travaux dentaires précédents / الأعمال السنية السابقة" />
        <input type="text" name="currentIssues" value={formData.currentIssues} onChange={handleInputChange} placeholder="Problèmes actuels / المشاكل الحالية" />
        <input type="text" name="desiredTreatments" value={formData.desiredTreatments} onChange={handleInputChange} placeholder="Traitements souhaités / العلاجات المطلوبة" />
        <input type="text" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleInputChange} placeholder="Compagnie d'assurance / شركة التأمين" />
        <input type="text" name="policyNumber" value={formData.policyNumber} onChange={handleInputChange} placeholder="Numéro de police / رقم الوثيقة" />
        <label>
            Date préférée / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>التاريخ المفضل</span>
        </label>
        <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} placeholder="Date préférée / التاريخ المفضل" />
        <textarea name="reasonForVisit" value={formData.reasonForVisit} onChange={handleInputChange} placeholder="Raison de la visite / سبب الزيارة"></textarea>

        {/* Dropdown for howDidYouHear */}
        <label>
            Comment nous avez-vous connu ? / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>كيف سمعت عنا؟</span>
        </label>
        <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleInputChange} required>
            <option value="">Sélectionnez une option / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>اختر خياراً</span></option>
            <option value="Internet">Internet / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>الإنترنت</span></option>
            <option value="Friend">Ami / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>صديق</span></option>
            <option value="Advertisement">Publicité / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>إعلان</span></option>
            <option value="Other">Autre / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>أخرى</span></option>
        </select>

        <textarea name="specialRequests" value={formData.specialRequests} onChange={handleInputChange} placeholder="Demandes spéciales / طلبات خاصة"></textarea>

        {/* File upload for mouth/teeth picture */}
        <label>
            Téléchargez une photo de votre bouche ou de vos dents : / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>حمل صورة لفمك أو أسنانك:</span>
            <input type="file" name="mouthPicture" onChange={handleFileChange} accept="image/*" />
        </label>

        <button type="submit">Soumettre / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>إرسال</span></button>
    </form>

    {message && <p>{message}</p>}
</div>

    );
};

export default ContactForm;
