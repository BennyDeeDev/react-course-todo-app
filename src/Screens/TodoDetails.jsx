import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeTodoTitle } from "../Reducer/todoSlice";

const TodoDetails = () => {
  const todoList = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const todo = todoList.find((t) => t.id === id);
  const [title, setTitle] = useState(todo.title);

  const handleChangeTitle = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      dispatch(changeTodoTitle({ ...todo, title }));
      history.push("/");
    }
  };

  return (
    <div className="TodoInputContainer">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ändere Todo Titel"
        className="InputItem"
        onKeyDown={handleChangeTitle}
      />
    </div>
  );
};

export default TodoDetails;
