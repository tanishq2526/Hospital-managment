import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import API from "../../utils/axios";
import "./Login.css";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", formData);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // redirect by role
      if (user.role === "admin") navigate("/admin/dashboard");
      else if (user.role === "doctor") navigate("/doctor/dashboard");
      else navigate("/patient/dashboard");

    } catch (err) {
      alert("Login Failed: " + err.response.data.msg);
    }
  };

  return (

    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} placeholder="Email" required />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        <p><Link to="/forgot-password">Forgot Password?</Link></p>
      </form>

    </div>
  );
};

export default Login;
