import React, { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiCircularSawblade } from "react-icons/gi";
import { dataContext } from "../context/DataProvider";
import "../styles/Header.css";

const Header = () => {
  const { modalCart, setModalCart, cart } = useContext(dataContext);

  const handleModal = () => {
    setModalCart(!modalCart);
  };

  return (
    <>
      <header>
        <div className="header__container">
          <h1 className="header__logo">
            California <GiCircularSawblade />
          </h1>
          <HiOutlineShoppingCart
            onClick={() => handleModal()}
            className="header__cart-icon"
          />
          <div
            className={
              modalCart
                ? "header__cart-modal"
                : "header__cart-modal modal__open-close"
            }
          >
            {cart.map((item) => (
              <div className="header__added-modal">
                <p>{item.quantity}</p>
                <p>{item.product}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
