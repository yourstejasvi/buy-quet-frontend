import React from 'react';
import "../css/landing_body.css";
import Botanical from "../Assets/botanical.png";
import SearchIcon from '@mui/icons-material/Search';

const landing_body = () => {
  return (
    <>

    <div className="home-container">

        <div className="text-container">
            <h2>Your one stop destination for buying gifts for your loved ones</h2>
        </div>
        <div className="botanical-1">
            <img src={Botanical} alt='img'></img>
        </div>
        <div className="botanical-2">
            <img src={Botanical} alt='img'></img>
        </div>
        <div className="button-container">
            <a onClick={()=>{}}>BROWSE
             <SearchIcon style={{fontSize:'50px',marginLeft:'170px',marginTop:'-45px'}} />
             </a>
        </div>

    </div>
    
    </>
  )
}

export default landing_body