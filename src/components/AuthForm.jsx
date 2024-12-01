import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AuthForm = ({ isRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, password };
      const response = isRegister
        ? await registerUser(data)
        : await loginUser(data);

      if (isRegister) {
        navigate("/login");
        toast.success("Registration successful! Please log in.");
      } else {
        localStorage.setItem("token", response.data.token);
        navigate("/posts");
        toast.success("Login successful!");
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Something went wrong!";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <h2>{isRegister ? "Register" : "Login"}</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AuthForm;
