import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <img
        src="https://www.albison.uz/img/svg/logotype.svg"
        width="200"
        alt=""
      />
      <div className="footer__wrapper">
        <img
          src="https://www.albison.uz/img/svg/instagram.svg"
          width="35"
          alt=""
        />
        <img src="https://www.albison.uz/img/svg/gmail.svg" width="35" alt="" />
        <img
          src="https://www.albison.uz/img/svg/facebook.svg"
          width="35"
          alt=""
        />
        <img
          src="https://www.albison.uz/img/svg/youtube.svg "
          width="35"
          alt=""
        />
        <img
          src="https://www.albison.uz/img/svg/telegram.svg"
          width="35"
          alt=""
        />
      </div>
    </div>
  );
};
export default Footer;
