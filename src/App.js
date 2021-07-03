import "./App.css";
import { useState } from "react";
import Todo from "./Screens/Todo";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import TodoDetails from "./Screens/TodoDetails";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  changeTodoTitle,
  deleteTodo,
  toggleTodo,
} from "./Reducer/todoSlice";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    /* setTodos(todos.filter((t) => t.id !== id)); */
    dispatch(deleteTodo(id));
  };

  const handleAddTodo = (event) => {
    if (event.key === "Enter") {
      dispatch(addTodo({ id: uuid(), title: event.target.value, done: false }));

      event.target.value = "";
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleChangeTodo = (todo) => {
    dispatch(changeTodoTitle(todo));
    /* setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      })
    ); */
  };

  return (
    <div className="App">
      <Navbar onSearchQuery={(e) => setSearchQuery(e.target.value)} />

      <div className="MainContainer">
        <Switch>
          <Route exact path="/">
            <Todo
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onAddTodo={handleAddTodo}
              onToggleTodo={handleToggleTodo}
              searchQuery={searchQuery}
            />
          </Route>
          <Route exact path="/todo/:id">
            <TodoDetails todos={todos} onChangeTodo={handleChangeTodo} />
          </Route>
          <Route path="*">
            <h1>404 - not found</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
