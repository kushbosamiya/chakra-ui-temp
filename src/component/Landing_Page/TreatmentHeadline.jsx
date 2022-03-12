import { Grid,GridItem,Divider} from '@chakra-ui/react';
import React from 'react';

const TreatmentHeadline = () => {
  return <>
  <Grid templateRows="1fr" textAlign="center" >
      <GridItem 
      // bg="#e9f8f3"
       p="1rem" fontSize="2rem" fontWeight="700" color="black" >
        Consult with top doctors across various treatments 
          </GridItem>
      </Grid>
  </>;
};

export default TreatmentHeadline;
