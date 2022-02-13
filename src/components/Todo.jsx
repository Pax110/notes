import React from "react";

const Todo = ({todos, toggleTodo}) => {
  
  
  function handleTodoCilck() {
      console.log("todos.id is",todos.id)
    toggleTodo(todos.id);
  }
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={todos.complete}
        onChange={handleTodoCilck}
      />
      <lable>{todos.name}</lable>
    </div>
  );
};

export default Todo;
