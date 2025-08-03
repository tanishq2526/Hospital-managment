// src/pages/Common/Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to Soni Hospital</h1>
      <div className="btn-container">
        <Link to="/login" className="home-btn">Login</Link>
        <Link to="/register" className="home-btn">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
