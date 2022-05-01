import React, { useState, useEffect, useContext } from "react";

// import Context
import { Carts } from "../context/StateProvider";
import StateProvider from "../context/StateProvider";
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
// importing DrugProps
import DrugProps from "./DrugProps";

import SearchIcon from "../Assets/PharmacyPage/SearchIcon_2.svg";
import Header from "../Landing_Page/header";
import Footer from "../Landing_Page/FooterSection";
import { ShoppingCart } from "@mui/icons-material";
import { IconContext } from "react-icons";

// supabase files
import { supabase } from "../client";





const PharmacyPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Grid templateColumns=".5fr 1fr .5fr" p="1rem">
        <GridItem gridColumn="2/3">
          <SearchBar />
        </GridItem>
        {/* <GridItem placeSelf="center">
          <Cart />
        </GridItem> */}
      </Grid>

      {/* sort buttons  */}
      <Grid
        templateColumns=".5fr .2fr .2fr .5fr"
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
        <GridItem gridColumn="4/5">
          <Cart />
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

        {/* <Grid
          templateColumns="300px 300px 300px"
          columnGap="1.5rem"
          templateRows="1fr 1fr"
          rowGap="1.5rem"
        >
          <AlloSupa />
        </Grid> */}
        {/* <Grid
          templateColumns="300px 300px 300px"
          columnGap="1.5rem"
          templateRows="1fr 1fr"
          rowGap="1.5rem"
        >
          <AyurvedaSupa />
        </Grid> */}
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

const HomeoSupa = () => {
  // const AddToCart = useContext();

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
        return (
          <>
            <li key={item.id}>
              <DrugProps
                imgsrc={item.img}
                tag={item.tag}
                slug={item.slug}
                title={item.title}
                subtitle={item.subtitle}
                stars={item.stars}
                rating={item.rating}
                cutoffPrice={item.cutoff}
                proff={item.proff}
                price={item.price}
              />
            </li>
          </>
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
            <DrugProps
              imgsrc={item.img}
              tag={item.tag}
              slug={item.slug}
              title={item.title}
              subtitle={item.subtitle}
              stars={item.stars}
              rating={item.rating}
              cutoffPrice={item.cutoff}
              proff={item.proff}
              price={item.price}
            />
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
            <DrugProps
              imgsrc={item.img}
              tag={item.tag}
              slug={item.slug}
              title={item.title}
              subtitle={item.subtitle}
              stars={item.stars}
              rating={item.rating}
              cutoffPrice={item.cutoff}
              proff={item.proff}
              price={item.price}
            />
          </li>
        );
      })}
    </>
  );
};

const Cart = () => {
  // const [{ Basket }] = usestateValue();
  const ReceivedData = useContext(Carts);
  console.log(ReceivedData.data.length);

  return (
    <>
      {/* no. of order nakhva na baaki chhe after adding product */}
      <Link to={`cart`}>
        <Box cursor="pointer" m="0 auto" color="black">
          <Box d="flex">
            <Box textAlign="center" color="black">
              <ShoppingCart />
            </Box>
            <Box pl=".5rem">
              <Text fontWeight="600" color="#059b5c">
                {ReceivedData.data.length}
              </Text>
            </Box>
          </Box>
          {/* <Text textAlign="center" fontWeight="600" color="#059b5c">
            Cart
          </Text> */}
        </Box>
      </Link>
    </>
  );
};
