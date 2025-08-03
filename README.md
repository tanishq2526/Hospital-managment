# 🏥 Soni Hospital – Smart Healthcare Dashboard

A modern full-stack **Hospital Management System** built with **React, Node.js, Express, and MongoDB**. Designed to simplify healthcare operations with role-based dashboards for **Admin, Doctor**, and **Patient**.

---

## 🔗 Live Preview

🚧 Coming Soon (Deployment in progress...)

---

## ✨ Features

### 🔐 Authentication
- Role-based login: Admin, Doctor, Patient
- JWT-protected routes
- Passwords encrypted with Bcrypt

### 👑 Admin Panel
- Dashboard with live hospital stats
- Doctor & Patient management
- Appointment tracking across departments

### 👨‍⚕️ Doctor Panel
- Daily schedule overview
- Access assigned patient records
- Update appointment status

### 👤 Patient Panel
- Book appointments with specialists
- View assigned doctor & health history
- Self-editable profile

---

## ⚙️ Tech Stack

| Tech           | Description                           |
|----------------|---------------------------------------|
| React + Vite   | Lightning-fast frontend               |
| React Router   | Page navigation                       |
| Express.js     | Backend server & APIs                 |
| MongoDB        | NoSQL database                        |
| Node.js        | Runtime for backend                   |
| JWT + Bcrypt   | Secure Auth system                    |
| CSS Modules    | Scoped, aesthetic UI styles           |

---

## 📁 Folder Structure

├── hospital-frontend
│ └── src
│ ├── components/
│ ├── pages/
│ ├── routes/AppRoutes.jsx
│ └── main.jsx
├── hospital-backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env
│ └── server.js

---

## 🚀 Getting Started

```bash
# Clone this repo
git clone https://github.com/tanishq2526/hospital-management

# Navigate to frontend
cd hospital-frontend
npm install
npm run dev

# Open new terminal for backend
cd hospital-backend
npm install
npm run dev
```
