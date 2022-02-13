import { useState, useRef, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "notes.todos";
console.log("Local storage key", LOCAL_STORAGE_KEY)
function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const handleClearTodos = () =>{
    const newTodos = todos.filter(todo=>!todo.complete)
    setTodos(newTodos)
  }
  const handleTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") {
      return;
    } else {
      setTodos((prevTodos, index) => {
        return [...prevTodos, {id:uuidv4(), name: name, complete: false }];
      });
     
      todoNameRef.current.value = null;
    }
  };
  return (
    <div>{console.log("todos",todos)}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleTodo}>Add To List</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo=>!todo.complete).length} left to do</div>
    </div>
  );
}

export default App;
