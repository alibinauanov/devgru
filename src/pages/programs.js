import React, { useState } from 'react';
import './programs.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const topics = [
    {
        title: 'Personalized Application Strategy',
        description: [
            "Generate and iterate personalized university and/or summer program lists based on student’s preferences, abilities, interests, and career aspirations.",
            "Align application with each university and/or summer program’s emphasis on certain programs, criteria, etc.",
            "Maximize acceptance probability (ex. spin narrative/experience and apply as a Sociology major vs. pure Econ major).",
            "Guide student to understand exactly what each university and/or summer program looks for and how to best position student to showcase his or her application."
        ]
    },
    {
        title: 'Extracurricular Enhancement',
        description: [
            "Determine which ECs should be continued/discontinued.",
            "Develop a plan to achieve leadership positions in clubs/organization.",
            "Explore and recommend available opportunities (ex. clubs, research, internships, independent projects, volunteering, etc.) and even help create and develop these activities.",
            "Ensure proper allocation of time and resources between studies, sports, volunteering, music, projects, etc."
        ]
    },
    {
        title: 'Academic Guidance & Support',
        description: [
            "Advise on course selection, programs, and certificates that are aligned with their interests and strengths.",
            "Regular check-ins and support to help maintain peak academic performance, critical for admission to elite institutions."
        ]
    },
    {
        title: 'University Application / Summer Program Application Support',
        description: [
            "Help generate essay ideas, brainstorming, teaching creative styles, providing input/editing, etc. for personal statement, supplemental essays, etc.",
            "Overall, provide full end-to-end support, including helping students understand exactly admissions committees are looking for, CSS / financial aid support, alumni interview assistance."
        ]
    },
    {
        title: 'Recommendation Letter & Miscellaneous',
        description: [
            "Analyze pros and cons of potential recommendation letter providers.",
            "Provide customized templates (if applicable) and review/correct the letters with the consent of those submitting them.",
            "Supporting anything that aligns with the student’s goals (ex. resume creation/editing, mock interviews, etc.)."
        ]
    },
    {
        title: 'SAT & IELTS Preparation',
        description: [
            "Unlimited online group classes three times a week throughout length of contract.",
            "Individual lessons can be arranged at additional cost."
        ]
    }
];

const preparationStages = [
    {
        title: 'Early Age (10-13)',
        content: [
            {
                stage: 'Explore and experiment',
                description: [
                    "This is really the only time you have to consider a range of fields of study as well as try various activities to gauge potential",
                    "In order to be accepted into a top university, it is important to"
                ]
            },
            {
                stage: 'Create a shortlist',
                description: [
                    "Having a shortlist of fields of study and activities will set the stage for building a genuine narrative, which is crucial for the ultimate application",
                    "Make a preliminary university list"
                ]
            },
            {
                stage: 'Research potential career paths',
                description: [
                    "Keep an open mind look into different career trajectories that stem from the shortlist of fields of study",
                    "It is never too early to seek career guidance"
                ]
            },
            {
                stage: 'Build academic foundation',
                description: [
                    "Develop consistent study schedule and practice time management. I cannot emphasize this enough"
                ]
            }
        ]
    },
    {
        title: 'Development Period (14-16)',
        content: [
            {
                stage: 'Maintain academic performance',
                description: [
                    "Top universities are very unlikely to consider applicants who are struggling in high school—excellence is seen as a minimum requirement, especially if you attend a school in Kazakhstan",
                    "Begin advanced coursework such as APs, university-level courses, certifications, etc. as applicable",
                    "Seek tutoring if you have the resources. If you don’t, your competitors will"
                ]
            },
            {
                stage: 'Build and develop extracurricular foundation',
                description: [
                    "Lay out gameplans to achieve leadership/executive roles in clubs",
                    "Be sure to document achievements and awards in real time"
                ]
            },
            {
                stage: 'Prepare for standardized tests',
                description: [
                    "Start studying intensively for SATs and IELTS. The most common complaint I hear is, “I wish I started studying earlier”"
                ]
            },
            {
                stage: 'Strengthen writing abilities',
                description: [
                    "Read both successful and unsuccessful university application essays and analyses consistently",
                    "Write mock personal statements and supp. essays well in advance"
                ]
            },
            {
                stage: 'Recommender selection',
                description: [
                    "Develop relationships with potential recommendation letter providers"
                ]
            }
        ]
    },
    {
        title: 'Final Readiness & Application Period',
        content: [
            {
                stage: 'Ensure extracurricular activity portfolio has yielded results',
                description: [
                    "Each activity should have shown results by now. If not, get this done",
                    "Keep in mind how you will be representing each activity on the Common App or similar platform",
                    "“Did [xx], which resulted in [xx]”"
                ]
            },
            {
                stage: 'Focus on advanced coursework',
                description: [
                    "Continue taking APs, university-level courses, certifications, etc. as applicable. High scores are necessary"
                ]
            },
            {
                stage: 'Standardized tests',
                description: [
                    "For top universities, you will need to pass the 1500 SAT and 8.0 IELTS score thresholds"
                ]
            },
            {
                stage: 'Applications',
                description: [
                    "Dedicate at least 6 months to drafting and iterating your university essays",
                    "Weigh pros and cons of potential recommenders and inform them at least 2 months before",
                    "Gather necessary documents (transcripts, certificates, financial information, etc.) well in advance"
                ]
            }
        ]
    },
];

