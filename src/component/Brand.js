import React from "react";
import "../css/Navbar.css";
import "../css/Style.css";
import "../css/Media.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import nikee from "../image/nikee.png";
import puma from "../image/puma.png";
import bata from "../image/bata.png";
import RedTape from "../image/redtape.png";
import adidas from "../image/adidas.jpg";
import reebok from "../image/reebok.jpg";
import { useEffect } from "react";

export default function Product() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <div className="container-xxl  mt-5">
        <h1 className="text-warning text-uppercase text-center mt-5">
          Brand's
        </h1>
        <div className="row">
          <div
            className="col-md-4  "
            data-aos="zoom-in-down"
            data-aos-duration="900"
            data-aos-delay="10"
          >
            <div className="card  h-75 " id="puma">
              <img src={nikee} className="h-75 w-100" alt="shoe1" />
              <div className="card-body">
                <Link
                  to="/product"
                  className="btn btn-primary  fw-bold"
                  id="btnnikee"
                >
                  GO FOR NIKEE
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="zoom-in-down"
            data-aos-duration="900"
            data-aos-delay="10"
          >
            <div className="card h-75 " id="puma">
              <img src={puma} className="card-img-top " alt="shoe1" />
              <div className="card-body">
                <Link
                  to="/product"
                  className="btn btn-primary  fw-bold"
                  id="btnnikee"
                >
                  GO FOR PUMA
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-md-4  "
            data-aos="zoom-in-down"
            data-aos-duration="900"
            data-aos-delay="10"
          >
            <div className="card  h-75" id="puma">
              <img src={bata} className="card-img-top" alt="shoe1" />
              <div className="card-body">
                <Link
                  to="/product"
                  className="btn btn-primary  fw-bold"
                  id="btnnikee"
                >
                  GO FOR BATA
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-4 "
            data-aos="zoom-in-down"
            data-aos-duration="900"
            data-aos-delay="10"
          >
            <div className="card mt-5  ">
              <img src={RedTape} className="card-img-top" alt="shoe1" />
              <div className="card-body">
                <Link
                  to="/product"
                  className="btn btn-primary  fw-bold"
                  id="btnnikee"
                >
                  GO FOR REDTAPE
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="zoom-in-down"
            data-aos-duration="900"
            data-aos-delay="10"
          >
            <div className="card  ">
              <img src={adidas} className="card-img-top h-25" alt="shoe1" />
              <div className="card-body">
                <Link
                  to="/product"
                  className="btn btn-primary  fw-bold"
                  id="btnnikee"
                >
                  GO FOR ADIDAS
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="zoom-in-down"
            data-aos-duration="900"
            data-aos-delay="10"
          >
            <div className="card  ">
              <img src={reebok} className="card-img-top" alt="shoe1" />
              <div className="card-body">
                <Link
                  to="/product"
                  className="btn btn-primary  fw-bold"
                  id="btnnikee"
                >
                  GO FOR REEBOK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
