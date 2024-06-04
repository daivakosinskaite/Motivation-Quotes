import React from 'react';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>{task.priority}</p>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
