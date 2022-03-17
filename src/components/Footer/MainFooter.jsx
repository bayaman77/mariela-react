import React from "react";
import shopping from "../../img/shopping.svg"
import car from "../../img/car.svg"
import like from "../../img/like.svg"



const MainFooter = () => {
  return (
    <div className="footer__main">
      <div className="footer">
        <div className="footer__3">
          <img src={shopping} alt="shopping" />
          <p>Safe shopping</p>
          <span>Buy with confidence</span>
        </div>
        <div className="footer__3">
          <img src={car} alt="car" />
          <p>Fast shipping</p>
          <span>Get your product fast</span>
        </div>
        <div className="footer__3">
          <img src={like} alt="like" />
          <p>Satisfaction guarantee</p>
          <span>Or get your money back</span>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
