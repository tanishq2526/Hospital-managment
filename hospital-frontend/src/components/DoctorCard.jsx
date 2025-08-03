import React from "react";
import "./DoctorCard.css";
import doctorImg from "../assets/himanshu.png";

const DoctorCard = ({ data }) => {
  return (
    <div className="doctor-card">
      <img src={doctorImg} alt="Doctor" className="doctor-img" />
      <div className="doctor-details">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Specialist:</strong> {data.specialist}</p>
        <p><strong>Allotted Patients:</strong> {data.patients.join(", ")}</p>
        <p><strong>Working Days:</strong> {data.workingDays}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
