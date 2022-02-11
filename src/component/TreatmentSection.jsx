import React from "react";
import { Grid, GridItem, Text, Image, Box } from "@chakra-ui/react";
import AllopathicIcon from "./Assets/TreatmentSection/AlloGreen.svg";
import AyurvedicIcon from "./Assets/TreatmentSection/Ayur_Green.svg";
import HomeopathyIcon from "./Assets/TreatmentSection/Homeo_Green.svg";
import ChildIcon from "./Assets/TreatmentSection/child-green.svg";
import Labtest from "./Assets/TreatmentSection/lab-green.svg";
import WashBottle from "./Assets/TreatmentSection/wash-green.svg";
import { ChevronRightIcon } from "@chakra-ui/icons";

const TreatmentSection = () => {
  return (
    <>
      <Grid
        templateColumns="1fr 1fr 1fr"
        p="1rem"
        bg="#e9f8f3"
        columnGap="2rem"
      
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
          <Box>
            <Text>Consult Now</Text>
            <ChevronRightIcon />
          </Box>
        }
      />
      {/* 2nd componenent Homeopathy treatment homeopathy */}
      <TreatmentProps
        title={<Text>Homeopathy</Text>}
        imgsrc={<Image border="none" bg="none" src={HomeopathyIcon} />}
        description={
          <Box>
            <Text>Make an instant Appointment </Text>
            <Text>with Homeopath Doctor</Text>
          </Box>
        }
        singleicon={
          <Box>
            <Text>Consult Now</Text>
            <ChevronRightIcon />
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
            <Text>Consult Now</Text>
            <ChevronRightIcon />
          </Box>
        }
      />

    
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
      >
        {/* images */}
        <GridItem   >{imgsrc}</GridItem>
        {/* title */}
        <GridItem as="h4">{title}</GridItem>
        {/* description */}
       
          <GridItem color="#8c8c8c"  >
            {description}
          </GridItem>
        
        {/* consult icon */}

        <GridItem  >{singleicon}</GridItem>

        {/*  */}
      </Grid>
    </>
  );
};

//   {/* child icon */}
//   <TreatmentProps
//   title={<Text>Child Care</Text>}
//   imgsrc={<Image src={ChildIcon} />}
//   description={
//     <Box>
//       {" "}
//       <Text>Make an instant Appointment </Text>
//       <Text>with Child Doctor</Text>
//     </Box>
//   }
//   singleicon={
//     <Box>
//       <Text>Consult Now</Text>
//       <ChevronRightIcon />
//     </Box>
//   }
// />
// {/* wash hand */}
// <TreatmentProps
//   title={<Text>Covid Care</Text>}
//   imgsrc={<Image src={WashBottle} />}
//   description={
//     <Box>
//       <Text>Make an instant Appointment </Text>
//       <Text>with Covid related disease</Text>
//     </Box>
//   }
//   singleicon={
//     <Box>
//       <Text>Consult Now</Text>
//       <ChevronRightIcon />
//     </Box>
//   }
// />
// {/* lab test  */}
// <TreatmentProps
//   title={<Text>Lab Test</Text>}
//   imgsrc={<Image src={Labtest} />}
//   description={
//     <Box>
//       <Text>Make an instant Appointment </Text>
//       <Text>with Diagnostic centre </Text>
//     </Box>
//   }
//   singleicon={
//     <Box>
//       <Text>Consult Now</Text>
//       <ChevronRightIcon />
//     </Box>
//   }
// />