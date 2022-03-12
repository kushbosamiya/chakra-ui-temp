import React from 'react';
import { Box, Text, Grid, GridItem, Image, Flex,Divider } from "@chakra-ui/react"

import Hamburger from 'hamburger-react'
import Logo from "../Assets/NavBar/logo_icon.svg"
import AvatarIcon from "../Assets/NavBar/avatar-2.svg"
import Home from "../Assets/NavBar/Home-icon-2.svg"
import Consult from "../Assets/NavBar/Consult-icon.svg"
import Capsule from "../Assets/NavBar/capsule-icon.svg"
import Scientist from "../Assets/NavBar/scientist-man-icon.svg"
import BlogIcon from "../Assets/NavBar/blogger-icon.svg"



// import "./src/styles.css"

const NavLinks = () => {





  return <>
    <NavBarContainer />




  </>;
};



export default NavLinks;

const NavBarContainer = () => {

  return (
    <Grid
      as="nav"
      fontWeight="900"
      // justify="space-between"
      wrap="wrap"
      // textAlign="center"
      // background="#e9f8f3"
      templateColumns="5% 20% 60% 10% 5%"
      // borderBottom="1px solid gray"
      p="1rem"
      

    >
      <MenuToggle />
      <Logo_Component />

      {/* <Box 
      // textAlign="center"
      > */}

      <NavItems />
      {/* </Box> */}

      <WhiteSpace />
      <Avatar />
    
      



    </Grid>
  );
};





const MenuToggle = () => {
  return (


    <Grid templateColumns="auto" placeItems="center">
      <GridItem
      cursor="pointer"
      gridColumn="1/2">
        <Hamburger color='#059b5c' size="30" />
      </GridItem>
    </Grid>

  );
};


// logo
const Logo_Component = () => {
  return <>
    <Grid templateColumns="1fr"
      placeItems="center" >
       <GridItem fontSize="1.5rem" fontWeight="800" color="#059b5c">
            • Swasthya Setu •
          </GridItem>
    </Grid>
  </>;
};



const NavItems = () => {
  return <>


    <Grid templateColumns="20% 20% 20% 20% 20%" 
    placeItems="center"
    //  justifyContent="space-around" alignItems="center"
     >

      <GridItem gridColumn="1/2" 
      
      >
        {/* Home icon */}
        {/* <Box d="flex" alignItems="center" gap=".5rem" alignItems="center" > */}

          <Box
          cursor="pointer"
          >
            
            <Text fontWeight="600" color="#059b5c">Home</Text>
          </Box>



        {/* </Box> */}
      </GridItem>


      <GridItem gridColumn="2/3"    >
        {/* Consult icon */}
        

          <Box
          cursor="pointer"
          >
            
            <Text fontWeight="600" color="#059b5c">Consult</Text>
          </Box>



        
      </GridItem>


      <GridItem gridColumn="3/4"   >
        {/* Pharmacy icon */}
        <Box d="flex" alignItems="center" gap=".5rem"
        
        >

          <Box
          cursor="pointer"
          >
            {/* <Image h="28px"

              src={Capsule}
            /> */}
            <Text fontWeight="600" color="#059b5c">Pharmacy</Text>
          </Box>



        </Box>
      </GridItem>


      <GridItem gridColumn="4/5"    >
        {/* Diagnostic icon */}
        

          <Box
          cursor="pointer"
          >
            {/* <Image h="28px"

              src={Scientist}
            /> */}
            <Text fontWeight="600" color="#059b5c">Diagnose</Text>
          </Box>



        
      </GridItem>

      <GridItem gridColumn="5/6"   >
        {/* Blog icon */}
        

          <Box
          
          cursor="pointer"
          >
            {/* <Image h="28px"

              src={BlogIcon}
            /> */}
            <Text fontWeight="600" color="#059b5c">Blog</Text>
          </Box>



        
      </GridItem>

    </Grid>

  </>;
};








const Avatar = () => {
  return <>
    <Grid templateColumns="1fr"
      placeItems="center" >
      <GridItem gridColumn="1/2"  cursor="pointer" >
      {/*  <Image
          h="36px"
          src={AvatarIcon}
        /> */}
        <Text fontWeight="600" color="#059b5c">Login</Text>
      </GridItem>
    </Grid>



  </>;
};



const WhiteSpace = () => {
  return <>
    <Grid templateColumns="1fr"
      placeItems="center" >
      <GridItem gridColumn="1/2"  >

      </GridItem>
    </Grid>
  </>;
};













