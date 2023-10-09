import React from "react";
import "../styles/Card.css";

const card = ({ nameProduct, image, price }) => {
  return (
    <>
      <div className="card-image">
        <img src={image} alt={image} />
      </div>
      <h1 className="card-title card-info">{nameProduct}</h1>
      <h2 className="card-price card-info">{price}</h2>
    </>
  );
};

export default card;
