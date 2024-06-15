import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

import devGruLogo from '../assets/devGruLogo.png';

function NavBar() {
  const { i18n, t } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <ul className="main-nav-left">
        <li>
          <Link to="/" className="bold">
            <img src={devGruLogo} className='devgruLogo' alt="Logo" />
          </Link>
        </li>
      </ul>
      <ul className="main-nav-right">
        <li className="hideOnMobile"><Link to="/about">{t('navbar.about')}</Link></li>
        <li className="hideOnMobile"><Link to="/programs">{t('navbar.programs')}</Link></li>
        <li className="hideOnMobile"><Link to="/team">{t('navbar.team')}</Link></li>
        <li className="hideOnMobile"><Link to="/investedu">{t('navbar.education')}</Link></li>
        <li className="hideOnMobile"><Link to="/competition">{t('navbar.competition')}</Link></li>
        <li className="hideOnMobile"><Link to="/contacts">{t('navbar.contacts')}</Link></li>
        <li>
          <button onClick={() => changeLanguage(i18n.language === 'en' ? 'ru' : 'en')} className='lngBtn'>
            {i18n.language === 'en' ? 'RU' : 'ENG'}
          </button>
        </li>
      </ul>
      <div className="menu-button" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
          <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
        </svg>
      </div>
      {showSidebar && (
        <ul className="sidebar" ref={sidebarRef}>
          <li onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </li>
          <li><Link to="/about" onClick={toggleSidebar}>{t('navbar.about')}</Link></li>
          <li><Link to="/programs" onClick={toggleSidebar}>{t('navbar.programs')}</Link></li>
          <li><Link to="/team" onClick={toggleSidebar}>{t('navbar.team')}</Link></li>
          <li><Link to="/investedu" onClick={toggleSidebar}>{t('navbar.education')}</Link></li>
          <li><Link to="/competition" onClick={toggleSidebar}>{t('navbar.competition')}</Link></li>
          <li><Link to="/contacts" onClick={toggleSidebar}>{t('navbar.contacts')}</Link></li>
          <li>
            <button onClick={() => changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}>
              {i18n.language === 'en' ? 'RU' : 'ENG'}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
