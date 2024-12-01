import { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import PostForm from "../components/PostForm";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchPosts();
      setPosts(response.data);
    };
    getPosts();
  }, []);

  return (
    <div>
      <PostForm fetchPosts={() => {}} />
    </div>
  );
};

export default PostsPage;
