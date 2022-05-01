import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// supabase files
import { supabase } from "../client";
import { Text, Grid, GridItem, Image, Box, Button } from "@chakra-ui/react";
import Footer from "../Landing_Page/FooterSection";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";

// icons
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

import { ShoppingCart } from "@mui/icons-material";

// header

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// importing smooth scrolling
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { NavHashLink } from "react-router-hash-link";

const CurrentDrug = () => {
  const [SingleDrug, setSingleDrug] = useState([]);
  const { id } = useParams();
  async function FetchDataFromHomeoList() {
    const NewPath = (await supabase.from("HomeoList")).data;
    // console.log(NewPath.length);

    let DisplaySingleDrug = [];

    if (NewPath.length > 0) {
      for (let index = 0; index < NewPath.length; index++) {
        DisplaySingleDrug = [...DisplaySingleDrug, NewPath[index]];
      }

      let blog = DisplaySingleDrug.find((blog) => blog.slug === id);
      if (blog) {
        console.log("this is currentDrug :", blog.title);
        console.log("this is currentDrug :", blog.stars);
        setSingleDrug(blog);
      }
    }
    
  }
  useEffect(() => {
    FetchDataFromHomeoList();
  }, [1]);

  return (
    <>
      <Grid>
        <NavLinks />
      </Grid>
      <Grid
        templateColumns=".25fr 1fr .25fr"
        placeItems="center"
        m="1rem"
        p="1rem"
      >
        <GridItem
          gridColumn="2/3"
          border="1px solid #E7EBF0"
          borderRadius=".25rem"
          boxShadow="0px 0px 10px 4px rgb(0 0 0 / 5%)"
          p=".5rem"
        >
          <Grid templateColumns="1fr 1fr 1fr">
            <GridItem p="1rem" alignSelf="center">
              <Box d="flex" justifyContent="center">
                <Image
                  border="1px solid #E7EBF0"
                  borderRadius=".25rem"
                  maxW="380px"
                  minW="280px"
                  h="auto"
                  w="75%"
                  maxH="280px"
                  objectFit="contain"
                  alt={SingleDrug.title}
                  src={SingleDrug.img}
                />
              </Box>
            </GridItem>
            <GridItem p="1rem">
              <Grid
                templateRows=".15fr .1fr .12fr .10fr .15fr"
                rowGap="1rem"
                // border="1px solid #E7EBF0"
                // borderRadius=".25rem"
                // p=".25rem"
                // border="1px solid red"
                w="100%"
                h="100%"
                justifyContent="center"
              >
                {/* title */}
                <GridItem GridRow="1/2" alignSelf="center">
                  <Text color="#111827" fontWeight="600" fontSize="1.25rem">
                    {SingleDrug.title}
                  </Text>
                </GridItem>
                {/* tag */}
                <GridItem gridRow="2/3" alignSelf="center">
                  <Chip
                    variant="outlined"
                    size="small"
                    label={
                      <>
                        <Text> {SingleDrug.tag}</Text>
                      </>
                    }
                  />
                </GridItem>
                {/* static rating */}
                <GridItem gridRow="3/4" alignSelf="center">
                  <Box d="flex" maxW="75%" fontSize=".95rem" fontWeight="300">
                    <Box pt=".15rem">
                      <Rating
                        name="read-only"
                        precision={0.25}
                        size="small"
                        value={`${SingleDrug.stars}`}
                        // value={SingleDrug.stars}
                        readOnly
                      />
                    </Box>
                    <Box pl=".25rem">
                      <Text>{SingleDrug.rating}</Text>
                    </Box>
                  </Box>
                </GridItem>
                {/* product highlights = ptitle+pdetail */}
                <GridItem gridRow="4/5" alignSelf="center">
                  {/* ptitle */}
                  <Text fontWeight="500" fontSize="1rem">
                    {SingleDrug.ptitle}
                  </Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight="300">{SingleDrug.pdetail} .</Text>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem p="1rem">
              <Grid
                // border="1px solid #E7EBF0"
                // borderRadius=".25rem"
                rowGap="1rem"
                templateRows=".25fr .75fr .25fr"
                // templateRows=".25fr .75fr .25fr .5fr"
                h="100%"
              >
                {/* price */}
                <GridItem>
                  <Box
                    d="flex"
                    fontWeight="600"
                    fontSize="1.25rem"
                    color="#111827"
                  >
                    <Text>MRP {SingleDrug.price}</Text>

                    <Box pl=".75rem">
                      <Text textDecoration="line-through">
                        {SingleDrug.cutoff}
                      </Text>
                    </Box>
                    <Box pl=".75rem" color="#059b5c">
                      <Text>{SingleDrug.proff}</Text>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem alignSelf="center">
                  <Text mb=".5rem">Inclusive of all taxes</Text>
                  <Box d="flex">
                    <Box>
                      <LocalShippingOutlinedIcon />
                    </Box>
                    <Box pl=".5rem">
                      <Text>Fast delivery available</Text>
                    </Box>
                  </Box>
                  <Box d="flex">
                    <Box>
                      <CheckBoxOutlinedIcon />
                    </Box>
                    <Box pl=".5rem">
                      <Text>Price displayed is inclusive of GST</Text>
                    </Box>
                  </Box>
                  <Box d="flex">
                    <Box>
                      <PaymentOutlinedIcon />
                    </Box>
                    <Box pl=".5rem">
                      <Text>Easy payment options</Text>
                    </Box>
                  </Box>
                </GridItem>
                {/* <Divider /> */}
                {/* <GridItem px="1.5rem">
                  <Box>
                    
                    <Button
                      as="button"
                      cursor="pointer"
                      p=".75rem"
                      w="100%"
                      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                      
                      border="1px solid #059b5c"
                      borderRadius=".25rem"
                      bg="white"
                      _hover={{
                        color: "white",
                        bg: "#059b5c",
                      }}
                    >
                      <Box pr=".25rem" pt=".25rem">
                        <ShoppingCart />
                      </Box>
                      Add to Cart
                    </Button>
                  </Box>
                </GridItem> */}
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
};

const NavLinks = () => {
  return (
    <>
      <NavBarContainer />
    </>
  );
};

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
          <Link to="consult">
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
          <Link to="diagnose">
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
          smooth={true}
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
    <Grid fontWeight="900" templateColumns=" .75fr 1fr .5fr" p="1rem">
      {/* <MenuToggle /> */}
      <Logo_Component />

      <NavItems />

      {/* <WhiteSpace /> */}
      {/* <Cart /> */}
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

export default CurrentDrug;
