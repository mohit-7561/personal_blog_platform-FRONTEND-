import React, { useState } from "react";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      toast.error("Title and content are required.");
      return;
    }

    setIsLoading(true);

    const token = localStorage.getItem("jwt_token");

    try {
      const response = await fetch(
        "https://server-side-vkfa.onrender.com/api/posts/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, content }),
        }
      );

      if (response.ok) {
        setTitle("");
        setContent("");
        toast.success("Post created successfully");
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.message || "Failed to create post. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create post. Please try again.");
    } finally {
      setIsLoading(false);
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
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating Post..." : "Create Post"}
      </button>
    </form>
  );
};

export default CreatePost;
