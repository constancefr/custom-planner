import React from 'react';
import './TaskBox.css';

function TaskBox({ task, onClick }) {
  return (
    <div className="task-box" onClick={() => onClick(task)}>
      <h3>{task.title}</h3>
    </div>
  );
}

export default TaskBox;
