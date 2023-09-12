import React from 'react';
import './HeroSecSixteen.css';
import girl from '../../assets/girltwo.png';
const HeroSecSixteen = () => {
  return (
    <div>
    <div className="hero-sec-sixteen">
      <div className="cardBackground">
        <div className="customShapeSixteen">
          <p className="circleTextsixteen">
          <h2>স্বীকৃতি</h2>
          BIID Foundation এর প্রধান নির্বাহী কর্মকর্তা- শহীদ উদ্দিন আকবরের নেতৃত্বে, খানসা রহমান, জান্নাতুল
          মিম, কাজি মাহবুবুল আলম সমন্বয়ে গঠিত BIID Foundation টিম ও BTRH Technology &
          Innovation টিম যৌথভাবে ই-পুষ্টি প্লাটফর্মটির তথ্য উপাত্ত, গঠন কাঠামো পর্যালোচনা ও সংস্করণ করেন।
          ই-পুষ্টি প্লাটফর্মের পর্যবেক্ষণ প্রক্রিয়া এবং সার্বিক সহযোগিতায় সকল উপদেষ্টামণ্ডলী, সহযোগী সংস্থা-GoB,
          USAID, Abt Assoiciates সহ সকল সহযোগী সংস্থার প্রতি BIID Foundation আন্তরিকভাবে কৃতজ্ঞতা
          জ্ঞাপন করছে।
          </p>
        </div>
      </div>
    </div>
     <div className="hero-sec-sixteentwo">
            <div className="cardBackground">
                <div className='contentSixteen'>
                    <div>
                        <h2>বিবৃতি</h2>
                        <p>
                            
                      এই প্র্যাটফর্মের সকল তথ্য/ বিষয়াদির দায়ভার বিভ ফাউন্ডেশন এর। ব্যবহৃত তথ্য অনুমতি সাপেক্ষে
                      ব্যবহারযোগ্য। এখানে প্রকাশিত মতামতের সাথে বাংলাদেশ সরকার, ইউএসআইডি বা যুক্তরাষ্ট্রের সরকার এবং
                      অন্যান্য সহযোগী সংস্থার মতামতের মিল নাও থাকতে পারে।
                        </p>
                        <div className='btnsixteen'>
                        <div className='btns'>
                        <button className="custombutton">সম্মতি</button>
                        </div>
                        <div className='btntwo'>
                        <button className="custombutton">অসম্মতি</button>
                        </div>
                        </div>
                    </div>
                    <div>
                        <img src={girl} alt="" className="girlimage" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeroSecSixteen;
