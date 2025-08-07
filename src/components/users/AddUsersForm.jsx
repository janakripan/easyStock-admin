import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { addUserValidation } from "../../validations/addValidations";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { CiLock, CiUser } from "react-icons/ci";
import { IoMdBusiness } from "react-icons/io";
import {
  mockCategories,
  mockCustomers,
  mockVehicles,
} from "../../constants/mockdata";
import CustomSelect from "../shared/CustomSelect";
import CustomMultiSelect from "../shared/CustomMultiSelect";
import MultiCheckbox from "./MultiCheckbox";

const menuOptions = [
  { id: "consolidate_purchases", name: "Consolidate Purchases" },
  { id: "masters", name: "Masters" },
  { id: "purchase_request", name: "Purchase Request" },
  { id: "driver", name: "Driver" },
];

const AddUsersForm = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [driverSelected, setDriverSelected] = useState(false);
  const initialvalues = {
    userCode: "",
    name: "",
    password: "",
    customer: "",
    categories: [],
    menu: [],
    vehicle: "",
  };

  const handleShowClick = () => {
    setIsShowing(!isShowing);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
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
          <Form className="space-y-4 w-full h-full mx-auto   flex flex-col lg:justify-between">
            <div className="w-full h-full flex flex-col lg:flex-row gap-5 lg:items-start items-center">
              <div className="w-full flex flex-col space-y-4 max-w-xl">
                {/* User code */}
                <label
                  htmlFor="userCode"
                  className="block mb-1 font-medium text-gray-700"
                >
                  User Code{" "}
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className=" backdrop-blur-sm  border border-gray-400 p-2 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <div className="h-full w-fit text-gray-700 text-2xl p-2">
                      <IoMdBusiness />
                    </div>

                    <Field
                      name="userCode"
                      type="text"
                      placeholder="User Code"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 text-gray-800"
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
                  className="block mb-1 font-medium text-gray-700"
                >
                  Name <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className=" backdrop-blur-sm  p-2 border border-gray-400 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <div className="h-full w-fit text-gray-700 text-2xl p-2">
                      <CiUser />
                    </div>

                    <Field
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 text-gray-800"
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
                  className="block mb-1 font-medium text-gray-700"
                >
                  User Code
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className=" transition-all duration-200 backdrop-blur-sm  p-2 w-full border border-gray-400 rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <div className="h-full w-fit text-gray-700 text-2xl p-2">
                      <CiLock />
                    </div>

                    <Field
                      name="password"
                      type={isShowing ? "text" : "password"}
                      placeholder="Password"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 text-gray-800"
                    />
                    <button
                      type="button"
                      onClick={() => handleShowClick()}
                      className="text-2xl text-gray-700 p-2"
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
                  className="block mb-1 font-medium text-gray-700"
                >
                  Customer
                </label>
                <div className=" transition-all duration-200 backdrop-blur-sm   w-full border border-gray-400 rounded-lg">
                  <CustomSelect
                    name="customer"
                    options={mockCustomers}
                    valueKey="id"
                    labelKey="name"
                    placeholder="Select a customer"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col space-y-4 max-w-xl">
                {/* categories multi select dropdown */}
                <label
                  htmlFor="categories"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Categories
                </label>
                <div className=" transition-all duration-200 backdrop-blur-sm   w-full border border-gray-400 rounded-lg">
                  <CustomMultiSelect
                    name="categories"
                    options={mockCategories}
                    valueKey="id"
                    labelKey="name"
                  />
                </div>

                {/* vehicle select dropdown */}
                {driverSelected && (
                  <div>
                    <label
                      htmlFor="vehicle"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Vehicle
                    </label>
                    <div className=" transition-all duration-200 backdrop-blur-sm   w-full border border-gray-400 rounded-lg">
                      <CustomSelect
                        name="vehicle"
                        options={mockVehicles}
                        valueKey="id"
                        labelKey="name"
                        placeholder="Select a vehicle"
                      />
                    </div>
                  </div>
                )}

                {/* menu selection box */}

                <label
                  htmlFor="menu"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Menu options
                </label>
                <MultiCheckbox
                  name="menu"
                  options={menuOptions}
                  setDriverSelected={setDriverSelected}
                />
              </div>
            </div>

            {/* submit button */}
            <div className="w-full h-fit flex justify-end items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className=" max-w-md disabled:cursor-not-allowed bg-gray-200 cursor-pointer w-full   shadow-black/10  hover:bg-primary hover:text-white active:bg-primary/50 active:scale-95 scale-95 hover:scale-100 transition-all duration-300 px-8 p-3 rounded-lg border border-gray-400 hover:border-primary text-xl font-roboto font-semibold"
              >
                {isSubmitting ? "Adding..." : "Add user"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUsersForm;
