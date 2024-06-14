import React, { useState } from 'react';
import './competition.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/whatsappBtn';

import { useTranslation } from 'react-i18next';

const profiles = [
    {
        acceptance: ['Princeton', 'Georgia Tech', 'CMU', 'UIUC', 'Purdue', 'UF', 'UCF'],
        waitlisted: ['Berkeley', 'Northwestern', 'Rice', 'Cornell', 'Penn', 'UCLA'],
        rejections: ['MIT', 'Stanford', 'CalTech', 'Duke'],
        financialAid: 'n/a',
        legacy: 'n/a',
        hook: 'LOR from Princeton professor',
        academicProfile: {
            schoolType: 'Public',
            location: 'Florida',
            major: 'Material Science',
            unweightedGPA: '4.00/4.00',
            weightedGPA: '4.90/5.00',
            classRank: '1/872',
            SATs: '1540 | n/a',
            APs: '26 APs (seven 5s, twelve 4s)'
        },
        academicAchievements: [
            '14 dual enrollments',
            'Princeton University course developer assistant, helped with the development of a sports analytics course',
            'Georgia Tech material science + polymer science research, helped PhD student in chemical/biomolecular engineering',
            '2x AIME qualifier(2023, 24)',
            '2x USNCO qualifier(2022, 23)',
            'UF SSTP (summer program) Best Research Paper(2023)'
        ],
        nonAcademicExtracurriculars: [
            'Football Analyst Intern for Orlando City SC - creating data-driven projects that contributed to the recruitment analysis of the club',
            'Mu Alpha Theta/national math honor society: Treasurer, Calculus, content leader'
        ]
    },
    {
        acceptance: ['Stanford', 'UPenn', 'Dartmouth', 'Cornell', 'UC Berkeley', 'Georgia Tech', 'Rice', 'Vanderbilt', 'UMich'],
        waitlisted: ['Harvard', 'CalTech', 'UCSD'],
        rejections: ['MIT'],
        financialAid: 'n/a',
        legacy: 'n/a',
        hook: 'Low-income',
        academicProfile: {
            schoolType: 'Public',
            location: 'California',
            major: 'Computer Science + Economics',
            unweightedGPA: '4.00/4.00',
            weightedGPA: 'n/a',
            classRank: 'n/a',
            SATs: 'n/a',
            APs: '10 APs (all 5s and 4s)'
        },
        academicAchievements: [
            '1st Place Tech International Award from FAANG Company',
            'Research Grant from Tech Company',
            '2nd Place Cybersecurity Competition from DoD Contractor',
            '1st place State/National Government Award CS',
            '2nd Place International Piano Competition'
        ],
        nonAcademicExtracurriculars: [
            'Research Intern at DoD Lab: first-author of research paper',
            'Created competitive cybersecurity team',
            'CS Research at Top 10 university',
            'Summer job at DoD Lab'
        ]
    },
    {
        acceptance: ['UChicago', 'Oxford', 'UMich', 'Notre Dame', 'Case Western'],
        waitlisted: ['n/a'],
        rejections: ['UPenn', 'Yale', 'Princeton', 'Brown', 'Duke', 'John Hopkins', 'Vanderbilt'],
        financialAid: 'n/a',
        legacy: 'No',
        hook: 'Nigerian American, low-income',
        academicProfile: {
            schoolType: 'Public',
            location: 'Midwest',
            major: 'Pre-Med Health Humanities',
            unweightedGPA: '4.00/4.00',
            weightedGPA: 'n/a',
            classRank: '4/490',
            SATs: 'n/a',
            APs: '8 APs, AP Scholar w/Honors'
        },
        academicAchievements: [
            '5 dual enrollments',
            'Regional Pre-College Scholar Program',
            'National African American Recognition Program'
        ],
        nonAcademicExtracurriculars: [
            'President of Cultural Club and HOSA at School',
            'Founded a peer-to-peer tutoring program',
            'Medical internship program at state university',
            'Local biomedical education board member'
        ]
    },
    {
        acceptance: ['Stanford', 'University of Chicago', 'CMU', 'Berkeley', 'UCLA', 'UCSD', 'UCI'],
        waitlisted: ['Amherst'],
        rejections: ['Harvard', 'Yale', 'Princeton', 'UPenn', 'Brown', 'Dartmouth', 'Duke', 'Williams', 'Northwestern'],
        financialAid: 'n/a',
        legacy: 'n/a',
        hook: 'n/a',
        academicProfile: {
            schoolType: 'Public',
            location: 'California',
            major: 'Economics',
            unweightedGPA: '3.80/4.00',
            weightedGPA: '4.43/5.00',
            classRank: '19/702',
            SATs: '1550 | 800 (M), 750 (RW)',
            APs: 'AP Scholar w/ Honors'
        },
        academicAchievements: [
            '25pg. research paper that uses multivariate linear models to demonstrate a type of selection process in economics'
        ],
        nonAcademicExtracurriculars: [
            'Self-directed small business that sells aids that make graphing easier for students(financials undisclosed)',
            'Worked at McDonald\'s (18 months), 13hrs/wk year round'
        ]
    },
    {
        acceptance: ['Harvard', 'Princeton', 'Yale', 'UMich', 'UVA', 'Georgia Tech'],
        waitlisted: ['Brown', 'Vanderbilt'],
        rejections: ['n/a'],
        financialAid: 'No',
        legacy: 'Princeton',
        hook: 'Hispanic',
        academicProfile: {
            schoolType: 'Public',
            location: 'n/a',
            major: 'STEM',
            unweightedGPA: '4.00/4.00',
            weightedGPA: 'n/a',
            classRank: '2 (total undisclosed)',
            SATs: '1580 | n/a',
            APs: 'Calc BC(5); Chem(5); Lang(5); CSA(5), Physics 1, Physics C (Mech); Lit; Spanish; Macro'
        },
        academicAchievements: [
            'Two extremely competitive summer science research programs',
            'Founder of school Chemistry Club',
            'Various other school clubs/leadership roles',
            'Science research paper'
        ],
        nonAcademicExtracurriculars: [
            'Accomplished musician (performed solo at Lincoln Center)',
            'Submitted 2 music arts supplements'
        ]
    },
    {
        acceptance: ['Georgetown', 'NYU Stern', 'Emory', 'USC', 'UVA', 'Georgia Tech', 'UT Austin'],
        waitlisted: ['UMich', 'Amherst'],
        rejections: ['UPenn', 'Duke', 'Cornell'],
        financialAid: 'n/a',
        legacy: 'No',
        hook: 'No',
        academicProfile: {
            schoolType: 'Public (#1 in the State)',
            location: 'Northeast',
            major: 'n/a',
            unweightedGPA: '3.95/4.00',
            weightedGPA: '4.60/5.00',
            classRank: 'n/a',
            SATs: '1550 | 800 (M), 750 (RW)',
            APs: '16 APs (six 5s, four 4s, one 3)'
        },
        academicAchievements: [
            'National Merit Semi-Finalist',
            'National Honor Society',
            'Distinguished Honor Roll (10,11)',
            'Johns Hopkins Study of Exceptional Talent',
            'Took college courses over summer at Drexel and Penn, Econ Summer Program at Cornell, Two Youth Leadership Programs'
        ],
        nonAcademicExtracurriculars: [
            'Vice President of Finance of small businesses: created, operated, and liquidated companies. I managed the team for out supply chain and finance. We completed and won a few awards',
            'President of UNICEF Club: organized fundraisers, raised awareness through poster campaigns'
        ]
    }
];

