import React from "react";
import Header from "../components/dashboardLayout/Header";
import { MdAdd } from "react-icons/md";
import SearchBar from "../components/shared/Searchbar";
import { useNavigate } from "react-router";
import UsersTable from '../components/users/UsersTable'
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { mockUsers } from "../constants/mockdata";
import { FiDownload } from "react-icons/fi";


const Users = () => {
   const navigate = useNavigate()

   //download data
  const handleDownloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("users");

    //  headers
    worksheet.columns = [
      { header: "User ID", key: "usercode", width: 10 },
      { header: "User Name", key: "name", width: 50 },
      { header: "Default Customer", key: "customer", width: 10 },
      { header: "Categories", key: "categories", width: 20 },
    ];

    mockUsers.forEach((item) => {
      const flattened = {};

      Object.entries(item).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          flattened[key] = value.join(", ");
        } else {
          flattened[key] = value;
        }
      });

      worksheet.addRow(flattened);
    });

    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFCCE5FF" },
      };
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    saveAs(blob, `user-data-${formattedDate}.xlsx`);
  };


  return (
    <>
      <div className="w-full h-screen  flex flex-col  relative ">
        <Header pageName={"Users"}  />

        {/* content */}

        <div className="w-full h-full min-h-0 overflow-hidden   flex flex-col p-5">

          
         
          

          <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col p-4 lg:p-6  ">
            <div className="w-full h-fit flex justify-between items-center py-6 gap-5">

              <SearchBar/>

              <div className="flex flex-row items-center justify-between gap-x-5">
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

                <button 
                onClick={()=>handleDownloadExcel()}
                className=" px-4 bg-gray-900 py-3 rounded-lg  border border-gray-300 text-white hover:bg-primary hover:border-primary transition-all duration-300 font-roboto font-medium " >
                  <FiDownload/>
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
