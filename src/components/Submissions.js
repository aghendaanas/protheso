import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../components/Submissions.css';
import logo from "../assets/logo.png";
import { MdDeleteForever } from "react-icons/md";
import { IoPrint } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";


const SubmissionsPage = () => {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = () => {
            const data = JSON.parse(localStorage.getItem('submissions')) || [];
            setSubmissions(data);
        };

        fetchSubmissions();
    }, []);

    const handleDelete = (index) => {
        const updatedSubmissions = submissions.filter((_, i) => i !== index);
        setSubmissions(updatedSubmissions);
        localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    };

    const handleViewDetails = (submission) => {
        alert(
            `Nom: ${submission.name}\nEmail: ${submission.email}\nTéléphone: ${submission.phone}\n` +
            `Date de Soumission: ${submission.submissionDate}\n` +
            `Date de Naissance: ${submission.dob}\nSexe: ${submission.gender}\n` +
            `Adresse: ${submission.address}\nConditions Médicales: ${submission.medicalConditions}\n` +
            `Allergies: ${submission.allergies}\nMédicaments: ${submission.medications}\n` +
            `Travaux Dentaires Précédents: ${submission.previousDentalWork}\n` +
            `Problèmes Actuels: ${submission.currentIssues}\nTraitements Souhaités: ${submission.desiredTreatments}\n` +
            `Assurance: ${submission.insuranceProvider}\nNuméro de Police: ${submission.policyNumber}\n` +
            `Date Préférée: ${submission.preferredDate}\nRaison de la Visite: ${submission.reasonForVisit}\n` +
            `Consentement: ${submission.consent}\nPolitique de Confidentialité: ${submission.privacyPolicy}\n` +
            `Comment avez-vous entendu parler de nous: ${submission.howDidYouHear}\n` +
            `Demandes Spéciales: ${submission.specialRequests}`
        );
    };

    // Base64 logo image (you can replace this with your actual logo base64 string)
const logoBase64 = logo;

// Contract rules or text for the second page
const contractRules = `


Reconnaissance de la Politique de Confidentialité, de la Politique de Contact, du Bon de Travail et des Conditions de Sécurité

En utilisant ce formulaire de contact, vous reconnaissez avoir pris connaissance et acceptez notre politique de confidentialité, notre politique de contact, les termes du bon de travail ainsi que les conditions de sécurité suivantes :

- **Politique de Confidentialité** : Nous nous engageons à protéger vos données personnelles et à les utiliser uniquement dans le cadre de nos services. Vos informations seront traitées avec la plus grande confidentialité et ne seront pas partagées avec des tiers sans votre consentement explicite.
- **Politique de Contact** : Les informations que vous fournissez via ce formulaire seront utilisées exclusivement pour répondre à vos demandes et améliorer notre service.
- **Bon de Travail** : En acceptant ce bon de travail, vous confirmez avoir pris connaissance des détails et conditions liés à votre demande de service. Si vous ne pouvez pas accepter le travail tel que présenté, veuillez nous en informer dans un délai de [préciser le délai] jours. Dans le cas contraire, le travail sera considéré comme accepté et les frais associés seront dus. 
- **Conditions de Sécurité** : En cas de problème ou de désaccord concernant le travail fourni, vous devez nous notifier immédiatement. Nous nous engageons à résoudre tout litige de manière équitable. Veuillez noter qu'il est impossible de retourner le travail après acceptation en raison de l'effort et du temps investis dans chaque service ou tâche. En cas de non-acceptation après la livraison, des frais supplémentaires peuvent être appliqués pour les modifications ou le retour de l'ouvrage. Nous nous réservons le droit de facturer les frais de traitement en cas de non-acceptation ou d'annulation.

Pour toute question concernant ces documents ou notre politique en général, n'hésitez pas à nous contacter.

---




`;

