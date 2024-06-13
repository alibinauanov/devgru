import React from 'react';
import './about.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function about() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <div className='mainBlockAbout'>
          <div className='blackBlockDevGru'>
            <h3 className='titleName'>The Development Group</h3>
            <p className='whatIsDevGruDesc'>
              <span className='italic'>The Development Group (DevGru)</span> is a separate branch of Impact Admissions, 
              which is a university admissions consulting firm founded in 2020. DevGru became 
              a standalone division to emphasize the differences in the teams and quality of services.
            </p>
          </div>
        </div>

      <div className='subContainer1'>
        <h2>Programs</h2>
        <p><span className='italic'>The programs are led by a UPenn graduate</span> who previously worked 
          at the top investment banks and investment firms in New York and were 
          developed by six Ivy League graduates and students—including a former 
          Princeton admissions officer—specifically for Kazakh students.</p>
      </div>

      <div className='subContainer2'>
        <div className='divP'>
          <p className='divPtext'>These program developers also serve as mentors and <span className='italic'>only work with Kazakh students.</span></p>
        </div>
      </div>

      <div className="services">
          <p className='container'><div className='italic'>DevGru provides full, end-to-end support for university admissions</div>—undergraduate, 
          MBA/EMBA, and Masters programs—all over the world, with a strong focus on the US and Middle Eastern/Asian branch campuses, UK, and Canada.</p>
          <div className="images">
            <div className='uni1'/>
            <div className='uni2'/>
            <div className='uni3'/>
          </div>
      </div>

      <div className="mission">
        <div className="containerMission">
          <h2>Mission Statement</h2>
          <p>
            <svg class="quote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" fill="#FFF">
              <path d="M79 144.11c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L103.1 50.31C75.18 62.56 56.9 76.59 43.81 95.82c-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79zm152 0c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L255.1 50.31c-27.92 12.25-46.2 26.28-59.29 45.51-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79z" />
            </svg>
            <span className='italic'>Our mission</span> is to guide Kazakh students to the top 50 universities across the world through rigorous, customized mentorship modeled after the American preparation methodology.
            <svg class="quote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" fill="#FFF">
              <path d="M231 167.84c6.02 0 11.42-.28 16.25-.81-7.1 29.03-22.95 44.36-45.88 56.04-5.33 2.71-7.63 9.1-5.23 14.57l6.04 13.77c2.59 5.91 9.62 8.44 15.38 5.53 22.1-11.11 37.39-23.92 48.76-40.63C281.58 193.89 289 164.4 289 126.17v-16.52c0-31.95-.11-57.81-58-57.81-58 0-58 25.97-58 58s-.38 58 58 58zm-152 0c6.02 0 11.42-.28 16.25-.81-7.1 29.03-22.95 44.36-45.88 56.04-5.33 2.71-7.63 9.1-5.23 14.57l6.04 13.77c2.59 5.91 9.62 8.44 15.38 5.53 22.1-11.11 37.39-23.92 48.76-40.63C129.58 193.89 137 164.4 137 126.17v-16.52c0-31.95-.11-57.81-58-57.81-58 0-58 25.97-58 58s-.38 58 58 58z" />
            </svg>
          </p>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}