import React from 'react';
import './App.css';
import customer1 from './customer1.jpg';
import customer2 from './customer2.jpg';
import customer3 from './customer3.jpg';

function Testimonials() {
    const reviews = [
        {
            quote: "Perfect for date night or family dinners. Their kabsa is my new favorite.",
            name: "Maria Lopez",
            role: "Lifestyle Influencer",
            image: customer1,
            rating: 5,
        },
        {
            quote: "The food was absolutely amazing! I felt like I was dining in a 5-star hotel.",
            name: "James Smith",
            role: "Chef & Reviewer",
            image: customer2,
            rating: 5,
        },
        {
            quote: "Incredible flavors and wonderful atmosphere. Highly recommend Little Lemon!",
            name: "Angelo Reyes",
            role: "Food Blogger",
            image: customer3,
            rating: 5,
        },
    ];

    const renderStars = (count) => {
        return '★'.repeat(count) + '☆'.repeat(5 - count);
    };

    return (
        <section id="testimonials" className="testimonials-section">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-card">
                {reviews.map((review, index) => (
                    <div className="testimonial" key={index}>
                        <p className="quote">“{review.quote}”</p>
                        <div className="rating">{renderStars(review.rating)}</div>
                        <div className="customer-info">
                            <img src={review.image} alt={review.name} />
                            <div>
                                <h3>{review.name}</h3>
                                <p className="role">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
