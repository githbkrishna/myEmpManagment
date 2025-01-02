import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AdminDashboard = () => {

  const {employees} = useContext(AuthContext)
  console.log(employees)
  

  return (
    <div>
      <Header/>

      <CreateTask/>

      <div>
        <h2 className='text-center text-2xl font-medium'>Employees</h2>
        {
          employees.map((val)=>{
            return(
              <div className='flex justify-evenly px-5 border-2 border-fuchsia-800 my-2'>
                <h3>{val.fullName}</h3>
                <p>{val.email}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AdminDashboard