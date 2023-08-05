import React, { useState, useEffect, useRef } from 'react';
import './NewTaskModal.css';

function NewTaskModal({ onClose, onSubmit }) {
    // States to manage form inputs
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDueDate] = useState('');
    const [type, setSelectedType] = useState('');
    const [course, setSelectedCourse] = useState('');

    // Sample data
    const existingTypes = ['Homework', 'Project', 'Exam'];
    const existingCourses = ['Math', 'Science', 'History'];

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTaskData = {
            title,
            description,
            date,
            type,
            course,
        };
        onSubmit(newTaskData);
    };

    // Cancel form
    const handleCancel = () => {
        onClose();
    };

    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="modal-overlay">
            <div className="modal" ref={modalRef}>
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
                        <input type="date" value={date} onChange={(e) => setDueDate(e.target.value)} />
                    </label>
                    <label>
                        Type:
                        <select value={type} onChange={(e) => setSelectedType(e.target.value)} >
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
                        <select value={course} onChange={(e) => setSelectedCourse(e.target.value)} >
                            <option value="">Select Course</option>
                            {existingCourses.map((course) => (
                                <option key={course} value={course}>
                                    {course}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default NewTaskModal;
