import React from 'react';
import '../App.css';
import { Button } from './button';
import './LandingPage.css';
import logo from './logo.png';
import LandingImage from './images/LandingImage.JPG';
import LandingImage2 from './images/LandingImage2.jpg';

function LandingPage() {
    return (
        <div className='hero-container'>
            <h1>Skull Stylist</h1>
            <p>Bespoke Millinery</p>
            <img className="logo" img src={logo} alt={'skull stylist logo'}/>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>View Gallery</Button>
            </div> 
            <div className='sideImage1'>
            <img className="landingImage1" img src={LandingImage} alt={'Skull Stylist Image 1'}/>
            <img className="landingImage2" img src={LandingImage2} alt={'Skull Stylist Image 2'}/>
        </div>
        </div>

    )
}

export default LandingPage
