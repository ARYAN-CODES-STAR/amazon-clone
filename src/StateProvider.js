//set up data layer
// we need this only to tracck basket

// import { create } from "@mui/material/styles/createTransitions";
// import React, { createContext, useContext, useReducer } from "react";

//data layer
// export const StateContext = createContext();

// build provider
// export const StateProvider = ({ reducer, initialState, children})(
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// );

// Setup Data Layer
import { createContext, useContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//inside comp
export const useStateValue = () => useContext(StateContext);