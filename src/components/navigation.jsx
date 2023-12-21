import React from 'react';
import "../css/navigation.css";
import Logo from "../Assets/logo.png";
import Flower from "../Assets/pink-flower.jpg";

const navigation = () => {
  return (
    <>
    
    <div className="flower-container">

        <img className='flower' src={Flower} alt='flower-bg'></img>

    </div>
    

    

    <nav>
        <h1>BUY-QUET</h1>
        <img className='logo' src={Logo} alt='logo'></img>

        <div className='links'>

            <div className='nav-home'>
                <a onClick={()=>{}}>HOME</a>
            </div>
            <div className='nav-products'>
                <a onClick={()=>{}}>PRODUCTS</a>
            </div>
            <div className='nav-about'>
                <a onClick={()=>{}}>ABOUT</a>
            </div>
            <div className='nav-contact'>
                <a onClick={()=>{}}>CONTACT</a>
            </div>
            <div className='nav-login'>
                <a onClick={()=>{}}>LOGIN</a>
            </div>

        </div>
        
        
    </nav>


    </>
    
  )
}

export default navigation