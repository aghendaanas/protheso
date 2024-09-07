const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/submissions', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Submission = mongoose.model('Submission', new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    // Add other fields as needed
}));

app.post('/submissions', async (req, res) => {
    const submission = new Submission(req.body);
    await submission.save();
    res.send(submission);
});

app.get('/submissions', async (req, res) => {
    const submissions = await Submission.find();
    res.send(submissions);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
