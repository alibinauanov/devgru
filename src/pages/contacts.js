import React from 'react';
import './contacts.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function contacts() {
    return(
        <div className='contacts'>
            <NavBar />
                <h2 className='contactsTitle'>Contacts</h2>
                <div className='info'>
                    <div className='data'>
                        <p>Phone</p>
                        <h2>0-000-00-00-000</h2>
                    </div>
                    <div className='data'>
                        <p>E-mail</p>
                        <h2>email@info.com</h2>
                    </div>
                    <div className='data'>
                        <p>Address</p>
                        <h2>First Street, 43/1, Block 1</h2>
                    </div>
                </div>
            <Footer />
        </div>
    )
}