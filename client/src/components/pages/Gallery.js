import './gallery.css';
import Lulu from './gallery-images/Lulu.jpg';
import Sammy from './gallery-images/Sammy.jpg';
import TikiQueenVintage from './gallery-images/TikiQueenVintage.JPG';
import Velvet from './gallery-images/Velvet.jpg';


function Gallery() {
    return (
        <div className="GalleryContainer">
            <div className="imageFrame1">
            <img className="Gallery" src={Sammy}/>
            </div>
            <div className="imageFrame1">
            <img className="Gallery" src={Lulu}/>
            </div>
            <div className="imageFrame1">
            <img className="Gallery" src={Velvet}/>
            </div>
            <div className="imageFrame1">
            <img className="Gallery" src={TikiQueenVintage}/>
            </div>
            {/* <br/>
            <h1>Skull Stylist Gallery</h1> */}
            
        </div>
    );
}
export default Gallery;