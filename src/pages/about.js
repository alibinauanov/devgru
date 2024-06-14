import React from 'react';
import './about.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/whatsappBtn';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <NavBar />
      <main>
        <div className='mainBlockAbout'>
          <div className='blackBlockDevGru'>
            <h3 className='titleName'>The Development Group</h3>
            <p className='whatIsDevGruDesc'>
              <span className='italic'>{t('about.title')}</span> {t('about.content')}
            </p>
          </div>
        </div>

      <div className='subContainer1'>
        <h2>{t('about.programsTitle')}</h2>
        <p><span className='italic'>{t('about.programsContent1')}</span>{t('about.programsContent2')}</p>
      </div>

      <div className='subContainer2'>
        <div className='divP'>
          <p className='divPtext'>{t('about.workWithKazakhs1')}<span className='italic'>{t('about.workWithKazakhs2')}</span></p>
        </div>
      </div>

      <div className="services">
          <p className='container'><span className='italic'>{t('about.devgruProvides1')}</span>{t('about.devgruProvides2')}</p>
          <div className="images">
            <div className='uni1'/>
            <div className='uni2'/>
            <div className='uni3'/>
          </div>
      </div>

      <div className="mission">
        <div className="containerMission">
          <h2>{t('about.missionStatementTitle')}</h2>
          <p>
            <svg class="quote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" fill="#FFF">
              <path d="M79 144.11c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L103.1 50.31C75.18 62.56 56.9 76.59 43.81 95.82c-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79zm152 0c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L255.1 50.31c-27.92 12.25-46.2 26.28-59.29 45.51-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79z" />
            </svg>
            <span className='italic'>{t('about.missionStatementContent1')}</span>{t('about.missionStatementContent2')}
            <svg class="quote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" fill="#FFF">
              <path d="M231 167.84c6.02 0 11.42-.28 16.25-.81-7.1 29.03-22.95 44.36-45.88 56.04-5.33 2.71-7.63 9.1-5.23 14.57l6.04 13.77c2.59 5.91 9.62 8.44 15.38 5.53 22.1-11.11 37.39-23.92 48.76-40.63C281.58 193.89 289 164.4 289 126.17v-16.52c0-31.95-.11-57.81-58-57.81-58 0-58 25.97-58 58s-.38 58 58 58zm-152 0c6.02 0 11.42-.28 16.25-.81-7.1 29.03-22.95 44.36-45.88 56.04-5.33 2.71-7.63 9.1-5.23 14.57l6.04 13.77c2.59 5.91 9.62 8.44 15.38 5.53 22.1-11.11 37.39-23.92 48.76-40.63C129.58 193.89 137 164.4 137 126.17v-16.52c0-31.95-.11-57.81-58-57.81-58 0-58 25.97-58 58s-.38 58 58 58z" />
            </svg>
          </p>
        </div>
      </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}