import TaskItem from "./TaskItem";

export default function TaskList({ tasks, filter, setTasks }) {
  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((t) => t.status === filter);

  if (!filteredTasks.length) {
    return <p className="text-gray-500">No tasks found.</p>;
  }

  return (
  <div className="space-y-3">
    {filteredTasks.map((task) => (
      <TaskItem key={task.id} task={task} setTasks={setTasks} />
    ))}
  </div>
);

}
