import React from "react";
import { Link } from "react-router-dom";

const TodoItem = ({ id, done, title, onToggleTodo, onDeleteTodo }) => {
  return (
    <div key={id} className="TodoItemContainer">
      <input checked={done} onChange={() => onToggleTodo(id)} type="checkbox" />
      <Link to={`/todo/${id}`}>
        <p className="TodoItemText">{title}</p>
      </Link>
      <button onClick={() => onDeleteTodo(id)} className="TodoItemDeleteButton">
        &#x2715;
      </button>
    </div>
  );
};

export default TodoItem;
