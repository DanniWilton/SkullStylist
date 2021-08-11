import React from 'react';
import '../App.css';
import { Button } from './button';
import './LandingPage.css';
import logo from './logo.png';
import LandingImage from './images/LandingImage.JPG';

function LandingPage() {
    return (
        <div className='hero-container'>
            <h1>Skull Stylist</h1>
            <p>Bespoke Millinery</p>
            <img className="logo" img src={logo} alt={'skull stylist logo'}/>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline"
                buttonSize='btn--large'>Style Your Skull</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>View Gallery</Button>
            </div> 
            <div className='sideImage1'>
            <img className="landingImage1" img src={LandingImage} alt={'Skull Stylist Image 1'}/>
        </div>
        </div>

    )
}

export default LandingPage
