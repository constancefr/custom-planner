import React, { useState } from 'react';
import './TaskList.css';
import TaskBox from './TaskBox';
import NewTaskModal from './NewTaskModal';

function TaskList({ onTaskClick }) {
  const [tasks, setTasks] = useState([
    // Sample data
    {
      id: 1,
      title: 'Complete Project Proposal',
      description: 'description',
      date: '2023-07-22',
      type: 'Assignment',
      course: 'Computer Science',
      subtasks: [
        { id: 1, title: 'Research', description: 'Gather information', date: '2023-07-18' },
        { id: 2, title: 'Outline', description: 'Create a project plan', date: '2023-07-19' },
        { id: 3, title: 'Write', description: 'Compose proposal document', date: '2023-07-20' },
        { id: 4, title: 'Review', description: 'Check for errors', date: '2023-07-21' }
      ]
    },
    {
      id: 2,
      title: 'Prepare Presentation',
      description: 'need more practice',
      date: '2023-07-25',
      type: 'Project',
      course: 'Public Speaking',
      subtasks: [
        { id: 1, title: 'Gather Content', description: 'Collect information and visuals', date: '2023-07-20' },
        { id: 2, title: 'Create Slides', description: 'Design presentation slides', date: '2023-07-22' },
        { id: 3, title: 'Practice Delivery', description: 'Rehearse the presentation', date: '2023-07-24' },
        { id: 4, title: 'Review Feedback', description: 'Incorporate feedback from peers', date: '2023-07-25' }
      ]
    },
  ]);

  // Adding new task
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);

  const toggleNewTaskModal = () => {
    setShowNewTaskModal(!showNewTaskModal);
  };

  const handleFormSubmit = (newTaskData) => {
    const newTask = {
      id: tasks.length + 1,
      ...newTaskData,
      subtasks: [],
    };
    setTasks([...tasks, newTask]);
    setShowNewTaskModal(false); // hide form
  };

  // Selecting a task
  const [selectedTask, setSelectedTask] = useState(null);


  return (
    <div className="task-list">
      <h2>Task List</h2>
      <button onClick={() => toggleNewTaskModal()}>+ New Task</button>

      <div className="task-objects">
        {tasks.map((task) => (
          <TaskBox key={task.id} task={task} onClick={() => onTaskClick(task)} />
        ))}

        {showNewTaskModal && (
          <NewTaskModal onClose={toggleNewTaskModal} onSubmit={handleFormSubmit} />
        )}
      </div>
    </div>
  );
}

export default TaskList;
