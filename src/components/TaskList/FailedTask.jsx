import React from "react";

const FailedTask = ({ employee }) => {
  return (
    <div className="h-40 w-[45%] bg-red-300 p-5 rounded">
      {
        employee.tasks.map((task, index) => (
          <div key={index}>
            <h2 className="text-5xl my-2">{task.taskCounts.failed}</h2>
            <h3 className="text-3xl font-medium">failed Task</h3>
          </div>
        ))
      }
    </div>
  );
};

export default FailedTask;
