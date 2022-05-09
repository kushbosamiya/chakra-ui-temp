import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
  Portal,
  Text,
} from "@chakra-ui/react";

import AddIcon from "@mui/icons-material/Add";

import Boxs from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const AddressComponent = () => {
  const Country = [
    {
      value: "INDIA",
      label: "₹",
    },
    {
      value: "USA",
      label: "$",
    },
  ];

  const [Countries, setCountries] = useState("INDIA");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setCountries(event.target.value);
  };

  return (
    <div>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={close}
        placement="left"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button
            onClick={open}
            as="button"
            cursor="pointer"
            w="100%"
            p=".5rem"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            border="1px solid #059b5c"
            borderRadius=".25rem"
            bg="white"
            _hover={{
              bg: "#059b5c",
              color: "white",
            }}
          >
            Change
          </Button>
        </PopoverTrigger>
        <PopoverContent
          p=".15rem"
          borderRadius=".5rem"
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          border="1px solid #059b5c"
          w="100%"
          ml="-5%"
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-select-Countries"
              select
              label="Select"
              value={Countries}
              onChange={handleChange}
              helperText="Please select your Countries"
            >
              {Country.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AddressComponent;
