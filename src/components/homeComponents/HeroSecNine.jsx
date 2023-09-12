import React from 'react';
import './HeroSecNine.css';
import frame from '../../assets/Frame.png';
import girl from '../../assets/girl.png';

const HeroSecNine = () => {
  return (
    <div className="hero-sec-nine ">
       <div className="frame">
        <img src={frame} alt="" className="frame" />
        <p className="frametext">
            <h2>নিউট্রিশন ক্লাব</h2>
            <p>
            পুষ্টিসযদ্ধ বাংলাদেশ গড়ার লক্ষ্যে বাংলাদেশ ইনস্টিটিউট অফ আইসিটি ইন ডেভেলপমেন্ট (8111) এর
            উদ্যোগে ২০১৫ সালে নিউটিশন ক্লাব গঠনের উদ্যোগ গ্রহণ করা হয়। কিশোর কিশোরী, এবং তরুণদের
            অংশগ্রহণ, নেতৃত্ব

            প্রদান, খাদ্য নিরাপত্তা, পুষ্টি কার্যক্রম সঠিকভাবে পরিচালনার জন্য নিউটিশন ক্লাব কাজ করে । ২০১৭ সাল থেকে
            কিশোর কিশোরী ............. বিস্তারিত
            </p>
    
        </p>
      </div>  
      <div>
      <img src={girl} alt="" className="girl-image" />
      </div>
    </div>
  );
};

export default HeroSecNine;
