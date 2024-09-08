// /api/submit.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, dob, gender, phone, email, address, medicalConditions, allergies, medications, previousDentalWork, currentIssues, desiredTreatments, insuranceProvider, policyNumber, preferredDate, reasonForVisit, consent, privacyPolicy, howDidYouHear, specialRequests, mouthPicture, submissionDate } = req.body;

        try {
            const client = await MongoClient.connect(process.env.MONGODB_URI);
            const db = client.db();
            const collection = db.collection('submissions');

            const result = await collection.insertOne({ name, dob, gender, phone, email, address, medicalConditions, allergies, medications, previousDentalWork, currentIssues, desiredTreatments, insuranceProvider, policyNumber, preferredDate, reasonForVisit, consent, privacyPolicy, howDidYouHear, specialRequests, mouthPicture, submissionDate });

            client.close();

            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: 'Failed to submit data' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
