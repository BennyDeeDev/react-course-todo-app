import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../Todo/TodoList";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../Reducer/todoSlice";

const Todo = () => {
  const todoList = useSelector((state) => state.todo.list);
  const searchQuery = useSelector((state) => state.todo.searchQuery);
  const dispatch = useDispatch();
  const activeTodos = todoList.filter(({ done }) => !done);
  const filteredTodos = todoList.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const doneTodos = todoList.filter(({ done }) => done);

  const handleAddTodo = (event) => {
    if (event.key === "Enter") {
      dispatch(addTodo({ id: uuid(), title: event.target.value, done: false }));

      event.target.value = "";
    }
  };

  return (
    <>
      <div className="TodoInputContainer">
        <input
          onKeyDown={handleAddTodo}
          placeholder="Hier Todo hinzufügen"
          className="InputItem"
        />
      </div>

      {searchQuery ? (
        <TodoList title="Suchergebnisse:" list={filteredTodos} />
      ) : (
        <>
          <TodoList title="Zu erledigen" list={activeTodos} />
          <TodoList title="Erledigt" list={doneTodos} />
        </>
      )}
    </>
  );
};

export default Todo;
