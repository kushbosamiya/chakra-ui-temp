import React from 'react'
import { useParams } from "react-router-dom";


const CurrentDrug = () => {
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
  return (
    <></>
  )
}

export default CurrentDrug