import React from "react";
import Header from "../components/dashboardLayout/Header";
import { MdAdd } from "react-icons/md";
import SearchBar from "../components/shared/Searchbar";
import { useNavigate } from "react-router";
import UsersTable from '../components/users/UsersTable'

const Users = () => {
   const navigate = useNavigate()

  return (
    <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={"Users"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">

          
         
          

          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col p-4 lg:p-6  ">
            <div className="w-full h-fit flex justify-between items-center py-6 ">

              <SearchBar/>

              <div>
                <button
                onClick={()=>navigate(`/admin/users/create`)}
                 className="hidden md:flex flex-row  items-center gap-1 px-8 py-3 rounded-lg text-gray-900 border border-gray-300 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 font-roboto font-medium ">

                  <div>
                    <MdAdd/>
                  </div>
                  <span>
                    Add user
                  </span>

                </button>
              </div>

            </div>
            <div className="w-full h-full overflow-hidden">
              <UsersTable/>
            </div>
          </div>
        </div>

        {/* add button mobile and tablet */}
        <div>
          <button
            onClick={() =>navigate(`/admin/users/create`) }
            className={`lg:hidden p-2.5 rounded-lg bg-gradient-to-br from-primary/40 via-primary/20 to-primary/40 backdrop-blur-2xl fixed z-30 right-8 bottom-8 text-2xl shadow-lg shadow-black/15 active:bg-primary/20 transition`}
          >
            <MdAdd />
          </button>
        </div>
      </div>

      
      
    </>
  );
};

export default Users;
