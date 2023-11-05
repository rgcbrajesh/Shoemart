import React from "react";
import "../css/Style.css";
import "../css/Media.css";
import shoe from "../image/shoe.png";
export default function Main() {
  return (
    <>
      <div className="container-xxl ">
        <div className="row">
          <div className="text-shoe col-lg-6 ms-5  mt-5  ">
            <h1 id="name">
              WELCOME <br /> TO SHOEMART
              <br />
            </h1>
            <h1 id="name2">WORLD'S BIGGEST MART</h1>
          </div>

          <div className="shoe col-lg-5 ms-3 ">
            <img src={shoe} id="shoe1" alt="shoe" />
          </div>
        </div>
        
      </div>
    </>
  );
}
