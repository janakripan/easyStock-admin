import React from 'react'
import Header from '../dashboardLayout/Header'
import EditUomForm from './EditUomForm'
import { useParams } from 'react-router'
import { mockUOM } from '../../constants/mockdata'

const EditUomPage = () => {

    const {editId} = useParams()

    const initialData= mockUOM.find((um)=>String(um.id)===String(editId))
  return (
    <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={" Edit uom"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">
          <h3 className="font-roboto font-semibold text-xl text-gray-800 capitalize pb-6">
            change unit
          </h3>

          
         
          
          {/* container */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col   ">
           
              <EditUomForm initialData={initialData}/>
           
           
          </div>
        </div>

        
      </div>

      
      
    </>
  )
}

export default EditUomPage
