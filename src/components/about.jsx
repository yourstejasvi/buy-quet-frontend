import React from 'react';
import "../css/about.css";
import Bouquet from "../Assets/bouquet.jpg";
import Sunflower from "../Assets/sunflower.png";
import Yard from "../Assets/yard.png";
import Botanical from "../Assets/botanicalpng.png";
import Florist from "../Assets/w.jpg";
import Purple from "../Assets/purple-flower.png";
import Book from "../Assets/book_2.png";
import Cake from "../Assets/cake.jpg";
import Pink from "../Assets/pink flower.png";
import CakeIcon from "../Assets/cake.png";


const about = () => {
  return (
    <>
    <div className="about-wrapper">

        <div className="about-bouquet">
            <img className="sunflower-image" src={Sunflower}></img>
            <img className="bouquet-image" src={Bouquet}></img>
            <div className="text-rectangle1">
                <p className='text1'>Send bouquet to your special one</p>
                <img className="yard-icon" src={Yard}></img>
            </div>
            <img className="botanical-image1" src={Botanical}></img>
        </div>

        <div className="about-florist">
            <img className="purple-flower" src={Purple}></img>
            <img className="florist-image" src={Florist}></img>
            <div className="text-rectangle2">
                <p className='text2'>Book a florist for your wedding</p>
                <img className="book-icon" src={Book}></img>
            </div>
            <img className="botanical-image2" src={Botanical}></img>
        </div>

        <div className="about-cake">
            <img className="pink-flower" src={Pink}></img>
            <img className="cake-image" src={Cake}></img>
            <div className="text-rectangle3">
                <p className='text3'>Order soft, creamy and flavorful cakes</p>
                <img className="cake-icon" src={CakeIcon}></img>
            </div>
            <img className="botanical-image3" src={Botanical}></img>
        </div>

    </div>
    
    </>
  )
}

export default about