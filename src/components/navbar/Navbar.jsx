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

    return (

        <>
            <nav class="nav">
                <div class="container">
                    <div class="logo">
                        <Link to='/' >
                            SP Media and health
                        </Link>
                    </div>
                    <div id="mainListDiv" class="main_list">
                        <ul class="navlinks">
                            <li><Link to='/' >
                                Home
                            </Link></li>
                            <li><Link to='/about' >
                                About
                            </Link></li>
                            <li><Link to='/services' >
                                Services
                            </Link></li>
                            <li><Link to='/contact' >
                                Contact
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
