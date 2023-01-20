import React from "react";
import "./showcase.css";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase__wrapper">
        <h1 className="showcase__heading">
          NEGA YANA <br /> GRAND KURSLAR
        </h1>
        <p className="showcase__text">
          Kechagina ochilgan dasturchilar maktabimiz bitiruvchilari hozirda
          nafaqat bizda balki boshqa xalqaro IT kompaniyalarda ham o'z o'rnini
          egallashmoqda. Hozirda ushbu xalqaro kompaniyalar o'z ishonchlarini
          bildirib, yanada ko'proq dasturchilarni yetkazib berishda
          hamkorlarimizga aylanishdi
        </p>
        <div className="showcase__filter">
          <a href="#" className="showcase__btn">
            Royxatdan o'tish
          </a>
          <a href="#" className="showcase__btn1">
            Barcha kurslar
          </a>
        </div>
      </div>
      <img
        src="https://www.albison.uz/img/svg/developer.svg"
        width="495"
        height="255"
        alt=""
        className="showcase__image"
      />
    </div>
  );
};

export default Showcase;
