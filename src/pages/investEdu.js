import React, { useState } from 'react';
import './investEdu.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/whatsappBtn';

import microsoft from '../assets/microsoft.webp';
import apple from '../assets/apple.png';
import bcg from '../assets/bcg.png';
import blackstone from '../assets/blackstone.png';
import kazmunaigas from '../assets/kazmunaigas.png';
import kazakhtelecom from '../assets/kazakhtelecom.png';
import google from '../assets/google.webp';
import meta from '../assets/meta.png';
import goldmansachs from '../assets/goldmanSachs.png';
import citi from '../assets/citiLogo.png';
import pjt from '../assets/pjtLogo.png';
import kaspi from '../assets/air_astana.png';
import kkr from '../assets/kkr.png';
import mountsinaihospital from '../assets/mountSinaiHospital.png';
import freedom from '../assets/freedom.png';
import tesla from '../assets/tesla.png';
import oracle from '../assets/oracle.png';
import johnsonANDjohnson from '../assets/johnson-johnson-logo.png';
import samrukkazyna from '../assets/samrukkazyna.png';
import halyk from '../assets/halykbank.svg';
import amazon from '../assets/amazon.png';
import pfizer from '../assets/pfizer.png';
import mgh from '../assets/mgh.png';
import yandex from '../assets/yandex.png';

import { useTranslation } from 'react-i18next';

import tableEducation from '../assets/tableEducation.png';
import investGraph from '../assets/InvestGraph.png';

export default function InvestEdu() {
    const [activeTopic, setActiveTopic] = useState(0);
    const { t } = useTranslation();

    const topics = [
        {
            title: t('topicsEdu.0.title'),
            description: t('topicsEdu.0.description', { returnObjects: true })
        },
        {
            title: t('topicsEdu.1.title'),
            description: t('topicsEdu.1.description', { returnObjects: true })
        },
        {
            title: t('topicsEdu.2.title'),
            description: t('topicsEdu.2.description', { returnObjects: true })
        }
    ];

    return (
        <div className='education'>
            <NavBar />
            <main>
                <div className='firstBlock'>
                    <div className='blackBlockEducation'>
                        <h3 className='titleEducation'>{t('investment.investmentTitle')}</h3>
                    </div>
                </div>

                <div className='banner'>
                    <h2>{t('investment.whyTopUnisTitle')}</h2>
                    <div className='bannerTrack'>
                        <img src={microsoft} className='bannerImage' />
                        <img src={apple} className='bannerImage' />
                        <img src={bcg} className='bannerImage' />
                        <img src={blackstone} className='bannerImage' />
                        <img src={kazmunaigas} className='bannerImage' />
                        <img src={kazakhtelecom} className='bannerImage' />
                        <img src={google} className='bannerImage' />
                        <img src={meta} className='bannerImage' />
                        <img src={goldmansachs} className='bannerImage' />
                        <img src={citi} className='bannerImage' />
                        <img src={pjt} className='bannerImage' />
                        <img src={kaspi} className='bannerImage' />
                        <img src={kkr} className='bannerImage' />
                        <img src={mountsinaihospital} className='bannerImage' />
                        <img src={freedom} className='bannerImage' />
                        <img src={tesla} className='bannerImage' />
                        <img src={oracle} className='bannerImage' />
                        <img src={johnsonANDjohnson} className='bannerImage' />
                        <img src={samrukkazyna} className='bannerImage' />
                        <img src={halyk} className='bannerImage' />
                        <img src={amazon} className='bannerImage' />
                        <img src={pfizer} className='bannerImage' />
                        <img src={mgh} className='bannerImage' />
                        <img src={yandex} className='bannerImage' />
                    </div>
                </div>

                <div className="sliderEducation">
                    <div className="sliderEducation-tabs">
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className={`sliderEducation-tab ${activeTopic === index ? 'active' : ''}`}
                                onClick={() => setActiveTopic(index)}
                                style={{ 
                                    backgroundColor: activeTopic === index ? '#857A74' : '#998E88', 
                                    color: 'white' 
                                }}
                            >
                                {topic.title}
                            </div>
                        ))}
                    </div>
                    <div className="sliderEducation-content" style={{ backgroundColor: '#857A74', color: 'white' }}>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                        <h2>{topics[activeTopic].title}</h2>
                        <ul>
                            {topics[activeTopic].description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='investEduGraph'>
                    <h2>{t('investment.importanceInvestEduTitle')}</h2>
                    <p>{t('investment.importanceInvestEduSubTitle')}</p>
                    <div className='investGraphWrapper'>
                        <img src={investGraph} className='investGraph' />
                    </div>
                </div>

                <div className='textGraph'>
                    <div className='block'>
                        <h2>{t('investment.importanceInvestEduUnderTitle1')}</h2>
                        <p>{t('investment.importanceInvestEduUnderDesc1_1')} <span className="italic">{t('investment.importanceInvestEduUnderDesc1_2')}</span></p>
                    </div>
                    <div className='block'>
                        <h2>{t('investment.importanceInvestEduUnderTitle2')}</h2>
                        <p>{t('investment.importanceInvestEduUnderDesc2_1')} <span className="italic">{t('investment.importanceInvestEduUnderDesc2_2')}</span>{t('investment.importanceInvestEduUnderDesc2_3')}</p>
                    </div>
                    <div className='block'>
                        <h2>{t('investment.importanceInvestEduUnderTitle3')}</h2>
                        <p>{t('investment.importanceInvestEduUnderDesc3_1')} <span className="italic">{t('investment.importanceInvestEduUnderDesc3_2')}</span> {t('investment.importanceInvestEduUnderDesc3_3')}</p>
                    </div>
                </div>

                <div className='table'>
                    <h2>{t('investment.tableTitle')}</h2>
                    <div className='educationWrapper'>
                        <img src={tableEducation} className='tableEducation' />
                    </div>
                </div>

                <div className='lastBlock'>
                    <div className='sharpCompetition'>
                        <div className='h2Text'>
                            <h2>{t('investment.importanceInvestEduBottomTitle1')}</h2>
                        </div>
                        <div className='pText'>
                            <p>{t('investment.importanceInvestEduBottomDesc1')}</p>
                        </div>
                    </div>
                    <div className='standards'>
                        <div className='h2Text'>
                            <h2>{t('investment.importanceInvestEduBottomTitle2')}</h2>
                        </div>
                        <div className='pText'>
                            <p>{t('investment.importanceInvestEduBottomDesc2')}</p>
                        </div>
                    </div>
                    <div className='planning'>
                        <div className='h2Text'>
                            <h2>{t('investment.importanceInvestEduBottomTitle3')}</h2>
                        </div>
                        <div className='pText'>
                            <p>{t('investment.importanceInvestEduBottomDesc3')}</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            {/* <WhatsAppButton /> */}
        </div>
    )
}
