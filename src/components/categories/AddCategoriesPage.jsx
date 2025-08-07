import React from 'react'
import AddCategoriesForm from './AddCategoriesForm'
import Header from '../dashboardLayout/Header'

const AddCategoriesPage = () => {
  return (
    <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={" add category"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">
          <h3 className="font-roboto font-semibold text-xl text-gray-800 capitalize">
            New category
          </h3>

          
         
          
          {/* container */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col   ">
           
              <AddCategoriesForm/>
           
           
          </div>
        </div>

        
      </div>

      
      
    </>
  )
}

export default AddCategoriesPage
