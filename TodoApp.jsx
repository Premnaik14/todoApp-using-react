import React, { useState } from 'react';
import "./TodoApp.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h2>To-Do List App</h2>
      <div className="input-section">
          <input type="text" placeholder="Enter Todo" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <button onClick={addTask}>+</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleCompletion(index)} />
            <span>{task.text}</span>
            <button className="edit">Edit</button>
            <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
