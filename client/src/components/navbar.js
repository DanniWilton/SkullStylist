import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import { Button } from './button';
import logo from './logo.png'
 

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


// hides button when screen is made smaller
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton)


    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick= {closeMobileMenu}>
                    Skull Stylist <img src={logo} />
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className= 'nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                            Gallery
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>

                </ul>
                {button && <Button buttonStyle='btn--outline'>STYLE YOUR SKULL</Button>}

            </div>
        </nav>
        </>
    )
}

export default Navbar
