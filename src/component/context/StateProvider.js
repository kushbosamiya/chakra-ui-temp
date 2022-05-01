import { createContext, useState } from "react";

export const Carts = createContext();

const StateProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  const AddToCart = (
    imgsrc,
    tag,
    slug,
    title,
    subtitle,
    stars,
    rating,
    cutoffPrice,
    proff,
    price
  ) => {
    setdata((PrevState) => [
      ...PrevState,
      {
        imgsrc,
        tag,
        slug,
        title,
        subtitle,
        stars,
        rating,
        cutoffPrice,
        proff,
        price,
      },
    ]);
  };

  return (
    <Carts.Provider value={{ data, AddToCart }}>{children}</Carts.Provider>
  );
};

export default StateProvider;
