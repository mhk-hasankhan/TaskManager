export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex gap-2 mb-6">
      {["all", "todo", "done"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${
            filter === f
              ? "bg-indigo-600 text-white"
              : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
