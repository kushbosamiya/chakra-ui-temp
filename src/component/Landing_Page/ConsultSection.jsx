import React from "react";

import {
  Grid,
  GridItem,
  Box,
  Text,
  Image, 
  useRadioGroup,
  useRadio,
  HStack,
} from "@chakra-ui/react";
import MaleIcon from "../Assets/ConsultSection/Male.svg";
import FemaleIcon from "../Assets/ConsultSection/Female.svg";

const ConsultSection = () => {
  return (
    <>
      <Box p="1rem" border="1px solid">
        <InternalComponent />
      </Box>
    </>
  );
};

export default ConsultSection;

// it includes all the grids and its content
const InternalComponent = () => {
  let InternalData = [
    {
      title: "STEP 1/4",
      headline: "Please select your gender :",
    },
    // {
    //   title: "STEP 2/4",
    //   headline: "How old are you?",
    // },
    // {
    //   title: "STEP 3/4",
    //   headline: "Add your symptoms ",
    // },
    // {
    //   title: "STEP 4/4",
    //   headline: "How long have you had your problem ?",
    // },
  ];
  return (
    <>
      {InternalData.map(function (data, index) {
        return (
          <>
            <li key={index}>
              <Grid templateRows="repeat(4,1fr)" placeItems="center">
                <GridItem>
                  <Box>
                    <Text color="#8c8c8c" fontWeight="400">
                      {data.title}
                    </Text>
                  </Box>
                </GridItem>
                <GridItem pt=".5rem">
                  {/* @headline */}
                  <Text fontWeight="600" fontSize="1.5rem">
                    {data.headline}
                  </Text>
                </GridItem>
                <GridItem p="1rem">
                  {/* @gender selction */}
                  <Grid templateColumns=".5fr .5fr">
                    <GridItem>
                      {/* Male */}
                      <Image src={MaleIcon} h="180px" alt="MaleIcon" />
                    </GridItem>
                    <GridItem>
                      {/* Female */}
                      <Image src={FemaleIcon} h="180px" alt="FemaleIcon" />
                    </GridItem>
                  </Grid>
                </GridItem>
                {/* <GridItem>@btns</GridItem> */}
              </Grid>
            </li>
          </>
        );
      })}
    </>
  );
};
