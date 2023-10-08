import React, { useContext } from "react";
import { dataContext } from "../context/DataProvider";
import Card from "./Card";

const CardsContainer = () => {
  const { products, setCart, cart } = useContext(dataContext);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  console.log(cart);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <Card
            nameProduct={product.product}
            image={product.image}
            price={product.price}
          />
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </>
  );
};

export default CardsContainer;
