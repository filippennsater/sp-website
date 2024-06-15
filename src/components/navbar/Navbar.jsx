import './Navbar.scss';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { connect } from 'react-redux';


export const ThemeContext = createContext(null);


const Navbar = ({ cart }) => {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
          count += item.qty;
        });
    
        setCartCount(count);
      }, [cart, cartCount]);

    const handleLogout = async () => {
        await signOut(auth);
      };

      const [user, setUser] = useState({});

      useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [user])


    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            // setButton(false)
        } else {
            // setButton(true)
        }
    };

    //so the button doesn' appear when you refresh page
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



    const [clock, setClock] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClock = () => setClock(!clock);
    const closeProfMenu = () => setClock(false);





    return (

        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={() => { closeMobileMenu(); closeProfMenu(); }} />

                    <div className='menu-icon' onClick={() => { handleClick(); closeProfMenu(); }}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={() => { closeMobileMenu(); closeProfMenu(); }}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/shop' className='nav-links' onClick={() => { closeMobileMenu(); closeProfMenu(); }}>
                                Store
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/podcastList' className='nav-links' onClick={() => { closeMobileMenu(); closeProfMenu(); }}>
                                Podcasts
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={() => { closeMobileMenu(); closeProfMenu(); }}>
                                Contact
                            </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={() => { closeMobileMenu(); closeProfMenu(); }}>
                                About
                            </Link>
                        </li>



                    </div>

                    <div className='prof-icon' onClick={() => { handleClock(); closeMobileMenu(); }}>
                        <i className={clock ? "fa-regular fa-user" : "fa-solid fa-user"}></i>
                    </div>

                    <div className={clock ? 'prof-menu active' : 'prof-menu'}>

                    {user ? <li className='prof-item'>
                            <Link to='/profile' className='prof-links' onClick={closeProfMenu}>
                                Profile
                            </Link>
                        </li> : <></>}

                        {user ? <></> :<li className='prof-item'>
                            <Link to='/login' className='prof-links' onClick={closeProfMenu}>
                                Log in
                            </Link>
                        </li>}


                        {user ? <li className='prof-item'>
                            <Link to='/logout' className='prof-links' onClick={() => { closeProfMenu(); handleLogout(); }}>
                                Log out
                            </Link>
                        </li> : <></>}

                        {user ? <></> : <li className='prof-item'>
                            <Link to='/signup' className='prof-links' onClick={closeProfMenu}>
                                Sign up
                            </Link>
                        </li>}
                        

                    </div>


                    <Link to='/cart' className='cart-icon' onClick={() => { closeMobileMenu(); closeProfMenu(); }}>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Link>
                    <Link to='/cart' className='cart-icon-number' onClick={() => { closeMobileMenu(); closeProfMenu(); }}>
                        {cartCount}
                    </Link>


                </div>

            </nav>

        </>
    );

}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(Navbar);