import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";

const BlogHeadline = () => {
  return (
    <>
      <Grid templateAreas="1fr" as="headline">
        <GridItem 
        // bg="#e9f8f3"
         p="1rem" textAlign="center">
          <Text fontSize="2rem" fontWeight="700" color="black">
            Blogs and Articles
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default BlogHeadline;
