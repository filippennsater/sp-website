import React from 'react';
import '../../App.css';
import './AboutSection.scss';

function AboutSection() {
    return (

        <div className='about-container'>

            <div className='cards-container'>


                <div className='info-card1'>

                    <ul>
                        <div className='about-header'>OM</div>
                        <div className='about-text'>Jag arbetar med evidensbaserad kognitiv beteendeterapi (KBT) och familjeterapi (IBCT)</div>
                    </ul>
                </div>
                <div className='info-card2'>

                </div>
                <div className='info-card3'>
                    <ul>
                        <div className='about-text'>Med över 20 års erfarenhet från behandling, samtal.</div>
                        <div className='about-text'>Över 20 års erfarenhet av arbetsplatsrelaterad problematik från företagshälsovård. Som utredning och bedömning av konflikter, svåra samtal, utredning och bedömning av kränkningsanmälan, arbetsförmågebedömningar.</div>
                    </ul>
                </div>
                <div className='info-card4'>
                    <ul>
                        <div className='about-header'>CV</div>
                        <li className='about-text'>KBT-steg 1 Psykologpartners</li>
                        <li className='about-text'>IBCT Psykologpartners</li>
                        <li className='about-text'>ICF- Karolinska institutet, arbetsförmågebedömning</li>
                        <li className='about-text'>Medicinskt ledningsansvar, Sveriges företagshälsovårds förening</li>
                    </ul>
                </div>

            </div>

        </div>

    )
}

export default AboutSection