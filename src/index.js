import React from "react";
import ReactDOM from "react-dom";
import Component from "./Component";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
   <Component />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
