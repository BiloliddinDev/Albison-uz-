import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <a href="#" className="nav__logo">
        <img
          src="https://www.albison.uz/img/svg/logotype.svg"
          width="200"
          alt="Albison new"
        />
      </a>
      <div className="nav__wrapper">
        <ul className="nav__list">
          <li className="nav__iteam">
            <a href="#" className="nav__link">
              Asosiy
            </a>
          </li>
          <li className="nav__iteam">
            <a href="#" className="nav__link">
              Ustkunalar
            </a>
          </li>
          <li className="nav__iteam">
            <a href="#" className="nav__link">
              Career
            </a>
          </li>
        </ul>
        <a href="#" className="nav__filter">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
