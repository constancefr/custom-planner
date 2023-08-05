import React, { useState, useEffect } from 'react';
import './SubtaskDetails.css';

function SubtaskDetails({ subtask }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubtaskClick = (event) => {
    // Prevent event propagation to the document
    event.stopPropagation();
    // Toggle the pop-up box visibility when a subtask is clicked
    setModalOpen((prev) => !prev);
  };

  useEffect(() => {
    // Function to handle clicks outside the pop-up box
    const handleOutsideClick = (event) => {
      // Check if the clicked element is not inside the pop-up box
      const modal = document.querySelector('.modal');
      if (modal && !modal.contains(event.target)) {
        setModalOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener('click', handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  if (!subtask) {
    return (
      <div className="subtask-box">
        <h3>No Subtasks Available</h3>
      </div>
    );
  }

  return (
    <div className="subtask-box" onClick={handleSubtaskClick}>
      <h3>{subtask.title}</h3>

      {isModalOpen && (
        <div className="modal">
          <p>{subtask.title}</p>
          <p>{subtask.description}</p>
          <p>Date: {subtask.date}</p>
          <p>Comments: {subtask.comments}</p>
        </div>
      )}
    </div>
  );
}

export default SubtaskDetails;