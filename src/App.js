import "./App.css";
import { useState } from "react";
import Todo from "./Screens/Todo";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <Navbar onSearchQuery={(e) => setSearchQuery(e.target.value)} />

      <div className="MainContainer">
        <Switch>
          <Route exact path="/">
            <Todo searchQuery={searchQuery} />
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
