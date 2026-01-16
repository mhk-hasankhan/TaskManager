import { useState } from "react";

export default function TaskForm({ tasks, setTasks }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setTasks([
      {
        id: crypto.randomUUID(),
        title,
        status: "todo",
        createdAt: new Date().toISOString(),
      },
      ...tasks,
    ]);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition">
        Add
      </button>
    </form>
  );
}
