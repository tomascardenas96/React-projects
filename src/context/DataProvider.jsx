import React, { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalCart, setModalCart] = useState(false);

  useEffect(() => {
    try {
      fetch("../../public/data.json")
        .then((res) => {
          if (!res.ok) return console.error(res.status);
          return res.json();
        })
        .then((data) => {
          setProducts(data);
        });
    } catch (error) {
      throw new Error();
    }
  }, []);

  return (
    <>
    <dataContext.Provider value={{ products, cart, modalCart, setProducts, setCart, setModalCart }}>
        {children}
    </dataContext.Provider>
    </>
  );
};

export default DataProvider;
