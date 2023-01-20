import React from "react";
import "./box.css";
const Box2 = () => {
  return (
    <div className="box">
      <h3 className="box__title">Backend</h3>
      <div className="box__wrapper">
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/nodejs.svg
            "
            width="35"
            alt=""
          />
          <p className="box__text">Node.js + Nest.js</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/java.svg
            "
            width="35"
            height="35"
            alt=""
          />
          <p className="box__text">Java</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/python.svg
            "
            width="35"
            alt=""
          />
          <p className="box__text">Python</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/go.svg
            "
            width="35"
            alt=""
          />
          <p className="box__text">Go</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/mongodb.svg"
            width="35"
            height="35"
            alt=""
          />
          <p className="box__text">MongoDB</p>
        </div>
        <div className="box__filter">
          <img
            src="https://www.albison.uz/img/svg/postgresql.svg"
            width="35"
            alt=""
          />
          <p className="box__text">PostgreSQL</p>
        </div>
      </div>
    </div>
  );
};

export default Box2;
