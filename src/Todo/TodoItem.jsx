import React from "react";

const TodoItem = ({ id, done, title, onToggleTodo, onDeleteTodo }) => {
  return (
    <div key={id} className="TodoItemContainer">
      <input checked={done} onChange={() => onToggleTodo(id)} type="checkbox" />
      <p className="TodoItemText">{title}</p>
      <button onClick={() => onDeleteTodo(id)} className="TodoItemDeleteButton">
        &#x2715;
      </button>
    </div>
  );
};

export default TodoItem;
