import React from 'react';
import { Box, Text, Grid, GridItem, Image, Flex,Divider } from "@chakra-ui/react"

import Hamburger from 'hamburger-react'
import Logo from "./Assets/NavBar/logo_icon.svg"
import AvatarIcon from "./Assets/NavBar/avatar-2.svg"
import Home from "./Assets/NavBar/Home-icon-2.svg"
import Consult from "./Assets/NavBar/Consult-icon.svg"
import Capsule from "./Assets/NavBar/capsule-icon.svg"
import Scientist from "./Assets/NavBar/scientist-man-icon.svg"
import BlogIcon from "./Assets/NavBar/blogger-icon.svg"



import "../styles.css"

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
      textAlign="center"
      background="#F2FCF7"
      templateColumns="5% 20% 60% 10% 5%"
      // borderBottom="1px solid gray"
      p="1rem"
      

    >
      <MenuToggle />
      <Logo_Component />

      <Box textAlign="center">

      <NavItems />
      </Box>

      <WhiteSpace />
      <Avatar />
      <Divider w="80vw" borderColor="black" my="5" />
      



    </Grid>
  );
};





const MenuToggle = () => {
  return (


    <Grid templateColumns="auto" placeItems="center">
      <GridItem
      cursor="pointer"
      gridColumn="1/2">
        <Hamburger color='#1d5527' size="30" />
      </GridItem>
    </Grid>

  );
};


// logo
const Logo_Component = () => {
  return <>
    <Grid templateColumns="1fr"
      placeItems="center" >
      <GridItem 
      cursor="pointer"
      gridColumn="1/2" placeSelf="center" >
        <Image h="32px"
          src={Logo} />
      </GridItem>
    </Grid>
  </>;
};



const NavItems = () => {
  return <>


    <Grid templateColumns="20% 20% 20% 20% 20%" gap=".5rem" justifyContent="space-around">

      <GridItem gridColumn="1/2" placeSelf="center"
      cursor="pointer"
      >
        {/* Home icon */}
        <Box d="flex" alignItems="center" gap="1rem" >

          <Box
          cursor="pointer"
          >
            <Image h="28px"

              src={Home}
            />
            <Text fontWeight="600" color="black">Home</Text>
          </Box>



        </Box>
      </GridItem>


      <GridItem gridColumn="2/3" placeSelf="center"   >
        {/* Consult icon */}
        <Box d="flex" alignItems="center" gap="1rem" >

          <Box
          cursor="pointer"
          >
            <Image h="28px"

              src={Consult}
            />
            <Text fontWeight="600" color="black">Consult</Text>
          </Box>



        </Box>
      </GridItem>


      <GridItem gridColumn="3/4" placeSelf="center"  >
        {/* Pharmacy icon */}
        <Box d="flex" alignItems="center" gap="1rem"
        
        >

          <Box
          cursor="pointer"
          >
            <Image h="28px"

              src={Capsule}
            />
            <Text fontWeight="600" color="black">Consult</Text>
          </Box>



        </Box>
      </GridItem>


      <GridItem gridColumn="4/5" placeSelf="center"   >
        {/* Diagnostic icon */}
        <Box d="flex" alignItems="center" gap="1rem" >

          <Box
          cursor="pointer"
          >
            <Image h="28px"

              src={Scientist}
            />
            <Text fontWeight="600" color="black">Diagnose</Text>
          </Box>



        </Box>
      </GridItem>

      <GridItem gridColumn="5/6" placeSelf="center"  >
        {/* Blog icon */}
        <Box d="flex" alignItems="center" gap="1rem" >

          <Box
          
          cursor="pointer"
          >
            <Image h="28px"

              src={BlogIcon}
            />
            <Text fontWeight="600" color="black">Blog</Text>
          </Box>



        </Box>
      </GridItem>

    </Grid>

  </>;
};








const Avatar = () => {
  return <>
    <Grid templateColumns="1fr"
      placeItems="center" >
      <GridItem gridColumn="1/2" placeSelf="center" cursor="pointer" >
        <Image
          h="36px"
          src={AvatarIcon}
        />
        <Text fontWeight="600" color="black">Login</Text>
      </GridItem>
    </Grid>



  </>;
};



const WhiteSpace = () => {
  return <>
    <Grid templateColumns="1fr"
      placeItems="center" >
      <GridItem gridColumn="1/2" placeSelf="center" >

      </GridItem>
    </Grid>
  </>;
};













