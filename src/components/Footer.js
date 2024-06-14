import React from 'react';
import './Footer.css';
import whatsapp from '../assets/whatsapp.png';
import email from '../assets/email.png';

import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
        <div className='allData'>
            <div className='navigation'>
                <ul>
                    <h3>{t('footer.navigationTitle')}</h3>
                </ul>
                <ul className='navigationLinks'>
                    <li><Link to="/about">{t('footer.aboutUsNav')}</Link></li>
                    <li><Link to="/programs">{t('footer.programsNav')}</Link></li>
                    <li><Link to="/team">{t('footer.teamNav')}</Link></li>
                </ul>
            </div>
            <div className="address">
                <h3>{t('footer.addressNav')}</h3>
                <p>123 Main St<br />Anytown, CA 96745</p>
            </div>
            <div className="social-media">
                <h3>{t('footer.socialMediaTitle')}</h3>
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