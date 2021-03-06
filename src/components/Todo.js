import React, { useState } from "react";

export default function Todo({
  id,
  completed,
  name,
  deleteTask,
  editTask,
  toggleTaskCompleted,
}) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  const editingTemplate = (
    <form
      data-testid="edit-task-form"
      onSubmit={(e) => {
        e.preventDefault();
        editTask(id, newName);
        setNewName("");
        setEditing(false);
      }}
    >
      <div className="form-group">
        <label
          className="todo-label"
          data-testid="todo-edit-label"
          htmlFor={id}
        >
          New name for {name}
        </label>
        <input
          id={id}
          data-testid="edit-task-input"
          className="todo-text"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          data-testid="edit-task-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {name}</span>
        </button>
        <button
          type="submit"
          data-testid="edit-task-save"
          className="btn btn__primary todo-edit"
        >
          Save
          <span className="visually-hidden">new name for {name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          type="checkbox"
          id={id}
          defaultChecked={completed}
          data-testid="checkbox"
          onChange={() => {
            toggleTaskCompleted(id);
          }}
        />
        <label
          className="todo-label"
          id={`tid-${id}`}
          data-testid="name-of-task"
          htmlFor={id}
        >
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          onClick={() => {
            setEditing(true);
          }}
          data-testid="edit-task"
          className="btn"
          id={`edit-${id}`}
        >
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          id={`delete-${id}`}
          data-testid="delete-task"
          className="btn btn__danger"
          onClick={() => {
            deleteTask(id);
          }}
        >
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="todo">{!isEditing ? viewTemplate : editingTemplate}</li>
  );
}