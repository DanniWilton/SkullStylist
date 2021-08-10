import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Lulu from '../gallery-images/Lulu.jpg';
import Sammy from '../gallery-images/Sammy.jpg';
import TikiQueenVintage from '../gallery-images/TikiQueenVinatge.JPG';
import Velvet from '../gallery-images/Velvet.jpg';
import '../pages/gallery.css';

class Gallery extends Component {
  render() {
    return (
      <Carousel>
        <div className="gallery">
          <img src={Lulu} alt="Lulu Liquer in her Beetle outfit" max-height={720}/>
          <br />
          <img src={Sammy} alt="Sammy Sparkles at Miss Burlesque Western Australia 2019" />
          <img src={TikiQueenVintage} alt="Tiki Queen Vintage and friend at festival"/>
          <img src={Velvet} alt="Studio shot of Velvet"/>
        </div>
      </Carousel>
    );
  }
};

export default Gallery;

