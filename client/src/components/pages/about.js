import React from 'react';
import './about.css';
import FifiAbout1 from '../images/FifiAbout1.jpg';
import FifiAbout2 from '../images/FifiAbout2.jpg';

function AboutSkullStylist () {
    return (
        <section className="about">
            
            <h1>Everybody loves things that sparkle - Philip Treacy</h1>
            
            <p className="about-description">Since 2017 I have been creating millinery by design for my clients.
                <br></br>
                
            It all began with creating my first piece in 2015. I loved the process so much I knew it would not be my last. <br></br>
            My name is FiFi Fontaine and I am a burlesque performer, teacher and mentor based in Perth, Western Australia.<br></br>
            As a self-taught milliner, I have worked with an incredible range of materials for my clients - including feathers, jewels, rhinestones and taxidermy pieces.<br></br>
            I create original designs with my clients, as well as offering to restore and reinforce existing and well-loved pieces, where possible.<br></br>
            My creations have graced skulls (and stages) all over the world - across Australia, the United Kingdom, United States and New Zealand.<br></br>
            Examples of some of my work include:
            custom fascinators, hats and headpieces 
            showgirl headdresses 
            wedding pieces
            half-masks<br></br>
            There is no skull topping too big or small - or outrageous!<br></br>
            My latest creations can be seen on my <a href="https://www.instagram.com/skullstylist/?hl=en">Instagram</a>, my <a href="https://www.facebook.com/skullstylist/">Facebook</a> page or when you get in contact with me about your special creation.
            <div className="about-image-container">
                <img className="about-image1" img src={FifiAbout1} alt={'Fifi Fontaine shot by Chayla Taylor Photography'}/>
                <img className="about-image2" img src={FifiAbout2} alt={'Fifi Fontaine shot by David Wooley Photography'}/>
            </div>
            </p>
            

        </section>

    )
}

export default AboutSkullStylist