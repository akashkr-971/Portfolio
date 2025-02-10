const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// MongoDB connection with better error handling
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });

// Message Schema
const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, email, subject, message } = req.body;
            const newMessage = new Message({
                name,
                email,
                subject,
                message
            });
            await newMessage.save();
            res.status(201).json({
                success: true,
                message: 'Message saved successfully'
            });
        } catch (error) {
            console.error('Error saving message:', error.message);
            res.status(500).json({
                success: false,
                message: 'Error saving message: ' + error.message
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
} 