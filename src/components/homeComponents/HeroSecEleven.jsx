import React from 'react';
import './HeroSecEleven.css';
import rightImage from '../../assets/Eleven.png';
const HeroSecEleven = () => {
  return (
    <div className="hero-sec-eleven ">
        <div className="HeaderTen">
            <h1 className="underlined-text">আমাদের সম্পর্কে</h1>
        </div>
        <div className='secEleven'>
            <div className='ContentEleven'>
                <p>
                    বিআইআইডি ফাউন্ডেশন, ই-পুষ্টি দ্বারা প্রতিষ্ঠিত পুষ্টির জন্য একটি অনলাইন লার্নিং প্ল্যাটফর্ম কেন্দ্রিক জ্ঞান, তথ্য, ভান্ডার, জাতীয় সংগঠন।
                </p>
                <div className="Elevenrightimage">
                    <img src={rightImage} alt="Img" className='Elevenrightimage' />
                </div>

            </div>
      <div className="buttoncontainereleven">
        <button className="custom-button">বিস্তারিত</button>
      </div>
        </div>

    </div>
  );
};

export default HeroSecEleven;
