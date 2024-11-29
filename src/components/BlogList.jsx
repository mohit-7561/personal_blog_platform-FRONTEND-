import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");

    fetch("https://server-side-vkfa.onrender.com/api/posts/myPost", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        setError("Error fetching posts");
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {error && <p>{error}</p>}
      <ul>
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <li key={post._id}>
              <a href={`/post/${post._id}`}>{post.title}</a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BlogList;
