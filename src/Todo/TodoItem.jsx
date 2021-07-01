import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, toggleTodo } from "../reducers/todoSlice";

const TodoItem = ({ id, done, title }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div key={id} className="TodoItemContainer">
      <input
        checked={done}
        onChange={() => handleToggleTodo(id)}
        type="checkbox"
      />
      <Link to={`/todo/${id}`}>
        <p className="TodoItemText">{title}</p>
      </Link>
      <button
        onClick={() => handleDeleteTodo(id)}
        className="TodoItemDeleteButton"
      >
        &#x2715;
      </button>
    </div>
  );
};

export default TodoItem;
