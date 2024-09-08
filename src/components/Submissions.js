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
        const fetchSubmissions = async () => {
          try {
            const response = await fetch('/api/submissions');
            const data = await response.json();
            setSubmissions(data);
          } catch (error) {
            console.log('Error fetching submissions:', error);
          }
        };
      
        fetchSubmissions();
      }, []);
      

    const handleDelete = (index) => {
        const updatedSubmissions = submissions.filter((_, i) => i !== index);
        setSubmissions(updatedSubmissions);
        localStorage.setItem('submissions', JSON.stringify(updatedSubmissions));
    };

    // Define the contractRules variable
const contractRules = `
En utilisant ce formulaire de contact, vous reconnaissez avoir pris connaissance et acceptez notre politique de confidentialité, notre politique de contact, les termes du bon de travail ainsi que les conditions de sécurité suivantes :

- **Politique de Confidentialité** : Nous nous engageons à protéger vos données personnelles et à les utiliser uniquement dans le cadre de nos services. Vos informations seront traitées avec la plus grande confidentialité et ne seront pas partagées avec des tiers sans votre consentement explicite.
- **Politique de Contact** : Les informations que vous fournissez via ce formulaire seront utilisées exclusivement pour répondre à vos demandes et améliorer notre service.
- **Bon de Travail** : En acceptant ce bon de travail, vous confirmez avoir pris connaissance des détails et conditions liés à votre demande de service. Si vous ne pouvez pas accepter le travail tel que présenté, veuillez nous en informer dans un délai de [préciser le délai] jours. Dans le cas contraire, le travail sera considéré comme accepté et les frais associés seront dus. 
- **Conditions de Sécurité** : En cas de problème ou de désaccord concernant le travail fourni, vous devez nous notifier immédiatement. Nous nous engageons à résoudre tout litige de manière équitable. Veuillez noter qu'il est impossible de retourner le travail après acceptation en raison de l'effort et du temps investis dans chaque service ou tâche. En cas de non-acceptation après la livraison, des frais supplémentaires peuvent être appliqués pour les modifications ou le retour de l'ouvrage. Nous nous réservons le droit de facturer les frais de traitement en cas de non-acceptation ou d'annulation.

Pour toute question concernant ces documents ou notre politique en général, n'hésitez pas à nous contacter.


`;
    // Mapping for "How Did You Hear About Us?" field
    const howDidYouHearOptions = {
        'Internet': 'Internet / الإنترنت',
        'Friend': 'Ami / صديق',
        'Advertisement': 'Publicité / إعلان',
        'Other': 'Autre / أخرى',
    };

    const handleViewDetails = (submission) => {
        alert(
            `Nom / الاسم: ${submission.name}\n` +
            `Email / البريد الإلكتروني: ${submission.email}\n` +
            `Téléphone / الهاتف: ${submission.phone}\n` +
            `Date de Soumission / تاريخ الإرسال: ${submission.submissionDate}\n` +
            `Date de Naissance / تاريخ الميلاد: ${submission.dob}\n` +
            `Sexe / الجنس: ${submission.gender}\n` +
            `Adresse / العنوان: ${submission.address}\n` +
            `Conditions Médicales / الحالات الطبية: ${submission.medicalConditions}\n` +
            `Allergies / الحساسية: ${submission.allergies}\n` +
            `Médicaments / الأدوية: ${submission.medications}\n` +
            `Travaux Dentaires Précédents / الأعمال السنية السابقة: ${submission.previousDentalWork}\n` +
            `Problèmes Actuels / المشاكل الحالية: ${submission.currentIssues}\n` +
            `Traitements Souhaités / العلاجات المطلوبة: ${submission.desiredTreatments}\n` +
            `Assurance / شركة التأمين: ${submission.insuranceProvider}\n` +
            `Numéro de Police / رقم الوثيقة: ${submission.policyNumber}\n` +
            `Date Préférée / التاريخ المفضل: ${submission.preferredDate}\n` +
            `Raison de la Visite / سبب الزيارة: ${submission.reasonForVisit}\n` +
            `Consentement / الموافقة: ${submission.consent ? 'Oui / نعم' : 'Non / لا'}\n` +
            `Politique de Confidentialité / سياسة الخصوصية: ${submission.privacyPolicy ? 'Oui / نعم' : 'Non / لا'}\n` +
            `Comment avez-vous entendu parler de nous / كيف سمعت عنا: ${howDidYouHearOptions[submission.howDidYouHear] || submission.howDidYouHear}\n` +
            `Demandes Spéciales / طلبات خاصة: ${submission.specialRequests}`
        );
    };

 


    const generateUniqueId = () => {
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 1000);
        return `CONTRACT-${timestamp}-${randomNumber}`;
    };
    
    const handlePrintPdf = (submission) => {
        const doc = new jsPDF();
    
        // Generate unique contract ID
        const contractId = generateUniqueId();
    
        // Define company information
        const companyName = "Protheso";
        const companyAddress = "Agadir";
        const companyPhone = "Téléphone: +212623480407";
        const companyEmail = "Email: soufianeaourir63@gmail.com";
        const submissionDate = `Date de Soumission: ${submission.submissionDate}`;
    
        // Add header on the first page
        doc.setFontSize(12);
        doc.setFont("poppins", "normal");
    
        // Title on the left
        doc.text("Contrat", 15, 10);
    
        // Company logo on the right
        const logoWidth = 30;  // Adjust the width as needed
        const logoHeight = 15; // Adjust the height accordingly to maintain aspect ratio
        const pageWidth = doc.internal.pageSize.getWidth();
        const xPosLogo = pageWidth - logoWidth - 15; // Align to the right with margin
        const logoBase64 = logo;
    
        if (logoBase64) {
            doc.addImage(logoBase64, 'PNG', xPosLogo, 5, logoWidth, logoHeight); // Adjust size and position
        }
    
        // Add company information and contract ID
        doc.text(companyName, 15, 25);
        doc.text(companyAddress, 15, 30);
        doc.text(companyPhone, 15, 35);
        doc.text(companyEmail, 15, 40);
        doc.text(submissionDate, 15, 45);
        doc.text(`ID du Contrat: ${contractId}`, 15, 50);
    
        // Add two signature zones in the same line
        const signatureY = 70;
        const signatureWidth = 80;
        const signatureHeight = 20;
        const spaceBetweenSignatures = 20;
    
        doc.setFontSize(12);
        doc.setFont("poppins", "normal");
        doc.text("Signature du Prothésiste", 15, signatureY - 10);
        doc.rect(15, signatureY, signatureWidth, signatureHeight); // Zone for the prosthetist's signature
    
        doc.text("Signature du Client", 15 + signatureWidth + spaceBetweenSignatures, signatureY - 10);
        doc.rect(15 + signatureWidth + spaceBetweenSignatures, signatureY, signatureWidth, signatureHeight); // Zone for the client's signature
    
        // Table with submission details
        doc.autoTable({
            startY: 100,
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
            headStyles: { fillColor: [15, 48, 97], textColor: [255, 255, 255] },
            styles: { font: 'helvetica', cellPadding: 1.5, minCellWidth: 15 },
            margin: { top: 2, left: 5, right: 5 },
        });
    
        // Add second page with the picture and contract rules
        doc.addPage();
    
        // Add picture centered at the top
        if (submission.mouthPicture) {
            const img = new Image();
            img.src = submission.mouthPicture;
    
            img.onload = () => {
                const imgWidth = 100;  // Adjust as needed
                const imgHeight = 80;  // Adjust as needed
                const xPosImg = (doc.internal.pageSize.width - imgWidth) / 2; // Center the image horizontally
                const yPosImg = 10; // Top margin
    
                doc.addImage(img, 'PNG', xPosImg, yPosImg, imgWidth, imgHeight); // Adjust size and position
    
                // Add contract rules text below the picture
                const textMargin = 15;
                const pageHeight = doc.internal.pageSize.height;
                const textYPos = yPosImg + imgHeight + textMargin;
    
                doc.setFontSize(12);
                doc.setFont("poppins", "normal");
    
                // Ensure text fits within the page margins
                doc.text(contractRules, textMargin, textYPos, { maxWidth: doc.internal.pageSize.width - 2 * textMargin });
    
                // Add two signature zones in the same line
                doc.text("Signature du Prothésiste", 15, pageHeight - 30);
                doc.rect(15, pageHeight - 25, signatureWidth, signatureHeight); // Zone for the prosthetist's signature
    
                doc.text("Signature du Client", 15 + signatureWidth + spaceBetweenSignatures, pageHeight - 30);
                doc.rect(15 + signatureWidth + spaceBetweenSignatures, pageHeight - 25, signatureWidth, signatureHeight); // Zone for the client's signature
    
                // Save PDF
                doc.save(`${submission.name}_soumission_${contractId}.pdf`);
            };
    
            img.onerror = () => {
                console.error("Error loading image");
                // Add contract rules text without image
                const textMargin = 15;
                doc.setFontSize(12);
                doc.setFont("poppins", "normal");
    
                doc.text(contractRules, textMargin, 10, { maxWidth: doc.internal.pageSize.width - 2 * textMargin });
    
                // Add two signature zones in the same line
                doc.text("Signature du Prothésiste", 15, doc.internal.pageSize.height - 30);
                doc.rect(15, doc.internal.pageSize.height - 25, signatureWidth, signatureHeight); // Zone for the prosthetist's signature
    
                doc.text("Signature du Client", 15 + signatureWidth + spaceBetweenSignatures, doc.internal.pageSize.height - 30);
                doc.rect(15 + signatureWidth + spaceBetweenSignatures, doc.internal.pageSize.height - 25, signatureWidth, signatureHeight); // Zone for the client's signature
    
                // Save PDF
                doc.save(`${submission.name}_soumission_${contractId}.pdf`);
            };
        } else {
            // Add contract rules text and signature zones without image
            const textMargin = 15;
            doc.setFontSize(12);
            doc.setFont("poppins", "normal");
            doc.text(contractRules, textMargin, 10, { maxWidth: doc.internal.pageSize.width - 2 * textMargin });
    
            doc.text("Signature du Prothésiste", 15, doc.internal.pageSize.height - 30);
            doc.rect(15, doc.internal.pageSize.height - 25, signatureWidth, signatureHeight); // Zone for the prosthetist's signature
    
            doc.text("Signature du Client", 15 + signatureWidth + spaceBetweenSignatures, doc.internal.pageSize.height - 30);
            doc.rect(15 + signatureWidth + spaceBetweenSignatures, doc.internal.pageSize.height - 25, signatureWidth, signatureHeight); // Zone for the client's signature
    
            // Save PDF
            doc.save(`${submission.name}_soumission_${contractId}.pdf`);
        }
    };
    
   
    
    

    return (
        <div className="submissions-container">
        <h2>
            Soumissions des Clients / <span style={{ fontFamily: 'Tajawal, sans-serif' }}>تقديمات العملاء</span>
        </h2>
        <table className="submissions-table">
            <thead>
                <tr>
                    <th>
                        Nom<br /> 
                        <span style={{ fontFamily: 'Tajawal, sans-serif' }}>الاسم</span>
                    </th>
                    <th>
                        Email<br />
                        <span style={{ fontFamily: 'Tajawal, sans-serif' }}>البريد الإلكتروني</span>
                    </th>
                    <th>
                        Téléphone<br />
                        <span style={{ fontFamily: 'Tajawal, sans-serif' }}>الهاتف</span>
                    </th>
                    <th>
                        Date de Soumission<br />
                        <span style={{ fontFamily: 'Tajawal, sans-serif' }}>تاريخ الإرسال</span>
                    </th>
                    <th>
                        Actions<br />
                        <span style={{ fontFamily: 'Tajawal, sans-serif' }}>الإجراءات</span>
                    </th>
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
                            <button onClick={() => handleViewDetails(submission)}>
                                <FaEye size={15} />
                            </button>
                            <button onClick={() => handlePrintPdf(submission)}>
                                <IoPrint size={15} />
                            </button>
                            <button onClick={() => handleDelete(index)}>
                                <MdDeleteForever size={15} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    );
};

export default SubmissionsPage;
