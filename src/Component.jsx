import React from "react";
import Header from "./component/header";
import HeroSection from "./component/herosection";
import TreatmentHeadline from "./component/TreatmentHeadline";
import TreatmentSection from "./component/TreatmentSection";
import DiseaseHeadline from "./component/DiseaseHeadline";
import DiseaseSection from "./component/DiseaseSection";
import BlogHeadline from "./component/BlogHeadline";
import BlogSection from "./component/BlogSection";
import Threepost from "./component/ThreePost"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Footer from "./component/FooterSection"
import ConsultSection from "./component/ConsultSection";
const Component = () => {
  return (
    <>
      <Header />

      <HeroSection />
      <TreatmentHeadline />
      <TreatmentSection />
      <DiseaseHeadline />
      <DiseaseSection />
      <BlogHeadline />
      <Router>
      <Routes>
          <Route path="/" exact element={<BlogSection />} />
          <Route path="blogs/:id" exact element={<Threepost />} />
        </Routes>
      </Router>
      {/* <ConsultSection /> */}
      <Footer />
    </>
  );
};

export default Component;
