import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Grow your skills to advance your career path with Master School</h1>
      <p>Our humble endeavour has been to encourage and prepare our students, in every way to face the difficult challenges of today, boldly and whole heartedly. We are aiming to ensure that everyone can benefit from our products to our open-source platforms.</p>
      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
