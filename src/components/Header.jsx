import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import {GiCircularSawblade} from "react-icons/gi"
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header__container">
          <h1 className="header__logo">California <GiCircularSawblade/></h1>
          <HiOutlineShoppingCart className="header__cart-icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
