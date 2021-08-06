import React from 'react';
import '../App.css';
import { Button } from './button';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className='hero-container'>
            <h1>Skull Stylist</h1>
            <p>Bespoke Millinery</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline"
                buttonSize='btn--large'>Style Your Skull</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>View Gallery</Button>
            </div>

            
        </div>
    )
}

export default LandingPage
