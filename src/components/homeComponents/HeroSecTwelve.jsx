import React from 'react';
import './HeroSecTwelve.css';
import rightImage from '../../assets/biid.png';
const HeroSecTwelve = () => {
  return (
    <div className="hero-sec-twelve ">
        <div className='secTwelvw'>
            <div className='ContentEleven'>
                <p>
                বিআইআইডি ফাউড্ডেশন, একটি সামাজিক ব্যবসা উদ্যোগ যা টেকসই উন্নয়নের লক্ষে সরকারী এবং বেসরকারি
                প্রতিষ্ঠান ও উদ্যোগের সাথে যৌথভাবে কৃষি, পুষ্টি ও উদ্যোক্তা উন্নয়ন সংক্রান্ত কার্যক্রম পরিচালনা করছে।
                বিআইআইডি তথ্য-প্রযুক্তি ভিত্তিক সেবা প্রদানের মাধ্যমে পুষ্টি খাতে কিশোরকিশোরী ও তরুণদের সক্ষমতা বৃদ্ধি
                এবং নেতৃত্ব বিকাশ, তরুন উদ্যোক্তাদের দক্ষতা বৃদ্ধি, কৃষি সম্প্রসারণ কার্যক্রম আধুনিকায়নে বিভিন্ন কার্যক্রম
                পরিচালনা করে থাকে। বিআইআইডি এর অন্যতম উদ্যোগ সমূহ হল নিউট্রিশন ক্লাব, ইন্টারন্যাশনাল নিউদ্রিশন
                অলিম্পিয়াড, ই- কৃষক, বি-ল্যাব, নির্ভয়া। বিআইআইডি ফাউড্ডেশন সকল কার্যক্রমে উদ্ভাবনী কৌশল অনুশীলনের
                আয়োজন করে থাকে।
                </p>
                <div className="Twelverightimage">
                    <img src={rightImage} alt="Img" className='Twelverightimage' />
                </div>

            </div>
                <div className="buttoncontainerTwelve">
                    <button className="custombuttonTwelve">বিস্তারিত</button>
                </div>
        </div>

    </div>
  );
};

export default HeroSecTwelve;
