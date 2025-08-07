import React from 'react'
import Header from '../dashboardLayout/Header'
import AddUomForm from './AddUomForm'

const AddUomPage = () => {
  return (
     <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={" add uom"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">
          <h3 className="font-roboto font-semibold text-xl text-gray-800 capitalize pb-6">
            New unit
          </h3>

          
         
          
          {/* container */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col   ">
           
              <AddUomForm/>
           
           
          </div>
        </div>

        
      </div>

      
      
    </>
  )
}

export default AddUomPage
