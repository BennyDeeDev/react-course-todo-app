import "./App.css";
import Todo from "./Screens/Todo";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import TodoDetails from "./Screens/TodoDetails";
import { useEffect } from "react";
import { getTodoList } from "./reducers/todoSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />

      <div className="MainContainer">
        <Switch>
          <Route exact path="/">
            <Todo />
          </Route>
          <Route exact path="/todo/:id">
            <TodoDetails />
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
