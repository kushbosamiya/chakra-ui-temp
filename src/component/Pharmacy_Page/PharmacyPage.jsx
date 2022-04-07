import React, { useState, useEffect } from "react";
import {
  Input,
  Grid,
  GridItem,
  Image,
  InputGroup,
  InputLeftAddon,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { IoChevronDownSharp } from "react-icons/io/";
import SearchBar from "./SearchBar";
import "../Landing_Page/BlogSection.css";
import Chip from "@mui/material/Chip";

// from react router
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// for sort and speacialization buttons
import {
  FormControl,
  Menu,
  MenuButton,
  FormLabel,
  Select,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import SearchIcon from "../Assets/PharmacyPage/SearchIcon_2.svg";
import Header from "../Landing_Page/header";
import Footer from "../Landing_Page/FooterSection";
import { BsCart3 } from "react-icons/bs";
import { IconContext } from "react-icons";
// import { ChevronDownIcon } from "@chakra-ui/icons";

// supabase files
import { supabase } from "../client";

// material design files for stars and ratings
import Rating from "@mui/material/Rating";

const PharmacyPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Grid templateColumns=".5fr 1fr .5fr" p="1rem">
        <GridItem gridColumn="2/3">
          <SearchBar />
        </GridItem>
        <GridItem placeSelf="center">
          <Cart />
        </GridItem>
      </Grid>

      {/* sort buttons  */}
      <Grid
        templateColumns="1fr 20% 20% 1fr"
        p=".5rem"
        columnGap="1rem"
        placeItems="center"
      >
        <GridItem gridColumn="2/3">
          <SpecializationButton />
        </GridItem>
        <GridItem gridColumn="3/4">
          <SortButton />
        </GridItem>
      </Grid>

      {/* medicine card */}

      <Grid templateRows="1fr" placeContent="center" p="1rem">
        <Grid
          templateColumns="300px 300px 300px"
          columnGap="1.5rem"
          templateRows="1fr 1fr"
          rowGap="1.5rem"
        >
          <HomeoSupa />
        </Grid>

        <Grid
          templateColumns="300px 300px 300px"
          columnGap="1.5rem"
          templateRows="1fr 1fr"
          rowGap="1.5rem"
        >
          <AlloSupa />
        </Grid>
        <Grid
          templateColumns="300px 300px 300px"
          columnGap="1.5rem"
          templateRows="1fr 1fr"
          rowGap="1.5rem"
        >
          <AyurvedaSupa />
        </Grid>
      </Grid>

      {/* <Footer /> */}
    </>
  );
};

export default PharmacyPage;

const SortButton = () => {
  return (
    <>
      <FormControl>
        <Box d="flex">
          <InputLeftAddon
            p=".5rem"
            fontSize=".85rem"
            borderTopLeftRadius=".25rem"
            borderBottomLeftRadius=".25rem"
            bg="#F1F4F3"
            overflow="hidden"
            color="gray"
            children="Sort by :"
          />

          <FormControl
            bg="#F1F4F3"
            overflow="hidden"
            borderTopRightRadius=".25rem"
            borderBottomRightRadius=".25rem"
          >
            <Select
              id="country"
              placeholder="Recommended"
              // border="1px solid"
              border="none"
              pt=".4rem"
              textAlign="center"
              bg="none"
              fontWeight="semibold"
            >
              <option>Price : High to Low</option>
              <option>Price : Low to High</option>
              <option>Sort : A - Z</option>
            </Select>
          </FormControl>
          {/* </Menu> */}
        </Box>
      </FormControl>

      {/* right side */}
    </>
  );
};

