import React, { useEffect, useState } from "react";
// import {Grid,GridItem} from '@'
import { supabase } from "./Data";
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
import Divider from "@mui/material/Divider";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Chip from "@mui/material/Chip";
import CurrencyFormat from "react-currency-format";

const Cardiology = () => {
  const [Data, setData] = useState([]);
  async function fetchPosts() {
    const { data } = await supabase.from("Cardiology_Docs");
    let Cdata = [];

    for (let index = 0; index <= 25; index++) {
      Cdata = [...Cdata, data[index]];
    }
    // fetching price amount from faker
    console.table(Cdata);
    setData(Cdata);
  }

  const Availablity = "Mon-Fri,Morning (10-2),Afternoon(5-9)";
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Grid templateColumns=".5fr 1fr .5fr" p=" 1rem">
        <GridItem gridColumn="2/3">
          <SearchBar />
        </GridItem>
      </Grid>
      <Grid templateRows="1fr" placeItems="center" p=".5rem">
        <GridItem>
          <Text font-weight="800" as="h2" color="#059b5c">
            Cardiology Doctors
          </Text>
        </GridItem>
      </Grid>

      {/* doctor */}
      <Grid
        templateRows="1fr"
        placeContent="center"
        p="1rem"
        mt="2rem"
        minW="320px"
      >
        <Grid
          templateColumns="300px 300px 300px"
          columnGap="1.5rem"
          templateRows="1fr 1fr"
          rowGap="1.5rem"
        >
          {Data.map(function (item) {
            console.table(item);
            return (
              <>
                <li key={item.id}>
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
                    <GridItem
                      pt=".5rem"
                      gridRow="1/2"
                      justifySelf="center"
                      m=".5rem"
                    >
                      <Image
                        h="150px"
                        w="150px"
                        objectFit="contain"
                        src={item.img}
                        alt={item.name}
                        borderRadius="50%"
                      />
                    </GridItem>
                    <GridItem pt=".5rem" gridRow="2/3" alignSelf="center">
                      <Chip
                        variant="outlined"
                        size="small"
                        label={
                          <>
                            <Text> {item.lang}</Text>
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
                      <Text color="#111827">{item.name}</Text>
                    </GridItem>{" "}
                    <GridItem pt=".5rem" gridRow="4/5" alignSelf="center">
                      <Grid
                        templateColumns=".5fr .5fr.5fr
                      "
                      >
                        <GridItem
                          pt=".5rem"
                          fontWeight="600"
                          color="#111827"
                          gridRow="3/4"
                          cursor="pointer"
                          alignSelf="center"
                        >
                          <Text color="#111827">{item.edu}</Text>
                        </GridItem>
                        <GridItem w="100%" pb=".5rem">
                          <Text
                            color="#424b5a"
                            // lineHeight="1rem"

                            fontWeight="400"
                          >
                            {Availablity}
                          </Text>{" "}
                          <Text
                            color="#424b5a"
                            // lineHeight="1rem"

                            fontWeight="600"
                          >
                            {item.exp}
                          </Text>
                        </GridItem>
                      </Grid>
                    </GridItem>
                    <Divider />
                    <GridItem pt=".5rem">
                      <Grid
                        templateColumns=".5fr .5fr"
                        mt=".75rem"
                        alignItems="center"
                      >
                        <GridItem>
                          <CurrencyFormat
                            decimalScale={2}
                            value={item.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                          />
                          <Text color="#059b5c" textDecoration="line-through">
                            {item.cuttoff}
                          </Text>
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
                          >
                            Consult Now
                          </Button>
                        </GridItem>
                      </Grid>
                    </GridItem>
                  </Grid>
                </li>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Cardiology;

export const SearchBar = () => {
  return (
    <>
      <Box d="flex">
        <InputGroup
          // border="1px solid gray"
          borderRadius=".45rem"
          p=".5rem"
          bg="#f1f4f6"
          boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"

          // bg="#efefef"
        >
          <Box alignItems="center">
            <InputLeftAddon borderRadius children={<SearchRoundedIcon />} />
          </Box>
          <Box px="1rem" w="800%">
            <Input
              bg="#f1f4f6"
              border="none"
              overflow="hidden"
              w="80%"
              outline="none"
              fontSize="1rem"
              h="1.5rem"
              placeholder="Search for Cardiology Doctors "
            />
          </Box>
        </InputGroup>
      </Box>
    </>
  );
};
