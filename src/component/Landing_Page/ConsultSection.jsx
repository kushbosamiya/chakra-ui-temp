import React from "react";

import {
  Grid,
  GridItem,
  Box,
  useRadioGroup,
  useRadio,
  HStack,

} from "@chakra-ui/react";
import MaleIcon from "../Assets/ConsultSection/Male.svg";
import FemaleIcon from "../Assets/ConsultSection/Female.svg";

const ConsultSection = () => {
  return (
    <>
      <Box p="1rem" border="1px solid">
        <GenderSection />
      </Box>
    </>
  );
};

export default ConsultSection;

const GenderSection = () => {
  
  return (
    <>
      <Grid templateRows="10% 10% 60% 20%" placeItems="center" gap=".5rem">
        <GridItem color="#8c8c8c" border="1px solid">
          STEP 1/4
        </GridItem>
        <GridItem fontWeight="700" border="1px solid" fontSize="1.5rem">
          Please Select your gender :
        </GridItem>
        {/* toggle buttons */}

        <GridItem>
         <Example />
        </GridItem>
      </Grid>
    </>
  );
};
function Example() {
  const options = [
    // {
    //   id: '1',
    //   Gender: 'Male',
    //   ImgUrl:'./Assets/ConsultSection/Male.svg'
    // },
    // {
    //   id: '2',
    //   Gender: 'Female',
    //   ImgUrl:'./Assets/ConsultSection/Female.svg'
    // }
    'react', 'vue', 'svelte'
  ]
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.map((value) => {
        {/* const {Gender,ImgUrl} = value; */}
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value.id} {...radio}>
            {/* {Gender}
            <Image src={ImgUrl} /> */}
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}
function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        border='1px solid'
        
        _checked={{
          bg: 'grey',
          color: 'white',
          borderColor: 'pink',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}