import React from 'react';
import heroImage from './hero.jpg'; // Make sure the file exists in the correct path

function Main() {
    return (
        <main>
            <section id="reserve" section className="hero-wrapper">
                <div className="hero">
                    <div className="hero-text">
                        <h1>Little Lemon</h1>
                        <p className="country">Philippines</p>
                        <p className="description">
                            Enjoy a rich blend of flavors at Little Lemon Restaurant,
                            where every dish tells a story of tradition and innovation.
                            <br />
                            We use fresh, locally-sourced ingredients to create a memorable dining experience
                            for you and your loved ones.
                            <br />
                            Come for the food, stay for the ambiance,
                            and make unforgettable memories.
                            <br />
                            Reserve a table now and enjoy culinary excellence.
                        </p>
                        <button className="reserve-btn">Reserve a Table</button>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt="Restaurant" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
