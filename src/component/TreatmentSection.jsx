import React from 'react';
import { Grid, GridItem } from "@chakra-ui/react"
import AllopathicIcon from "./Assets/TreatmentSection/Allopathy-icon.svg"

const TreatmentSection = () => {
    return <>
        <Grid templateColumns="1fr" p="2rem" bg="#F2FCF7" columnGap="10rem">
     
            {/* <AllopathicTreatment /> */}
            <GridItem >hello</GridItem>
            
        </Grid>
    </>;
};

export default TreatmentSection;


const AllopathicTreatment = () => {
    return <>
        <Grid templateRows="1fr 1fr 1fr 1fr">
            {/* images */}
            <GridItem border="1px solid">
               
                hello
            </GridItem>
            {/* title */}
            <GridItem border="1px solid">
                <Text>Allopathy</Text>
                </GridItem>
            {/* description */}
            <GridItem border="1px solid">"A"</GridItem>
            {/* consult icon */}
            <GridItem border="1px solid">"A"</GridItem>

        </Grid>
    </>;
};

