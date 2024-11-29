import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve the JWT token (e.g., from localStorage or cookies)
    const token = localStorage.getItem("jwt_token");

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      setTitle("");
      setContent("");
      alert("Post created successfully");
    } else {
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