function ProfileTable({ profile }) {
    return (
        <table className="profile-table">
            <tbody>
                <tr>
                    <td className="table-header">Acceptance</td>
                    <td>{profile.acceptance.join(', ')}</td>
                </tr>
                <tr>
                    <td className="table-header">Waitlisted</td>
                    <td>{profile.waitlisted.join(', ')}</td>
                </tr>
                <tr>
                    <td className="table-header">Rejections</td>
                    <td>{profile.rejections.join(', ')}</td>
                </tr>
                <tr>
                    <td className="table-header">Applied for Financial Aid?</td>
                    <td>{profile.financialAid}</td>
                </tr>
                <tr>
                    <td className="table-header">Legacy</td>
                    <td>{profile.legacy}</td>
                </tr>
                <tr>
                    <td className="table-header">Hook</td>
                    <td>{profile.hook}</td>
                </tr>
                <tr>
                    <td className="table-header">Academic Profile</td>
                    <td>
                        <div className="categories">
                            <p>School Type: {profile.academicProfile.schoolType}</p>
                            <p>Location: {profile.academicProfile.location}</p>
                            <p>Prospective Major: {profile.academicProfile.major}</p>
                            <p>Unweighted GPA: {profile.academicProfile.unweightedGPA}</p>
                            <p>Weighted GPA: {profile.academicProfile.weightedGPA}</p>
                            <p>Class Rank: {profile.academicProfile.classRank}</p>
                            <p>SATs: {profile.academicProfile.SATs}</p>
                            <p>APs: {profile.academicProfile.APs}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="table-header">Academic Achievements</td>
                    <td>{profile.academicAchievements.join(', ')}</td>
                </tr>
                <tr>
                    <td className="table-header">Non-Academic Extracurriculars</td>
                    <td>{profile.nonAcademicExtracurriculars.join(', ')}</td>
                </tr>
            </tbody>
        </table>
    );
}

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

export default function Competition() {
    const [activeProfileIndex, setActiveProfileIndex] = useState(0);
    const { t } = useTranslation();

    const preparationStagesCompetition = [
        {
            title: t('preparationStagesCompetition.0.title'),
            content: t('preparationStagesCompetition.0.content', { returnObjects: true })
        },
        {
            title: t('preparationStagesCompetition.1.title'),
            content: t('preparationStagesCompetition.1.content', { returnObjects: true })
        },
        {
            title: t('preparationStagesCompetition.2.title'),
            content: t('preparationStagesCompetition.2.content', { returnObjects: true })
        },
        {
            title: t('preparationStagesCompetition.3.title'),
            content: t('preparationStagesCompetition.3.content', { returnObjects: true })
        }
    ];

    return (
        <div className='competition'>
            <NavBar />
            <main>
                <div className='firstBlockComp'>
                    <div className='blackBlockCompetition'>
                        <h3 className='titleCompetition'>{t('competition.competitionTitle')}</h3>
                        <p className='underCompetition'>{t('competition.competitionSlogan')}</p>
                    </div>
                </div>
                <div className='question'>
                    <h2>{t('competition.compeitionQuestion')}</h2>
                </div>
                <div className='dropdown-container'>
                    {preparationStagesCompetition.map((stage, index) => (
                        <Dropdown 
                            key={index}
                            title={stage.title} 
                            content={stage.content} 
                            color={index % 2 === 0 ? '#968B84' : '#A39790'}
                        />
                    ))}
                </div>
                <div className='profiles'>
                    <div className='titleProfile'>
                        <h2>{t('competition.competitorProfilesTitle')}</h2>
                    </div>
                    <div className='tab-container'>
                        {profiles.map((profile, index) => (
                            <button
                                key={index}
                                className={`tab-button ${activeProfileIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveProfileIndex(index)}
                            >
                                Case #{index + 1}
                            </button>
                        ))}
                    </div>
                    <ProfileTable profile={profiles[activeProfileIndex]} />
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}