import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
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

  return (
    <nav>
      <ul className="main-nav-left">
        <li><Link to="/" className="bold">DEV GRU</Link></li>
      </ul>
      <ul className="main-nav-right">
        <li className="hideOnMobile"><Link to="/about">About Us</Link></li>
        <li className="hideOnMobile"><Link to="/programs">Programs</Link></li>
        <li className="hideOnMobile"><Link to="/team">Team</Link></li>
        <li className="hideOnMobile"><Link to="/investedu">Education</Link></li>
        <li className="hideOnMobile"><Link to="/competition">Competition</Link></li>
        <li className="hideOnMobile"><Link to="/contacts">Contacts</Link></li>
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
        <li><Link to="/about" onClick={hideSidebar}>About Us</Link></li>
        <li><Link to="/programs" onClick={hideSidebar}>Programs</Link></li>
        <li><Link to="/team" onClick={hideSidebar}>Team</Link></li>
        <li><Link to="/investedu" onClick={hideSidebar}>Education</Link></li>
        <li><Link to="/competition" onClick={hideSidebar}>Competition</Link></li>
        <li><Link to="/contacts" onClick={hideSidebar}>Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
