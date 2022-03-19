import React from "react";
import {
  Input,
  Grid,
  GridItem,
  Button,
  Image,
  InputGroup,
  InputLeftAddon,
  Box,
  Text,
} from "@chakra-ui/react";
import { IoChevronDownSharp } from "react-icons/io/";
import SearchBar from "./SearchBar"

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
const PharmacyPage = () => {
  return (
    <>
      <Header />
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
      <AllopathicCard />
      {/* <Footer /> */}
    </>
  );
};

export default  PharmacyPage ;

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
const AllopathicCard = () => {
  // fetch(
  //     "https://myhealthbox.p.rapidapi.com/search/updatedDocuments?sd=2020-06-01&c=us&l=en",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-host": "myhealthbox.p.rapidapi.com",
  //         "x-rapidapi-key": "SIGN-UP-FOR-KEY",
  //       },
  //     }
  //   )

  //     then((response) => {
  //       console.log(ApiResponse);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  return (
    <>
      <h1>AllopathicCard</h1>
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
