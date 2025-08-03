import React, { useState } from "react";
import PatientCard from "../../components/PatientCard";
import patientImg from "../../assets/jitendra.jpg";

const PatientDashboard = () => {
  const [patientInfo, setPatientInfo] = useState({
    name: "Jitendra Yadav",
    age: 20,
    assignedDoctor: "Dr. Deshna ",
    problem: "Heart Problem",
    nextAppointment: generateRandomDate(),
    image: patientImg
  });

  function generateRandomDate() {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 10) + 1;
    today.setDate(today.getDate() + randomDays);
    return today.toDateString();
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Patient Dashboard</h2>
      <PatientCard data={patientInfo} setData={setPatientInfo} />
    </div>
  );
};

export default PatientDashboard;
