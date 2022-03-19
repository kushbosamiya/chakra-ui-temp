import React from "react";
import { Grid, GridItem, Box, Text, Image, Heading } from "@chakra-ui/react";
import Facebook from "../Assets/Footer/Social-Icons/facebook.svg";
import Instagram from "../Assets/Footer/Social-Icons/instagram.svg";
import Twitter from "../Assets/Footer/Social-Icons/twitter.svg";
import WhatsApp from "../Assets/Footer/Social-Icons/whatsapp.svg";
import Discord from "../Assets/Footer/Social-Icons/discord.svg";
import Github from "../Assets/Footer/Social-Icons/github.svg";
// import Logo from "./Assets/NavBar/logo_icon.svg";
import { NavHashLink } from "react-router-hash-link";
import "./FooterSection.css";

// smooth scroll
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <Grid
        templateColumns="10% 80% 10%"
        // bg="#def6e5"
        alignItems="center"
      >
        <GridItem gridColumn="2/3">
          <Grid
            templateColumns="repeat(5,1fr)"
            columnGap="1rem"
            as="footer"
            p="1rem"
         
          >
            {/* first column */}

            <Grid
              templateRows="repeat(5,1fr)"
              // border="1px solid black"
              // placeItems="end"

              p="1rem"
              rowGap=".5rem"
            >
              <GridItem>
                <strong>
                  <Text>Swasthya Setu</Text>
                </strong>
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href="#blog">
                  <ScrollLink
                    to="blogs&articles"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={750}
                  >
                    <Text>Blogs</Text>
                  </ScrollLink>
                </Box>

                {/* Blogs */}
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href="#Treatments">
                  
                  <ScrollLink
                    to="treatmentsection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={750}
                  >
                    <Text>Treatments</Text>
                  </ScrollLink>
                </Box>
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Speciality">
                  
                  <ScrollLink
                    to="specialization"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={750}
                  >
                    <Text>Speciality</Text>
                  </ScrollLink>
                </Box>
                {/* Speciality */}
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Quick-Consult">
                  Quick-Consult
                </Box>
              </GridItem>
            </Grid>

            {/* 2nd column */}
            <Grid
              templateRows="repeat(6,1fr)"
              // border="1px solid black"
              // placeItems="center"
              p="1rem"
              rowGap=".5rem"
            >
              <GridItem>
                <strong>
                  <Text>Patients</Text>
                </strong>
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Search for doctors">
                  Search for doctors
                </Box>
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Online Consultation">
                  Online Consultation
                </Box>
                {/* Online Consultation */}
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Health Article">
                  Health Article
                </Box>
                {/* Health Article */}
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Diagnostic test">
                  Diagnostic test
                </Box>
                {/* Diagnostic test */}
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Pharmacy">
                  Pharmacy
                </Box>
                {/* Pharmacy */}
              </GridItem>
            </Grid>
            {/* 3rd column */}
            <Grid
              templateRows="repeat(5,1fr)"
              // border="1px solid black"
              // placeItems="center"
              p="1rem"
              rowGap=".5rem"
            >
              <GridItem>
                <strong>
                  <Text>Hospital</Text>
                </strong>
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Hospital Login">
                  Hospital Login
                </Box>
                {/* Hospital Login */}
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #CRUD Hospitals">
                  CRUD Hospitals
                </Box>
                {/* CRUD Hospitals */}
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Manage Hospital's Profile">
                  Manage Hospital's Profile
                </Box>
                {/* Manage Hospital's Profile */}
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Manage Hospital's appointment">
                  Manage Hospital's appointment
                </Box>
                {/* Manage Hospital's appointment */}
              </GridItem>
            </Grid>
            {/* 4rth column */}
            <Grid
              templateRows="repeat(5,1fr)"
              // border="1px solid black"
              // placeItems="center"
              p="1rem"
              rowGap=".5rem"
            >
              <GridItem>
                <strong>
                  <Text>Doctors</Text>
                </strong>
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Doctors Login">
                  Doctors Login
                </Box>
                {/* Doctors Login */}
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {/* CRUD Doctors */}
                <Box as="a" href=" #CRUD Doctors">
                  CRUD Doctors
                </Box>
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Manage appointment">
                  Manage appointment
                </Box>
                {/* Manage appointment */}
              </GridItem>
              <GridItem
                _hover={{
                  // background: "white",
                  // color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                <Box as="a" href=" #Manage Doctors's Profile">
                  Manage Doctors's Profile
                </Box>
                {/* Manage Doctors's Profile */}
              </GridItem>
            </Grid>
            {/* 5th column */}
            <Grid
              templateRows="repeat(6,1fr)"
              // border="1px solid black"
              // placeItems="center"
              p="1rem"
              rowGap=".5rem"
            >
              <GridItem>
                <strong>
                  <Text>Social</Text>
                </strong>
              </GridItem>
              <GridItem as="a" href="#FaceBook">
                <Image src={Facebook} alt="FaceBook" cursor="pointer" />
              </GridItem>
              <GridItem as="a" href="#Twitter">
                <Image src={Twitter} alt="Twitter" cursor="pointer" />
              </GridItem>
              <GridItem as="a" href="#Instagram">
                <Image src={Instagram} alt="Instagram" cursor="pointer" />
              </GridItem>
              <GridItem as="a" href="#WhatsApp">
                <Image src={WhatsApp} alt="WhatsApp" cursor="pointer" />
              </GridItem>
              <GridItem as="a" href="#Github">
                <Image src={Github} alt="Github" cursor="pointer" />
              </GridItem>
              <GridItem as="a" href="#Discord">
                <Image src={Discord} alt="Discord" cursor="pointer" />
              </GridItem>
            </Grid>
          </Grid>
        </GridItem>
      </Grid>
      {/* Logo and 2022 */}

      {/* <Box d="flex" border="1px solid black" p="1rem"> */}
      <Grid
        as="footer"
        templateColumns="60% 1fr"
        p="1rem"
        // border="1px solid black"
        placeItems="end"
      >
        <GridItem>
          <Text
            as="h1"
            // fontSize="2rem"
            fontWeight="800"
            color="#059b5c"
            cursor="pointer"
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            • Swasthya Setu •
          </Text>
        </GridItem>
        <GridItem alignSelf="center">
          <SocialLinks />
        </GridItem>
      </Grid>
    </>
  );
};

export default Footer;

const SocialLinks = () => {
  var CurrentYear = new Date().getFullYear();

  return <Text color="#8c8c8c">© {CurrentYear} Kushal Bosamiya</Text>;
};
