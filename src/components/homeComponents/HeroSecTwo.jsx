import React from 'react';
import './HeroSecTwo.css';
import cloud from '../../assets/cloud.png';

const HeroSecTwo = ({ totalVisited }) => {
  return (
    <div className="hero-sec-two">
      <img src={cloud} alt="Cloud" className="cloud-image" />

      <div className="label-container">
        <div className="visited-label">
          <h1>Total Visited</h1>
        </div>
        </div>
        <div className="label-container2">
        <div className="visited-label">
          <h1>Total Enrolled</h1>
        </div>
      </div>

      <div className="rectangle total-visited">
        <p className="visited-count">{totalVisited}</p>
      </div>

      <div className="rectangle recent-visited">
        <p className="visited-count">{totalVisited}</p>
      </div>

      <div className="button-container">
        <button className="custom-button">বিস্তারিত</button>
      </div>
    </div>
  );
};

export default HeroSecTwo;
