import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { addUserValidation } from "../../validations/addValidations";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { CiLock, CiUser } from "react-icons/ci";
import { IoMdBusiness } from "react-icons/io";
import { mockCategories, mockCustomers, mockVehicles } from "../../constants/mockdata";
import CustomSelect from "../shared/CustomSelect";
import CustomMultiSelect from "../shared/CustomMultiSelect";
import MultiCheckbox from "./MultiCheckbox";


const menuOptions = [
  { id: "consolidate_purchases", name: "Consolidate Purchases" },
  { id: "masters", name: "Masters" },
  { id: "purchase_request", name: "Purchase Request" },
  { id: "driver", name: "Driver" },
];

const EditUser = ({initialData}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [driverSelected , setDriverSelected] = useState(false)
  const initialvalues = {
    userCode:initialData.usercode || "",
    name:initialData.name || "",
    password:initialData.password || "",
    customer:initialData.customer || "",
    categories:initialData.categories || [],
    menu:initialData.menu || [],
    vehicle:initialData.vehicle || "",
  };

  const handleShowClick = () => {
    setIsShowing(!isShowing);
  };

  const handleSubmit = (values,{setSubmitting,resetForm}) => {
   
    console.log("Form submitted:", values);
    setSubmitting(false);
    resetForm();
    
   
  };

  return (
    <div className="w-full h-fit rounded-lg flex flex-col  p-4 lg:px-8 gap-y-6   ">
      <Formik
        initialValues={initialvalues}
        validationSchema={addUserValidation}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
       {({ isSubmitting }) => (
          <Form className="space-y-4 w-full mx-auto max-w-xl  flex flex-col">
            {/* User code */}
            <label
              htmlFor="userCode"
              className="block mb-1 font-medium text-text/40"
            >
              User Code <span className="text-red-500 font-semibold"> *</span>
            </label>
            <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-dark/10  border border-base-100/5 p-2 w-full rounded-lg">
              <div className="w-full flex flex-row items-center ">
                <div className="h-full w-fit text-text/40 text-2xl p-2">
                  <IoMdBusiness />
                </div>

                <Field
                  name="userCode"
                  type="text"
                  placeholder="User Code"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/70 text-text"
                />
              </div>
              <ErrorMessage
                name="userCode"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* name*/}
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-text/40"
            >
              Name <span className="text-red-500 font-semibold"> *</span>
            </label>
            <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-dark/10  p-2 border border-base-100/5 w-full rounded-lg">
              <div className="w-full flex flex-row items-center ">
                <div className="h-full w-fit text-text/40 text-2xl p-2">
                  <CiUser />
                </div>

                <Field
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/70 text-text"
                />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* password */}
            <label
              htmlFor="password"
              className="block mb-1 font-medium text-text/40"
            >
              User Code
              <span className="text-red-500 font-semibold"> *</span>
            </label>
            <div className="bg-base-200 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-dark/10  p-2 w-full border border-base-100/5 rounded-lg">
              <div className="w-full flex flex-row items-center ">
                <div className="h-full w-fit text-text/40 text-2xl p-2">
                  <CiLock />
                </div>

                <Field
                  name="password"
                  type={isShowing ? "text" : "password"}
                  placeholder="Password"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/70 text-text"
                />
                <button
                  type="button"
                  onClick={() => handleShowClick()}
                  className="text-2xl text-text/40 p-2"
                >
                  {isShowing ? <FiEye /> : <FiEyeOff />}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* customer select dropdown */}
            <label
              htmlFor="customer"
              className="block mb-1 font-medium text-text/40"
            >
              Customer
            </label>
            <div className="bg-base-200 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-dark/10   w-full border border-base-100/5 rounded-lg">
              <CustomSelect
                name="customer"
                options={mockCustomers}
                valueKey="id"
                labelKey="name"
                placeholder="Select a customer"
              />
              <ErrorMessage
                name="customer"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* categories multi select dropdown */}
            <label
              htmlFor="categories"
              className="block mb-1 font-medium text-text/40"
            >
              Categories
            </label>
            <div className="bg-base-200 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-dark/10   w-full border border-base-100/5 rounded-lg">
              <CustomMultiSelect
                name="categories"
                options={mockCategories}
                valueKey="id"
                labelKey="name"
              />
              <ErrorMessage
                name="categories"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>


             {/* vehicle select dropdown */}
           {driverSelected&&(
            <div>
               <label
              htmlFor="vehicle"
              className="block mb-1 font-medium text-text/40"
            >
              Vehicle
            </label>
            <div className="bg-base-200 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-dark/10   w-full border border-base-100 rounded-lg">
              <CustomSelect
                name="vehicle"
                options={mockVehicles}
                valueKey="id"
                labelKey="name"
                placeholder="Select a vehicle"
              />
              <ErrorMessage
                name="vehicle"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            </div>
           )}



           {/* menu selection box */}

            <label
              htmlFor="menu"
              className="block mb-1 font-medium text-text/40"
            >
              Menu options
            </label>
            <MultiCheckbox
              name="menu"
              options={menuOptions}
              setDriverSelected={setDriverSelected}
            />


               {/* submit button */}
            <div className="w-full h-fit flex justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className=" disabled:cursor-not-allowed cursor-pointer w-full bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60 shadow-black/10  hover:bg-primary/50 hover:text-white active:bg-primary/20 active:scale-95 scale-95 hover:scale-100 transition-all duration-300 px-8 p-3 rounded-lg border border-primary/10 text-xl font-roboto font-semibold"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditUser;
