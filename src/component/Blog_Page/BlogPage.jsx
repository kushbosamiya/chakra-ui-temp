// import React from "react";
import Header from "../Landing_Page/header";
import React, { useState } from "react";
import SearchIcon from "../Assets/PharmacyPage/SearchIcon_2.svg";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadMore from "../Assets/BlogSection/read3.svg";
import {
  Grid,
  GridItem,
  Input,
  Image,
  InputGroup,
  InputLeftAddon,
  Box,
  Text,
} from "@chakra-ui/react";
import HashnodeData from "../Hashnode_data/Hashnode_data.json";
import { VscArrowRight } from "react-icons/vsc";
import Chip from "@mui/material/Chip";
// import Box from "@mui/material/Box";

const BlogPage = () => {
  // named as blog page with searching of posts
  let DisplayAllPost = [];
  //
  const [FilterData, setFilterData] = useState([]);
  // function HandleFilter(event) {
  //   const SearchBlog = event.target.value;
  //   console.log(SearchBlog)
  //   const newFilter = HashnodeData.posts.filter((value) =>
  //     value.title.toLowerCase().includes(SearchBlog.toLowerCase())
  //   );
  //   // setFilterData(newFilter);

  //   FilterData.push(newFilter);
  //   console.log(FilterData);
  // }
  return (
    <>
      <Header />
      <Grid templateColumns=".5fr 1fr .5fr" p="1rem" columnGap="2rem">
        <GridItem gridColumn="2/3" p="1rem">
          <Box d="flex">
            <InputGroup
              // border="1px solid gray"
              borderRadius=".45rem"
              w="100%"
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
                  w="40pc"
                  outline="none"
                  fontSize="1rem"
                  h="1.5rem"
                  placeholder="Search for blogs"
                  // onChange={HandleFilter}
                />
              </Box>
            </InputGroup>
          </Box>
        </GridItem>
      </Grid>
      {Object.entries(HashnodeData).map((item) =>
        item[1].map((post, index) => {
          return (
            <>
              {/* <Boxs d="flex"> */}
              <Grid templateRows="1fr" placeContent="center" key={index.id}>
                <BlogPageApiprops post={post} key={index.id} />
              </Grid>

              {/* </Boxs> */}
            </>
          );
        })
      )}
    </>
  );
};

// if (HashnodeData.posts.length > 0) {
//   for (let index = 0; index < 3; index++) {
//     DisplayAllPost = [...DisplayAllPost, HashnodeData.posts[index]];
//   }
// }

// return (
//   <>
{
  /* <Grid templateColumns=".5fr 1fr .5fr" p="1rem" columnGap="2rem">
        <GridItem gridColumn="2/3" p="1rem">
          <SearchBar />
        </GridItem>
      </Grid> */
}
// {Object.entries(HashnodeData).map((item) =>
//   item[1].map((post, index) => {
//     return (
//       <>

//         <Grid templateRows="1fr" placeContent="center" key={index.id}>
//           <BlogPageApiprops post={post} key={index.id} />
//         </Grid>
//       </>
//     );
//   })
// )}

// {
//   /* <Footer /> */
// }

// );

export default BlogPage;

// const SearchBar = () => {
//   const [FilterData, setFilterData] = useState([]);
//   function HandleFilter(event) {
//     const SearchBlog = event.target.value;
//     // console.log(SearchBlog)
//     const newFilter = HashnodeData.posts.filter((value) =>
//       value.title.toLocaleLowerCase.includes(SearchBlog)
//     );
//     setFilterData(newFilter);
//   }
//   return (
//     <>
//       <Box d="flex">
//         <InputGroup
//           // border="1px solid gray"
//           borderRadius=".45rem"
//           w="100%"
//           p=".5rem"
//           bg="#f1f4f6"
//           boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"

//           // bg="#efefef"
//         >
//           <Box alignItems="center">
//             <InputLeftAddon
//               borderRadius
//               children={<Image w="24px" h="24px" src={SearchIcon} />}
//             />
//           </Box>
//           <Box px="1rem" w="100%">
//             <Input
//               bg="#f1f4f6"
//               border="none"
//               overflow="hidden"
//               w="40pc"
//               outline="none"
//               fontSize="1rem"
//               h="1.5rem"
//               placeholder="Search for blogs"
//               onChange={HandleFilter}
//             />
//           </Box>
//         </InputGroup>
//       </Box>
//     </>
//   );
// };

function BlogPageApiprops({ post }) {
  // console.log("BlogPage :", post);

  return (
    <>
      {/* 1st column */}

      <Grid
        templateColumns=".25fr .75fr .25fr"
        as="main"
        // border="1px solid pink"
        p="1rem"
      >
        <GridItem gridColumn="2/3">
          <Grid
            templateColumns=".75fr 1fr"
            border="2px solid #E7EBF0"
            // boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
            _hover={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
              // transition:
              transition: ".5s ease-in-out",
            }}
            borderRadius=".5rem"
            bg="white"
            p=".5rem"
            columnGap=".25rem"
          >
            <GridItem
            // border="1px solid red"
            >
              <Image
                h="100%"
                w="100%"
                borderRadius=".25rem"
                objectFit="cover"
                src={post.coverImage}
                alt={post.title}
              />
            </GridItem>
            <GridItem
            // border="1px solid red"
            >
              {/* content rows */}
              <Grid
                templateRows=".1fr .1fr .6fr .2fr"
                rowGap=".15rem"
                // border="1px solid blue"
                // lineHeight="1.5rem"
                alignContent="space-around"
              >
                {/* tag */}
                <GridItem gridRow="1/2" p=".5rem" mt=".5rem">
                  <Chip
                    variant="outlined"
                    size="small"
                    label={
                      <>
                        <Text> {post.tags}</Text>
                      </>
                    }
                  />
                </GridItem>
                {/* title */}
                <GridItem
                  gridRow="2/3"
                  // border="1px solid"
                  p=".5rem"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Text
                      color="black"
                      textDecoration="none"
                      fontWeight="700"
                      as="h4"
                    >
                      {post.title}
                    </Text>
                  </Link>
                </GridItem>
                {/* brief */}
                <GridItem
                  gridRow="3/4"
                  // border="1px solid"

                  p=".5rem"
                >
                  <Text color="#6E6E6E" lineHeight="1.25rem" fontWeight="400">
                    {post.brief}
                  </Text>
                </GridItem>
                {/* time and button */}
                <GridItem
                  gridRow="5/6"
                  p=".25rem"
                  // mt=".25rem"
                  alignSelf="end"

                  // border="1px solid brown"
                >
                  <Grid
                    templateColumns="1fr 1fr"
                    // border="1px solid"
                  >
                    <GridItem
                      fontSize=".9rem"
                      color="gray"
                      // border="1px solid"
                      // p=".5rem"
                      alignSelf="center"
                    >
                      {post.readTime} min read
                    </GridItem>
                    <GridItem
                      // border="1px solid"
                      p=".25rem"
                      // mt=".25rem"
                      justifySelf="end"
                      alignSelf="center"
                    >
                      <Link to={`/blog/${post.slug}`}>
                        <Image src={ReadMore} />
                      </Link>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>

      {/* {post.title}

      {post.brief} */}
    </>
  );
}
