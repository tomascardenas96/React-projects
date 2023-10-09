import React from "react";
import "../styles/Card.css";

const card = ({ nameProduct, image, price }) => {
  return (
    <>
      <div className="single-card__container">
        <h1>{nameProduct}</h1>
        <h2>{price}</h2>
      </div>
    </>
  );
};

export default card;
