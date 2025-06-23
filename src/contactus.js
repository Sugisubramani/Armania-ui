import React from "react";
import "./styles/contactus.css";

function ContactUs() {
    return (
        <div>
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Reach out to us for any inquiries or assistance.</p>
            </header>

            <div className="contact-content">
                <h2>Get in Touch</h2>
                <p>
                    At Hotel Armania, we value your feedback and inquiries. Feel free to contact us for reservations, event planning, or any other questions
                    you may have.
                </p>

                <div className="contact-details">
                    <h3>Contact Information</h3>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Email:</strong> contact@hotelarmania.com</p>
                    <p><strong>Address:</strong> 123 Luxury Lane, Texas, TX 75201</p>
                </div>

                <div className="register-section">
                    <h2>Register Here</h2>
                    <p>New here? Register to access our exclusive services.</p>
                    <button
                        className="register-button"
                        onClick={() => window.location.href = "/register"}
                    >
                        Register Here
                    </button>
                    <p>Already have an account?</p>
                    <button
                        className="login-button"
                        onClick={() => window.location.href = "/login"}
                    >
                        Login Here
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