const SpecializationButton = () => {
  return (
    <>
      <FormControl>
        <Box d="flex">
          <InputLeftAddon
            p=".5rem"
            fontSize=".85rem"
            borderTopLeftRadius=".25rem"
            borderBottomLeftRadius=".25rem"
            bg="#F1F4F3"
            overflow="hidden"
            color="gray"
            children="Specialization :"
          />

          <FormControl
            bg="#F1F4F3"
            overflow="hidden"
            borderTopRightRadius=".25rem"
            borderBottomRightRadius=".25rem"
          >
            <Select
              id="country"
              placeholder="All"
              // border="1px solid"
              border="none"
              pt=".4rem"
              textAlign="center"
              bg="none"
              fontWeight="semibold"
            >
              <option>Ayurvedic</option>
              <option>Allopathic</option>
              <option>Homeopathic</option>
            </Select>
          </FormControl>
          {/* </Menu> */}
        </Box>
      </FormControl>
    </>
  );
};

const Cart = () => {
  return (
    <>
      <Button bg="none" outline="none" border="none" cursor="pointer" h="100%">
        <Box d="flex" alignItems="center">
          {/* no. of order nakhva na baaki chhe after adding product */}
          <IconContext.Provider value={{ color: "blue", size: "30" }}>
            <BsCart3 />
          </IconContext.Provider>
          <Box>
            <Text color="#059b5c" pl=".5rem" fontSize="1.2rem">
              1
            </Text>
          </Box>
        </Box>
      </Button>
    </>
  );
};

