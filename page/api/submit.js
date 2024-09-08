import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // MongoDB URI from Atlas
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body; // Form data

      await client.connect();
      const database = client.db('mydatabase');
      const collection = database.collection('submissions');

      const result = await collection.insertOne(data);
      res.status(200).json({ message: 'Submission saved', result });
    } catch (error) {
      res.status(500).json({ error: 'Error saving submission' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
