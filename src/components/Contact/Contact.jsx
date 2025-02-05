import React, { useState } from 'react';
import './Contact.css';

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
            const response = await fetch('http://https://akashkrportfolio.vercel.app:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                alert('Message sent successfully!');
            } else {
                throw new Error(data.message || 'Failed to send message');
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
