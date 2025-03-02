import React, { useEffect, useState } from "react";
import { client } from "../../../lib/axios";
import PostItem from "../Post/PostItem";
const Posts = () => {
  const [posts, setPosts] = useState();

  const GetApiPosts = async () => {
    try {
      const response = await client.get("/api/article/timeline");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetApiPosts()
  }, []);

  return <div>
    <PostItem posts={posts}/>
    <PostItem posts={posts}/>
    </div>;
};

export default Posts;
