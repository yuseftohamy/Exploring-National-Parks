// src/Help/HelpPage.jsx
import React from 'react';

const HelpPage = () => {
    return (
        <div className="help-container">
            <h1>Help & Support</h1>
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h3>How do I find a park?</h3>
                    <p>Use the Park Search feature to locate parks based on activities, location, and more.</p>
                </div>
                <div className="faq-item">
                    <h3>How can I plan my trip?</h3>
                    <p>Visit the Park Plan section to create your itinerary with activities and alerts for your visit.</p>
                </div>
                {/* Add more FAQ items as needed */}
            </section>
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>If you need further assistance, please email us at <a href="mailto:support@nationalparks.com">support@nationalparks.com</a>.</p>
            </section>
        </div>
    );
};

export default HelpPage;
