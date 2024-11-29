import React from "react";
import BlogList from "./components/BlogList";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./styles.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
