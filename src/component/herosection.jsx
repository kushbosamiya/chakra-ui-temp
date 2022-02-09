import {
    Grid,
    GridItem,
    Image,
    Box,
    Heading,
    Text,
    Button, Collapse

} from "@chakra-ui/react";

// import DoctorIllustration from "./Assets/herosection/Doctor_Monochromatic.svg"
import DoctorGif from "./Assets/herosection/Gynecology consultation.gif"

// import { Button, ButtonGroup, Stack } from "@chakra-ui/react";

const HeroSectionContainer = () => {
    return (
        <>
            <Grid templateColumns="1fr" background="#F2FCF7" p="1rem">


                <HeroBody />


            </Grid>
        </>
    );
};

export default HeroSectionContainer;






const HeroBody = () => {
    return <>
        {/* center */}
        <Grid templateColumns="50% 50%" bg="white" borderRadius="1rem"  border="1px solid #8c8c8c" >

            {/* 2nd 45% column */}
            <GridItem gridColumn="1/2" justifySelf="center" p="1rem" alignSelf="center" >
                <Grid gridRow="1fr 1fr 1fr" rowGap="2rem" >
                    {/* headline */}
                    <GridItem gridRow="1/2">
                        <Box fontSize="3rem" fontWeight="900" color="#009859">

                            Need consulatation ? we
                        </Box>
                        <Box fontSize="3rem" fontWeight="900" color="#009859">

                            are ready for you anytime
                        </Box>
                    </GridItem>
                    {/* description */}
                    <GridItem gridRow="2/3">
                        <Box fontSize="2rem" color="#8c8c8c" fontWeight="700"

                            fontStyle="italic">
                            ‟Consult with specialist doctors
                        </Box>
                        <Box fontSize="2rem" color="#8c8c8c" fontWeight="700"
                            fontStyle="italic">
                            securely And privately
                        </Box>

                    </GridItem>
                    {/* button */}
                    <GridItem gridRow="3/4">

                        <Button bg='#009959'
                            cursor="pointer"
                            color="#f2fcf7" border="none"
                            outline="none" fontSize="1.5rem" fontWeight="600" p="1rem" borderRadius="1rem"
                            boxShadow=" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                        >
                            Consult Now
                        </Button>



                    </GridItem>
                </Grid>
            </GridItem>
            {/* 3rd 45% column */}
            <GridItem gridColumn="2/3" justifySelf="center" p="1rem" >
                {/* illustration */}
                <Box border="6px dashed lightgray">
                    <Image src={DoctorGif} />
                </Box>
            </GridItem>

        </Grid>
    </>;
};




