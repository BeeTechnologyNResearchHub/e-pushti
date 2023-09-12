import React from 'react';
import './HeroSecThree.css';
import frame from '../../assets/Frame.png';

const HeroSecThree = () => {
  return (
    <div className="hero-sec-three">
      <div className="image-frame">
        <img src={frame} alt="" className="frame-image" />
        <p className="frame-text">
            <h2>ই-পুষ্টি প্লাটফর্মে কি আছে?</h2>
            <p>- অনলাইন কোর্স<br></br>
               - তথ্য ও শিক্ষা উপকরণ<br></br>
               - ওয়েবিনার (অনলাইন মিটিং, বিষয় ভিত্তিক আলোচনা)<br></br>
               - জগ (ভিডিও)<br></br>
               - পুষ্টি ও স্বাস্থ্যসম্মত জীবনধারা বিষয়ক প্রশিক্ষণ।</p>
        </p>
      </div>  
    </div>
  );
};

export default HeroSecThree;
