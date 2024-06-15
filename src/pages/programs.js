import React, { useState } from 'react';
import './programs.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/whatsappBtn';
import { useTranslation } from 'react-i18next';

const Programs = () => {
    const { t } = useTranslation();
    const [activeTopic, setActiveTopic] = useState(0);
    const [openDropdown, setOpenDropdown] = useState(null); // Track the open dropdown

    const topics = [
        {
            title: t('topics.0.title'),
            description: t('topics.0.description', { returnObjects: true })
        },
        {
            title: t('topics.1.title'),
            description: t('topics.1.description', { returnObjects: true })
        },
        {
            title: t('topics.2.title'),
            description: t('topics.2.description', { returnObjects: true })
        },
        {
            title: t('topics.3.title'),
            description: t('topics.3.description', { returnObjects: true })
        },
        {
            title: t('topics.4.title'),
            description: t('topics.4.description', { returnObjects: true })
        },
        {
            title: t('topics.5.title'),
            description: t('topics.5.description', { returnObjects: true })
        }
    ];

    const preparationStages = [
        {
            title: t('preparationStages.0.title'),
            content: t('preparationStages.0.content', { returnObjects: true })
        },
        {
            title: t('preparationStages.1.title'),
            content: t('preparationStages.1.content', { returnObjects: true })
        },
        {
            title: t('preparationStages.2.title'),
            content: t('preparationStages.2.content', { returnObjects: true })
        }
    ];

    function Dropdown({ title, content, color, index }) {
        const isOpen = openDropdown === index;

        return (
            <div className="dropdown">
                <button 
                    className="dropdown-button" 
                    style={{ backgroundColor: color }}
                    onClick={() => setOpenDropdown(isOpen ? null : index)}
                >
                    {title} <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
                </button>
                {isOpen && (
                    <div className="dropdown-content" style={{ backgroundColor: color }}>
                        {content.map((part, index) => (
                            <div key={index} className="dropdown-stage" style={{ backgroundColor: color }}>
                                <h4>{part.stage}</h4>
                                <div className="dropdown-descriptions">
                                    {part.description.map((line, index) => (
                                        <div key={index} className="description">
                                            <i className="fas fa-check icon"></i>
                                            <p>{line.trim()}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const { name, email, phone } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // how to get own link?
            // 1)go to https://app.nocodeapi.com/
            // 2)create your own google spreadsheet
            // here is the access to my spreadsheet: https://docs.google.com/spreadsheets/d/1mGqBuR6M2LLA7fO9Of8J4DaqV3M4ucoGOuCml3fqltM/edit?usp=sharing
            const response = await fetch('https://v1.nocodeapi.com/alibucci/google_sheets/NXKoLkMXZDnysUQi?tabId=Sheet1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([[name, email, phone, new Date().toLocaleString()]])
            });
            await response.json();
            setData({ name: "", email: "", phone: "" });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='App'>
            <NavBar />
            <main>
                <h1 className='programsTitle'>{t('programs.programsTitle')}</h1>
                <div className='cards'>
                    <div className='card card1'>
                        <div className='textCard'>
                            <div className='iconThunder'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-lightning" viewBox="0 0 16 16">
                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"/>
                                </svg>
                            </div>
                            <h3>Premium Prep</h3>
                            <p>{t('programs.premiumPrepDesc')}</p>
                        </div>
                    </div>

                    <div className='card card2'>
                        <div className='textCard'>
                            <div className='iconThunder'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-lightning" viewBox="0 0 16 16">
                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"/>
                                </svg>
                            </div>
                            <h3>Premium</h3>
                            <p>{t('programs.premiumDesc')}</p>
                        </div>
                    </div>

                    <div className='card card3'>
                        <div className='textCard'>
                            <div className='iconThunder'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-lightning" viewBox="0 0 16 16">
                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"/>
                                </svg>
                            </div>
                            <h3>MBA & Masters</h3>
                            <p>{t('programs.mbaMastersDesc')}</p>
                        </div>
                    </div>
                </div>

                <div className='subContainer1'>
                    <h3>{t('programs.ifText')}</h3>
                    <hr className='divider' />
                    <div className='inline-texts'>
                        <p className='leftText'>{t('programs.ifLeftText')}</p>
                        <p className='rightText'>{t('programs.ifRightText')}</p>
                    </div>
                </div>

                <div className='contactForm'>
                    <h3>{t('programs.fillOutForm')}</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" id="name" name="name" placeholder={t('programs.namePlaceholder')} value={name} onChange={handleChange} />
                            <input type="email" id="email" name="email" placeholder={t('programs.emailPlaceholder')} value={email} onChange={handleChange} />
                            <input type="tel" id="phone" name="phone" placeholder={t('programs.phonePlaceholder')} value={phone} onChange={handleChange} />
                            <button type="submit">{t('programs.submitButtonText')}</button>
                        </div>
                    </form>
                </div>

                <div className='mentorship'>
                    <h1>{t('mentorship.devGruMentorshipTitle')}</h1>
                    <h3>{t('mentorship.scopeOfServices')}</h3>
                    <p>{t('mentorship.serviceDesc')}</p>
                </div>

                <div className="slider">
                    <div className="slider-tabs">
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className={`slider-tab ${activeTopic === index ? 'active' : ''}`}
                                onClick={() => setActiveTopic(index)}
                                style={{ 
                                    backgroundColor: activeTopic === index ? '#2F4B70' : '#879CB7', 
                                    color: 'white' 
                                }}
                            >
                                {topic.title}
                            </div>
                        ))}
                    </div>
                    <div className="slider-content" style={{ backgroundColor: '#2F4B70', color: 'white' }}>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                        <h2>{topics[activeTopic].title}</h2>
                        <ul>
                            {topics[activeTopic].description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='methodology'>
                    <h1>{t('programs.americanMethodTitle')}</h1>
                    <h3>{t('programs.appRoadmapTitle')}</h3>
                </div>

                <div className='dropdown-container'>
                    {preparationStages.map((stage, index) => (
                        <Dropdown 
                            key={index} 
                            index={index} 
                            title={stage.title} 
                            content={stage.content} 
                            color={index % 3 === 0 ? '#7690A2' : index % 3 === 1 ? '#317D9E' : '#03628A'}
                        />
                    ))}
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default Programs;
