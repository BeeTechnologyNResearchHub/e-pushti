import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import bangladeshFlag from '../../assets/ban.png';
import usaFlag from '../../assets/usa.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbarOne">
      <div className="nlogo">
        <img src={logo} alt="Logo" className='nlogo' />
      </div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-items ${menuOpen ? 'open' : ''}`}>
      <li>হোম</li>
      <li>কোর্সসমূহ</li>
      <li>ভ্লগ</li>
      <li>ওয়েবিনার</li>
      <li>সহায়িকা</li>
      <li>আমাদের সম্পর্কে</li>
      <li>যোগাযোগ করুন</li>

        <li className="language-dropdown">
          <select>
            <option value="bangla">
              <img className="flag-icon" src={bangladeshFlag} alt="Bangladesh Flag" />
              বাংলা
            </option>
            <option value="english">
              <img className="flag-icon" src={usaFlag} alt="USA Flag" />
              ইংরেজি
            </option>
          </select>
        </li>
        <li className='navbtn'>লগইন</li>
<li className='navbtn1'>রেজিস্টার</li>

      </ul>
    </nav>
  );
};

export default Navbar;
