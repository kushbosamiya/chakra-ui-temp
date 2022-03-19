import React, { useState, useEffect } from "react";
import { Grid, GridItem, Text, Image, Box, Button } from "@chakra-ui/react";
import {
  Link,
  useParams,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./BlogSection.css";
import { VscArrowRight } from "react-icons/vsc";
import Threepost from "../Landing_Page/ThreePost";

// importing other pages
import PharmacyPage from "../Pharmacy_Page/PharmacyPage";

// ---------------------------------------------------------------------------
const BlogSection = () => {
  return (
    <>
      <Grid
        templateRows="1fr"
        placeItems="center"
        p="1rem"
        id="blogs&articles"
        // bg="#e9f8f3"
      >
        <BlogComponent />
        {/* <Routes>
          <Route path="blog" exact element={<BlogComponent />} />

          <Route path="blog/:id" exact element={<Threepost />} />
        </Routes> */}
      </Grid>
      {/* <ViewMoreBtn /> */}
    </>
  );
};

export default BlogSection;

const BlogComponent = () => {
  const [posts, setposts] = useState([]);

  const query = `
    {
      user(username: "Kush-Bosamiya-13") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

  // async await function
  async function fetchPosts() {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const ApiResponse = await response.json();
    const Path = ApiResponse.data.user.publication.posts;
    console.log("this is path", Path);

    let DisplaythreePost = [];
    if (Path.length > 0) {
      for (let index = 1; index < 4; index++) {
        DisplaythreePost = [...DisplaythreePost, Path[index]];
      }
    }
    setposts(DisplaythreePost);
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Grid
        templateColumns="350px 350px 350px"
        // placeItems="center"
        columnGap="2rem"
        h="100%"
      >
        {posts.map((post, index) => (
          <>
            <Grid
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              borderRadius=".5rem"
              bg="white"
              key={post.title}
            >
              <DefaultApiprops post={post} key={index.toString()} />
              {/* </Link> */}
            </Grid>
          </>
        ))}
      </Grid>
      <ViewMoreBtn />
      
      
    </>
  );
};

// default api properties
function DefaultApiprops({ post }) {
  console.log("defaultPost", post);
  return (
    <>
      {/* 1st column */}
      <Grid templateRows="50% 10% 25% 15%">
        <GridItem gridRow="1/2" p="1rem">
          <Image
            h="100%"
            w="100%"
            borderRadius=".5rem"
            objectFit="cover"
            src={post.coverImage}
            alt={post.title}
          />
        </GridItem>

        <GridItem
          gridRow="2/3"
          color="black"
          // border="1px solid"
          // as="a"
          // href={`/blog/${post.slug}`}
          cursor="pointer"
          placeSelf="center"
          p="1rem"
          textAlign="left"
        >
          <Link to={`/blog/${post.slug}`}>
            <Text fontWeight="600">{post.title}</Text>
          </Link>
        </GridItem>

        <GridItem p="1rem" mb="1rem" gridRow="3/4" noOfLines="3">
          {post.brief}
        </GridItem>
        <GridItem mr="1rem" p="1rem" gridRow="4/5">
          <Box d="flex" justifyContent="flex-end">
            <Link to={`/blog/${post.slug}`}>
              <Button
                p=".5rem"
                bg="transparent"
                border="none"
                outline="none"
                color="#059b5c"
                cursor="pointer"
              >
                Read Full
              </Button>
            </Link>
            <Box alignSelf="center" cursor="pointer">
              {" "}
              <VscArrowRight color="#059b5c" />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

const ViewMoreBtn = () => {
  return (
    <>
      <Grid templateRows="1fr" p=".75rem">
        <GridItem textAlign="center">
          {/* <Text> */}
          <Link to="blog">
            <Button
              as="button"
              cursor="pointer"
              p=".75rem"
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
              // textDecoration="underline"
              border="1px solid #059b5c"
              borderRadius=".25rem"
              bg="white"
              _hover={{
                color: "white",
                bg: "#059b5c",
              }}
            >
              View More
            </Button>
          </Link>
          {/* </Text> */}

          {/* </Link> */}
        </GridItem>
      </Grid>
    </>
  );
};

const ViewMoreMsg = () => {
  return (
    <>
      <h1>this is msg</h1>
    </>
  );
};
