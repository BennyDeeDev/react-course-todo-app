import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoList from "../Todo/TodoList";

const Todo = ({ searchQuery }) => {
  const [todos, setTodos] = useState([
    { title: "test todo", id: uuid(), done: false },
  ]);

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleAddTodo = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        { id: uuid(), title: event.target.value, done: false },
      ]);
      event.target.value = "";
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      })
    );
  };

  const activeTodos = todos.filter(({ done }) => !done);
  const filteredTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const doneTodos = todos.filter(({ done }) => done);

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
        <TodoList
          title="Suchergebnisse:"
          list={filteredTodos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
        />
      ) : (
        <>
          <TodoList
            title="Zu erledigen"
            list={activeTodos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
          <TodoList
            title="Erledigt"
            list={doneTodos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </>
      )}
    </>
  );
};

export default Todo;
