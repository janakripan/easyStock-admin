import React from "react";
import Header from "../dashboardLayout/Header";
import AddItemsForm from "./AddItemsForm";


const AddItemsPage = () => {

  

  return (
    <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={" add items"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">
          <h3 className="font-roboto font-semibold text-xl text-gray-800 capitalize">
            New item
          </h3>

          
         
          
          {/* container */}
          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col   ">
           
              <AddItemsForm/>
           
           
          </div>
        </div>

        
      </div>

      
      
    </>
  );
};

export default AddItemsPage;
