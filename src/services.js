import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/services.css";

function Services() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/contact");
  };

  return (
    <div>
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Explore the wide range of premium services we offer to make your stay unforgettable.</p>
      </header>

      <div className="services-content">

        <div className="service">
          <h2>Luxurious Rooms</h2>
          <p>
            Our rooms are designed with luxury and comfort in mind. Choose from a variety of room types, all equipped with modern amenities and stunning views of the city.
          </p>
          <div className="room-showcase">
            <div className="room-type">
              <h3>Single Room</h3>
              <p>Perfect for solo travelers, offering a cozy and comfortable space.</p>
              <p><strong>₹3500 per night</strong></p>
            </div>
            <div className="room-type">
              <h3>Double Room</h3>
              <p>Spacious room ideal for couples, featuring modern décor and premium furnishings.</p>
              <p><strong>₹5000 per night</strong></p>
            </div>
            <div className="room-type">
              <h3>Suite</h3>
              <p>Luxury suite with a separate living area, perfect for extended stays or families.</p>
              <p><strong>₹9000 per night</strong></p>
            </div>
            <div className="room-type">
              <h3>Penthouse</h3>
              <p>Experience ultimate luxury with panoramic city views, an exclusive getaway for the elite.</p>
              <p><strong>₹15000 per night</strong></p>
            </div>
          </div>
        </div>

        <div className="service">
          <h2>Gourmet Dining</h2>
          <p>
            Indulge in exquisite dining experiences at our in-house restaurants, offering a wide range of international and local cuisines prepared by world-class chefs.
          </p>
          <div className="dining-showcase">
            <div className="dish">
              <h3>Pizza Margherita</h3>
              <p>Freshly made with a blend of mozzarella, basil, and ripe tomatoes.</p>
              <p><strong>₹550</strong></p>
            </div>
            <div className="dish">
              <h3>Grilled Ribeye Steak</h3>
              <p>Succulent ribeye steak, grilled to perfection, served with seasonal vegetables.</p>
              <p><strong>₹1200</strong></p>
            </div>
          </div>
        </div>

        <div className="service">
          <h2>Spa & Wellness</h2>
          <p>
            Relax and unwind at our luxurious spa. With a variety of treatments, including massages, facials, and body therapies, your well-being is our top priority.
          </p>
          <button onClick={handleBookNow}>Book Now</button>
        </div>

        <div className="service">
          <h2>Fitness Center</h2>
          <p>
            Stay active during your stay with access to our fully equipped fitness center, offering a wide range of equipment and personal training services to meet all your fitness needs.
          </p>
          <p><strong>₹1500 per day</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Services;
