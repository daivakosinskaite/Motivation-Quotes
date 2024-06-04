import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddTask = () => {
    setShowForm(true);
  };

  const handleSaveTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowForm(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <button onClick={handleAddTask}>Pridėti naują užduotį</button>
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
        {showForm && <TaskForm onSave={handleSaveTask} />}
        <TaskList tasks={filteredTasks} />
      </header>
    </div>
  );
}

export default App;
