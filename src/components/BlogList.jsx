import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Retrieve the JWT token from localStorage (or cookies/session storage)
    const token = localStorage.getItem("jwt_token");

    // Fetch posts with authorization header
    fetch("/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the JWT token
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <li key={post._id || post.id}>
              <a href={`/post/${post._id || post.id}`}>{post.title}</a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BlogList;
