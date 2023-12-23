import React from 'react';
import "../css/footer.css";
import Bg from "../Assets/footer-wrapper.jpeg";
import Bicycle from "../Assets/bicycle.jpg";


const footer = () => {
  return (
    <>
        <div className="footer-wrapper">
            <img className='footer-bg' src={Bg} alt='background'></img>

            <div className="container">
              
                <div className="rectangle1">

                </div>
                <div className="rectangle-2">

                </div>
                <div className="rectangle-3">

                </div>

            </div>
        </div>
    </>
  )
}

export default footer