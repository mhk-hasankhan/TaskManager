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

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
2. Install dependencies
bash
Copy code
npm install
3. Run the development server
bash
Copy code
npm run dev
The application will run on:

arduino
Copy code
http://localhost:5173
🧪 Available Scripts
Start development server
bash
Copy code
npm run dev
Build for production
bash
Copy code
npm run build
Preview production build
bash
Copy code
npm run preview
💾 Data Persistence
This application uses browser LocalStorage to store tasks.

Benefits:

Data remains after page refresh

No backend required

Fast and lightweight storage

🌐 Deployment (Netlify)
Build the project
bash
Copy code
npm run build
