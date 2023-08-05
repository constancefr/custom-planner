import React, { useState } from 'react'
import './TaskDetails.css';
import SubtaskDetails from './SubtaskDetails';

function TaskDetails({ selectedTask }) {
  const [subtasks, setSubtasks] = useState([
    // Sample data
    {
      id: 1,
      title: 'Subtask 1',
      description: 'Description for Subtask 1',
      date: '2023-07-25',
      comments: 'Sample comments for Subtask 1',
    },
    {
      id: 2,
      title: 'Subtask 2',
      description: 'Description for Subtask 2',
      date: '2023-07-28',
      comments: 'Sample comments for Subtask 2',
    },
  ]);

  return (
    <div className="task-details">
      <h2>Task Details</h2>
      {selectedTask ? (
        <div>
          <h3>{selectedTask.description}</h3>
          <p>Due date: {selectedTask.date}</p>
          <p>Type: {selectedTask.type}</p>
          <p>Course: {selectedTask.course}</p>

          {/* Render components for each subtask */}
          {(selectedTask.subtasks.length !== 0) ? (
            <div>
              <h3>Subtasks:</h3>
              <div className='subtasks'>
                {selectedTask.subtasks.map((subtask) => (
                  <SubtaskDetails key={subtask.id} subtask={subtask} />
                ))}
              </div>
            </div>
          ) : (
            <p>No subtasks for this task.</p>
          )}
        </div>
      ) : (
        <p>No task selected.</p>
      )}
    </div>
  );
}

export default TaskDetails;
