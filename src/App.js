import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { title: "test todo", id: 1, done: false },
  ]);

  const handleAddTodo = (event) => {
    if (event.key === "Enter") {
      setTodos([...todos, { title: event.target.value, done: false }]);
      event.target.value = "";
    }
  };

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
          {todos.map((t) => (
            <div className="TodoItemContainer">
              <input type="checkbox"></input>
              <p className="TodoItemText">{t.title}</p>
              <button className="TodoItemDeleteButton">&#x2715;</button>
            </div>
          ))}
        </div>

        <div className="TodoListContainer">
          <h2>Erledigt:</h2>

          <div className="TodoItemContainer">
            <input type="checkbox"></input>
            <p className="TodoItemText">Todo</p>
            <button className="TodoItemDeleteButton">&#x2715;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
