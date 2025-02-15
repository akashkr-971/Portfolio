import React, { useState } from 'react';
import { init, send } from '@emailjs/browser';
import './Contact.css';

// Initialize EmailJS with your User ID
init('27lxZrkMelXztlF2l'); // Replace with your EmailJS user ID

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const response = await send('service_27lxZrk', 'template_27lxZrk', {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            }, '27lxZrkMelXztlF2l'); // Replace with your service ID, template ID, and user ID

            if (response.status === 200) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            alert(error.message || 'An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-container" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>Feel free to reach out for collaborations or just a friendly hello</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            rows="5"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                {status === 'success' && (
                    <p className="success-message">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="error-message">Failed to send message. Please try again.</p>
                )}
            </div>
        </div>
    );
}

export default Contact; 
