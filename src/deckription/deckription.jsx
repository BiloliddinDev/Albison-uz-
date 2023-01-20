import React from "react";
import "./deckriptin.css";

const Cars1 = () => {
  return (
    <div className="cards1">
      <img
        className="cards1__image"
        src="https://www.albison.uz/img/svg/graphs.svg"
        width="495"
        height="200"
        alt=""
      />
      <div className="cards1__wrapper">
        <h1 className="cards1__heading">Bir qadam oldinda</h1>
        <p className="cards1__text">
          Bizning barcha ustozlarimiz boy tajribaga ega. Mentorlarimiz tomonidan
          yaratilgan o'quv dasturlari esa doimiy yangilab boriladi va sizga eng
          so'ngi hamda faol dasturlash tillari o'rgatiladi.
        </p>
      </div>
    </div>
  );
};

export default Cars1;
