import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, putTodo } from "../Reducer/todoSlice";

const TodoItem = ({ id, done, title }) => {
  const dispatch = useDispatch();
  return (
    <div key={id} className="TodoItemContainer">
      <input
        checked={done}
        onChange={() => dispatch(putTodo({ id, done: !done, title }))}
        type="checkbox"
      />
      <Link to={`/todo/${id}`}>
        <p className="TodoItemText">{title}</p>
      </Link>
      <button
        onClick={() => dispatch(deleteTodo(id))}
        className="TodoItemDeleteButton"
      >
        &#x2715;
      </button>
    </div>
  );
};

export default TodoItem;
