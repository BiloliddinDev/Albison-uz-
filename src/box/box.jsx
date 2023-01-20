import React from "react";
import "./box.css";
const Box = () => {
  return (
    <div className="box">
      <h3 className="box__title">Frontend</h3>
      <div className="box__wrapper">
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/html.svg"
            width="35"
            alt=""
          />
          <p className="box__text">HTML</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/css3.svg"
            width="35"
            alt=""
          />
          <p className="box__text">CSS + SASS</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/javascript.svg"
            width="35"
            alt=""
          />
          <p className="box__text">JavaScript</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/react.svg"
            width="35"
            alt=""
          />
          <p className="box__text">React.js</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/nextjs.svg"
            width="35"
            alt=""
          />
          <p className="box__text">Next.js</p>
        </div>
        <div className="box__filter">
          <img src="https://www.albison.uz/img/svg/git.svg" width="35" alt="" />
          <p className="box__text">Git</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
