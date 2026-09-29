function TodoFilter({ filter, setFilter }) {
  return (
    <div className="todo-filter">

      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        Active
      </button>

      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>

    </div>
  );
}

export default TodoFilter;