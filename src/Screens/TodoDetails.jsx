import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const TodoDetails = ({ todos, onChangeTodo }) => {
  const { id } = useParams();
  const history = useHistory();
  const todo = todos.find((t) => t.id === id);
  const [title, setTitle] = useState(todo.title);

  const handleChangeTitle = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      onChangeTodo({ ...todo, title });
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
