import React, { useState } from "react";
import "./styles/login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError("");
        setMessage("");

        try {
            const response = await fetch("http://localhost:5001/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Login successful!");
                console.log("Token:", data.token); 
            } else {
                setError(data.error || "Login failed. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again later.");
            console.error(err);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login to Your Account</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username or Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>

                {error && <p className="error-message">{error}</p>}
                {message && <p className="success-message">{message}</p>}

                <div className="social-buttons">
                    <div className="google-btn">
                        <i className="fa fa-google"></i> Login with Google
                    </div>
                    <div className="facebook-btn">
                        <i className="fa fa-facebook"></i> Login with Facebook
                    </div>
                </div>

                <p>
                    Don't have an account? <a href="/register">Register Here</a>
                </p>
            </div>
        </div>
    );
}

export default Login;