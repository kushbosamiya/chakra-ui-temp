import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./component/Landing_Page/HomePage";
import { ChakraProvider, Box } from "@chakra-ui/react";
import "../src/styles.css";
// import HomePage from "./component/Landing_Page/HomePage";
import PharmacyPage from "./component/Pharmacy_Page/PharmacyPage";
import BlogPage from "./component/Blog_Page/MainblogPage";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Threepost from "./component/Landing_Page/ThreePost";

function App() {
  // console.log("hello");

  return (
    
      <Box>
        <Router>
          {/* <HomePage /> */}
          {/* <Header /> */}
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" exact element={<HomePage />} />
            <Route path="pharmacy" exact element={<PharmacyPage />} />
            <Route path="diagnose" exact element={<Diagnose />} />
            <Route path="consult" exact element={<Consult />} />
            <Route path="blog" exact element={<BlogPage />} />
            <Route path="blog/:id" exact element={<Threepost />} />
          </Routes>
        </Router>
      </Box>
    
  );
}
const Consult = () => {
  return (
    <>
      <h1>
        hello this is <span style={{ color: "blue" }}>Consult</span>
      </h1>
    </>
  );
};
const Diagnose = () => {
  return (
    <>
      <h1>
        hello this is <span style={{ color: "yellow" }}>Diagnose</span>
      </h1>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
