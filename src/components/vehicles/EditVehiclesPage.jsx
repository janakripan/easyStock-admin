import React from 'react'
import Header from '../dashboardLayout/Header'
import EditVehicleForm from './EditVehicleForm'
import { useParams } from 'react-router'
import { mockVehicles } from '../../constants/mockdata'

const EditVehiclesPage = () => {
    const {editId} = useParams()

    const initialData = mockVehicles.find((v) => String(v.id) === String(editId))

    console.log(initialData)
  return (
      <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={" edit vehicle"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">
          <h3 className="font-roboto font-semibold text-xl text-gray-800 capitalize pb-6">
            change vehicle
          </h3>

          
         
          
          {/* container */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col   ">
           
              <EditVehicleForm initialData={initialData}/>
           
           
          </div>
        </div>

        
      </div>

      
      
    </>
  )
}

export default EditVehiclesPage
