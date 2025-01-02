import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../context/AuthProvider'

const EmpDashboard = () => {

  const { user, employees } = useContext(AuthContext);

  // Find the tasks of the logged-in employee
  const employee = employees.find((emp) => emp.fullName === user.fullName);

  return (
    <div>
      <Header/>
      <TaskListNumber employee={employee}/>
      <TaskList employee={employee} />

      {/* <div>
        <h2>Welcome, {employee?.name}</h2>
        <h3>Your Tasks:</h3>
        <ul>
          {employee?.tasks.length ? (
            employee.tasks.map((task, index) => (
              <div key={index}>
                <h4>{task.title}</h4>
                <h4>{task.taskCounts.active}</h4>
                <p>Status: {task.status}</p>
                <p>Due Date: {task.dueDate}</p>
              </div>
            ))
          ) : (
            <p>No tasks assigned.</p>
          )}
        </ul>
      </div> */}

    </div>
  )
}

export default EmpDashboard
