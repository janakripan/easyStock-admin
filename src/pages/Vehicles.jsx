import React, { useState } from "react";
import Header from "../components/dashboardLayout/Header";
import VehiclesTable from "../components/vehicles/VehiclesTable";
import { MdAdd } from "react-icons/md";
import SearchBar from "../components/shared/Searchbar";
import { GrClose } from "react-icons/gr";
import AddVehicle from "../components/vehicles/AddVehicle";
import EditVehicle from "../components/vehicles/EditVehicle";

const Items = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  return (
    <>
      <div className="w-full h-screen  flex flex-col max-w-screen-xl  mx-auto  relative ">
        <Header pageName={"Vehicles"} onAddClick={setAddOpen} />

        {/* content */}

        <div className="w-full flex-grow min-h-0 overflow-y-auto flex flex-col">
          {/* mobile screen searchBar */}
          <div className="w-full h-fit px-4 flex justify-center md:justify-end lg:hidden ">
            <SearchBar />
          </div>

          <div className="w-full h-fit flex flex-col mt-3  ">
            <VehiclesTable
              onEdit={(item) => {
                setEditItem(item);
                setEditOpen(true);
              }}
            />
          </div>
        </div>

        {/* add button mobile and tablet */}
        <div>
          <button
            onClick={() => setAddOpen(true)}
            className={`lg:hidden p-2.5 rounded-lg bg-gradient-to-br from-primary/40 via-primary/20 to-primary/40 backdrop-blur-2xl text-white fixed z-30 right-8 bottom-8 text-2xl shadow-lg shadow-black/15 active:bg-primary/20 transition`}
          >
            <MdAdd />
          </button>
        </div>
      </div>

      {/* add vehicle modal */}
      <div
        className={`absolute inset-0 bg-base-100/40 backdrop-blur-md z-50  flex flex-col items-center p-2 overflow-y-auto  ${
          addOpen ? "flex" : "hidden"
        }`}
      >
        <div className="w-full max-w-screen-lg mx-auto   flex flex-col items-center justify-center backdrop-blur-2xl  bg-base-200/20 rounded-lg drop-shadow-2xl  drop-shadow-white/10 border-2 border-white/10 p-4">
          <div className="w-full h-fit flex justify-end">
            <button
              onClick={() => setAddOpen(false)}
               className=" hover:text-white bg-gradient-to-b from-primary/60  via-primary/30 to-primary/60 p-3 rounded-lg hover:bg-primary/50 font-bold "
            >
              <GrClose />
            </button>
          </div>

          {/* addForm */}

          <div className="w-full h-fit ">
            <AddVehicle />
          </div>
        </div>
      </div>

      {editOpen && (
        <div className="absolute inset-0 bg-base-100/40 backdrop-blur-md z-50 h-full flex flex-col items-center p-2 overflow-y-auto">
          <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center justify-center backdrop-blur-2xl bg-base-200/20 rounded-lg drop-shadow-2xl border-2 border-white/10 p-4">
            <div className="w-full h-fit flex justify-end">
              <button
                onClick={() => setEditOpen(false)}
                 className=" hover:text-white bg-gradient-to-b from-primary/60  via-primary/30 to-primary/60 p-3 rounded-lg hover:bg-primary/50 font-bold "
              >
                <GrClose />
              </button>
            </div>

            <div className="w-full h-fit">
              {/* Pass the selected item to the edit form */}
              <EditVehicle initialData={editItem} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Items;
