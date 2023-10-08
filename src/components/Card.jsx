import React from "react";

const card = ({ nameProduct, image, price }) => {
  return(
  <>
    <h1>{nameProduct}</h1>
    <h2>{price}</h2>
  </>)
};

export default card;
