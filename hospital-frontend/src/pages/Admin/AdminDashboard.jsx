import React from "react";
import "./AdminDashboard.css";
import doctorImg from "../../assets/himanshu.png";
import patientImg from "../../assets/jitendra.jpg";
import LogoutButton from "../../components/LogOut";
const AdminDashboard = () => {
  const doctors = [
    { name: "Dr. Himanshu", specialist: "Cardiologist", patients: ["Ravi", "Sneha"], available: "Mon-Fri" },
    { name: "Dr. Raj", specialist: "Neurologist", patients: ["Aman"], available: "Tue-Sat" },
    { name: "Dr. Sameer", specialist: "Orthopedic", patients: ["Kavya", "Raj"], available: "Mon-Wed" },
    { name: "Dr. Abdul", specialist: "Dermatologist", patients: ["Zoya"], available: "Wed-Fri" },
    { name: "Dr. Rahul", specialist: "ENT", patients: ["Mehul"], available: "Mon-Sat" }
  ];

  const patients = [
    { name: "Jitendra", problem: "Heart Pain", age: 40, assignedDoc: "Dr. Himanshu" },
    { name: "Sandy Shah", problem: "Skin Allergy", age: 29, assignedDoc: "Dr. Abdul" },
    { name: "Aman Verma", problem: "Migraine", age: 23, assignedDoc: "Dr. Raj" },
    { name: "Kamal Sharma", problem: "Fracture", age: 35, assignedDoc: "Dr. Sameer" },
    { name: "Ali Khan", problem: "Cough", age: 27, assignedDoc: "Dr. Rahul" }
  ];

  return (
    <div className="admin-dashboard">
      {/* Section 1 */}
      <section className="admin-summary">
        <h1>Welcome Admin</h1>
        {/* <p>Total Doctors: {doctors.length}</p>
        <p>Total Patients: {patients.length}</p>
        <p>Appointments Today: 12</p>
        <p>Occupied Beds: 18 / 30</p> */}
        <div className="detail-cards">
        <div className="card-admin"><h2>
          TOTAL DOCTORS: {doctors.length}</h2></div>
        <div className="card-admin">
          <h2>Total Patients: {patients.length}</h2>
        </div>
        <div className="card-admin">
          <h2>Occupied Beds: 18 / 30</h2>
        </div>
        </div>
      </section>

      {/* Section 2 - Doctor Cards */}
      <section className="doctor-section">
        <h2>Doctors Overview</h2>
        <div className="mini-cards">
          {doctors.map((doc, index) => (
            <div key={index} className="mini-card">
              <img src={doctorImg} alt="doctor" className="mini-img" />
              <div>
                <p><strong>{doc.name}</strong></p>
                <p>{doc.specialist}</p>
                <p>Patients: {doc.patients.join(", ")}</p>
                <p>Availability: {doc.available}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - Patient Cards */}
      <section className="patient-section">
        <h2>Patients Overview</h2>
        <div className="mini-cards">
          {patients.map((pat, index) => (
            <div key={index} className="mini-card">
              <img src={patientImg} alt="patient" className="mini-img" />
              <div>
                <p><strong>{pat.name}</strong></p>
                <p>Problem: {pat.problem}</p>
                <p>Age: {pat.age}</p>
                <p>Assigned: {pat.assignedDoc}</p>
              </div>
            </div>
          ))}
          <LogoutButton />
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
