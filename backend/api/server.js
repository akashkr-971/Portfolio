const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Simplified CORS configuration
app.use(cors({
    origin: '*',  // Allow all origins for development
    methods: ['POST']  // We only need POST for the contact form
}));
app.use(express.json());

// MongoDB connection with better error handling
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit if cannot connect to database
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

// Routes
app.post('/api/contact', async (req, res) => {
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
});

// Add error handler middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.message);
    res.status(500).json({
        success: false,
        message: 'Something broke! Error: ' + err.message
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 