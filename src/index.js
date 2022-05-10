import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./component/Landing_Page/HomePage";
import { ChakraProvider, Box } from "@chakra-ui/react";
import "../src/styles.css";
// import HomePage from "./component/Landing_Page/HomePage";
import Consult from "./component/ConsultPage/Consult"
import PharmacyPage from "./component/Pharmacy_Page/PharmacyPage";
import BlogPage from "./component/Blog_Page/MainblogPage";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Threepost from "./component/Landing_Page/ThreePost";
import CurrentDrug from "./component/Pharmacy_Page/CurrentDrug";
import CartComponent from "./component/Pharmacy_Page/Cart";
import { StateProvider } from "./component/context/StateProvider";
import reducer, { initialState } from "./component/context/reducer";

// import treatment component
import Homeopathy from "./component/Landing_Page/Treatment_Component/Homeopathy";
import Ayurveda from "./component/Landing_Page/Treatment_Component/Ayurvedic";
import Childcare from "./component/Landing_Page/Treatment_Component/ChildCare";
// import disease component
import Neurology from "./component/Landing_Page/DiseaseComponents/Neurology";
import Cardiology from "./component/Landing_Page/DiseaseComponents/Cardiology";
import Dermatology from "./component/Landing_Page/DiseaseComponents/Dermatology";
function App() {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" exact element={<HomePage />} />
            <Route path="pharmacy" exact element={<PharmacyPage />} />
            <Route path="pharmacy/:id" exact element={<CurrentDrug />} />
            <Route path="pharmacy/cart" exact element={<CartComponent />} />
            <Route path="diagnose" exact element={<Diagnose />} />
            <Route path="consult" exact element={<Consult />} />
            <Route path="blog" exact element={<BlogPage />} />
            <Route path="blog/:id" exact element={<Threepost />} />
            <Route path="homeopathy" exact element={<Homeopathy />} />
            <Route path="ayurveda" exact element={<Ayurveda />} />
            <Route path="childcare" exact element={<Childcare />} />
            <Route path="neurology" exact element={<Neurology />} />
            <Route path="cardiology" exact element={<Cardiology />} />
            <Route path="dermatology" exact element={<Dermatology />} />
            {/* <Route path="dermatology" exact element={<Dermatology />} /> */}
          </Routes>
        </Router>
      </StateProvider>
    </>
  );
}
// const Consult = () => {
//   return (
//     <>
//       <h1>
//         hello this is <span style={{ color: "blue" }}>Consult</span>
//       </h1>
//     </>
//   );
// };
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
