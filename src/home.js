import React from "react";
import './styles/home.css';

function Home() {
    return (
        <section id="home" className="home-hero">
            <h1 className="home-heading">Welcome to Hotel Armania</h1>
            <p className="home-paragraph">
                Experience unparalleled luxury and comfort in the heart of Texas.
            </p>
            <a href="/services" className="home-cta">Explore Our Services</a>
        </section>
    );
}

export default Home;