function Dropdown({ title, content, color }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <button 
                className="dropdown-button" 
                style={{ backgroundColor: color }}
                onClick={() => setIsOpen(!isOpen)}
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

export default function Programs() {
    const [activeTopic, setActiveTopic] = useState(0);

    return (
        <div className='App'>
            <NavBar />
            <main>
                <h1 className='programsTitle'>Programs</h1>
                <div className='cards'>
                    <div className='card card1'>
                        <div className='textCard'>
                            <div className='iconThunder'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-lightning" viewBox="0 0 16 16">
                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"/>
                                </svg>
                            </div>
                            <h3>Premium Prep</h3>
                            <p>Designed <span className='italic'>for students currently in grades 6-10/11</span> (varies 
                                depending on high school) targeting top universities</p>
                        </div>
                    </div>

                    <div className='card card2'>
                        <div className='textCard'>
                            <div className='iconThunder'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-lightning" viewBox="0 0 16 16">
                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"/>
                                </svg>
                            </div>
                            <h3>Premium</h3>
                            <p>Designed <span className='italic'>for students</span> applying to strong & elite universities <span className='italic'>this upcoming admissions cycle</span></p>
                        </div>
                    </div>

                    <div className='card card3'>
                        <div className='textCard'>
                            <div className='iconThunder'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-lightning" viewBox="0 0 16 16">
                                    <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"/>
                                </svg>
                            </div>
                            <h3>MBA & Masters</h3>
                            <p>Designed <span className='italic'>for both recent graduates</span> and <span className='italic'>experienced professionals</span> targeting top programs</p>
                        </div>
                    </div>
                </div>

                <div className='subContainer1'>
                    <h3>If you are a university graduate and/or experienced professional...</h3>
                    <hr className='divider' />
                    <div className='inline-texts'>
                        <p className='leftText'>If you are a university graduate and/or experienced professional looking to 
                            pursue an MBA/EMBA or Masters program, <span className='italic'>contact us for a consultation.</span></p>
                        <p className='rightText'><span className='italic'>Our post-graduate</span> program mentor has sent both international and domestic 
                            students to Harvard Business School, Stanford Graduate School of Business, 
                            and Stanford Doerr School of Sustainability.</p>
                    </div>
                </div>

                <div className='contactForm'>
                    <h3>Fill out the form and <span className='italic'>our manager will contact you</span></h3>
                    <form>
                        <div>
                            <input type="text" id="name" name="name" placeholder='Name'/>
                            <input type="email" id="email" name="email" placeholder='Email'/>
                            <input type="tel" id="phone" name="phone" placeholder='Phone'/>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>

                <div className='mentorship'>
                    <h1>DevGru Mentorship</h1>
                    <h3>Scope of Services</h3>
                    <p>We take the American preparation methodology and <span className='italic'>customize 
                    it for the Kazakh students, mindset, and available opportunities.</span></p>
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
                    <h1>American Methodology</h1>
                    <h3>Preparation & Application Roadmap</h3>
                </div>

                <div className='dropdown-container'>
                    {preparationStages.map((stage, index) => (
                        <Dropdown 
                            key={index} 
                            title={stage.title} 
                            content={stage.content} 
                            color={index % 3 === 0 ? '#7690A2' : index % 3 === 1 ? '#317D9E' : '#03628A'}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