const handlePrintPdf = (submission) => {
    const doc = new jsPDF();
    
    // Add logo
    if (logoBase64) {
        const logoWidth = 22;  // Adjust the width to make it smaller
        const logoHeight = 12; // Adjust the height accordingly to maintain aspect ratio
        const pageWidth = doc.internal.pageSize.getWidth();
        const xPos = (pageWidth - logoWidth) / 2; // Calculate center position
    
        doc.addImage(logoBase64, 'PNG', xPos, 10, logoWidth, logoHeight); // Center and adjust size
    }
    

    // Title
    doc.setFontSize(15);
    doc.setFont("poppins", "bold");
    doc.text("Détails de la Soumission", 105, 30, { align: 'center' });

    // Table
    doc.setFontSize(12);
    doc.setFont("poppins", "normal");
    doc.autoTable({
        startY: 40,
        head: [['Champ', 'Valeur']],
        body: [
            ['Nom Complet', submission.name],
            ['Email', submission.email],
            ['Numéro de Téléphone', submission.phone],
            ['Date de Soumission', submission.submissionDate],
            ['Date de Naissance', submission.dob],
            ['Sexe', submission.gender],
            ['Adresse', submission.address],
            ['Conditions Médicales', submission.medicalConditions],
            ['Allergies', submission.allergies],
            ['Médicaments', submission.medications],
            ['Travaux Dentaires Précédents', submission.previousDentalWork],
            ['Problèmes Actuels', submission.currentIssues],
            ['Traitements Souhaités', submission.desiredTreatments],
            ['Assurance', submission.insuranceProvider],
            ['Numéro de Police', submission.policyNumber],
            ['Date Préférée', submission.preferredDate],
            ['Raison de la Visite', submission.reasonForVisit],
            ['Consentement', submission.consent ? 'Oui' : 'Non'],
            ['Politique de Confidentialité', submission.privacyPolicy ? 'Oui' : 'Non'],
            ['Comment avez-vous entendu parler de nous', submission.howDidYouHear],
            ['Demandes Spéciales', submission.specialRequests],
        ],
        theme: 'grid',
        headStyles: { fillColor: [0, 51, 153], textColor: [255, 255, 255] },
        styles: { font: 'helvetica', cellPadding: 1.5, minCellWidth: 15 },
        margin: { top: 2, left: 5, right: 5 },
    });

    // Handle picture (if any)
    if (submission.mouthPicture) {
        const img = new Image();
        img.src = submission.mouthPicture;

        img.onload = () => {
            doc.addImage(img, 'PNG', 15, doc.autoTable.previous.finalY + 10, 90, 80); // Adjust size and position
            doc.text("Signature du Client:", 15, doc.autoTable.previous.finalY + 175); // Adjust position
            doc.line(15, doc.autoTable.previous.finalY + 180, 195, doc.autoTable.previous.finalY + 180); // Signature line

            // Add second page with contract rules
            doc.addPage();
            doc.setFontSize(16);
            doc.setFont("poppins", "bold");
            doc.text("Règles du Contrat", 105, 20, { align: 'center' });
            
            doc.setFontSize(12);
            doc.setFont("poppins", "normal");
            doc.text(contractRules, 15, 30);

            // Save PDF
            doc.save(`${submission.name}_soumission.pdf`);
        };

        img.onerror = () => {
            console.error("Error loading image");
            // Add second page with contract rules even if the image fails to load
            doc.addPage();
            doc.setFontSize(16);
            doc.setFont("poppins", "bold");
            doc.text("Règles du Contrat", 105, 20, { align: 'center' });
            
            doc.setFontSize(12);
            doc.setFont("poppins", "normal");
            doc.text(contractRules, 15, 30);

            // Save PDF
            doc.save(`${submission.name}_soumission.pdf`);
        };
    } else {
        // Add second page with contract rules
        doc.addPage();
        doc.setFontSize(16);
        doc.setFont("poppins", "bold");
        doc.text("Règles du Contrat", 105, 20, { align: 'center' });
        
        doc.setFontSize(8);
        doc.setFont("poppins", "normal");
        doc.text(contractRules, 15, 30);

        // Save PDF
        doc.save(`${submission.name}_soumission.pdf`);
    }
};

    return (
        <div className="submissions-container">
            <h2>Soumissions des Clients</h2>
            <table className="submissions-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Date de Soumission</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission, index) => (
                        <tr key={index}>
                            <td>{submission.name}</td>
                            <td>{submission.email}</td>
                            <td>{submission.phone}</td>
                            <td>{submission.submissionDate}</td>
                            <td>
                                <button onClick={() => handleViewDetails(submission)}><FaEye size={18} /></button>
                                <button onClick={() => handlePrintPdf(submission)}><IoPrint size={18} /></button>
                                <button onClick={() => handleDelete(index)}><MdDeleteForever size={18} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubmissionsPage;
