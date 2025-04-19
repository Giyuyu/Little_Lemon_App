import React, { useEffect, useState } from 'react';
import littleLogo from './little.svg';  // Logo path

function Nav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // scroll down -> hide nav
      } else {
        setShowNav(true); // scroll up -> show nav
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`main-nav ${showNav ? 'nav-visible' : 'nav-hidden'}`}>
      <div className="logo-container">
        <a href="#reserve">
          <img src={littleLogo} alt="Little Lemon Logo" className="logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#reserve" className="nav-link">Home</a></li>
        <li><a href="#reserve" className="nav-link">Reserve</a></li>
        <li><a href="#specials" className="nav-link">Menu</a></li>
        <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#reserve" className="nav-link">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
