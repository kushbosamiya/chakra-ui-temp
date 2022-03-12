import React from "react";
import Header from "../Landing_Page/header"
import HeroSection from "../Landing_Page/herosection";
import TreatmentHeadline from "../Landing_Page/TreatmentHeadline";
import TreatmentSection from "../Landing_Page/TreatmentSection";
import DiseaseHeadline from "../Landing_Page/DiseaseHeadline";
import DiseaseSection from "../Landing_Page/DiseaseSection";
import BlogHeadline from "../Landing_Page/BlogHeadline";
import BlogSection from "../Landing_Page/BlogSection";
import Threepost from "../Landing_Page/ThreePost"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Footer from "../Landing_Page/FooterSection"
import ConsultSection from "../Landing_Page/ConsultSection";

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
