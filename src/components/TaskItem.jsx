export default function TaskItem({ task, setTasks }) {
  const toggleStatus = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id
          ? { ...t, status: t.status === "done" ? "todo" : "done" }
          : t
      )
    );
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
      <div
        onClick={toggleStatus}
        className="flex items-center gap-3 cursor-pointer"
      >
        <span
          className={`h-3 w-3 rounded-full ${
            task.status === "done" ? "bg-green-500" : "bg-yellow-400"
          }`}
        />

        <span
          className={`text-slate-800 ${
            task.status === "done" ? "line-through text-slate-400" : ""
          }`}
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={deleteTask}
        className="text-sm text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}
