import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

function App() {
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

  const doneTodos = todos.filter(({ done }) => done);

  return (
    <div className="App">
      <div className="HeaderContainer">
        <div className="HeaderContent">
          <img style={{ width: 120 }} src={logo} alt="React-Logo" />
          <h1>React Todo</h1>
        </div>
        <div className="SearchInputContainer">
          <input className="InputItem" placeholder="Suche" />
        </div>
      </div>

      <div className="MainContainer">
        <div className="TodoInputContainer">
          <input
            onKeyDown={handleAddTodo}
            placeholder="Hier Todo hinzufügen"
            className="InputItem"
          />
        </div>

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
      </div>
    </div>
  );
}

export default App;
