import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import API from "../../utils/axios";
import img2 from "../../assets/img2.svg";

import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", formData);
      alert("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      alert("Registration Failed: " + err.response.data.msg);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Full Name" required />
        <input name="email" onChange={handleChange} placeholder="Email" required />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
        <select name="role" onChange={handleChange} required>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        <button type="submit">Register</button>
        <p>
  Already have an account? <Link to="/login">Login</Link>
</p>

      </form>
      <img src={ img2 }alt="" style={{ width: "300px" }} />
    </div>
  );
};

export default Register;
