import React from "react";
import { Grid, GridItem, Text, Image, Box, Center } from "@chakra-ui/react";
import AllopathicIcon from "../Assets/TreatmentSection/new_treatment_icon-1.svg";
import AyurvedicIcon from "../Assets/TreatmentSection/new_treatment_icon-2.svg";
import HomeopathyIcon from "../Assets/TreatmentSection/new_treatment_icon-3.svg";
import ChildIcon from "../Assets/TreatmentSection/new_treatment_icon-4.svg";
// import Labtest from "./Assets/TreatmentSection/new_treatment_icon-5.svg";
import WashBottle from "../Assets/TreatmentSection/new_treatment_icon-5.svg";
import { ChevronRightIcon } from "@chakra-ui/icons";



// consult section ma left align krva nu chhe ane aakho regular arrow nakhva nu chhe 
const TreatmentSection = () => {
  return (
    <>
      <Grid templateRows="1fr" p="1rem" 
      // bg="#e9f8f3"
      >
        {/* <AllopathicTreatment /> */}
        <Treatments />
      </Grid>
    </>
  );
};

export default TreatmentSection;

const Treatments = () => {
  return (
    <>
      <Grid
        templateColumns=".5fr .5fr .5fr .5fr .5fr"
        columnGap="2rem"
        p="1rem"
      >
        {/* 1st component allopathic treatment */}
        <TreatmentProps
          title={<Text>Allopathy</Text>}
          imgsrc={<Image src={AllopathicIcon} />}
          description={
            <Box>
              <Text>Make an instant Appointment </Text>
              <Text>with Allopath Doctor</Text>
            </Box>
          }
          singleicon={
            <Box textAlign="center">
              <Text>
                Consult Now <ChevronRightIcon color="#059b5c" />{" "}
              </Text>
            </Box>
          }
        />
        {/* 2nd componenent Homeopathy treatment homeopathy */}
        <TreatmentProps
          title={<Text>Homeopathy</Text>}
          imgsrc={<Image src={HomeopathyIcon} />}
          description={
            <Box>
              <Text>Make an instant Appointment </Text>
              <Text>with Homeopath Doctor</Text>
            </Box>
          }
          singleicon={
            <Box textAlign="center">
              <Text>
                Consult Now <ChevronRightIcon color="#059b5c" />{" "}
              </Text>
            </Box>
          }
        />
        {/* 3rd component ayurveda */}
        <TreatmentProps
          title={<Text>Ayurvedic</Text>}
          imgsrc={<Image src={AyurvedicIcon} />}
          description={
            <Box>
              <Text>Make an instant Appointment </Text>
              <Text>with Ayurveda Doctor</Text>
            </Box>
          }
          singleicon={
            <Box>
              <Text textAlign="center">
                Consult Now <ChevronRightIcon color="#059b5c" />{" "}
              </Text>
            </Box>
          }
        />
        <TreatmentProps
          title={<Text>Child Care</Text>}
          imgsrc={<Image src={ChildIcon} />}
          description={
            <Box>
              <Text>Make an instant Appointment </Text>
              <Text>with Child specialists</Text>
            </Box>
          }
          singleicon={
            <Box>
              <Text textAlign="center">
                Consult Now <ChevronRightIcon color="#059b5c" />{" "}
              </Text>
            </Box>
          }
        />

        <TreatmentProps
          title={<Text>Covid Care</Text>}
          imgsrc={<Image src={WashBottle} />}
          description={
            <Box>
              <Text>Make an instant Appointment </Text>
              <Text>with Covid related diseases</Text>
            </Box>
          }
          singleicon={
            <Box>
              <Text textAlign="center">
                Consult Now <ChevronRightIcon color="#059b5c" />{" "}
              </Text>
            </Box>
          }
        />
      </Grid>
    </>
  );
};

const TreatmentProps = ({ imgsrc, title, description, singleicon }) => {
  return (
    <>
      <Grid
        templateRows=".5fr .5fr .5fr .5fr "
        bg="white"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
        p="1rem"
        borderRadius="1rem"
        placeContent="center"
      >
        {/* images */}
        <GridItem textAlign="center" alignSelf="center">
          {imgsrc}
        </GridItem>
        {/* title */}
        <GridItem as="h4" textAlign="center" alignSelf="center">
          {title}
        </GridItem>
        {/* description */}

        <GridItem color="#8c8c8c" placeSelf="center" textAlign="center">
          {description}
        </GridItem>

        {/* consult icon */}

        <GridItem alignSelf="center">{singleicon}</GridItem>

        {/*  */}
      </Grid>
    </>
  );
};
