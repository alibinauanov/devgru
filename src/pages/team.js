import React from 'react';
import './team.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import pennLogo from '../assets/pennLogo.png';
import columbiaLogo from '../assets/columbiaLogo.png';
import princetonLogo from '../assets/princetonLogo.svg';
import northwesternLogo from '../assets/northwesternLogo.png';
import southernCaliLogo from '../assets/southCaliLogo.png';
import higLogo from '../assets/higCapitalLogo.png';
import pjtLogo from '../assets/pjtLogo.png';
import citiLogo from '../assets/citiLogo.png';
import harvardLogo from '../assets/harvardLogo.jpg';
import calTechLogo from '../assets/calTechLogo.png';
import mitLogo from '../assets/mitLogo.png';
import carMelLogo from '../assets/carMelLogo.jpg';
import georgetownLogo from '../assets/georgetownLogo.png';
import virginiaLogo from '../assets/virginiaLogo.png';
import yaleLogo from '../assets/yaleLogo.png';
import brownLogo from '../assets/brownLogo.png';
import nyuLogo from '../assets/nyuLogo.png';
import michiganLogo from '../assets/michiganLogo.png';

export default function team() {
    return(
        <div className='team'>
            <NavBar />
            <main>
                <div className='mainBlock'>
                    <div className='blackBlockDevGruIntro'>
                        <h3 className='titleName'>Team</h3>
                        <p className='LeftTeamDesc'>
                            We don’t have tutors or consultants. <span className='italic'>We have mentors</span> who are 
                            involved throughout all stages of a student’s academic and extracurricular journey.
                        </p>
                        <p className='RightTeamDesc'>
                            The Development Group provides full, <span className='italic'>end-to-end support across all components</span> of 
                            the university preparation and application process.
                        </p>
                    </div>
                </div>
                <div className='textBlock'>
                    <div class="rectangle-with-triangle">
                        <p><span className='italic'>OUR MENTORS HAVE ALL ATTENDED IVY LEAGUE UNIVERSITIES</span>, AND THEY ONLY WORK WITH KAZAKH STUDENTS.</p>
                    </div>
                    <div className='rightTextOnWhiteBack'>
                        <p>They are limited to working with <span className='italic'>only seven students</span> in order to maximize allocation 
                            of time and attention. Our mentors do not take on 20+ students like other education consulting firms.</p>
                    </div>
                </div>
                <div className='directorInfo'>
                    <h1 className='titleDev'>DevGru Program Director:</h1>
                    <div className='infoContainer'>
                        <div className='michaelInfo'>
                            <div className='figurePenn'>
                                <img src={pennLogo} className='pennLogo' />
                            </div>
                            <div className='textPart'>
                                <p className='director'>Director:</p>
                                <h2>Michael Y.</h2>
                                <p className='gradFrom'>Graduated from the</p>
                                <h4 className='uniName'>University of Pennsylvania <br/>in ’16 (B.A., in Economics)</h4>
                                <p className='location'>Location:</p>
                                <h4 className='almaty'>Almaty, Kazakhstan</h4>
                            </div>
                        </div>
                        
                        <div className='backgroundInfo'>
                            <div className='backgroundTitle'>
                                <h2>Background</h2>
                            </div>
                            <div className='backgroundDisc'>
                                <ul>
                                    <li>Michael most recently was an Assistant Vice President at H.I.G. Capital, an investment firm with $60 billion assets under management</li>
                                    <ul>
                                        <li>He was situated within the credit arm of the firm where he completed nine platform investments and eight add-on investments amounting to $890 million in committed capital</li>
                                    </ul>
                                </ul>
                                <ul>
                                    <li>Prior to H.I.G. Capital, Michael worked at PJT Partners, the investment banking division spin-off of The Blackstone Group, as well as at Citi</li>
                                </ul>
                                <div className='inlineBlock'>
                                    <div className='profExp'>
                                        <h3>Professional Experience</h3>
                                        {/* <!-- need to put 3 logos of companies --> */}
                                        <img src={higLogo} className='higCapital'></img>
                                        <img src={pjtLogo} className='pjtLogo'></img>
                                        <img src={citiLogo} className='citiLogo'></img>
                                    </div>
                                    <div className='successCases'>
                                        <h3>Success Cases</h3>
                                        {/* <!-- need to put 4 logos of universities --> */}
                                        <div className='figureUni'>
                                            <img src={columbiaLogo} className='uniLogo' />
                                        </div>
                                        <div className='figureUni'>
                                            <img src={princetonLogo} className='uniLogo' />
                                        </div>
                                        <div className='figureUni'>
                                            <img src={northwesternLogo} className='uniLogo' />
                                        </div>
                                        <div className='figureUni'>
                                            <img src={southernCaliLogo} className='uniLogo' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mentorProfile'>
                    <h1 className='mentorTitle'>Mentor Profiles <br/><span className='blueColor'>& Success cases</span></h1>
                    
                    <div className='inlineBlocks'>
                        <div className='brianInfo'>
                            <div className='figurePennMentor'>
                                <img src={pennLogo} className='pennLogo' />
                            </div>
                            <div className='textPart2'>
                                <p className='mentor'>Mentor:</p>
                                <h2>Brian K.</h2>
                                <p className='gradFromMentor'>Graduated from the</p>
                                <h4 className='uniName'>University of Pennsylvania in ’17 (B.A., Economics)</h4>
                                <p className='location'>Location:</p>
                                <h4 className='almaty'>Diamond Bar, CA</h4>
                            </div>
                        </div>

                        <div className='successCasesInfo'>
                            <div className='successCasesTitle'>
                                <h2>Success Cases</h2>
                            </div>

                            <div className='backgroundDiscMentor'>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={harvardLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Victor S.</p>
                                        <p className='studentUni'>(Harvard University)</p>
                                        <p className='facts'>- Entered Harvard University in 2023 with full scholarship <br/>- B.A., Economics & Mathematics</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={calTechLogo} className='uniStudentLogo' />
                                        </div>
                                        <div className='figureUniLogo'>
                                            <img src={mitLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Daisy C.</p>
                                        <p className='studentUni'>(MIT)</p>
                                        <p className='facts'>- Entered MIT in 2022 with full scholarship <br/>- B.A., Biology - Acceptance to CalTech</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={pennLogo} className='pennLogo' />
                                        </div>
                                        <p className='studentName'>Jared L.</p>
                                        <p className='studentUni'>(University of Pennsylvania)</p>
                                        <p className='facts'>- Entered the University of Pennsylvania in 2017 <br/> - B.A., Music & English</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={calTechLogo} className='uniStudentLogo' />
                                        </div>
                                        <div className='figureUniLogo'>
                                            <img src={mitLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Jocelyn L.</p>
                                        <p className='studentUni'>(MIT)</p>
                                        <p className='facts'>- Entered MIT in 2019 with full scholarship <br/>- B.A., Physics - Acceptance to CalTech</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* new */}
                    <div className='inlineBlocks'>
                        <div className='brianInfo'>
                            <div className='figurePennMentor'>
                                <img src={harvardLogo} className='mentorUniLogo' />
                            </div>
                            <div className='textPart2'>
                                <p className='mentor'>Mentor:</p>
                                <h2>Kevin S.</h2>
                                <p className='gradFromMentor'>Graduated from</p>
                                <h4 className='uniName'>Harvard University in ’17 (B.A., Social Studies)</h4>
                                <p className='location'>Location:</p>
                                <h4 className='almaty'>New York, NY</h4>
                            </div>
                        </div>

                        <div className='successCasesInfo'>
                            <div className='successCasesTitle'>
                                <h2>Success Cases</h2>
                            </div>

                            <div className='backgroundDiscMentor'>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={princetonLogo} className='uniStudentLogo' />
                                        </div>
                                        <div className='figureUniLogo'>
                                            <img src={columbiaLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Pedro M.</p>
                                        <p className='studentUni'>(Princeton University)</p>
                                        <p className='facts'>- Transferred from Hudson County CC in 2021 with full scholarship <br/>- B.A., Mathematics<br/>- Acceptance to Columbia University</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={pennLogo} className='pennLogo' />
                                        </div>
                                        <p className='studentName'>Irene K.</p>
                                        <p className='studentUni'>(University of Pennsylvania)</p>
                                        <p className='facts'>- Entered the University of Pennsylvania in 2017 with full scholarship <br/>- B.S.E., Computer Science</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={harvardLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Charles L.</p>
                                        <p className='studentUni'>(Harvard University)</p>
                                        <p className='facts'>- Entered Harvard University in 2017 with full scholarship<br/> - B.A., Biology</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={carMelLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Daniel B.</p>
                                        <p className='studentUni'>(Carnegie Mellon University)</p>
                                        <p className='facts'>- Entered Carnegie Mellon in 2017 with partial financial aid(#24 U.S. university as of 2024) <br/>- B.S., Physics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* new */}
                    <div className='inlineBlocks'>
                        <div className='brianInfo'>
                            <div className='figurePennMentor'>
                                <img src={harvardLogo} className='mentorUniLogo' />
                            </div>
                            <div className='textPart2'>
                                <p className='mentor'>Mentor:</p>
                                <h2>Teddy K.</h2>
                                <p className='gradFromMentor'>Graduated from</p>
                                <h4 className='uniName'>Harvard University in ’18 (B.A., Government)</h4>
                                <p className='location'>Location:</p>
                                <h4 className='almaty'>New York, NY; Los Angeles, CA</h4>
                            </div>
                        </div>

                        <div className='successCasesInfo'>
                            <div className='successCasesTitle'>
                                <h2>Success Cases</h2>
                            </div>

                            <div className='backgroundDiscMentor'>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={harvardLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Jaime C.</p>
                                        <p className='studentUni'>(Harvard University)</p>
                                        <p className='facts'>- Entered Harvard University in 2013 <br/>- B.A., Political Science & Government</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={harvardLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Vincent M.</p>
                                        <p className='studentUni'>(Harvard University)</p>
                                        <p className='facts'>- Entered Harvard University in 2014 <br/>- B.A., Economics</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={georgetownLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Matt M.</p>
                                        <p className='studentUni'>(Georgetown University)</p>
                                        <p className='facts'>- Entered Georgetown University in 2014(#22 U.S. universityas of 2024)<br/> - B.A., Economics</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={virginiaLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Esther C.</p>
                                        <p className='studentUni'>(University of Virginia)</p>
                                        <p className='facts'>- Entered the University of Virginia in 2018 with full financial aid(#24 U.S. university as of 2024) <br/>- Major undeclared</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* new */}
                    <div className='inlineBlocks'>
                        <div className='brianInfo'>
                            <div className='figurePennMentor'>
                                <img src={princetonLogo} className='mentorUniLogo' />
                            </div>
                            <div className='textPart2'>
                                <p className='mentor'>Mentor:</p>
                                <h2>Vidur B.</h2>
                                <p className='gradFromMentor'>Graduated from</p>
                                <h4 className='uniName'>Princeton University in ’20 (B.A., Philosophy)</h4>
                                <p className='location'>Location:</p>
                                <h4 className='almaty'>New York, NY & Washington, D.C.</h4>
                            </div>
                        </div>

                        <div className='successCasesInfo'>
                            <div className='successCasesTitle'>
                                <h2>Success Cases</h2>
                            </div>

                            <div className='backgroundDiscMentor'>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={princetonLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Vani S.</p>
                                        <p className='studentUni'>(Princeton University)</p>
                                        <p className='facts'>- Entered Princeton University in 2023 with a full scholarship<br/>- B.S.E., Chemical & Biological Engineering</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={columbiaLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Fahad A.</p>
                                        <p className='studentUni'>(Columbia University)</p>
                                        <p className='facts'>- Entered Columbia University in 2022 with a full scholarship <br/>- B.S., Mechanical Engineering</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={pennLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Divya S.</p>
                                        <p className='studentUni'>(University of Pennsylvania)</p>
                                        <p className='facts'>- Entered the University of Pennsylvania in 2021<br/> - B.A., Biology</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={harvardLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Mario F.</p>
                                        <p className='studentUni'>(Harvard University)</p>
                                        <p className='facts'>- Entered Harvard University in 2020 with a full scholarship<br/>- B.A., Computer Science</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* new */}
                    <div className='inlineBlocks'>
                        <div className='brianInfo'>
                            <div className='figurePennMentor'>
                                <img src={yaleLogo} className='mentorUniLogo' />
                            </div>
                            <div className='textPart2'>
                                <p className='mentor'>Mentor:</p>
                                <h2>Adrien P.</h2>
                                <p className='gradFromMentor'>Currently attending</p>
                                <h4 className='uniName'>Yale University (B.A. Economics)</h4>
                                <p className='location'>Location:</p>
                                <h4 className='almaty'>New Haven, CT</h4>
                            </div>
                        </div>

                        <div className='successCasesInfo'>
                            <div className='successCasesTitle'>
                                <h2>Success Cases</h2>
                            </div>

                            <div className='backgroundDiscMentor'>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={yaleLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Datis D.</p>
                                        <p className='studentUni'>(Yale University)</p>
                                        <p className='facts'>- Entered Yale University in 2023<br/>- B.A., Economics & Global Affairs</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={brownLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Matthew A.</p>
                                        <p className='studentUni'>(Brown University)</p>
                                        <p className='facts'>- Entered Brown University in 2023<br/>- B.S., Biology</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={nyuLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Ava W.</p>
                                        <p className='studentUni'>(New York University)</p>
                                        <p className='facts'>- Entered New York University in 2023(#35 U.S. university as of 2024)<br/> - B.A., English</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={michiganLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>Ryan H.</p>
                                        <p className='studentUni'>(University of Michigan)</p>
                                        <p className='facts'>- Entered the University of Michigan in 2023(#21 U.S. university as of 2024)<br/>- B.A., History</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='researchText'>
                    <h1>DO YOUR <span className='blueResearch'>RESEARCH</span></h1>
                    <p><span className='italic'>You will see the same success cases</span> on multiple company websites. Some will help with just SATs and IELTS or just personal statement essays.</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}