import React, { createContext, useContext, useEffect, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer

export function StateProvider({ reducer, initialState, children }) {
  return (
    <>
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
      ;
    </>
  );
}

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
