import React from "react";
import BlogList from "./components/BlogList";
import CreatePost from "./components/CreatePost";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<CreatePost />} />
        {/* Fallback route for 404 */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
