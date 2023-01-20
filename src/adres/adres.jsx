import React from "react";
import "./adres.css";
const Adres = () => {
  return (
    <div className="adres">
      <div className="adres__wrapper">
        <h4 className="adres__title">Do you have any question?</h4>
        <a className="adres__link" href="tel:+(88) 123 80 80">
          (88) 123 80 80
        </a>
        <br />
        <a className="adres__link" href="tel:+(90) 112 27 57">
          (90) 112 27 57
        </a>
      </div>
      <div>
        <h4 className="adres__title">Address</h4>
        <a className="adres__link" href="http://">
          Tashkent Labzak <br /> street 70 Amity <br /> University
        </a>
      </div>
      <div>
        <h4 className="adres__title">Language</h4>
        <ul className="adres__list">
          <li className="adres__iteam">
            <img
              src="https://www.albison.uz/img/svg/russia2.svg "
              alt=""
              width="35"
            />
          </li>
          <li className="adres__iteam">
            <img
              src="https://www.albison.uz/img/svg/uzbekistan2.svg"
              alt=""
              width="35"
            />
          </li>
          <li className="adres__iteam">
            <img
              src="https://www.albison.uz/img/svg/uk.svg"
              alt=""
              width="35"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Adres;
