import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

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

  const toggleTodo = (id) => {
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

        <div className="TodoListContainer">
          <h2>Zu erledigen:</h2>
          {activeTodos.map((t) => (
            <div key={t.id} className="TodoItemContainer">
              <input
                checked={t.done}
                onChange={() => toggleTodo(t.id)}
                type="checkbox"
              />
              <p className="TodoItemText">{t.title}</p>
              <button
                onClick={() => handleDeleteTodo(t.id)}
                className="TodoItemDeleteButton"
              >
                &#x2715;
              </button>
            </div>
          ))}
        </div>

        <div className="TodoListContainer">
          <h2>Erledigt:</h2>

          {doneTodos.map((t) => (
            <div key={t.id} className="TodoItemContainer">
              <input
                checked={t.done}
                onChange={() => toggleTodo(t.id)}
                type="checkbox"
              />
              <p className="TodoItemText">{t.title}</p>
              <button
                onClick={() => handleDeleteTodo(t.id)}
                className="TodoItemDeleteButton"
              >
                &#x2715;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
