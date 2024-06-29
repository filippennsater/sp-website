import React, { useState } from 'react';
import '../../App.css';
import './ContactSection.scss';


function ContactSection() {


    return (

        <div className='contact-container'>

            <div className='contact-info-wrap'>


                <div className='left-container'>

                    <div className='h30'>
                        <br />Telefon
                    </div>

                    <div className='p30'>
                        000-000 00 00<br />
                        Våra telefontider är mellan 9:00 och 17:00, måndag till fredag.
                    </div>



                    <div className='h30'>
                        Adress
                    </div>

                    <div className='p30'>
                        SP-Health<br />
                        Make-Believe Lane 00<br />
                        000 00 LUND
                    </div>



                    <div className='h30'>
                        Kontakta oss!
                    </div>

                    <div className='p30'>
                        Nedan kan du snabbt skriva ett meddelande till oss!<br /><br />
                    </div>

                    <form>
                        <div className='small-header-wrap-suggestion'>
                            <div className='p30'>
                                Namn
                            </div>
                        </div>
                        <div className='suggestion-input-wrap'>
                            <input
                                className='input-suggestion'
                                type="text"
                                name="text"
                            />
                        </div>
                        <div className='small-header-wrap-suggestion'>
                        <div className='p30'>
                                Mail
                            </div>
                        </div>
                        <div className='suggestion-input-wrap'>
                            <input
                                className='input-suggestion'
                                type="text"
                                name="text"
                            />
                        </div>

                        <div className='small-header-wrap-suggestion'>
                        <div className='p30'>
                                Meddelande
                            </div>
                        </div>
                        <div className='suggestion-input-wrap'>
                            <textarea
                                className='input-suggestion2'
                                type="message"
                                name="message"
                            />
                        </div>


                        <input className='suggestion-button cursor-pointer' type="submit" value="Skicka" />
                    </form>

                </div>


                <div className='right-container'>
                    <div className="map-container" dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.9993771180305!2d13.197386428504018!3d55.70639341291944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465397cf7560906d%3A0x9de6e629c239cde3!2sBarnahus%20Lund!5e0!3m2!1ssv!2sse!4v1719426937163!5m2!1ssv!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                    }} />
                </div>
            </div>

        </div>

    )
}

export default ContactSection