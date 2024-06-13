import React from 'react';
import './Footer.css';
import whatsapp from '../assets/whatsapp.png';
import email from '../assets/email.png';

import { Link } from 'react-router-dom';

function Footer() {
  

  return (
    <footer>
        <div className='allData'>
            <div className='navigation'>
                <ul>
                    <h3>Navigation</h3>
                </ul>
                <ul className='navigationLinks'>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/programs">Programs</Link></li>
                    <li><Link to="/team">Team</Link></li>
                </ul>
            </div>
            <div className="address">
                <h3>Address</h3>
                <p>123 Main St<br />Anytown, CA 96745</p>
            </div>
            <div className="social-media">
                <h3>Social Media</h3>
                <div className="social-links">
                    <a href="#"><img src={whatsapp}/></a>
                    <a href="#"><img src={email}/></a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;