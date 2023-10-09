import React, { useContext } from "react";
import { dataContext } from "../context/DataProvider";
import Card from "./Card";
import "../styles/CardsContainer.css";

const CardsContainer = () => {
  const { products, setCart } = useContext(dataContext);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <>
      <main className="cards__container">
        <div className="cards__container-list">
          {products.map((product) => (
            <div key={product.id} className="single-card__container">
              <Card
                nameProduct={product.product}
                image={product.image}
                price={product.price}
              />
              <button onClick={() => addToCart(product)} className="single-card__button">Add to cart</button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default CardsContainer;
