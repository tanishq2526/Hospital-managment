import React from "react";
import "./PatientCard.css";
import LogoutButton from "../components/LogOut";


const PatientCard = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="patient-card">
      <img src={data.image} alt="Patient" className="patient-img" />

      <div className="patient-details">
        <label>
          Name:
          <input name="name" value={data.name} onChange={handleChange} />
        </label>

        <label>
          Age:
          <input name="age" type="number" value={data.age} onChange={handleChange} />
        </label>

        <label>
          Assigned Doctor:
          <input name="assignedDoctor" value={data.assignedDoctor} onChange={handleChange} />
        </label>

        <label>
          Problem:
          <input name="problem" value={data.problem} onChange={handleChange} />
        </label>

        <label>
          Next Appointment:
          <input name="nextAppointment" value={data.nextAppointment} onChange={handleChange} />
        </label>

        <LogoutButton />
      </div>
    </div>
  );
};

export default PatientCard;
