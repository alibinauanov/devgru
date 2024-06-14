import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

import devGruLogo from '../assets/devGruLogo.png';

function NavBar() {
  const { i18n, t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <ul className="main-nav-left">
        <li>
          <Link to="/" className="bold">
            <img src={devGruLogo} className='devgruLogo' />
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
        <li className="menu-button" onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </a>
        </li>
      </ul>
      <ul className="sidebar">
        <li onClick={hideSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          </a>
        </li>
        <li><Link to="/about" onClick={hideSidebar}>{t('navbar.about')}</Link></li>
        <li><Link to="/programs" onClick={hideSidebar}>{t('navbar.programs')}</Link></li>
        <li><Link to="/team" onClick={hideSidebar}>{t('navbar.team')}</Link></li>
        <li><Link to="/investedu" onClick={hideSidebar}>{t('navbar.education')}</Link></li>
        <li><Link to="/competition" onClick={hideSidebar}>{t('navbar.competition')}</Link></li>
        <li><Link to="/contacts" onClick={hideSidebar}>{t('navbar.contacts')}</Link></li>
        <li>
          <button onClick={() => changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}>
            {i18n.language === 'en' ? 'RU' : 'ENG'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
