import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const CreateTask = () => {
  const { employees, assignTask } = useContext(AuthContext);
  
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetEmployee = employees.find(
      (emp) => emp.fullName.toLowerCase() === assignTo.toLowerCase()
    );

    if (!targetEmployee) {
      alert('Employee not found. Please provide a valid employee name.');
      return;
    }

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      assignTo,
      dueDate,
      category,
    };

    // Assign the task to the employee
    assignTask(targetEmployee.id, newTask);

    // Reset form fields
    setTaskTitle('');
    setTaskDescription('');
    setAssignTo('');
    setDueDate('');
    setCategory('');

    alert(`Task "${taskTitle}" assigned to ${assignTo}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full flex justify-between flex-wrap sm:flex-nowrap my-10 border-2 border-indigo-900">
        <div className="w-full px-10 py-5">
          <div className="my-2">
            <h3>Task Title</h3>
            <input
              type="text"
              className="w-full"
              placeholder="Task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div className="my-2">
            <h3>Date</h3>
            <input
              type="date"
              className="w-full"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="my-2">
            <h3>Assign to</h3>
            <input
              type="text"
              className="w-full"
              placeholder="Employee name"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            />
          </div>
          <div className="my-2">
            <h3>Category</h3>
            <input
              type="text"
              className="w-full"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full px-10 pb-5 sm:py-5">
          <div>
            <h3>Description</h3>
            <textarea
              className="w-full h-[215px]"
              placeholder="Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="text-center w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
