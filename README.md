# Task Manager (Mini Jira / Todo Pro)

A simple and efficient task management web application built with React.  
This project demonstrates real-world frontend development concepts such as CRUD operations, component-based architecture, state management, and local data persistence.

---

## 🚀 Features

- Create new tasks
- Mark tasks as completed (Done)
- Delete tasks
- Filter tasks by status (All / Todo / Done)
- Persistent storage using LocalStorage
- Responsive layout
- Clean and modular component structure

---

## 🛠 Tech Stack

- React (Vite)
- JavaScript (ES6+)
- Tailwind CSS
- Browser LocalStorage API

---

## 📂 Project Structure

src/
│
├── components/
│ ├── TaskForm.jsx
│ ├── TaskItem.jsx
│ ├── TaskList.jsx
│ └── FilterBar.jsx
│
├── hooks/
│ └── useLocalStorage.js
│
├── App.jsx
├── main.jsx
└── index.css



---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/mhk-hasankhan/task-manager.git
cd task-manager
### 2. Install dependencies
npm install
### 3. Run the development server
npm run dev

## The application will run on:

http://localhost:5173
🧪 Available Scripts
Start development server
npm run dev
## Build for production

npm run build
## Preview production build

npm run preview
💾 Data Persistence
This application uses browser LocalStorage to store tasks.

Benefits:

Data remains after page refresh

No backend required

Fast and lightweight storage

