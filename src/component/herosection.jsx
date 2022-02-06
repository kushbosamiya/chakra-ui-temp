import {
    Grid,
    GridItem,
    Image,
    Box,
    Heading,
    Text,

} from "@chakra-ui/react";
import DoctorIllustration from "./Assets/herosection/doctor-illustration.svg";
import DoctorIllustration2 from "./Assets/herosection/doctor-svg.webp";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

const HeroSectionContainer = () => {
    return (
        <>
            <Grid templateRows="5% 90% 5%" background="#F1F5FB">
                {/* 1st row */}
                <GridItem gridRow="1/2"></GridItem>
                {/* 2nd row */}
                <GridItem gridRow="2/3">
                    {/* 2nd row colums */}
                    <Grid templateColumns="5% 90% 5%">
                        {/* 2nd row  1st columns */}
                        <GridItem></GridItem>
                        {/* 2nd row  2nd columns */}
                        <GridItem bg="white">
                            <Grid templateColumns="50% 50%" columnGap="1rem" m="1rem" pt="1rem" p=".5rem">
                                {/* 2nd row  2nd columns 1 part 50% */}
                                <GridItem gridColumn="1/2">
                                    <Grid
                                        templateRows="5% 90% 5%"
                                        gridRowGap="1rem"
                                        placeItems="center"
                                    >
                                        {/* 1st */}
                                        <GridItem border="1px solid" gridRow="1/2">
                                          
                                        </GridItem>
                                        {/* 2nd */}
                                        <Grid
                                            templateRows="1fr 1fr"
                                            rowGap=".5rem"
                                            textAlign="center"
                                        >
                                            {/* heading */}
                                            <GridItem  gridRow="1/2">
                                                <Heading fontSize="2.5rem" w="95%" textAlign="center" textColor="#3C64B1">
                                                    We're determines for your better life.
                                                </Heading>
                                            </GridItem>
                                            {/* text */}
                                            <GridItem
                                                
                                                alignSelf="center"
                                                gridRow="2/3"
                                            >
                                                <Text
                                                    w="95%"
                                                    color="#7D7987"
                                                    lineHeight="2rem"
                                                    fontSize="1rem"
                                                >
                                                    You can get the care you need 24/7 – be it online or
                                                    in person. You will be treated by caring specialist
                                                    doctors.
                                                </Text>
                                            </GridItem>
                                        </Grid>
                                        {/* 3rd row */}
                                        <GridItem  gridRow="3/4" w="100%"  p="1rem" textAlign="center">
                                            <Box as="a" cursor="pointer" bg="#3C64B1" p="8" color="white"  w="50%" d="inline-block" textAlign="center" borderRadius="55px" >Consult</Box>
                                        </GridItem>
                                    </Grid>
                                </GridItem>
                                {/* 2nd row  2nd columns 2 part 50% */}
                                <GridItem gridColumn="2/3">
                                    <Box>
                                        <Image maxW="100%" src={DoctorIllustration} />
                                        {/* <Image 
                            maxW="100%" src={DoctorIllustration2} /> */}
                                    </Box>
                                </GridItem>
                            </Grid>
                        </GridItem>
                        {/* 2nd row  3rd columns */}
                        <GridItem></GridItem>
                    </Grid>
                </GridItem>
                {/* 2nd row ends */}

                {/* 3rd row */}
                <GridItem gridRow="3/4"></GridItem>
            </Grid>
        </>
    );
};

export default HeroSectionContainer;
