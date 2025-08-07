import React from 'react'
import AddVehicleForm from './AddVehicleForm'
import Header from '../dashboardLayout/Header'

const AddVehiclesPage = () => {
  return (
    <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={" add vehicle"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">
          <h3 className="font-roboto font-semibold text-xl text-gray-800 capitalize pb-6">
            New vehicle
          </h3>

          
         
          
          {/* container */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col overflow-y-scroll hide-scrollbar  ">
           
              <AddVehicleForm/>
           
           
          </div>
        </div>

        
      </div>

      
      
    </>
  )
}

export default AddVehiclesPage
