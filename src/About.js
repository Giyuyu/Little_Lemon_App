import React from 'react';
import './App.css';
import restaurantImage1 from './restaurant2.jpg'; // Replace with actual path
import restaurantImage2 from './restaurant1.jpg'; // Replace with actual path

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <h2>Little Lemon</h2>
                    <h3 className="about-subheader">Philippines</h3>
                    <p>
                        Little Lemon is a neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
                        <br />
                        We take inspiration from traditional Mediterranean recipes and add a modern twist.
                        <br />
                        Our chefs use the freshest ingredients to create flavorful and healthy dishes.
                        <br />
                        Whether you’re here for a family dinner or a night out with friends, we’re excited to serve you!
                    </p>
                </div>
                <div className="about-image">
                    <div className="image-stack">
                        <img src={restaurantImage1} alt="Restaurant 1" className="img-main" />
                        <img src={restaurantImage2} alt="Restaurant 2" className="img-front" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
