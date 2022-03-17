import React from 'react';
import plated from "../../img/plated.png"
import silver from "../../img/silver.png"
import blue from "../../img/blue.png"
import pink from "../../img/pink.png"
import black from "../../img/black.png"
import green from "../../img/green.png"




const MorePhotos = () => {
    return (
        <div className="more__img container">
        <div className="more__img_1">
          <div className="six__img">
            <img src={plated} alt="plated" />
            <p>Plated Cushion</p>
            <span>$ 19.99 USD</span>
          </div>
          <div className="six__img">
            <img src={silver} alt="silver" />
            <p>Silver Cushion</p>
            <span>$ 19.99 USD</span>
          </div>
          <div className="six__img">
            <img src={blue} alt="blue" />
            <p>Deep Blue Cushion</p>
            <span>$ 19.99 USD</span>
          </div>
        </div>
        <div className="more__img_2">
          <div className="six__img">
            <img src={pink} alt="pink" />
            <p>Pink Cushion</p>
            <span>$ 19.99 USD</span>
          </div>
          <div className="six__img">
            <img src={black} alt="black" />
            <p>Black Cushion</p>
            <span>$ 19.99 USD</span>
          </div>
          <div className="six__img">
            <img src={green} alt="green" />
            <p>Green Cushion</p>
            <span>$ 19.99 USD</span>
          </div>
        </div>
      </div>
    );
};

export default MorePhotos;