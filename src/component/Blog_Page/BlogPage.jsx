import React from "react";
import Header from "../Landing_Page/header";
import Footer from "../Landing_Page/FooterSection";
import { Grid, GridItem } from "@chakra-ui/react";
import SearchBar from "../Pharmacy_Page/SearchBar";

const BlogPage = () => {
  return (
    <>
      <Header />
      <Grid templateColumns=".5fr 1fr .5fr" p="1rem" columnGap="2rem">
        <GridItem gridColumn="2/3" p="1rem">
          <SearchBar />
        </GridItem>
      </Grid>

      <Grid
        as="blogcomponent"
        templateColumns=" .5fr 350px 350px 350px .5fr"
        placeItems="center"
        columnGap="2rem"
        border="1px solid"
        p="1rem"
      >
        <GridItem gridColumn="2/3">hello</GridItem>
        <GridItem gridColumn="3/4">hello</GridItem>
        <GridItem gridColumn="4/5">hello</GridItem>
      </Grid>
      {/* <Footer /> */}
    </>
  );
};

export default BlogPage;
