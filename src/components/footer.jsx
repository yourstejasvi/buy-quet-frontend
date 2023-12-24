import React from 'react';
import "../css/footer.css";
import Bg from "../Assets/footer-wrapper.jpeg";
import Bicycle from "../Assets/bicycle.jpg";
import Twitter from "../Assets/twitter.svg";
import Instagram from "../Assets/instagram.svg";
import Pinterest from "../Assets/pinterest.svg";
import Youtube from "../Assets/youtube.svg";


const footer = () => {
  return (
    <>
        <div className="footer-wrapper">
            <img className='footer-bg' src={Bg} alt='background'></img>

            <div className="container">
              
                <div className="rectangle-1">
                  <ul>
                    <li>Twitter </li>
                    <li>Instagram </li>
                    <li>Pinterest </li>
                    <li>Youtube </li>
                  </ul>
                  <div className="smicon-container">
                    <img className='smicon1' src={Twitter}></img>
                    <img className='smicon2' src={Instagram}></img>
                    <img className='smicon3' src={Pinterest}></img>
                    <img className='smicon4' src={Youtube}></img>

                  </div>
                                  
                </div>

                <div className="rectangle-2">
                  <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Career</li>
                    <li>Support</li>
                    <li>Stores</li>
                  </ul>

                </div>

                <div className="rectangle-3">
                  <ul>
                    <li>+81-767267622</li>
                    <li>Tejasvi Sharma</li>
                    <li>buyquet@mail.com</li>
                  </ul>

                </div>

            </div>

            <img className='bicycle' src={Bicycle} alt="bicycle" />
        </div>
    </>
  )
}

export default footer