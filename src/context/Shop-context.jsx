import { createContext, useState } from "react";

export const shopContext = createContext();


export default function ShopProvider({ children }) {
  const [shop, setShop] = useState([]);

  const addTocart = (product) => {


    if (shop.length > 0) {
      setShop((prev) => {
        if (prev.some((item) => item.id === product.id)) {
          return prev;
        } else {
          return [...prev, product];
        }
      });

    } else {
      setShop([product]);
    }

  };

  const addTocart2 = (product) => {
    console.log(product)
    if (product) {
      if (shop.length > 0) {
        setShop([...shop, product]);
      } else {
        console.log("ooo")
        setShop([product]);
      }

    }
  };




  return (
    <shopContext.Provider value={{ shop, setShop, addTocart }}>
      {children}
    </shopContext.Provider>
  )
}

