import React, { useState } from 'react';

function TaskForm({ onSave }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('nesvarbu');

  const handleSaveTask = () => {
    if (!taskName || !description) return;

    const newTask = {
      name: taskName,
      description: description,
      priority: priority,
    };
    onSave(newTask);
    setTaskName('');
    setDescription('');
    setPriority('nesvarbu');
  };

  return (
    <form className="task-form">
      <div>
        <label>Užduoties pavadinimas</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        <label>Aprašymas</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Prioritetas</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="nesvarbu">nesvarbu</option>
          <option value="svarbu">svarbu</option>
          <option value="skubu">skubu</option>
          <option value="neskubu">neskubu</option>
        </select>
      </div>
      <button type="button" onClick={handleSaveTask}>
        Saugoti
      </button>
    </form>
  );
}

export default TaskForm;
