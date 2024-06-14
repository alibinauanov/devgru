import React from 'react';
import whatsapp from '../assets/whatsapp.png';
import './whatsappBtn.css';

const WhatsAppButton = () => {
  return (
    <a href="https://nef28.com/661t1" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
