import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSecFive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import schoolgrl from '../../assets/mihi.jpeg';
const HeroSecFive = () => {
  return (
    <div className="feature-section">
      <Card className="herofive text-center">
        <Card.Body className='herofivebody'>
          <h1>আমাদের কোর্স</h1>
          <img
            src={schoolgrl} // Replace with your image path
            alt="Feature"
            className="feature-img"
          />
          <h1>কৈশোরকালীন পুষ্টি ও স্বাস্থ্যসম্মত জীবনধারা</h1>
          
        </Card.Body>
      </Card>
      <Button className='btnherofive'>বিস্তারিত</Button>
    </div>
  );
};

export default HeroSecFive;