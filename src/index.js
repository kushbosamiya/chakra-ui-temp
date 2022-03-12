import React from "react";
import ReactDOM from "react-dom";
import Component from "./component/Landing_Page/Component";
import { ChakraProvider } from "@chakra-ui/react";
import "../src/styles.css" 


function App() {
  return (
   <Component />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
