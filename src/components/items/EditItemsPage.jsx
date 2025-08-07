import React from 'react'
import Header from '../dashboardLayout/Header'
import EditItemsForm from './EditItemsForm'
import { useParams } from 'react-router'
import { mockItems } from '../../constants/mockdata'

const EditItemsPage = () => {

  const {editId} = useParams()

  const initialData = mockItems.find((itm)=>String(itm.id)===String(editId))
  console.log(initialData)
  return (
    


    <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={" edit items"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">
          <h3 className="font-roboto font-semibold text-xl text-gray-800 capitalize pb-6">
            Change item
          </h3>

          
         
          
          {/* container */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col overflow-y-scroll hide-scrollbar  ">
           
              <EditItemsForm initialData={initialData}/>
           
           
          </div>
        </div>

        
      </div>

      
      
    </>
  )
}

export default EditItemsPage