const HomeoSupa = () => {
  const [Data, setData] = useState([]);
  async function fetchPosts() {
    const { data } = await supabase.from("HomeoList");
    let Cdata = [];

    for (let index = 0; index < data.length; index++) {
      Cdata = [...Cdata, data[index]];
    }

    setData(Cdata);
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {Data.map((item) => {
        {
          /* console.log(item.rating); */
        }
        return (
          <li key={item.id}>
            <Grid
              id="singledrug"
              templateRows="1fr .15fr .3fr .15fr .10fr .10fr  .2fr"
              p="1rem"
              h="100%"
              border="1px solid #E7EBF0"
              _hover={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",

                transition: ".5s ease-in-out",
              }}
              borderRadius=".25rem"
              bg="white"
            >
              <GridItem gridRow="1/2" justifySelf="center" m=".5rem">
                <Image
                  // border="1px solid #E7EBF0"
                  // borderRadius=".25rem"
                  h="180px"
                  w="180px"
                  objectFit="contain"
                  src={item.img}
                  alt={item.title}
                />
              </GridItem>
              <GridItem gridRow="2/3" alignSelf="center">
                <Chip
                  variant="outlined"
                  size="small"
                  label={
                    <>
                      <Text> {item.tag}</Text>
                    </>
                  }
                />
              </GridItem>
              <GridItem
                fontWeight="600"
                color="#111827"
                gridRow="3/4"
                cursor="pointer"
                alignSelf="center"
              >
              <Link to={`${item.slug}`}>
                <Text color="#111827">{item.title}</Text>
                </Link>
              </GridItem>
              <GridItem gridRow="4/5" alignSelf="center">
                <Text color="#424b5a" lineHeight="1.3rem" fontWeight="400">
                  {item.subtitle}
                </Text>
              </GridItem>
              <GridItem>
                <Box
                  d="inline-flex"
                  fontSize=".95rem"
                  alignItems="baseline"
                  color="#424b5a"
                  fontWeight="300"
                >
                  <Box d="inline flex">
                    <Text>{item.stars}</Text>
                    <Text pl=".25rem" pt=".15rem">
                      <Rating
                        name="disabled"
                        size="small"
                        max={1}
                        value={item.stars}
                        disabled
                      />
                    </Text>
                  </Box>

                  <Box pl=".25rem">
                    <Text>{item.rating}</Text>
                  </Box>
                </Box>
              </GridItem>
              <GridItem gridRow="6/7">
                <Box
                  fontSize="1rem"
                  color="#424b5a"
                  fontWeight="300"
                  d="inline-flex"
                >
                  <Text>MRP </Text>
                  <Box pl=".3rem ">
                    <Text textDecoration="line-through">{item.cutoff}</Text>
                  </Box>
                  <Box pl=".3rem ">
                    <Text color="#059b5c">{item.proff}</Text>
                  </Box>
                </Box>
              </GridItem>
              <GridItem pt=".5rem" gridRow="7/8" alignSelf="end">
                <Grid templateColumns="1fr 1fr">
                  <GridItem alignSelf="center">
                    <Text fontWeight="400">{item.price}</Text>
                  </GridItem>
                  <GridItem alignSelf="center" justifySelf="end">
                    <Button
                      as="button"
                      cursor="pointer"
                      p=".5rem"
                      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                      // textDecoration="underline"
                      border="1px solid #059b5c"
                      borderRadius=".25rem"
                      bg="white"
                      _hover={{
                        bg: "#059b5c",
                        color: "white",
                      }}
                    >
                      Add to cart
                    </Button>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </li>
        );
      })}
    </>
  );
};
const AlloSupa = () => {
  const [Data, setData] = useState([]);
  async function fetchPosts() {
    const { data } = await supabase.from("AllopathyList");
    let Cdata = [];

    for (let index = 0; index < data.length; index++) {
      Cdata = [...Cdata, data[index]];
    }

    setData(Cdata);
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {Data.map((item) => {
        return (
          <li key={item.id}>
            <Grid
              id="singledrug"
              templateRows="1fr .15fr .3fr .15fr .10fr .10fr  .2fr"
              p="1rem"
              h="100%"
              border="1px solid #E7EBF0"
              _hover={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",

                transition: ".5s ease-in-out",
              }}
              borderRadius=".25rem"
              bg="white"
            >
              <GridItem gridRow="1/2" justifySelf="center" m=".5rem">
                <Image
                  // border="1px solid #E7EBF0"
                  // borderRadius=".25rem"
                  h="180px"
                  w="180px"
                  objectFit="contain"
                  src={item.img}
                  alt={item.title}
                />
              </GridItem>
              <GridItem gridRow="2/3" alignSelf="center">
                <Chip
                  variant="outlined"
                  size="small"
                  label={
                    <>
                      <Text> {item.tag}</Text>
                    </>
                  }
                />
              </GridItem>
              <GridItem
                fontWeight="600"
                color="#111827"
                gridRow="3/4"
                cursor="pointer"
                alignSelf="center"
              >
               <Link to={`${item.slug}`}>

                <Text color="#111827">{item.title}</Text>
               </Link>
              </GridItem>
              <GridItem gridRow="4/5" alignSelf="center">
                <Text color="#424b5a" lineHeight="1.3rem" fontWeight="400">
                  {item.subtitle}
                </Text>
              </GridItem>
              <GridItem>
                <Box
                  d="inline-flex"
                  fontSize=".95rem"
                  alignItems="baseline"
                  color="#424b5a"
                  fontWeight="300"
                >
                  <Box d="inline flex">
                    <Text>{item.stars}</Text>
                    <Text pl=".25rem" pt=".15rem">
                      <Rating
                        name="disabled"
                        size="small"
                        max={1}
                        value={item.stars}
                        disabled
                      />
                    </Text>
                  </Box>

                  <Box pl=".25rem">
                    <Text>{item.rating}</Text>
                  </Box>
                </Box>
              </GridItem>
              <GridItem gridRow="6/7">
                <Box
                  fontSize="1rem"
                  color="#424b5a"
                  fontWeight="300"
                  d="inline-flex"
                >
                  <Text>MRP </Text>
                  <Box pl=".3rem ">
                    <Text textDecoration="line-through">{item.cutoff}</Text>
                  </Box>
                  <Box pl=".3rem ">
                    <Text color="#059b5c">{item.proff}</Text>
                  </Box>
                </Box>
              </GridItem>
              <GridItem pt=".5rem" gridRow="7/8" alignSelf="end">
                <Grid templateColumns="1fr 1fr">
                  <GridItem alignSelf="center">
                    <Text fontWeight="400">{item.price}</Text>
                  </GridItem>
                  <GridItem alignSelf="center" justifySelf="end">
                    <Button
                      as="button"
                      cursor="pointer"
                      p=".5rem"
                      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                      // textDecoration="underline"
                      border="1px solid #059b5c"
                      borderRadius=".25rem"
                      bg="white"
                      _hover={{
                        bg: "#059b5c",
                        color: "white",
                      }}
                    >
                      Add to cart
                    </Button>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </li>
        );
      })}
    </>
  );
};
const AyurvedaSupa = () => {
  const [Data, setData] = useState([]);
  async function fetchPosts() {
    const { data } = await supabase.from("AyurvedaList");

    let Cdata = [];

    for (let index = 0; index < data.length; index++) {
      Cdata = [...Cdata, data[index]];
    }

    setData(Cdata);
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {Data.map((item) => {
        
        return (
          <li key={item.id}>
            <Grid
              id="singledrug"
              templateRows="1fr .15fr .3fr .15fr .10fr .10fr  .2fr"
              p="1rem"
              h="100%"
              border="1px solid #E7EBF0"
              _hover={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",

                transition: ".5s ease-in-out",
              }}
              borderRadius=".25rem"
              bg="white"
            >
              <GridItem gridRow="1/2" justifySelf="center" m=".5rem">
                <Image
                  // border="1px solid #E7EBF0"
                  // borderRadius=".25rem"
                  h="180px"
                  w="180px"
                  objectFit="contain"
                  src={item.img}
                  alt={item.title}
                />
              </GridItem>
              <GridItem gridRow="2/3" alignSelf="center">
                <Chip
                  variant="outlined"
                  size="small"
                  label={
                    <>
                      <Text> {item.tag}</Text>
                    </>
                  }
                />
              </GridItem>
              <GridItem
                fontWeight="600"
                color="#111827"
                gridRow="3/4"
                cursor="pointer"
                alignSelf="center"
              >
                <Link to={`/pharmacy/${item.slug}`}>
                  <Text color="#111827" >{item.title}</Text>
                </Link>
              </GridItem>
              <GridItem gridRow="4/5" alignSelf="center">
                <Text color="#424b5a" lineHeight="1.3rem" fontWeight="400">
                  {item.subtitle}
                </Text>
              </GridItem>
              <GridItem>
                <Box
                  d="inline-flex"
                  fontSize=".95rem"
                  alignItems="baseline"
                  color="#424b5a"
                  fontWeight="300"
                >
                  <Box d="inline flex">
                    <Text>{item.stars}</Text>
                    <Text pl=".25rem" pt=".15rem">
                      <Rating
                        name="disabled"
                        size="small"
                        max={1}
                        value={item.stars}
                        disabled
                      />
                    </Text>
                  </Box>

                  <Box pl=".25rem">
                    <Text>{item.rating}</Text>
                  </Box>
                </Box>
              </GridItem>
              <GridItem gridRow="6/7">
                <Box
                  fontSize="1rem"
                  color="#424b5a"
                  fontWeight="300"
                  d="inline-flex"
                >
                  <Text>MRP </Text>
                  <Box pl=".3rem ">
                    <Text textDecoration="line-through">{item.cutoff}</Text>
                  </Box>
                  <Box pl=".3rem ">
                    <Text color="#059b5c">{item.proff}</Text>
                  </Box>
                </Box>
              </GridItem>
              <GridItem pt=".5rem" gridRow="7/8" alignSelf="end">
                <Grid templateColumns="1fr 1fr">
                  <GridItem alignSelf="center">
                    <Text fontWeight="400">{item.price}</Text>
                  </GridItem>
                  <GridItem alignSelf="center" justifySelf="end">
                    <Button
                      as="button"
                      cursor="pointer"
                      p=".5rem"
                      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                      // textDecoration="underline"
                      border="1px solid #059b5c"
                      borderRadius=".25rem"
                      bg="white"
                      _hover={{
                        bg: "#059b5c",
                        color: "white",
                      }}
                    >
                      Add to cart
                    </Button>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </li>
        );
      })}
    </>
  );
};
