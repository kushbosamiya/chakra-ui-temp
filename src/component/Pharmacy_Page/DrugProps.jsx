// import react-libraries
import React, { useContext, useEffect, useState } from "react";
// importing chakra-ui-libraries
import { Grid, GridItem, Image, Text, Box, Button } from "@chakra-ui/react";
//importing chakra ui component
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
// from react router
import { Link } from "react-router-dom";
// import Context
// import { Carts } from "../context/StateProvider";
import { useStateValue } from "../context/StateProvider";

// to generate unique id
import { v4 as uuid } from "uuid";

const DrugProps = ({
  imgsrc,
  tag,
  slug,
  title,
  subtitle,
  stars,
  rating,
  cutoffPrice,
  proff,
  price,
  quantity,
}) => {
  // clever pro
  const [{ basket }, dispatch] = useStateValue();

  // const { AddToCart, Cart } = useContext(Carts);
  function AddToCartEvent() {
    dispatch({
      // id,
      // imgsrc,
      // tag,
      // slug,
      // title,
      // subtitle,
      // stars,
      // rating,
      // cutoffPrice,
      // proff,
      // price,

      type: "ADD_TO_BASKET",
      item: {
        id: uuid(),
        title: title,
        imgsrc: imgsrc,
        rating: rating,
        tag: tag,
        slug: slug,
        subtitle: subtitle,
        stars: stars,
        cutoffPrice: cutoffPrice,
        price: price,
        proff: proff,
        quantity: quantity,
      },
    });

    // console.log(Cart);
    return <></>;
  }

  return (
    <Grid
      // mt="6rem"
      id="singledrug"
      templateRows="repeat(7,auto)"
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
      <GridItem pt=".5rem" gridRow="1/2" justifySelf="center" m=".5rem">
        <Image
          h="180px"
          w="180px"
          objectFit="contain"
          src={imgsrc}
          alt={title}
        />
      </GridItem>
      <GridItem pt=".5rem" gridRow="2/3" alignSelf="center">
        <Chip
          variant="outlined"
          size="small"
          label={
            <>
              <Text> {tag}</Text>
            </>
          }
        />
      </GridItem>
      <GridItem
        pt=".5rem"
        fontWeight="600"
        color="#111827"
        gridRow="3/4"
        cursor="pointer"
        alignSelf="center"
      >
        <Link to={`${slug}`}>
          <Text color="#111827">{title}</Text>
        </Link>
      </GridItem>
      <GridItem pt=".5rem" gridRow="4/5" alignSelf="center">
        <Text color="#424b5a" lineHeight="1.3rem" fontWeight="400">
          {subtitle}
        </Text>
      </GridItem>
      <GridItem pt=".5rem">
        <Box
          d="inline-flex"
          fontSize=".95rem"
          alignItems="baseline"
          color="#424b5a"
          fontWeight="300"
        >
          <Box d="inline flex">
            <Text>{stars}</Text>
            <Text pl=".25rem" pt=".15rem">
              <Rating name="disabled" size="small" value={stars} disabled />
            </Text>
          </Box>

          <Box pl=".25rem">
            <Text>{rating}</Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem pt=".5rem" gridRow="6/7">
        <Box fontSize="1rem" color="#424b5a" fontWeight="300" d="inline-flex">
          <Text>MRP </Text>
          <Box pl=".3rem ">
            <Text textDecoration="line-through">{cutoffPrice}</Text>
          </Box>
          <Box pl=".3rem ">
            <Text color="#059b5c">{proff}</Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem pt=".5rem" gridRow="7/8">
        <Grid templateColumns=".5fr .5fr" columnGap=".5rem">
          <GridItem alignSelf="center">
            <Text fontWeight="400">{price}</Text>
          </GridItem>

          <GridItem justifySelf="end">
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
              onClick={AddToCartEvent}
            >
              Add to cart
            </Button>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default DrugProps;
