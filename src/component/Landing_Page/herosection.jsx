import {
  Grid,
  GridItem,
  Image,
  Box,
  Heading,
  Text,
  Button,
  Collapse,
} from "@chakra-ui/react";

// import DoctorIllustration from "./Assets/herosection/Doctor_Monochromatic.svg"
import DoctorGif from "../Assets/herosection/Medicine.gif";

// import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

const HeroSectionContainer = () => {
  return (
    <>
      <Grid
        templateColumns="1fr"
        // background="#e9f8f3"
        p="1rem"
      >
        <HeroBody />
      </Grid>
    </>
  );
};

export default HeroSectionContainer;

const HeroBody = () => {
  return (
    <>
      {/* center */}
      <Grid
        templateColumns="60% 40%"
        bg="white"
        borderRadius="1rem"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
      >
        {/* 1st 70% column */}
        <GridItem gridColumn="1/2" justifySelf="center" alignSelf="center">
          <Grid gridRow="1fr 1fr 1fr" rowGap="2rem">
            {/* headline */}
            <GridItem gridRow="1/2">
              <Box
                fontSize="2.5rem"
                fontWeight="900"
                color="
#059b5c"
              >
                Need consulatation ? we
              </Box>
              <Box
                fontSize="2.5rem"
                fontWeight="900"
                color="
#059b5c"
              >
                are ready for you anytime
              </Box>
            </GridItem>
            {/* description */}
            <GridItem gridRow="2/3">
              <Box
                fontSize="1.5rem"
                color="#8c8c8c"
                fontWeight="700"
                fontStyle="italic"
              >
                ‟Consult with specialist doctors
              </Box>
              <Box
                fontSize="1.5rem"
                color="#8c8c8c"
                fontWeight="700"
                fontStyle="italic"
              >
                securely And privately
              </Box>
            </GridItem>
            {/* button */}
            <GridItem gridRow="3/4">
              <Button
                bg="
#059b5c"
                cursor="pointer"
                color="#f2fcf7"
                border="none"
                outline="none"
                fontSize="1rem"
                fontWeight="600"
                p="1rem"
                borderRadius=".5rem"
                boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
              >
                Consult Now
              </Button>
            </GridItem>
          </Grid>
        </GridItem>
        {/* 3rd 45% column */}
        <GridItem gridColumn="2/3" justifySelf="center">
          {/* illustration */}
          <Box
          //  border="6px dashed lightgray"
          >
            <Image src={DoctorGif} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};
