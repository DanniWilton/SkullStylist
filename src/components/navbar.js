import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css'
import { Button } from './button';

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

    window.addEventListener('resize', showButton)


    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Skull Stylist <i className="fab fa-typo3" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className= 'nav-item'>
                        <Link to='/' className='nav-links' onCLick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/shop' className='nav-links' onCLick={closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/gallery' className='nav-links' onCLick={closeMobileMenu}>
                            Gallery
                        </Link>
                    </li>
                    <li className= 'nav-item'>
                        <Link to='/contact' className='nav-links' onCLick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>CONTACT</Button>}

            </div>
        </nav>
        </>
    )
}

export default Navbar
