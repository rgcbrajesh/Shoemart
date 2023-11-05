import React from 'react'
import "../css/Media.css"
import "../css/Style.css"
import amazon from "../image/amazon.png"
import flipkart from "../image/flipkart.png"
import myntra from "../image/myntra.jpg"
import insta from "../image/instagram.png"
import facebook from "../image/facebook.png"
import twit from "../image/twitter.png"
import logo from "../image/logo.png"

export default function Footer() {
  return (
    <>
      <div className="footer container-xxl ">
        <div className="row">
          <div className="col-lg-4 text-white">
            <h2>IMPORTANT LINK'S</h2>
            <h3><img src={amazon} alt="amazon" height={30} />Amazon</h3>
            <h3><img src={flipkart} alt="flipkart" height={30} className='flip' />  Flipkart</h3>
            <h3><img src={myntra} alt="myntra" height={30} className='flip' /> Myntra</h3>
          </div>
          <div className="col-lg-4 text-white">
            <h2>FOLLOW-US</h2>
            <h3><img src={insta} height={30} alt="instagram" />  Instagram </h3>
            <h3><img src={facebook} alt="Facebook" height={30} /> Facebook</h3>
            <h3><img src={twit} alt="twitter" height={30} /> Twitter</h3>
          </div>
          <div className="col-lg-4 text-white">
          <h4>
            Handia Road, National Highway 59A Harda, Madhya Pradesh 461331
          </h4>
          <h4>07577-292067</h4>
          <h4><img src={logo} alt="shoemart" width={40}/> Shoemart@gmail.com</h4>
          <h4>www.Shoemart.com</h4>
          </div>
        </div>
      </div>
      
    </>
  )
}
