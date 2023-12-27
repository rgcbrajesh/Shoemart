import React, { useState } from "react";
import logo from "../image/logo.png";
import Item from "./Item";
import "../css/Media.css";
import photo from "../"

export default function Nikee() {
  const [items, setItem] = useState(Item);
  const filterItem = (categItem) => {
    const updateItems = Item.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItem(updateItems);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3  " id="nikee">
          <img src={logo} alt="logo" className="w-75 ms-5" />
          <div className="row">
            <div className="col-md-2 "></div>
            <div className="col-md-8 text-center " id="element">
            <button
                id="nested-title"
                className="fs-3 fw-bold text-decoration-none "
                onClick={() => setItem(Item)}
              >
                All
              </button><br />
              <button
                id="nested-title"
                className="fs-3 fw-bold text-decoration-none "
                onClick={() => filterItem("nikee")}
              >
                NIKEE
              </button>
              <button
                id="nested-title"
                className="fs-3 fw-bold text-decoration-none "
                onClick={() => filterItem("adidas")}
              >
                ADIDAS
              </button>
              <button
                id="nested-title"
                className="fs-3 fw-bold text-decoration-none "
                onClick={() => filterItem("reebok")}
              >
                REEBOK
              </button>
              <button
                id="nested-title"
                className="fs-3 fw-bold text-decoration-none "
                onClick={() => filterItem("redtape")}
              >
                RED-TAPE
              </button>
              <button
                id="nested-title"
                className="fs-3 fw-bold text-decoration-none "
                onClick={() => filterItem("woodland")}
              >
                WOODLAND
              </button>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="col-md-9   " id="main">
          {items.map((elem) => {
            const { id, photo,  name,price } = elem;
            return (
              <div className="row" key={id}>
                <div className="col-lg-10">
                  <div className="card h-750 w-75 "  id="productcard">
                    <div className="row">
                      <div className="col-md-5"><img src={photo} alt="shoe" id="productimage" /></div>
                      <div className="col-md-7">
                        <h3 className="text-white mt-5" id="proname" >{name}</h3>
                        <h3 className="text-primary mt-3" id="price" >Price :-{price}</h3></div>
                    </div>
                  </div>

                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
