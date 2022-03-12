import React,{useState,useEffect} from "react";
import { useParams} from "react-router-dom"

function Threepost() {
  // const [posts, setposts] = useState([]);
  const [Singleposts, setSingleposts] = useState([]);
  const { id } = useParams();
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

    // var DisplaysinglePost = Path.find((element) => {
    //   if (Path) {
    //     console.log("thai gyu seth");
    //   }
    // });
    // console.log(DisplaysinglePost);

    // logic-1

    let DisplayThreePost = [];

    if (Path.length > 0) {
      for (let index = 0; index < 3; index++) {
        DisplayThreePost = [...DisplayThreePost, Path[index]];
      }
      console.log(DisplayThreePost);

      let blog = DisplayThreePost.find((blog) => blog.slug === id);
      if (blog) {
        console.log("this :", blog);
        setSingleposts(blog);
      }
    }

    // logic-2
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div >
        <h3>{Singleposts.title}</h3>

        <p>{Singleposts.brief}</p>
      </div>
    </>
  );
}
export default Threepost;
