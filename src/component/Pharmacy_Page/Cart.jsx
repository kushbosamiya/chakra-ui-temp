import React, { useState, useContext, useEffect } from "react";
// import { Carts } from "../context/StateProvider";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../context/reducer";

// import module for currency

import CurrencyFormat from "react-currency-format";

import {
  Grid,
  GridItem,
  Box,
  Text,
  Image,
  Button,
  useControllableProp,
  useControllableState,
} from "@chakra-ui/react";
import Divider from "@mui/material/Divider";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
// // to generate unique id
import { v4 as uuid } from "uuid";

const CartComponent = () => {
  const [value, setValue] = useControllableState([1]);
  const [{ basket }, dispatch] = useStateValue();

  const RenderMedicalItems = () => {
    if (basket.length > 0) {
      return (
        <>
          <Grid templateRows="1fr" p="1.5rem 1rem">
            <GridItem textAlign="center">
              <Text>My Cart</Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="2fr .10fr 1fr" p="1rem">
            {/* cart items - Box-1 */}
            <GridItem>
              <Grid templateRows=".30fr .70fr ">
                <GridItem
                  boxShadow="inset 0 0 0 1px #e9e9eb"
                  m=".75rem"
                  borderRadius=".25rem"
                >
                  <Grid
                    templateColumns=".5fr .5fr "
                    p="1rem"
                    // alignItems="center"
                    place
                  >
                    <GridItem>
                      <Text>
                        Deliver to: <Text>Address not selcted </Text>
                      </Text>
                    </GridItem>
                    <GridItem justifySelf="end">
                      <Button
                        as="button"
                        cursor="pointer"
                        w="100%"
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
                        Change
                      </Button>
                    </GridItem>
                  </Grid>
                </GridItem>
                {/* item */}
                <GridItem>
                  {basket.map(function (item, index) {
                    return (
                      <li key={index}>
                        <Grid
                          templateColumns=".30fr .70fr"
                          boxShadow="inset 0 0 0 1px #e9e9eb"
                          m=".75rem"
                          borderRadius=".25rem"
                        >
                          <GridItem alignSelf="center" p=".5rem">
                            <Image
                              h="150px"
                              w="150px"
                              objectFit="contain"
                              src={item.imgsrc}
                              alt={item.title}
                            />
                          </GridItem>
                          <GridItem p=".5rem">
                            <Grid
                              templateRows=".5fr .5fr .5fr .5fr"
                              rowGap=".5rem"
                              alignItems="center"
                            >
                              <GridItem>
                                <Text fontWeight="600" color="#111827">
                                  {item.title}
                                </Text>
                              </GridItem>
                              <GridItem>
                                <Text
                                  color="#424b5a"
                                  lineHeight="1.3rem"
                                  fontWeight="400"
                                >
                                  {item.subtitle}
                                </Text>
                              </GridItem>
                              <GridItem>
                                <Box
                                  fontSize="1rem"
                                  color="#424b5a"
                                  fontWeight="300"
                                  d="inline-flex"
                                >
                                  <Text>MRP</Text>
                                  <Box pl=".5rem ">
                                    <Text>{item.price}</Text>
                                  </Box>
                                  <Box pl=".5rem ">
                                    <Text textDecoration="line-through">
                                      {item.cutoffPrice}
                                    </Text>
                                  </Box>
                                  <Box pl=".5rem ">
                                    <Text color="#059b5c">{item.proff}</Text>
                                  </Box>
                                </Box>
                              </GridItem>
                              <GridItem>
                                <Grid
                                  // border="1px solid"
                                  templateColumns=".5fr .5fr"
                                  mt="2rem"
                                >
                                  <GridItem>
                                    <Button
                                      variant="outline"
                                      as="button"
                                      cursor="pointer"
                                      p=".5rem"
                                      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                                      // textDecoration="underline"
                                      border="1px solid red"
                                      borderRadius=".25rem"
                                      bg="white"
                                      _hover={{
                                        bg: "red",
                                        color: "white",
                                      }}
                                      onClick={function RemoveFromCart() {
                                        dispatch({
                                          type: "REMOVE_FROM_BASKET",
                                          // id: uuid(),
                                          title: item.title,
                                        });
                                      }}
                                    >
                                      Remove from Cart
                                    </Button>
                                  </GridItem>
                                  <GridItem justifySelf="end">
                                    <Button
                                      bg="none"
                                      border="1px solid #059b5c"
                                      outline="none"
                                      borderRadius="50%"
                                      onClick={() => setValue(value - 1)}
                                    >
                                      <RemoveIcon />
                                    </Button>

                                    <Box as="span" w="200px" mx="24px"></Box>
                                    <Button
                                      bg="#059b5c"
                                      color="white"
                                      onClick={(id) => {
                                        return dispatch({
                                          type: "INCREMENT_ITEM",
                                          payload: id,
                                          // id:item.id
                                        });
                                      }}
                                      border="1px solid #059b5c"
                                      outline="none"
                                      borderRadius="50%"
                                    >
                                      <AddIcon />
                                    </Button>
                                  </GridItem>
                                </Grid>
                              </GridItem>
                            </Grid>
                          </GridItem>
                        </Grid>
                      </li>
                    );
                  })}
                </GridItem>
              </Grid>
            </GridItem>
            <Divider orientation="vertical" variant="middle" />
            {/* Pricing portion-Box-2 */}
            <GridItem position="fixed" right="2rem">
              <Grid templateRows=".05fr 1fr">
                <GridItem gridRow="2/3">
                  <Grid
                    templateRows="repeat(1fr,6)"
                    boxShadow="inset 0 0 0 1px #e9e9eb"
                    borderRadius=".3rem"
                    rowGap=".75rem"
                    p="2rem"
                  >
                    <GridItem p=".75rem">
                      <Text fontWeight="600" color="#111827">
                        Sub Total : {basket.length} Items
                      </Text>
                    </GridItem>
                    <GridItem p=".75rem">
                      <Grid templateColumns=".80fr .20fr">
                        <GridItem>
                          <Text>Total MRP</Text>
                        </GridItem>
                        <GridItem>
                          <Text color="#059b5c">
                            <CurrencyFormat
                              renderText={(value) => (
                                <>
                                  <Text>{value}</Text>
                                </>
                              )}
                              decimalScale={2}
                              value={getBasketTotal(basket)}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₹"}
                            />
                          </Text>
                        </GridItem>
                      </Grid>
                    </GridItem>
                    <GridItem p=".75rem">
                      <Grid templateColumns=".80fr .20fr">
                        <GridItem>
                          <Text>Discount on MRP</Text>
                        </GridItem>
                        <GridItem>
                          <Text color="#059b5c">on</Text>
                        </GridItem>
                      </Grid>
                    </GridItem>
                    <GridItem p=".75rem">
                      <Grid templateColumns=".80fr .20fr">
                        <GridItem>
                          <Text>Convenience Fee</Text>
                        </GridItem>
                        <GridItem>
                          <Text color="#059b5c">Free</Text>
                        </GridItem>
                      </Grid>
                    </GridItem>
                    <GridItem p=".75rem">
                      <Box d="inline-flex">
                        <Text fontWeight="600" pr=".5rem" color="#111827">
                          Total Amount
                        </Text>

                        <Text color="#059b5c" pl="1rem">
                          Amount
                        </Text>
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Button
                        w="100%"
                        as="button"
                        cursor="pointer"
                        p="0.5rem 1rem"
                        margin="1.25rem 0"
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
                        Place Order
                      </Button>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </>
      );
    } else {
      return (
        <>
          <Grid templateRows="1fr">
            <GridItem textAlign="center">
              <Text as="h1">Cart is empty</Text>
            </GridItem>
          </Grid>
        </>
      );
    }
  };

  return <>{<RenderMedicalItems />}</>;
};

export default CartComponent;
