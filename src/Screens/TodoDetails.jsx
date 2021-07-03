import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getTodo, changeTitleTodo } from "../reducers/todoSlice";

const TodoDetails = () => {
  const todoList = useSelector((state) => state.todo.list);
  console.log(todoList);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTodo(id));
  }, [dispatch, id]);

  useEffect(() => {
    const todo = todoList.find((t) => t.id === Number(id));

    if (todo) {
      setTitle(todo.title);
    }
  }, [id, todoList]);

  const [title, setTitle] = useState("");

  const handleChangeTitle = (e) => {
    if (e.key === "Enter") {
      dispatch(changeTitleTodo({ id: Number(id), title }));
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
