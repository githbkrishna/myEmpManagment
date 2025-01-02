import React from "react";
import "../../index.css";

const TaskList = ({employee}) => {
  return (
    <div className="TaskList w-full flex justify-between flex-nowrap py-5 overflow-x-auto my-15 gap-5">
        {
          employee.TaskList.map((val)=>{
            return(
              <div className="flex-shrink-0 w-[300px] h-[200px] bg-yellow-400 p-5 rounded-xl">
                <div className="flex justify-between mb-4">
                  <p>{val.taskDate}</p>
                  <button>{val.category}</button>
                </div>
                <h2>{val.taskTitle}</h2>
                <p className="mt-3">{val.taskDescription}</p>
              </div>
            )
          })
        }

      {/* <div className="flex-shrink-0 w-[300px] h-[250px] bg-yellow-400 p-4 rounded-xl">

      </div> */}

    </div>
  );
};

export default TaskList;
