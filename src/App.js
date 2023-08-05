import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import Calendar from './components/Calendar';

function App() {

  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="App">
      <div className="left-panel">
        <div className="top-panel">
          <TaskDetails selectedTask={selectedTask} />
        </div>
        <div className="bottom-panel">
          <TaskList onTaskClick={handleTaskClick} />
        </div>
      </div>
      <div className="right-panel">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
