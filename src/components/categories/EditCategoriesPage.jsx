import React from 'react'
import EditCategoriesForm from './EditCategoriesForm'
import { useParams } from 'react-router'
import { mockCategories } from '../../constants/mockdata'
import Header from '../dashboardLayout/Header'

const EditCategoriesPage = () => {
    const {editId} = useParams()

    const initialData = mockCategories.find((cat)=>String(cat.id) === String(editId))
    console.log(initialData)
  return (
     <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={" Edit category"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">
          <h3 className="font-roboto font-semibold text-xl text-gray-800 capitalize">
            change category
          </h3>

          
         
          
          {/* container */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col   ">
           
              <EditCategoriesForm initialData={initialData}/>
           
           
          </div>
        </div>

        
      </div>

      
      
    </>
  )
}

export default EditCategoriesPage
