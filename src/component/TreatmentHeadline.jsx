import { Grid,GridItem } from '@chakra-ui/react';
import React from 'react';

const HeadLine = () => {
  return <>
  <Grid templateRows="1fr" textAlign="center" >
      <GridItem bg="#e9f8f3" p="1rem" fontSize="2rem" fontWeight="700" color="black" >
          Consult with top doctors across various treatments and specialities
          </GridItem>
      </Grid>
  </>;
};

export default HeadLine;
