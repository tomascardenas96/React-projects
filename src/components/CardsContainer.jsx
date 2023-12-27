import React, { useContext } from "react";
import { dataContext } from "../context/DataProvider";
import Card from "./Card";
import "../styles/CardsContainer.css";

const CardsContainer = () => {
  const { products, setCart, cart } = useContext(dataContext);

  const addToCart = (product) => {
      console.log(1);
      setCart((prev) => [...prev, {...product, quantity :  0}]);
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
              <button
                onClick={() => addToCart(product)}
                className="single-card__button"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default CardsContainer;
