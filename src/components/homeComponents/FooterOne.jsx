import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterest,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import './FooterOne.css';
import logo from '../../assets/ePushti.png';
import Partnerlogo from '../../assets/partners.png';
const FooterOne = () => {
  return (
    <div className="FooterOne">
      <div className="image-row">
      
        <div className="content">
            <h2>BE OUR HEALTH CLUD MEMBER</h2>
            <p>We will send update once a week</p>
            <div class="subscribe-bar">
            <div class="input-group">
                <div class="rectangle-110"></div>
                <input type="email" placeholder="Your email" class="subscribe-input" />
            </div>
            <div class="subscribe-button">
                <div class="rectangle-111"></div>
                <button>Subscribe</button>
            </div>
            </div>
        </div>
        <div className="middle">
        <img src={logo} alt="logo" className="logo" />
          <div className="contentBelow">Let’s Get Social!</div>
          <div className="Icon-below-content">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon facebook" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
            <FontAwesomeIcon icon={faPinterest} className="social-icon pinterest" />
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon linkedin" />
          </div>
        </div>
        <div className="partner">
          <div className="contents">
            <h4>PARTNERS</h4>
            <h5>FPMU, Ministry of Food & MUCH</h5>
          </div>
          <div className="logoAfterContent">
          <img src={Partnerlogo} alt="logo" className="Plogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
