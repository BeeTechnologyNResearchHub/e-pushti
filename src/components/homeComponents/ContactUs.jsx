import React from 'react';
import './ContactUs.css';
import map from '../../assets/map.png';
import contact from '../../assets/contact.png';

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="Header">
        <h1 className="underlined-text">যোগাযোগ করুন</h1>
      </div>

      <div className="image-row">
        <div className="imageC">
          <img src={map} alt="map" className="imageMap" />
          <div className="content-below-image">
            <p>INFORMATION</p>
                <p>info@biid.org.bd</p>
               <p> Call us (+880) 2 8714169, (+880) 2 9845909</p>
                <p>Bangladesh Institute of ICT in Development (BIID)</p>
                <p>House No. 174, Level-2, Apt.B3, Road No. 02,</p>
                <p>Mohakhali DOHS, Dhaka- 1206</p>
                <p>Bangladesh</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.8767838913427!2d90.37554407140429!3d23.778091902497557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b3340c1c91%3A0xfec009b60808d80a!2sICT%20Tower!5e0!3m2!1sen!2sbd!4v1692184896671!5m2!1sen!2sbd"
                width="70%" height="220" style={{ border: 0 }}
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'
          ></iframe>
          </div>
        </div>
        <div className="imageC">
          <img src={contact} alt="contact" className="image" />
          <div className="content-below-image">
            <div className="form-container">
              <form className="contact-form">
                <input type="text" className="input-field" placeholder="Name" />
                <input type="email" className="input-field" placeholder="Email" />
                <input type="text" className="input-field" placeholder="Subject" />
                <textarea className="input-field textarea-field" placeholder="Your Message"></textarea>
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="other-content">
        
      </div>
    </div>
  );
};

export default ContactUs;
