import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    onAddTodo(trimmedText);

    setText("");
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;