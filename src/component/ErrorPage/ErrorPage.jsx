import React from "react";
import Header from "../Landing_Page/header";
import { Grid, GridItem ,Image } from "@chakra-ui/react";
import ErrorObject from "../Assets/ErrorComponent/404_Error_Page_not_Found_with_people_connecting_a_plug.gif"
import Footer from "../Landing_Page/FooterSection";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <ErrorIllustration />
      <Footer />
    </>
  );
};

export default ErrorPage;

const ErrorIllustration = () => {
  return (
    <>
      <Grid templateRows="1fr" placeItems="center">
      <GridItem>
            <Image src={ErrorObject} />
      </GridItem>

      </Grid>
    </>
  );
};
