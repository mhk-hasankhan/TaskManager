import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useLocalStorage("filter", "all");

return (
  <div className="min-h-screen bg-slate-100 flex justify-center py-16">
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md px-6 py-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
        Task Manager
      </h1>

      <TaskForm tasks={tasks} setTasks={setTasks} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TaskList tasks={tasks} filter={filter} setTasks={setTasks} />
    </div>
  </div>
);
}

export default App;
