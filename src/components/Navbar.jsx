import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/posts" className="navbar-link">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="navbar-link">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
