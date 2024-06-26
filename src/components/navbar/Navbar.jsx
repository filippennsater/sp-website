import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { createContext } from 'react';
import $ from 'jquery';


export const ThemeContext = createContext(null);

function Navbar() {

    useEffect(() => {
        // jQuery code
        $('.navTrigger').click(function () {
            $(this).toggleClass('active');
            console.log("Clicked menu");
            $("#mainListDiv").toggleClass("show_list");
            $("#mainListDiv").fadeIn();
        });

        // Cleanup function to remove event handlers
        return () => {
            $('.navTrigger').off('click');
        };
    }, []);

    
    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
            } else {
                $('.nav').removeClass('affix');
            }
        };

        // Add scroll event listener when component mounts
        $(window).on('scroll', handleScroll);

        // Clean up function to remove event listener when component unmounts
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (

        <>
       
            <nav class="nav">
                <div class="container">
                    <div class="logo">
                        <Link to='/' className='navbar-logo'/>
                    </div>
                    <div id="mainListDiv" class="main_list">
                        <ul class="navlinks">
                            <li><Link to='/' >
                                Hem
                            </Link></li>
                            <li><Link to='/about' >
                                Om
                            </Link></li>
                            <li><Link to='/servicesList' >
                                Tjänster
                            </Link></li>
                            <li><Link to='/contact' >
                                Kontakt
                            </Link></li>
                        </ul>
                    </div>
                    <span class="navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>
            
        </>
        
    );
}

export default Navbar;
