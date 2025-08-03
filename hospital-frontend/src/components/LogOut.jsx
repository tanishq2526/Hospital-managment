import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "8px 16px",
        backgroundColor: "#e63946",
        color: "white",
        border: "none",
        borderRadius: "6px",
        fontWeight: "bold",
        cursor: "pointer",
        position: "absolute",
        top: "20px",
        right: "20px"
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
