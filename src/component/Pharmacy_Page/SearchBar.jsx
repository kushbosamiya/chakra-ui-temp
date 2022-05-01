import React, { useState } from "react";
import {
  Input,
  Image,
  InputGroup,
  InputLeftAddon,
  Box,
} from "@chakra-ui/react";
import { IoChevronDownSharp } from "react-icons/io/";

import SearchIcon from "../Assets/PharmacyPage/SearchIcon_2.svg";

const SearchBar = () => {
  return (
    <>
      <Box d="flex">
        <InputGroup
          // border="1px solid gray"
          borderRadius=".45rem"
          p=".5rem"
          bg="#f1f4f6"
          boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"

          // bg="#efefef"
        >
          <Box alignItems="center">
            <InputLeftAddon
              borderRadius
              children={<Image w="24px" h="24px" src={SearchIcon} />}
            />
          </Box>
          <Box px="1rem" w="100%">
            <Input
              bg="#f1f4f6"
              border="none"
              overflow="hidden"
              w="100%"
              outline="none"
              fontSize="1rem"
              h="1.5rem"
              placeholder="Search for ayurvedic , allopathic and homeopathic medicines "
            />
          </Box>
        </InputGroup>
      </Box>
    </>
  );
};

export default SearchBar;
