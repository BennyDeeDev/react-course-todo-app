import React from "react";
import TodoList from "../Todo/TodoList";

const Todo = ({
  todos,
  onAddTodo,
  onDeleteTodo,
  onToggleTodo,
  searchQuery,
}) => {
  const activeTodos = todos.filter(({ done }) => !done);
  const filteredTodos = todos.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const doneTodos = todos.filter(({ done }) => done);

  return (
    <>
      <div className="TodoInputContainer">
        <input
          onKeyDown={onAddTodo}
          placeholder="Hier Todo hinzufügen"
          className="InputItem"
        />
      </div>

      {searchQuery ? (
        <TodoList
          title="Suchergebnisse:"
          list={filteredTodos}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ) : (
        <>
          <TodoList
            title="Zu erledigen"
            list={activeTodos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
          <TodoList
            title="Erledigt"
            list={doneTodos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </>
      )}
    </>
  );
};

export default Todo;
