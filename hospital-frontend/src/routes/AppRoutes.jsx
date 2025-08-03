import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Common/Home"
import Login from "../pages/Common/Login";
import Register from "../pages/Common/Register";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import DoctorDashboard from "../pages/Doctor/DoctorDashboard";
import PatientDashboard from "../pages/Patient/PatientDashboard";
import ForgotPassword from "../pages/Common/ForgotPassword";

// Route Guard
import ProtectedRoute from "../components/ProtectedRoute";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />


      {/* Protected Dashboard Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctor/dashboard"
        element={
          <ProtectedRoute>
            <DoctorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/patient/dashboard"
        element={
          <ProtectedRoute>
            <PatientDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
