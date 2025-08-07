import React from 'react'
import Header from '../dashboardLayout/Header'
import EditUsersForm from './EditUsersForm'
import { useParams } from 'react-router'
import { mockUsers } from '../../constants/mockdata'

const EditUsersPage = () => {
    const {editId} = useParams()

    const InitialData = mockUsers.find((usr) => String(usr.id) === String(editId))
  return (
    
    <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={" edit user"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">
          <h3 className="font-roboto font-semibold text-xl text-gray-800 capitalize pb-6">
            change user
          </h3>

          
         
          
          {/* container */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col   ">
           
              <EditUsersForm initialData={InitialData}/>
           
           
          </div>
        </div>

        
      </div>

      
      
    </>
  )
}

export default EditUsersPage
