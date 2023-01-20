import React from "react";
import "./cards3.css";
const Card3 = () => {
  return (
    <div className="cards3">
      <img
        className="cards3__image"
        src="https://www.albison.uz/img/svg/waving.svg"
        width="495"
        height="285"
        alt=""
      />
      <div className="cards3__wrapper">
        <h1 className="cards3__heading">Ish topish</h1>
        <p className="cards3__text">
          Kurslarimizni yakunlagan har bir talabaga ishga joylashishida
          ko'maklashamiz. Eng zo'r bitiruvchilar esa Albisonda ishlash imkoniga
          ega bo'ladilar.
        </p>
      </div>
    </div>
  );
};

export default Card3;
