import React from "react";
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Neurology from "./Assets/DiseaseSection/Group-1.svg";
import Cardiology from "./Assets/DiseaseSection/Group-2.svg";
import Dermatology from "./Assets/DiseaseSection/Group-3.svg";
import General_Practitioner from "./Assets/DiseaseSection/Group-4.svg";
import Gynecology from "./Assets/DiseaseSection/Group-5.svg";
import Ent from "./Assets/DiseaseSection/Group-6.svg";
import Gastroenterol from "./Assets/DiseaseSection/Group.svg";
import ArrowRight from "./Assets/DiseaseSection/arrow-right.svg";

const DiseaseSection = () => {
  return (
    <>
      <Grid templateRows="1fr 1fr" p="1rem" bg="#e9f8f3" placeItems="center">
        <DiseaseFirstColumn />
      </Grid>
    </>
  );
};

export default DiseaseSection;

const DiseaseFirstColumn = () => {
  return (
    <>
      <Grid
        templateColumns="150px 150px 150px 150px 150px"
        h="150px"
        columnGap="4rem"
        textAlign="center"
      >
        {/* 1st component Neurology	 */}
        <Grid
          templateRows="1fr 1fr"
          bg="white"
          p="1rem"
          borderRadius="1rem"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          placeItems="center"
        >
          <GridItem>
            <Image src={Neurology} w="56px" h="56px" />
          </GridItem>
          <GridItem fontWeight="600">
            <Text>Neurology</Text>
          </GridItem>
        </Grid>
        {/* 2nd Cardiology component */}
        <Grid
          templateRows="1fr 1fr"
          bg="white"
          p="1rem"
          borderRadius="1rem"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          placeItems="center"
        >
          <GridItem>
            <Image src={Cardiology} w="56px" h="56px" />
          </GridItem>
          <GridItem fontWeight="600">
            <Text>Cardiology</Text>
          </GridItem>
        </Grid>
        {/* 3rd Dermatology component */}
        <Grid
          templateRows="1fr 1fr"
          bg="white"
          p="1rem"
          borderRadius="1rem"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          placeItems="center"
        >
          <GridItem>
            <Image src={Dermatology} w="56px" h="56px" />
          </GridItem>
          <GridItem fontWeight="600">
            <Text>Dermatology</Text>
          </GridItem>
        </Grid>
        {/* 4rth General_Practitioner component */}
        <Grid
          templateRows="1fr 1fr"
          bg="white"
          p="1rem"
          borderRadius="1rem"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          placeItems="center"
        >
          <GridItem>
            <Image src={General_Practitioner} w="56px" h="56px" />
          </GridItem>
          <GridItem fontWeight="600">
            <Text>General Practitioner</Text>
          </GridItem>
        </Grid>

        {/* 5th Ent component */}
        <Grid
          templateRows="1fr 1fr"
          bg="white"
          p="1rem"
          borderRadius="1rem"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          placeItems="center"
        >
          <GridItem>
            <Image src={Gynecology} w="56px" h="56px" />
          </GridItem>
          <GridItem fontWeight="600">
            <Text>Gynecology</Text>
          </GridItem>
        </Grid>
      </Grid>



      {/* 2nd row */}
      <Grid templateColumns="150px 150px 150px" p="1rem" columnGap="4rem">
        {/* 6th component ENT	 */}
        <Grid
          templateRows="1fr 1fr"
          bg="white"
          p="1rem"
          borderRadius="1rem"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          placeItems="center"
        >
          <GridItem>
            <Image src={Ent} w="56px" h="56px" />
          </GridItem>
          <GridItem fontWeight="600">
            <Text>ENT</Text>
          </GridItem>
        </Grid>

        {/* 7th component Gastroenterol	 */}
        <Grid
          templateRows="1fr 1fr"
          bg="white"
          p="1rem"
          borderRadius="1rem"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          placeItems="center"
        >
          <GridItem>
            <Image src={Gastroenterol} w="56px" h="56px" />
          </GridItem>
          <GridItem fontWeight="600">
            <Text>Gastroenterol</Text>
          </GridItem>
        </Grid>

        {/* 8th component View ALL	 */}
        <Grid
          templateRows="1fr 1fr"
          bg="white"
          p="1rem"
          borderRadius="1rem"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          placeItems="center"
        >
          <GridItem>
            <Image src={ArrowRight} w="56px" h="56px" />
          </GridItem>
          <GridItem fontWeight="600">
            <Text>VIEW ALL</Text>
          </GridItem>
        </Grid>
      </Grid>
    </>
  );
};
