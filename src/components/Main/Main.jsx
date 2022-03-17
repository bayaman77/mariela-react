import React from "react";
import MainImg from "../../img/main_img.png"

const Main = () => {
  return (
    <div className="main-image">
      <div className="main-image-h">
        <div className="top-color" />
        <img src={MainImg} alt="" />
        <div className="bottom-color" />
      </div>
    </div>
  );
};

export default Main;
