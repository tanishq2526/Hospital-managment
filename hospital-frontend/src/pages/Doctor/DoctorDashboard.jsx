import React from "react";
import DoctorCard from "../../components/DoctorCard";
import LogoutButton from "../../components/LogOut";
import doctorImg from "../../assets/himanshu.png";

const DoctorDashboard = () => {
  const doctorInfo = {
    name: "Dr. Himanshu Gupta",
    phone: "+91 98765 43210",
    specialist: "Cardiologist",
    patients: ["Amit Sharma", "Rekha Kumari", "Raj Patel"],
    workingDays: "Mon - Fri",
    image: doctorImg,
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Top Header */}
      <div style={styles.topBar}>
        <LogoutButton />
      </div>

      {/* Heading */}
      <h2 style={styles.heading}>Doctor Dashboard</h2>

      {/* Card */}
      <DoctorCard data={doctorInfo} />
    </div>
  );
};

export default DoctorDashboard;

const styles = {
  dashboardContainer: {
    padding: "40px 60px",
    minHeight: "100vh",
    backgroundColor: "#f5f7fa",
    boxSizing: "border-box",
  },
  topBar: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    color: "#1e293b",
    fontWeight: "700",
    marginBottom: "30px",
  },
};
