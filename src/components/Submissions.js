import React, { useState, useEffect } from 'react';
import '../components/Submissions.css';

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

    const handleViewPdf = (pdfUrl) => {
        if (!pdfUrl) {
            alert("No PDF URL found.");
            return;
        }
        try {
            const url = new URL(pdfUrl);
            window.open(url, '_blank', 'noopener,noreferrer');
        } catch (error) {
            alert("Invalid PDF URL.");
            console.error("Invalid URL:", pdfUrl, error);
        }
    };

    return (
        <div className="submissions-container">
            <h2>Submissions</h2>
            <table className="submissions-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>PDF</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission, index) => (
                        <tr key={index}>
                            <td>{submission.name}</td>
                            <td>{submission.email}</td>
                            <td>{submission.phone}</td>
                            <td>
                                {submission.pdfUrl && (
                                    <button
                                        className="pdf"
                                        onClick={() => handleViewPdf(submission.pdfUrl)}
                                    >
                                        Voir
                                    </button>
                                )}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubmissionsPage;
