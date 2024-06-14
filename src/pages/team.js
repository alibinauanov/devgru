import React from 'react';
import './team.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/whatsappBtn';

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

import { useTranslation } from 'react-i18next';

export default function Team() {
    const { i18n, t } = useTranslation();
    return(
        <div className='team'>
            <NavBar />
            <main>
                <div className='mainBlock'>
                    <div className='blackBlockDevGruIntro'>
                        <h3 className='titleName'>{t('team.title')}</h3>
                        <p className='LeftTeamDesc'>
                            {t('team.leftDesc')}
                        </p>
                        <p className='RightTeamDesc'>
                            {t('team.rightDesc')}
                        </p>
                    </div>
                </div>
                <div className='textBlock'>
                    <div class="rectangle-with-triangle">
                        <p><span className='italic'>{t('team.ivyMentors')}</span></p>
                    </div>
                    <div className='rightTextOnWhiteBack'>
                        <p>{t('team.limitWork')}</p>
                    </div>
                </div>
                <div className='directorInfo'>
                    <h1 className='titleDev'>{t('team.directorTitle')}</h1>
                    <div className='infoContainer'>
                        <div className='michaelInfo'>
                            <div className='figurePenn'>
                                <img src={pennLogo} className='pennLogo' />
                            </div>
                            <div className='textPart'>
                                <p className='director'>{t('team.directorStatus')}</p>
                                <h2>{t('team.directorName')}</h2>
                                <p className='gradFrom'>{t('team.dirertorGrad')}</p>
                                <h4 className='uniName'>{t('team.directorUniName')} <br/>{t('team.directorUniInfo')}</h4>
                                <p className='location'>{t('team.directorLocation')}</p>
                                <h4 className='almaty'>{t('team.directorLocationName')}</h4>
                            </div>
                        </div>
                        
                        <div className='backgroundInfo'>
                            <div className='backgroundTitle'>
                                <h2>{t('team.backgroundTitle')}</h2>
                            </div>
                            <div className='backgroundDisc'>
                                <ul>
                                    <li>{t('team.backgroundDesc1')}</li>
                                    <ul>
                                        <li>{t('team.backgroundDesc2')}</li>
                                    </ul>
                                </ul>
                                <ul>
                                    <li>{t('team.backgroundDesc3')}</li>
                                </ul>
                                <div className='inlineBlock'>
                                    <div className='profExp'>
                                        <h3>{t('team.profExperience')}</h3>
                                        {/* <!-- need to put 3 logos of companies --> */}
                                        <img src={higLogo} className='higCapital'></img>
                                        <img src={pjtLogo} className='pjtLogo'></img>
                                        <img src={citiLogo} className='citiLogo'></img>
                                    </div>
                                    <div className='successCases'>
                                        <h3>{t('team.successCases')}</h3>
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
                    <h1 className='mentorTitle'>{t('team.subTitle1')}<br/><span className='blueColor'>{t('team.subTitle2')}</span></h1>
                    
                    <div className='inlineBlocks'>
                        <div className='brianInfo'>
                            <div className='figurePennMentor'>
                                <img src={pennLogo} className='pennLogo' />
                            </div>
                            <div className='textPart2'>
                                <p className='mentor'>{t('mentorBrianK.mentorTitle')}</p>
                                <h2>{t('mentorBrianK.mentorName')}</h2>
                                <p className='gradFromMentor'>{t('mentorBrianK.mentorGraduated')}</p>
                                <h4 className='uniName'>{t('mentorBrianK.mentorDegree')}{t('mentorBrianK.mentorUniInfo')}</h4>
                                <p className='location'>{t('mentorBrianK.mentorLocationTitle')}</p>
                                <h4 className='almaty'>{t('mentorBrianK.mentorLocation')}</h4>
                            </div>
                        </div>

                        <div className='successCasesInfo'>
                            <div className='successCasesTitle'>
                                <h2>{t('mentorBrianK.successCasesTitle')}</h2>
                            </div>

                            <div className='backgroundDiscMentor'>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={harvardLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorBrianK.studentNameCase1')}</p>
                                        <p className='studentUni'>{t('mentorBrianK.studentUniCase1')}</p>
                                        <p className='facts'>{t('mentorBrianK.studentDescCase1')}<br/>{t('mentorBrianK.studentDegreeCase1')}</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={calTechLogo} className='uniStudentLogo' />
                                        </div>
                                        <div className='figureUniLogo'>
                                            <img src={mitLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorBrianK.studentNameCase2')}</p>
                                        <p className='studentUni'>{t('mentorBrianK.studentUniCase2')}</p>
                                        <p className='facts'>{t('mentorBrianK.studentDescCase2')}<br/>{t('mentorBrianK.studentDegreeCase2')}<br/>{t('mentorBrianK.studentAcceptCase2')}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={pennLogo} className='pennLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorBrianK.studentNameCase3')}</p>
                                        <p className='studentUni'>{t('mentorBrianK.studentUniCase3')}</p>
                                        <p className='facts'>{t('mentorBrianK.studentDescCase3')}<br/>{t('mentorBrianK.studentDegreeCase3')}</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={calTechLogo} className='uniStudentLogo' />
                                        </div>
                                        <div className='figureUniLogo'>
                                            <img src={mitLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorBrianK.studentNameCase4')}</p>
                                        <p className='studentUni'>{t('mentorBrianK.studentUniCase4')}</p>
                                        <p className='facts'>{t('mentorBrianK.studentDescCase4')}<br/>{t('mentorBrianK.studentDegreeCase4')}<br/>{t('mentorBrianK.studentAcceptCase4')}</p>
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
                                <p className='mentor'>{t('mentorKevinS.mentorTitle')}</p>
                                <h2>{t('mentorKevinS.mentorName')}</h2>
                                <p className='gradFromMentor'>{t('mentorKevinS.mentorGrad')}</p>
                                <h4 className='uniName'>{t('mentorKevinS.mentorDegree')}{t('mentorKevinS.mentorUniInfo')}</h4>
                                <p className='location'>{t('mentorKevinS.mentorLocationTitle')}</p>
                                <h4 className='almaty'>{t('mentorKevinS.mentorLocation')}</h4>
                            </div>
                        </div>

                        <div className='successCasesInfo'>
                            <div className='successCasesTitle'>
                                <h2>{t('mentorKevinS.successCasesTitle')}</h2>
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
                                        <p className='studentName'>{t('mentorKevinS.studentNameCase1')}</p>
                                        <p className='studentUni'>{t('mentorKevinS.studentUniCase1')}</p>
                                        <p className='facts'>{t('mentorKevinS.studentDescCase1')}<br/>{t('mentorKevinS.studentDegreeCase1')}<br/>{t('mentorKevinS.studentAcceptCase1')}</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={pennLogo} className='pennLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorKevinS.studentNameCase2')}</p>
                                        <p className='studentUni'>{t('mentorKevinS.studentUniCase2')}</p>
                                        <p className='facts'>{t('mentorKevinS.studentDescCase2')}<br/>{'mentorKevinS.studentDegreeCase2'}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={harvardLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorKevinS.studentNameCase3')}</p>
                                        <p className='studentUni'>{t('mentorKevinS.studentUniCase3')}</p>
                                        <p className='facts'>{t('mentorKevinS.studentDescCase3')}<br/>{t('mentorKevinS.studentDegreeCase3')}Biology</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={carMelLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorKevinS.studentNameCase4')}</p>
                                        <p className='studentUni'>{t('mentorKevinS.studentUniCase4')}</p>
                                        <p className='facts'>{t('mentorKevinS.studentDescCase4')}<br/>{t('mentorKevinS.studentDegreeCase4')}</p>
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
                                <p className='mentor'>{t('mentorTeddyK.mentorTitle')}</p>
                                <h2>{t('mentorTeddyK.mentorName')}</h2>
                                <p className='gradFromMentor'>{t('mentorTeddyK.mentorGrad')}</p>
                                <h4 className='uniName'>{t('mentorTeddyK.mentorDegree')}{t('mentorTeddyK.mentorUniInfo')}</h4>
                                <p className='location'>{t('mentorTeddyK.mentorLocationTitle')}</p>
                                <h4 className='almaty'>{t('mentorTeddyK.mentorLocation')}</h4>
                            </div>
                        </div>

                        <div className='successCasesInfo'>
                            <div className='successCasesTitle'>
                                <h2>{t('mentorTeddyK.successCasesTitle')}</h2>
                            </div>

                            <div className='backgroundDiscMentor'>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={harvardLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorTeddyK.studentNameCase1')}</p>
                                        <p className='studentUni'>{t('mentorTeddyK.studentUniCase1')}</p>
                                        <p className='facts'>{t('mentorTeddyK.studentDescCase1')}<br/>{t('mentorTeddyK.studentDegreeCase1')}</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={harvardLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorTeddyK.studentNameCase2')}</p>
                                        <p className='studentUni'>{t('mentorTeddyK.studentUniCase2')}</p>
                                        <p className='facts'>{t('mentorTeddyK.studentDescCase2')}<br/>{t('mentorTeddyK.studentDegreeCase2')}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={georgetownLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorTeddyK.studentNameCase3')}</p>
                                        <p className='studentUni'>{t('mentorTeddyK.studentUniCase3')}</p>
                                        <p className='facts'>{t('mentorTeddyK.studentDescCase3')}<br/>{t('mentorTeddyK.studentDegreeCase3')}</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={virginiaLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorTeddyK.studentNameCase4')}</p>
                                        <p className='studentUni'>{t('mentorTeddyK.studentUniCase4')}</p>
                                        <p className='facts'>{t('mentorTeddyK.studentDescCase4')}<br/>{t('mentorTeddyK.studentDegreeCase4')}</p>
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
                                <p className='mentor'>{t('mentorVidurB.mentorTitle')}</p>
                                <h2>{t('mentorVidurB.mentorName')}</h2>
                                <p className='gradFromMentor'>{t('mentorVidurB.mentorGrad')}</p>
                                <h4 className='uniName'>{t('mentorVidurB.mentorDegree')}{t('mentorVidurB.mentorUniInfo')}</h4>
                                <p className='location'>{t('mentorVidurB.mentorLocationTitle')}</p>
                                <h4 className='almaty'>{t('mentorVidurB.mentorLocation')}</h4>
                            </div>
                        </div>

                        <div className='successCasesInfo'>
                            <div className='successCasesTitle'>
                                <h2>{t('mentorVidurB.successCasesTitle')}</h2>
                            </div>

                            <div className='backgroundDiscMentor'>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={princetonLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorVidurB.studentNameCase1')}</p>
                                        <p className='studentUni'>{t('mentorVidurB.studentUniCase1')}</p>
                                        <p className='facts'>{t('mentorVidurB.studentDescCase1')}<br/>{t('mentorVidurB.studentDegreeCase1')}</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={columbiaLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorVidurB.studentNameCase2')}</p>
                                        <p className='studentUni'>{t('mentorVidurB.studentUniCase2')}</p>
                                        <p className='facts'>{t('mentorVidurB.studentDescCase2')}<br/>{t('mentorVidurB.studentDegreeCase2')}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={pennLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorVidurB.studentNameCase3')}</p>
                                        <p className='studentUni'>{t('mentorVidurB.studentUniCase3')}</p>
                                        <p className='facts'>{t('mentorVidurB.studentDescCase3')}<br/>{t('mentorVidurB.studentDegreeCase3')}</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={harvardLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorVidurB.studentNameCase4')}</p>
                                        <p className='studentUni'>{t('mentorVidurB.studentUniCase4')}</p>
                                        <p className='facts'>{t('mentorVidurB.studentDescCase4')}<br/>{t('mentorVidurB.studentDegreeCase4')}</p>
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
                                <p className='mentor'>{t('mentorAdrienP.mentorTitle')}</p>
                                <h2>{t('mentorAdrienP.mentorName')}</h2>
                                <p className='gradFromMentor'>{t('mentorAdrienP.mentorCurrAttend')}</p>
                                <h4 className='uniName'>{t('mentorAdrienP.mentorDegree')}{t('mentorAdrienP.mentorDegreeInfo')}</h4>
                                <p className='location'>{t('mentorAdrienP.mentorLocationTitle')}</p>
                                <h4 className='almaty'>{t('mentorAdrienP.mentorLocation')}</h4>
                            </div>
                        </div>

                        <div className='successCasesInfo'>
                            <div className='successCasesTitle'>
                                <h2>{t('mentorAdrienP.successCasesTitle')}</h2>
                            </div>

                            <div className='backgroundDiscMentor'>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={yaleLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorAdrienP.studentNameCase1')}</p>
                                        <p className='studentUni'>{t('mentorAdrienP.studentUniCase1')}</p>
                                        <p className='facts'>{t('mentorAdrienP.studentDescCase1')}<br/>{t('mentorAdrienP.studentDegreeCase1')}</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={brownLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorAdrienP.studentNameCase2')}</p>
                                        <p className='studentUni'>{t('mentorAdrienP.studentUniCase2')}</p>
                                        <p className='facts'>{t('mentorAdrienP.studentDescCase2')}<br/>{t('mentorAdrienP.studentDegreeCase2')}</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={nyuLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorAdrienP.studentNameCase3')}</p>
                                        <p className='studentUni'>{t('mentorAdrienP.studentUniCase3')}</p>
                                        <p className='facts'>{t('mentorAdrienP.studentDescCase3')}<br/>{t('mentorAdrienP.studentDegreeCase3')}</p>
                                    </div>
                                    <div className='case'>
                                        <div className='figureUniLogo'>
                                            <img src={michiganLogo} className='uniStudentLogo' />
                                        </div>
                                        <p className='studentName'>{t('mentorAdrienP.studentNameCase4')}</p>
                                        <p className='studentUni'>{t('mentorAdrienP.studentUniCase4')}</p>
                                        <p className='facts'>{t('mentorAdrienP.studentDescCase4')}<br/>{t('mentorAdrienP.studentDegreeCase4')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='researchText'>
                    <h1>{t('team.doYourTitle')}<span className='blueResearch'>{t('team.researchTitle')}</span></h1>
                    <p><span className='italic'>{t('team.researchText1')}</span> {t('team.researchText2')}</p>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}