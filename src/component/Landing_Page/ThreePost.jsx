import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HashnodeData from "../Hashnode_data/Hashnode_data.json";
import Header from "../Landing_Page/header";
import Footer from "../Landing_Page/FooterSection";
import { Grid, GridItem, Image, Box, Text } from "@chakra-ui/react";
import ReadIcon from "../Assets/BlogSection/SinglePost/readIcon.svg";
import Chip from "@mui/material/Chip";
import "./Threepost.css"

function Threepost() {
  const [Singleposts, setSingleposts] = useState([]);
  const { id } = useParams();
  // logic-2
  function FetchData() {
    const NewPath = HashnodeData.posts;

    let DisplayThreePost = [];

    if (NewPath.length > 0) {
      for (let index = 0; index < NewPath.length; index++) {
        DisplayThreePost = [...DisplayThreePost, NewPath[index]];
      }
      // console.log(DisplayThreePost);

      let blog = DisplayThreePost.find((blog) => blog.slug === id);
      if (blog) {
        console.log("this is new :", blog.title);
        setSingleposts(blog);
      }
    }
  }

  useEffect(() => {
    FetchData();
  }, [1]);

  return (
    <>
      {/* <Header /> */}
      <Grid templateColumns=".5fr 1fr .5fr">
        <GridItem gridColumn="2/3">
          <Grid
            templateRows=".1fr .1fr .1fr .15fr .25fr auto"
            id="singleblogpage"
            p="1rem"
            // rowGap=".75rem"
            border="1px solid lightgray"
          >
            <GridItem p="1rem" alignSelf="start" gridRow="1/2">
              <Chip
                variant="outlined"
                size="small"
                label={
                  <>
                    <Text> {Singleposts.tags}</Text>
                  </>
                }
              />
            </GridItem>
            <GridItem p="1rem" alignSelf="start">
              <Text fontWeight="700" color="#111827" as="h1">
                {Singleposts.title}
              </Text>
            </GridItem>
            <GridItem p="1rem" alignSelf="center">
              <Text color="#424b5a" as="h2" fontWeight="400">
                {Singleposts.subtitle}
              </Text>
            </GridItem>
            <GridItem p="1rem" alignSelf="center">
              <Text fontWeight="400">
                <Grid templateColumns=".35fr 20px .3fr">
                  <GridItem alignSelf="center">
                    <Box d="flex" justifyContent="flex-end">
                      <Text color="#424b5a">
                        Published on {Singleposts.dateAdded}
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem
                    color="#424b5a"
                    alignSelf="center"
                    justifySelf="center"
                  >
                    |
                  </GridItem>

                  <GridItem alignSelf="center">
                    <Grid
                      // columnGap=".3rem"
                      templateColumns=".1fr .8fr"
                      color="#424b5a"
                      placeItems="center"
                    >
                      <GridItem mt=".25rem">
                        <Image src={ReadIcon} w="20px" h="auto" />
                      </GridItem>
                      <GridItem p=".25rem">
                        <Text>{Singleposts.readTime} min read</Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                </Grid>
              </Text>
            </GridItem>

            <GridItem m="0 auto" p="1rem">
              <Image
                borderRadius=".25rem"
                h="auto"
                w="100%"
                objectFit="cover"
                src={Singleposts.coverImage}
              />
            </GridItem>
            <GridItem p="1rem">
              <Box dangerouslySetInnerHTML={{ __html: Singleposts.content }} />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
}

export default Threepost;
// {/* console.log(Singleposts.title) */}
// console.log(Singleposts.brief)
// console.log(Singleposts.readTime)
// console.log(Singleposts.tags)
// console.log(Singleposts.title)
// console.log(Singleposts.subtitle)
// console.log(Singleposts.coverImage)
// console.log(Singleposts.content)
{
  /* <div dangerouslySetInnerHTML={{ __html: Singleposts.content }} /> */
}



// Himalaya-Gasex-Tablet