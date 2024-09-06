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

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };

 

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
            setFormData({ ...formData, mouthPicture: reader.result }); // Save base64 string
        };
    
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const submissionDate = new Date().toLocaleDateString();
        const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
        const updatedSubmissions = [...submissions, { ...formData, submissionDate }];
        localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
        setMessage("Submission was successful!");
    
        // Reset form
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
            <h2>Contact Form</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                {/* Input fields */}
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
                <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} placeholder="Date of Birth" required />
                <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" required />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" />
                <input type="text" name="medicalConditions" value={formData.medicalConditions} onChange={handleInputChange} placeholder="Medical Conditions" />
                <input type="text" name="allergies" value={formData.allergies} onChange={handleInputChange} placeholder="Allergies" />
                <input type="text" name="medications" value={formData.medications} onChange={handleInputChange} placeholder="Medications" />
                <input type="text" name="previousDentalWork" value={formData.previousDentalWork} onChange={handleInputChange} placeholder="Previous Dental Work" />
                <input type="text" name="currentIssues" value={formData.currentIssues} onChange={handleInputChange} placeholder="Current Issues" />
                <input type="text" name="desiredTreatments" value={formData.desiredTreatments} onChange={handleInputChange} placeholder="Desired Treatments" />
                <input type="text" name="insuranceProvider" value={formData.insuranceProvider} onChange={handleInputChange} placeholder="Insurance Provider" />
                <input type="text" name="policyNumber" value={formData.policyNumber} onChange={handleInputChange} placeholder="Policy Number" />
                <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} placeholder="Preferred Appointment Date" />
                <textarea name="reasonForVisit" value={formData.reasonForVisit} onChange={handleInputChange} placeholder="Reason for Visit"></textarea>

                <label>
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleCheckboxChange} required />
                    I consent to the terms and conditions
                </label>
                <label>
                    <input type="checkbox" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleCheckboxChange} required />
                    I accept the privacy policy
                </label>
                <input type="text" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleInputChange} placeholder="How Did You Hear About Us?" />
                <textarea name="specialRequests" value={formData.specialRequests} onChange={handleInputChange} placeholder="Special Requests"></textarea>

                {/* File upload for mouth/teeth picture */}
                <label>
                    Upload a picture of your mouth or teeth:
                    <input type="file" name="mouthPicture" onChange={handleFileChange} accept="image/*" />
                </label>

                <button type="submit">Submit</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default ContactForm;
