import React from "react";
import './Navbar.css';


const Navbar=()=>{
  return(
        <nav className="Navbar-main" fix="Top">
         <div className="Toggler-bar">
          <h4>togler</h4> 
         </div>
          <div className="Search-bar">
          <input className="Search-bar-text" type="text" placeholder="Enter here"/>
          <button>Search</button>
          </div>
          <div className="Navbar-list">
          <ul>
            <li className="list-1">
            <a href="#"><h5>Live Bids</h5></a>
            </li>
            <li className="list-2" color="black">
            <a href="#"><img src="https://ohlocal-media.s3.ap-south-1.amazonaws.com/web-assignment-assets/person_icon.svg" alt="not found" /></a>
            </li>
            <li className="list-3">
            <a href="#"><h5>Help&support</h5></a>
            </li>
          </ul>
        </div>    
        </nav>
    )
}
export default Navbar;