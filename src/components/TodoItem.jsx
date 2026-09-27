import { useState } from "react";

function TodoItem({
  todo,
  onDelete,
  onToggle,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    const trimmedText = editText.trim();

    if (!trimmedText) {
      return;
    }

    onEdit(todo.id, trimmedText);

    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <input
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEdit();
            }

            if (e.key === "Escape") {
              handleCancel();
            }
          }}
          autoFocus
        />
      ) : (
        <span
          className={
            todo.completed
              ? "todo-text completed"
              : "todo-text"
          }
        >
          {todo.text}
        </span>
      )}

      <div className="todo-actions">

        {isEditing ? (
          <>
            <button
              className="save-btn"
              onClick={handleEdit}
            >
              Save
            </button>

            <button
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
          </>
        )}

      </div>

    </div>
  );
}

export default TodoItem;