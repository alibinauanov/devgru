import React from 'react';
import './contacts.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import WhatsAppButton from '../components/whatsappBtn';

export default function Contacts() {
    const { t } = useTranslation();

    return(
        <div className='contacts'>
            <NavBar />
                <h2 className='contactsTitle'>{t('contacts.contactsTitle')}</h2>
                <div className='info'>
                    <div className='data'>
                        <p>{t('contacts.phoneTitle')}</p>
                        <h2>0-000-00-00-000</h2>
                    </div>
                    <div className='data'>
                        <p>{t('contacts.emailTitle')}</p>
                        <h2>email@info.com</h2>
                    </div>
                    <div className='data'>
                        <p>{t('contacts.addressTitle')}</p>
                        <h2>{t('contacts.addressInfo')}</h2>
                    </div>
                </div>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}