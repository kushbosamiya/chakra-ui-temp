import React, { createContext, useContext, useEffect, useReducer } from "react";
import PaymentIntergration from "../Pharmacy_Page/Frontend/PaymentIntergration";
// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer

export function StateProvider({ reducer, initialState, children }) {
  return (
    <>
      <StateContext.Provider
        value={(PaymentIntergration, useReducer(reducer, initialState))}
      >
        {children}
      </StateContext.Provider>
      ;
    </>
  );
}

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
