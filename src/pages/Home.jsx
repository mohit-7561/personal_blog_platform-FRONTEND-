import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import "./Home.css"; // Importing the CSS file for styling

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchPosts();
      setPosts(response.data);
    };
    getPosts();
  }, []);

  return (
    <div className="home-container">
      <h1>Personal Blog Platform</h1>
      <div className="post-list">
        {posts.length === 0 ? (
          <p className="empty-message">No posts available.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
