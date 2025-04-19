import React from 'react';
import kabsa from './kabsa.jpg';
import shrimp from './shrimp.jpg';
import lavaCake from './cake.jpg';
import deliveryIcon from './delivery-icon.svg';
import './App.css';

function Highlights() {
    return (
        <section id="specials" className="highlights-section">
            <div className="highlights-header">
                <h2>This weeks Specials!</h2>
                <button className="menu-btn">View Online Menu</button>
            </div>

            <div className="specials-container">
                {[{
                    img: kabsa,
                    name: "Grilled Chicken Kabsa",
                    price: "₱149",
                    desc: "Authentic Middle Eastern rice dish topped with succulent grilled chicken and house-blended spices."
                }, {
                    img: shrimp,
                    name: "Garlic Butter Shrimp",
                    price: "₱189",
                    desc: "Juicy shrimp sautéed in garlic butter, served with lemon slices and our signature dip."
                }, {
                    img: lavaCake,
                    name: "Choco Lava Cake",
                    price: "₱99",
                    desc: "Warm, gooey chocolate cake with a molten center, served with vanilla ice cream."
                }].map((item, i) => (
                    <div className="special-card" key={i}>
                        <img src={item.img} alt={item.name} className="special-img" />
                        <div className="special-content">
                            <div className="text-block">
                                <div className="title-price">
                                    <h3>{item.name}</h3>
                                    <span className="price">{item.price}</span>
                                </div>
                                <p>{item.desc}</p>
                            </div>
                            <div className="order-link">
                                <a href="#order">Order a Delivery</a>
                                <img src={deliveryIcon} alt="Motorcycle Delivery" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Highlights;
