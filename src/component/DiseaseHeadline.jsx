import React from 'react'
import { Grid ,GridItem, Text } from '@chakra-ui/react'

const DiseaseHeadline = () => {
  return (
    <>

        <Grid templateAreas="1fr">
            <GridItem 
            // bg="#e9f8f3"
             p="1rem" textAlign="center" >
                <Text fontSize="2rem" fontWeight="700" color="black">Select a medical specialization</Text>
            </GridItem>
        </Grid>
    </>
  )
}

export default DiseaseHeadline