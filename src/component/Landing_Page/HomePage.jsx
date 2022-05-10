import React from "react";
import Header from "./header";
import HeroSection from "./herosection";
import TreatmentHeadline from "./TreatmentHeadline";
import TreatmentSection from "./TreatmentSection";
import DiseaseHeadline from "./DiseaseHeadline";
import DiseaseSection from "./DiseaseSection";
import BlogHeadline from "./BlogHeadline";
import BlogSection from "./BlogSection";
import Divider from "@mui/material/Divider";
import ConsultSection from "./ConsultSection";
// import ".../src/styles.css";

import Footer from "./FooterSection";

const HomePage = () => {
  return (
    <>
      {/* <Router> */}
      <Header />
      {/* </Router> */}
      <HeroSection />
      <Divider>
        <TreatmentHeadline />
      </Divider>

      <TreatmentSection />

      <Divider>
        <DiseaseHeadline />
      </Divider>
      <DiseaseSection />
      <Divider>
        <BlogHeadline />
      </Divider>
      {/* <Router> */}
      <BlogSection />

      {/* <ConsultSection /> */}
      <Footer />
    </>
  );
};

export default HomePage;
