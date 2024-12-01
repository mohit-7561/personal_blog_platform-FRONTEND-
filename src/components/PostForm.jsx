import React, { useState } from "react";
import { createPost } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS for styling

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
      toast.success("Post created successfully!"); // Success toast
      fetchPosts(); // Fetch the posts after creation
      setTitle(""); // Clear the title
      setContent(""); // Clear the content
    } catch (err) {
      toast.error("Error creating post. Please try again!"); // Error toast
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
