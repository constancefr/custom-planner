import React, { useState } from 'react';
import './NewTaskForm.css';

function NewTaskForm({ onSubmit }) {
  // State to manage form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(null); // Use null as the initial value for date picker
  const [selectedType, setSelectedType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  // Sample existing types and courses data
  const existingTypes = ['Homework', 'Project', 'Exam'];
  const existingCourses = ['Math', 'Science', 'History'];

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the new task data object
    const newTaskData = {
      title,
      description,
      dueDate,
      selectedType,
      selectedCourse,
    };

    // Call the onSubmit function passed from the TaskList component with the new task data
    onSubmit(newTaskData);


    /* // You can add the logic to handle form submission here
    // For now, let's just log the form data
    console.log({ title, description, dueDate, selectedType, selectedCourse });

    // Clear the form inputs after submission
    setTitle('');
    setDescription('');
    setDueDate(null);
    setSelectedType('');
    setSelectedCourse('');
    */
  };


  return (
    <div className="new-task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Due Date:
          {/* Implement the date picker here */}
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>
        <label>
          Type:
          {/* Implement the type selection dropdown here */}
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} >
            <option value="">Select Type</option>
            {existingTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          Course:
          {/* Implement the course selection dropdown here */}
          <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} >
            <option value="">Select Course</option>
            {existingCourses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
