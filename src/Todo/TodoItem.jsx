import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, putToggleTodo } from "../reducers/todoSlice";

const TodoItem = ({ id, done, title }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = () => {
    dispatch(putToggleTodo({ id, done: !done, title }));
  };

  return (
    <div className="TodoItemContainer">
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
