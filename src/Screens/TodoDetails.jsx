import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { putTodo } from "../Reducer/todoSlice";
import { useEffect } from "react";

const TodoDetails = () => {
  const todoList = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const todo = todoList.find((t) => t.id === Number(id));
    if (todo) {
      setTitle(todo.title);
    }
  }, [id, todoList]);

  const [title, setTitle] = useState("");

  const handleChangeTitle = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      dispatch(putTodo({ id: Number(id), title }));
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
