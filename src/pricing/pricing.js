import React, { useEffect, useState } from 'react';
import './pricing.css'
import Header from '../Header';
import API from '../config';
import axios from 'axios';







const Pricing =()=>{
 
 
 
 
 
    const [pricing, setPricing] = useState([])


    useEffect(() => {


        getPricing();
    
      }, []);

    const getPricing = () => {
        axios.get(`${API}/pricingplans`)
          .then((response) => {
            console.log("pricingandplan", response.data)
            setPricing(response.data)
          }).catch((error) => {
            console.log("error", error)
          })
    
      }
 
 
 
 
 
 
 
 
 return(<>
    <Header></Header>
    <div className="ourteamheader" style={{
        width:"100%",
        height:"60vh",
        backgroundRepeat:"no-repeat",
        backgroundImage:`url(https://www.brandignity.com/wp-content/uploads/2019/06/pricing-banner-img.jpg)`,
        backgroundPosition:"center",
        backgroundSize:"cover"

    }}>
    </div>
    <div class="demo mt-4">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                    <div class="pricingTable-header">
                        <h3 class="title">Standard</h3>
                    </div>
                    <div class="price-value">
                        <span>$10</span>
                    </div>
                    <ul class="pricing-content">
                        <li>50GB Disk Space</li>
                        <li>50 Email Accounts</li>
                        <li>50GB Bandwidth</li>
                        <li>Maintenance</li>
                        <li>15 Subdomains</li>
                    </ul>
                    <div class="pricingTable-signup">
                        <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="pricingTable blue">
                    <div class="pricingTable-header">
                        <h3 class="title">Business</h3>
                    </div>
                    <div class="price-value">
                        <span>$20</span>
                    </div>
                    <ul class="pricing-content">
                        <li>50GB Disk Space</li>
                        <li>50 Email Accounts</li>
                        <li>50GB Bandwidth</li>
                        <li>Maintenance</li>
                        <li>15 Subdomains</li>
                    </ul>
                    <div class="pricingTable-signup">
                        <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="pricingTable purple">
                    <div class="pricingTable-header">
                        <h3 class="title">Business</h3>
                    </div>
                    <div class="price-value">
                        <span>$30</span>
                    </div>
                    <ul class="pricing-content">
                        <li>50GB Disk Space</li>
                        <li>50 Email Accounts</li>
                        <li>50GB Bandwidth</li>
                        <li>Maintenance</li>
                        <li>15 Subdomains</li>
                    </ul>
                    <div class="pricingTable-signup">
                        <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   </> )
}
export default Pricing;