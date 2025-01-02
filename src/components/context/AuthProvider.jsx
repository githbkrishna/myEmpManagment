import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "John Doe",
      email: "b@b.com",
      password: "123",
      tasks: [
        {
          taskCounts: {
            newTask: 1,
            active: 1,
            completed: 2,
            failed: 1,
          },
        },
      ],
      TaskList: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "UI redesign",
          taskDescription: "Redesign the user interface for better UX.",
          taskDate: "2024-10-14",
          category: "Design",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Client feedback",
          taskDescription: "Development of end to end product",
          taskDate: "2024-10-12",
          category: "Development",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Deploy new build",
          taskDescription: "Deploy the latest build to production.",
          taskDate: "2024-10-09",
          category: "DevOps",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Client feedback",
          taskDescription: "Gather feedback from clients after product launch.",
          taskDate: "2024-10-12",
          category: "Support",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Client feedback",
          taskDescription: "Gather feedback from clients after product launch.",
          taskDate: "2024-10-12",
          category: "Support",
        },
      ],
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "c@c.com",
      password: "123",
      tasks: [
        {
          taskCounts: {
            newTask: 2,
            active: 0,
            completed: 3,
            failed: 2,
          },
        },
      ],
      TaskList: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "UI redesign",
          taskDescription: "Redesign the user interface for better UX.",
          taskDate: "2024-10-14",
          category: "Design",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Client feedback",
          taskDescription: "Development of end to end product",
          taskDate: "2024-10-12",
          category: "Development",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Deploy new build",
          taskDescription: "Deploy the latest build to production.",
          taskDate: "2024-10-09",
          category: "DevOps",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Client feedback",
          taskDescription: "Gather feedback from clients after product launch.",
          taskDate: "2024-10-12",
          category: "Support",
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Client feedback",
          taskDescription: "Gather feedback from clients after product launch.",
          taskDate: "2024-10-12",
          category: "Support",
        },
      ],
    },
  ]);

  const handleLogin = (email, password) => {
    if (email === "a@a.com" && password === "123") {
      setUser({ role: "admin" });
    } else if (
      employees.some((emp) => emp.email === email && emp.password === password)
    ) {
      const employee = employees.find(
        (emp) => emp.email === email && emp.password === password
      );
      setUser({ role: "employee", fullName: employee.fullName });
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setUser(null); // Reset the user to log them out
  };

  const assignTask = (employeeId, task) => {
    console.log(task);

    const newTask = { ...task.taskTitle, status: "New Task" }; // Add a status to the task

    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        // console.log(emp.tasks.newTask)

        emp.id === employeeId
          ? { ...emp, tasks: [...emp.tasks.taskTitle, newTask] } // Add the task to the correct employee
          : emp
      )
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        handleLogout,
        employees,
        setEmployees,
        assignTask,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
