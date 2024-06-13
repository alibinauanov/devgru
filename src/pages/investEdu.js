import React, { useState } from 'react';
import './investEdu.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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

import tableEducation from '../assets/tableEducation.png';
import investGraph from '../assets/InvestGraph.png';

const topics = [
    {
        title: 'Networking Opportunities',
        description: [
            "Arguably, the most significant benefit of attending a top university is the opportunity to build a strong network, which plays a large role in securing future internships, jobs, partnerships, investments, etc.",
            "You would be surprised to see the caliber of people who end up being in your classes, clubs, dormitories, and fraternities/sororities",
            ]
    },
    {
        title: 'Employment Opportunities ',
        description: [
            "Beyond simply having access to renowned faculty and education, having a diploma from a top university will open many doors for internships and full-time opportunities",
            "For instance, the firms for which I have worked were fixated on hiring from only ~10-15 universities. The connection that alumni have is too often underestimated, especially in interview settings",
        ]
    },
    {
        title: 'Career Advancement / Transition',
        description: [
            "I advise you to do a LinkedIn search for high-ranking employees at companies you would like to work at—even Kazakh companies. You will find that many have graduated from top US/UK universities with undergraduate degrees and/or received MBA/Masters/equivalent certificates",
            "For experienced professionals, receiving an MBA/EMBA/Masters from a top program is extremely beneficial (often necessary) if the goal is to break through the career ceiling"
        ]
    }
];

export default function InvestEdu() {
    const [activeTopic, setActiveTopic] = useState(0);

    return(
        <div className='education'>
            <NavBar />
            <main>
                <div className='firstBlock'>
                    <div className='blackBlockEducation'>
                        <h3 className='titleEducation'>Invest in Your Education</h3>
                    </div>
                </div>

                <div className='banner'>
                    <h2>Why Top Universities?</h2>
                    <div className='bannerTrack'>
                        <img src={microsoft} className='bannerImage'/>
                        <img src={apple} className='bannerImage'/>
                        <img src={bcg} className='bannerImage'/>
                        <img src={blackstone} className='bannerImage'/>
                        <img src={kazmunaigas} className='bannerImage'/>
                        <img src={kazakhtelecom} className='bannerImage'/>
                        <img src={google} className='bannerImage'/>
                        <img src={meta} className='bannerImage'/>
                        <img src={goldmansachs} className='bannerImage'/>
                        <img src={citi} className='bannerImage'/>
                        <img src={pjt} className='bannerImage'/>
                        <img src={kaspi} className='bannerImage'/>
                        <img src={kkr} className='bannerImage'/>
                        <img src={mountsinaihospital} className='bannerImage'/>
                        <img src={freedom} className='bannerImage'/>
                        <img src={tesla} className='bannerImage'/>
                        <img src={oracle} className='bannerImage'/>
                        <img src={johnsonANDjohnson} className='bannerImage'/>
                        <img src={samrukkazyna} className='bannerImage'/>
                        <img src={halyk} className='bannerImage'/>
                        <img src={amazon} className='bannerImage'/>
                        <img src={pfizer} className='bannerImage'/>
                        <img src={mgh} className='bannerImage'/>
                        <img src={yandex} className='bannerImage'/>
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
                    <h2>Importance of Investing in Education</h2>
                    <p>International Kazakh Students in the U.S.</p>
                    <div className='investGraphWrapper'>
                        <img src={investGraph} className='investGraph'/>
                    </div>
                </div>

                <div className='textGraph'>
                    <div className='block'>
                        <h2>Growing Trend:</h2>
                        <p>There has been a massive increase in the number of Kazakh students 
                            enrolling in U.S. universities in recent years, highlighting a 
                            <span className="italic">growing interest in international education</span></p>
                    </div>
                    <div className='block'>
                        <h2>Post-COVID Recovery:</h2>
                        <p>After a slight dip from 2020 to 2021 due to the COVID-19 pandemic, <span className="italic">there has 
                            been a robust recovery</span>, with enrollments rising by 33.3% in 2023, reaching a peak of 2,440 students 
                        </p>
                    </div>
                    <div className='block'>
                        <h2>Increasing Competitiveness:</h2>
                        <p>The increasing number of students signifies <span className="italic">more competition</span> among Kazakh 
                            students for prestigious spots in U.S. universities</p>
                    </div>
                </div>

                <div className='table'>
                    <h2>Largest Acceptance Rate Decrease (2006 vs. 2018)</h2>
                    <div className='educationWrapper'>
                        <img src={tableEducation} className='tableEducation'/>
                    </div>
                </div>

                <div className='lastBlock'>
                    <div className='sharpCompetition'>
                        <div className='h2Text'>
                            <h2>Sharper Competition:</h2>
                        </div>
                        <div className='pText'>
                            <p>Acceptance rates at top U.S. universities have drastically decreased 
                                over the past decade, making the admission process highly competitive</p>
                        </div>
                    </div>
                    <div className='standards'>
                        <div className='h2Text'>
                            <h2>Higher Standards:</h2>
                        </div>
                        <div className='pText'>
                            <p>The significant drops in acceptance rates, such as an 81.1% decrease at the 
                                University of Chicago, indicate rising academic and extracurricular standards</p>
                        </div>
                    </div>
                    <div className='planning'>
                        <div className='h2Text'>
                            <h2>Impact on College Planning:</h2>
                        </div>
                        <div className='pText'>
                            <p>The decline in acceptance rates necessitates more robust college planning 
                                and preparation. Students need to excel academically and beyond to stand out in these 
                                increasingly competitive applicant pools</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}