import React from "react";
import { Grid, GridItem, Text, Image, Box, Center } from "@chakra-ui/react";
import AllopathicIcon from "../Assets/TreatmentSection/new_treatment_icon-1.svg";
import AyurvedicIcon from "../Assets/TreatmentSection/new_treatment_icon-2.svg";
import HomeopathyIcon from "../Assets/TreatmentSection/new_treatment_icon-3.svg";
import ChildIcon from "../Assets/TreatmentSection/new_treatment_icon-4.svg";
// import Labtest from "./Assets/TreatmentSection/new_treatment_icon-5.svg";
import WashBottle from "../Assets/TreatmentSection/new_treatment_icon-5.svg";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ArrowRight from "../Assets/DiseaseSection/arrow-right.svg";
import { Link } from "react-router-dom";

// consult section ma left align krva nu chhe ane aakho regular arrow nakhva nu chhe
const TreatmentSection = () => {
  return (
    <>
      <Grid
        templateRows="1fr"
        p="1rem"
        id="treatmentsection"
        // bg="#e9f8f3" h="80%" w="80%"
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
        templateColumns="repeat(4,300px)"
        justifyContent="space-around"
        columnGap="2rem"
        p=".5rem"
      >
        {/* 1st component allopathic treatment */}
        <TreatmentProps
          title={
            <Link to="allopathy">
              <Text color="black" cursor="pointer">
                Allopathy
              </Text>
            </Link>
          }
          imgsrc={<Image h="80%" w="80%" src={AllopathicIcon} />}
          description={
            <Box>
              <Text>Make an instant Appointment with Allopath Doctor </Text>
            </Box>
          }
          singleicon={
            <Grid templateRows="1fr" justifyItems="end" pt=".5rem">
              <GridItem>
                <Link to="allopathy">
                  <Box d="inline-flex" alignItems="center" cursor="pointer">
                    <Text pr=".5rem" color="black">
                      Consult Now
                    </Text>
                    <Image src={ArrowRight} w="20px" h="20px" />
                  </Box>
                </Link>
              </GridItem>
            </Grid>
          }
        />
        {/* 2nd componenent Homeopathy treatment homeopathy */}
        <TreatmentProps
          title={
            <Link to="homeopathy">
              <Text cursor="pointer" color="black">
                Homeopathy
              </Text>
            </Link>
          }
          imgsrc={<Image h="80%" w="80%" src={HomeopathyIcon} />}
          description={
            <Box>
              <Text>Make an instant Appointment with Homeopath Doctor </Text>
              {/* <Text>with Homeopath Doctor</Text> */}
            </Box>
          }
          singleicon={
            <Grid templateRows="1fr" justifyItems="end" pt=".5rem">
              <GridItem>
                <Link to="homeopathy">
                  <Box d="inline-flex" alignItems="center" cursor="pointer">
                    <Text pr=".5rem" color="black">
                      Consult Now
                    </Text>
                    <Image src={ArrowRight} w="20px" h="20px" />
                  </Box>
                </Link>
              </GridItem>
            </Grid>
          }
        />
        {/* 3rd component ayurveda */}
        <TreatmentProps
          title={
            <Link to="ayurveda">
              <Text cursor="pointer" color="black">
                Ayurveda
              </Text>
            </Link>
          }
          imgsrc={<Image h="80%" w="80%" src={AyurvedicIcon} />}
          description={
            <Box>
              <Text>Make an instant Appointment </Text>
              <Text>with Ayurveda Doctor</Text>
            </Box>
          }
          singleicon={
            <Grid templateRows="1fr" justifyItems="end" pt=".5rem">
              <GridItem>
                <Link to="ayurveda">
                  <Box d="inline-flex" alignItems="center" cursor="pointer">
                    <Text pr=".5rem" color="black">
                      Consult Now
                    </Text>
                    <Image src={ArrowRight} w="20px" h="20px" />
                  </Box>
                </Link>
              </GridItem>
            </Grid>
          }
        />
        <TreatmentProps
          title={
            <Link to="childcare">
              <Text cursor="pointer" color="black">
                Child Care
              </Text>
            </Link>
          }
          imgsrc={<Image h="80%" w="80%" src={ChildIcon} />}
          description={
            <Box>
              <Text>Make an instant Appointment </Text>
              <Text>with Child specialists</Text>
            </Box>
          }
          singleicon={
            <Grid templateRows="1fr" justifyItems="end" pt=".5rem">
              <GridItem>
                <Link to="childcare">
                  <Box d="inline-flex" alignItems="center" cursor="pointer">
                    <Text pr=".5rem" color="black">
                      Consult Now
                    </Text>
                    <Image src={ArrowRight} w="20px" h="20px" />
                  </Box>
                </Link>
              </GridItem>
            </Grid>
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
        templateRows="repeat(4,.2fr)"
        bg="white"
        border="1px solid #E7EBF0"
        _hover={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
          // transition:
          transition: ".5s ease-in-out",
        }}
        p="1rem"
        rowGap=".5rem"
        borderRadius=".5rem"
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

        <GridItem>{singleicon}</GridItem>

        {/*  */}
      </Grid>
    </>
  );
};
