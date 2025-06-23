import React from "react";
import "./styles/about.css";

function About() {
    return (
        <div>

            <header className="about-header">
                <h1>About Hotel Armania</h1>
                <p>Discover the story behind our legacy of luxury and comfort.</p>
            </header>

            <div className="about-content">
                <h2>Who We Are</h2>
                <p>
                    Hotel Armania is more than just a place to stay; it's a destination designed to inspire, relax, and rejuvenate. Located in the heart of Texas,
                    our hotel combines modern luxury with timeless elegance.
                </p>
                <p>
                    Since our establishment in 2011, we have been committed to delivering exceptional hospitality services. From our state-of-the-art facilities
                    to our highly trained staff, we ensure that every moment of your stay is memorable.
                </p>

                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>
                        To provide a world-class experience that blends luxurious accommodations, personalized services, and exceptional dining options, ensuring a
                        perfect stay for every guest.
                    </p>
                </div>

                <div className="vision">
                    <h3>Our Vision</h3>
                    <p>
                        To be a globally recognized symbol of elegance, sophistication, and unparalleled hospitality, setting the benchmark for excellence in the
                        hotel industry.
                    </p>
                </div>

                <div className="features">
                    <div className="feature">
                        <h3>Prime Location</h3>
                        <p>
                            Situated in the heart of the city, our hotel offers easy access to top attractions, shopping districts, and cultural landmarks. Whether you
                            are here for business or leisure, everything is just a stone's throw away.
                        </p>
                    </div>
                    <div className="feature">
                        <h3>Luxury Redefined</h3>
                        <p>
                            Each room and suite at Hotel Armania is meticulously designed to offer a blend of luxury and comfort. From plush bedding to breathtaking
                            views, every detail is crafted to perfection.
                        </p>
                    </div>
                    <div className="feature">
                        <h3>Exceptional Dining</h3>
                        <p>
                            Indulge in a culinary journey at our in-house restaurants, where expert chefs prepare an exquisite selection of international and local
                            cuisines to tantalize your taste buds.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
