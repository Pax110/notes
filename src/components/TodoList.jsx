import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, toggleTodo}) => {

    
  return (
    <div>
        {todos.map((todo, index)=>{
            return(<Todo key={index} todos={todo} toggleTodo={toggleTodo}/>)
        })}
      
    </div>
  );
};

export default TodoList;
