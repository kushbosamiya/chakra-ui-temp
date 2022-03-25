import React from "react";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";

import Hamburger from "hamburger-react";
import Logo from "../Assets/NavBar/logo_icon.svg";
import AvatarIcon from "../Assets/NavBar/avatar-2.svg";
// import Homes from "../Assets/NavBar/Home-icon-2.svg";
// import Consults from "../Assets/NavBar/Consult-icon.svg";
import Capsule from "../Assets/NavBar/capsule-icon.svg";
import Scientist from "../Assets/NavBar/scientist-man-icon.svg";
import BlogIcon from "../Assets/NavBar/blogger-icon.svg";
import ection from "./BlogSection";

import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// importing pages

import PharmacyPage from "../Pharmacy_Page/PharmacyPage";

// import "./src/styles.css"

// importing smooth scrolling
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { NavHashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <NavBarContainer />
    </>
  );
};

export default NavLinks;

// {/* <Routes>
// <Route path="/" exact element={<Home />} />
// <Route path="pharmacy" exact element={<Pharmacy />} />
// <Route path="consult" exact element={<Consult />} />
// <Route path="diagnose" exact element={<Diagnose />} />
// {/* <Route path="blogs&articles" exact element={<BlogLink />} /> */}
// </Routes> */}

const CustomNavBar = () => {
  return (
    <>
      <GridItem gridColumn="1/2">
        {/* Home icon */}

        <Box cursor="pointer">
          <Link to="/">
            <Text fontWeight="600" color="#059b5c">
              Home
            </Text>
          </Link>
        </Box>

        {/* </Box> */}
      </GridItem>

      <GridItem gridColumn="2/3">
        {/* Home icon */}

        <Box cursor="pointer">
          <Link to="pharmacy">
            <Text fontWeight="600" color="#059b5c">
              Pharmacy
            </Text>
          </Link>
        </Box>

        {/* </Box> */}
      </GridItem>

      <GridItem gridColumn="3/4">
        {/* Home icon */}

        <Box cursor="pointer">
          <Link to="/consult">
            <Text fontWeight="600" color="#059b5c">
              Consult
            </Text>
          </Link>
        </Box>

        {/* </Box> */}
      </GridItem>

      <GridItem gridColumn="4/5">
        {/* Home icon */}

        <Box cursor="pointer">
          <Link to="/diagnose">
            <Text fontWeight="600" color="#059b5c">
              Diagnose
            </Text>
          </Link>
        </Box>

        {/* </Box> */}
      </GridItem>

      <BlogLink />
    </>
  );
};

const BlogLink = () => {
  return (
    <GridItem gridColumn="5/6">
      <Box cursor="pointer">
        <ScrollLink
          to="blogs&articles"
          // spy={true}
          // smooth={true}
          offset={-70}
          duration={1000}
        >
          <Text fontWeight="600" color="#059b5c">
            Blogs
          </Text>
        </ScrollLink>
        {/* </NavHashLink> */}
      </Box>
    </GridItem>
  );
};

const NavBarContainer = () => {
  return (
    <Grid fontWeight="900" templateColumns="5% 20% 60% 1fr" p="1rem">
      <MenuToggle />
      <Logo_Component />

      <NavItems />

      {/* <WhiteSpace /> */}
      <Avatar />
    </Grid>
  );
};

const MenuToggle = () => {
  return (
    <Grid templateColumns="auto" placeItems="center">
      <GridItem cursor="pointer" gridColumn="1/2">
        <Hamburger color="#059b5c" size="30" />
      </GridItem>
    </Grid>
  );
};

// logo
const Logo_Component = () => {
  return (
    <>
      <Grid templateColumns="1fr" placeItems="center">
        <GridItem
          // fontSize="1.5rem"
          cursor="pointer"
        >
          <NavHashLink to="/">
            <Text fontWeight="800" fontSize="1.5rem" color="#059b5c">
              • Swasthya Setu •
            </Text>
          </NavHashLink>
        </GridItem>
      </Grid>
    </>
  );
};

const NavItems = () => {
  return (
    <>
      <Grid templateColumns="repeat(5,1fr)" placeItems="center">
        <CustomNavBar />
      </Grid>
    </>
  );
};

const Avatar = () => {
  return (
    <>
      <Grid
        templateColumns="1fr"
        // alignItems="center"
        placeItems="center"
      >
        <GridItem gridColumn="1/2">
          <Menu>
            <MenuButton
              border="none"
              bg="none"
              cursor="pointer"
              transition="all 0.5s"
              // borderRadius="md"
              // p=".3rem"
              px=".3rem"
              py=".70rem"
              // borderWidth="1px"
              // _hover={{ bg: "lightgray" }}
              _expanded={{ bg: "#def6e5", borderRadius: ".4rem" }}
              _focus={{ border: "1px solid #059b5c", borderRadius: ".4rem" }}
            >
              <Text
                fontWeight="600"
                fontSize="1rem"
                color="#059b5c"
                //  px=".2rem"
              >
                Login
                <ChevronDownIcon />
              </Text>
            </MenuButton>
            <MenuList p="1rem" bg="none">
              <Grid
                as="menu"
                templateRows="repeat(4,1fr)"
                fontWeight="600"
                cursor="pointer"
                textAlign="Right"
              >
                <GridItem
                  p=".75rem"
                  border="1px solid lightgray"
                  borderRadius=".4rem"
                  // as="a"

                  href="#HospitalLogin"
                >
                  Hospital Login
                </GridItem>
                <GridItem
                  p=".75rem"
                  border="1px solid lightgray"
                  borderRadius=".4rem"
                  // as="a"
                  href="#DoctorLogin"
                >
                  Doctor Login
                </GridItem>

                <GridItem
                  p=".75rem"
                  border="1px solid lightgray"
                  borderRadius=".4rem"
                  // as="a"
                  // href="#"
                >
                  Diagnose Login
                </GridItem>
                <GridItem
                  p=".75rem"
                  border="1px solid lightgray"
                  borderRadius=".4rem"
                  // as="a"
                  // href="#"
                >
                  Patient Login
                </GridItem>
              </Grid>
            </MenuList>
          </Menu>
        </GridItem>
      </Grid>
    </>
  );
};

// export { NavItems };
