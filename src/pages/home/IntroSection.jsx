import React from 'react';
import '../../App.css';
import './IntroSection.scss';




function IntroSection() {


    return (

    <div className='intr-container'>

            <div className='intrc-container'>


                    <div className='intr-bottom-container'>

                        <div className='intr-text-container'>
                            <div className='intrctext'>Välkommen till min hemsida! Jag heter Susanne Pennsäter och är legitimerad KBT-terapeut. Här kan du få hjälp med att hantera stress, ångest, depression och andra livsutmaningar genom kognitiv beteendeterapi (KBT). Jag erbjuder individuella samtal anpassade efter dina unika behov och mål. Utforska sidan för mer information om mina tjänster och hur vi tillsammans kan arbeta för ditt välbefinnande.</div>
                        </div>

                        <div className='intr-circle-container'>
                            <div className='intr-outer-circle'>
                                <div className='intr-circle'/>
                            </div>
                        </div>
                        
                    </div>

            </div>
            
    </div>

    )
}

export default IntroSection