  import React, { useState, useEffect } from "react";
import { Grid, GridItem, Text, Image, Box, Button } from "@chakra-ui/react";
import {
  Link,
  useParams,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HashnodeData from "../Hashnode_data/Hashnode_data.json";
import "./BlogSection.css";
import { VscArrowRight } from "react-icons/vsc";

// importing other pages
import PharmacyPage from "../Pharmacy_Page/PharmacyPage";
import ReadMore from "../Assets/BlogSection/read3.svg";
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
      </Grid>
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

  let DisplaythreePost = [];
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
    // console.log(ApiResponse);
    const Path = ApiResponse.data.user.publication.posts;
    console.log("this is path", Path);

    if (Path.length > 0) {
      for (let index = 0; index < 3; index++) {
        DisplaythreePost = [...DisplaythreePost, Path[index]];
      }
    }
    setposts(DisplaythreePost);
  }
  function FetchPostData() {
    Object.entries(HashnodeData).map(function (item, indexes) {
      // console.log("item[1]",item[1])
      // console.log(indexes)
      if (item[1].length > 0) {
        for (let index = 0; index < 3; index++) {
          DisplaythreePost = [...DisplaythreePost, item[1][index]];
          // console.log("succed", DisplaythreePost);
        }
      }
      setposts(DisplaythreePost);
    });
  }

  useEffect(() => {
    FetchPostData();
  }, []);
  return (
    <>
      <Grid templateColumns="350px 350px 350px" columnGap="2rem">
        {posts.map(function (post, index) {
          return (
            <>
            <li key={index}>
              <Grid
                templateRows="1fr"
                placeContent="center"
                border="1px solid #E7EBF0"
                _hover={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;",
                  // transition:
                  transition: ".5s ease-in-out",
                }}
                borderRadius=".5rem"
                bg="white"
                key={post.id}
              >
                <DefaultApiprops post={post} key={index} />
              </Grid>
              </li>
            </>
          );
        })}
      </Grid>
      <ViewMoreBtn />
    </>
  );
};

// default api properties
function DefaultApiprops({ post }) {
 
  return (
    <>
      {/* 1st column */}
      <Grid templateRows="1fr .25fr .50fr .10fr" p=".5rem">
        {/* 50% 10% 25% 15% */}
        <GridItem gridRow="1/2" justifySelf="center" mt=".5rem">
          <Image
            h="200px"
            w="320px"
            borderRadius=".5rem"
            objectFit="cover"
            src={post.coverImage}
            alt={post.title}
          />
        </GridItem>

        <GridItem
          gridRow="2/3"
          color="black"
          cursor="pointer"
          placeSelf="center"
          p=".5rem"
        >
          <Link to={`/blog/${post.slug}`}>
            <Text fontWeight="700" color="#111827" textDecoration="none">
              {post.title}
            </Text>
          </Link>
        </GridItem>

        <GridItem p=".5rem" gridRow="3/4">
          <Text color="#424b5a" lineHeight="1.3rem" fontWeight="400">
            {post.brief}
          </Text>
        </GridItem>
        <GridItem p=".5rem" gridRow="4/5">
          <Box d="flex" justifyContent="flex-end">
            <Link to={`/blog/${post.slug}`}>
              <Image src={ReadMore} />
            </Link>
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
