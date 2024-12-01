import React, { useState } from "react";
import { createPost } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostForm = ({ fetchPosts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    // Check if user is logged in
    if (!token) {
      toast.error("Please log in first!");
      return;
    }

    const newPost = { title, content };

    try {
      await createPost(newPost, token);
      toast.success("Post created successfully!");
      fetchPosts();
      setTitle("");
      setContent("");
    } catch (err) {
      toast.error("Error creating post. Please try again!");
      console.error("Error creating post", err);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default PostForm;
