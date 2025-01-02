import React from 'react'
import FailedTask from '../TaskList/FailedTask'
import CompleteTask from '../TaskList/CompleteTask'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'

const TaskListNumber = ({employee}) => {

  return (
    <div className='flex justify-between screen flex-wrap md:flex-nowrap gap-5 my-10'>
        <NewTask employee={employee}/>
        <AcceptTask employee={employee}/>
        <CompleteTask employee={employee}/>
        <FailedTask employee={employee}/>
    </div>
  )
}

export default TaskListNumber