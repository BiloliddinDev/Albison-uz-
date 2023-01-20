import React from "react";
import "./cards2.css";
const Card2 = () => {
  return (
    <div className="cards2">
      <img
        className="cards2__image"
        src="https://www.albison.uz/img/svg/product-launch.svg"
        width="495"
        height="280"
        alt=""
      />
      <div className="cards2__wrapper">
        <h1 className="cards2__heading">Kuchli portfolio</h1>
        <p className="cards2__text">
          O'quv jarayonlarida har bir talaba o'z bilim darajasiga mos
          loyihalarda qatnashishi yoki o'z loyihalarini amalga oshirishi mumkin.
        </p>
      </div>
    </div>
  );
};

export default Card2;
