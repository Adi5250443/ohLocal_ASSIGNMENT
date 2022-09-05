import React, { useEffect, useState } from "react";
import "./Main_product.css";

const Main_product = () => {
  const [product, setProduct] = useState([]);

  const fetchData= async ()=>{
    try{
      let url=`https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/`;
      let res= await fetch(url);
      let data=await res.json()
      let adi=data.main_product;
      console.log(adi);
      setProduct(adi);

    }catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="Product-bg">
        <div className="Product-details">
          
          
        <div className="Product-img">
          <img src="https://ohlocal-media.s3.ap-south-1.amazonaws.com/web-assignment-assets/main_image.svg" alt="not found" />
        </div>

        <div className="Product-description">
          <div className="Product-title"><b>realme 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Handsfree Voice Search and Dolby Vision & Atmos (RMV2004)</b></div>
          <div className="Product-pipeline">Home Appliances  Television</div>
          <div className="Online-price-icon">
            <img src="https://ohlocal-media.s3.ap-south-1.amazonaws.com/web-assignment-assets/online_price_icon.svg" alt="not found" />
            <div className="Onlice-price"><b>39,990</b></div>
          </div>
          <div className="Quantity">quantity-2</div>
          </div>
          </div>
         
         <div className="Product-status-bar">
          <div className="Product-status">
            <b>Status</b>
            <div className="Product-status-icon">
              <img src="https://ohlocal-media.s3.ap-south-1.amazonaws.com/web-assignment-assets/status_icon.svg" alt="not found" />
            </div>
          </div>
        
          <div className="Time-remaining"><b>Time remaining</b></div>
           <div className="Time"><b>35 minutes</b></div>
          
          <div className="Bids">
            <div className="Bids-text" ><h3>BIDS PLACED</h3></div>
            <div className="Total-bids"><b>03</b></div>

          </div>
          
        </div>
      </div>
     
  );
};

export default Main_product;
