import React from "react";
import "./box.css";
const Box3 = () => {
  return (
    <div className="box">
      <h3 className="box__title">Frontend</h3>
      <div className="box__wrapper">
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/logo.svg"
            width="35"
            alt=""
          />
          <p className="box__text">Albison</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/itechart.svg"
            width="35"
            alt=""
          />
          <p className="box__text">iTechArt</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/epam.svg"
            width="35"
            alt=""
          />
          <p className="box__text">EPAM</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/rounded.svg"
            width="35"
            alt=""
          />
          <p className="box__text">Rounded</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/tax.svg
            "
            width="35"
            alt=""
          />
          <p className="box__text">SICNT</p>
        </div>
        <div className="box__filter">
          <img
            src="	https://www.albison.uz/img/svg/transition.svg"
            width="35"
            alt=""
          />
          <p className="box__text">Itransition</p>
        </div>
      </div>
    </div>
  );
};

export default Box3;
