import React, { useState } from "react"; // Import React and useState hook
import "./TodoApp.css"; // Import styles

function TodoApp() {
  const [todos, setTodos] = useState([]); // State to store todos
  const [input, setInput] = useState(""); // State to store input text

  const addTodo = () => {
    if (input.trim()) { 
      setTodos([...todos, input]); // Add new todo to the list
      setInput(""); // Clear input field
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove todo at given index
  };

  return (
    <div className="container">
      <h2 className="title">Todo List</h2>
      
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="todo-input"
        />
        <button onClick={addTodo} className="add-button">Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button onClick={() => removeTodo(index)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
