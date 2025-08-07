import React from 'react'
import Header from '../dashboardLayout/Header'
import AddUsersForm from './AddUsersForm'

const AddUsersPage = () => {
  return (
    <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={" add user"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">
          <h3 className="font-roboto font-semibold text-xl text-gray-800 capitalize pb-6">
            New user
          </h3>

          
         
          
          {/* container */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col   ">
           
              <AddUsersForm/>
           
           
          </div>
        </div>

        
      </div>

      
      
    </>
  )
}

export default AddUsersPage
