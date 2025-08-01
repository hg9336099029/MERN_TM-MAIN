# Fullstack Task Manager (MERN)

## 📝 Overview

The **Cloud-Based Task Manager** is a web application designed to streamline team task management. Built using the **MERN stack** (MongoDB, Express.js, React, and Node.js), this platform provides a user-friendly interface for efficient task assignment, tracking, and collaboration. It caters to administrators and regular users, offering comprehensive features to enhance productivity and organization.

---

## ❓ Why / Problem

In a dynamic work environment, effective task management is crucial for team success. Traditional methods of task tracking through spreadsheets or manual systems can be cumbersome and prone to errors. The Cloud-Based Task Manager aims to address these challenges by providing a centralized platform for task management, enabling seamless collaboration and improved workflow efficiency.

---

## 📚 Background

With the rise of remote work and dispersed teams, there is a growing need for tools that facilitate effective communication and task coordination. This system addresses that need using modern web technologies to create an intuitive and responsive solution. The MERN stack ensures scalability, while Redux Toolkit, Headless UI, and Tailwind CSS enhance UX and performance.

---

## 👑 Admin Features

### 👥 User Management
- Create admin accounts
- Add and manage team members

### 📌 Task Assignment
- Assign tasks to individual or multiple users
- Update task details and status

### 🧾 Task Properties
- Label tasks as **todo**, **in progress**, or **completed**
- Assign priority levels: **high**, **medium**, **normal**, **low**
- Add and manage sub-tasks

### 📂 Asset Management
- Upload task assets like images

### 🚫 User Account Control
- Disable or activate user accounts
- Permanently delete or trash tasks

---

## 🙋‍♂️ User Features

### 🧑‍💻 Task Interaction
- Change task status (e.g., to completed or in progress)
- View detailed task information

### 💬 Communication
- Add comments or chat under task activities

---

## 🌐 General Features

- Secure authentication and role-based access control
- Profile update and password change support
- Dashboard with activity summary
- Filter tasks by status (todo, in progress, completed)

---

## ⚙️ Technologies Used

### 🖥️ Frontend
- React (Vite)
- Redux Toolkit
- Headless UI
- Tailwind CSS

### 🔧 Backend
- Node.js with Express.js

### 🗃️ Database
- MongoDB (MongoDB Atlas)

---

## 🚀 SETUP INSTRUCTIONS

### 🛠 Server Setup

#### 📄 Environment Variables
Create a `.env` file in the `server/` folder with the following:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=8800
NODE_ENV=development
## ☁️ Set Up MongoDB

### Visit MongoDB Atlas

1. Create an account or sign in: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a DB user
4. Add your IP to the whitelist
5. Connect and copy your connection string
6. Paste it in your `.env` file

---

## ▶️ Run Server

```bash
cd server
npm install
npm start
💻 Client Setup
📄 Environment Variables
Create a .env file in the client/ folder with:

env
Copy
Edit
VITE_APP_BASE_URL=http://localhost:8800
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
▶️ Run Client
bash
Copy
Edit
cd client
npm install
npm run dev
Visit: http://localhost:3000
