import React from "react";
import "./Heading.css";
const Heading = () => {
  return (
    <div className="Product-heading">
       <div className="Logo">
        <img src="https://ohlocal-media.s3.ap-south-1.amazonaws.com/web-assignment-assets/bids_vector.svg" alt="not found" />
       </div>
        <div className="Heading">
        <h3><b>All Bids From Merchants</b></h3>
        <div className="Sub-heading">
          <h6>Some subheading for the offers of merchants</h6>
        </div>
      </div>
      
    </div>
  );
};

export default Heading;
