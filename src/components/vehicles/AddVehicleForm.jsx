import React from "react";
import { AddVehicleSchema } from "../../validations/addValidations";
import { FaCarAlt } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaTruck } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { mockCategories } from "../../constants/mockdata";
import CustomMultiSelect from "../shared/CustomMultiSelect";
import ImageDropzone from "../shared/ImageDropzone";

const AddVehicleForm = () => {
  const initialvalues = {
    vehicleNumber: "",
    vehicleName: "",
    driverName: "",
    contact: "",
    category: [],
    image: null,
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
        validationSchema={AddVehicleSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 w-full h-full mx-auto   flex flex-col justify-between">
            <div className="w-full h-full flex flex-col lg:flex-row gap-5 lg:items-start">
              <div className="w-full max-w-xl h-full flex flex-col space-y-4">
                {/* vehicleNumber */}
                <label
                  htmlFor="vehicleNumber"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Vehicle Number{" "}
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className=" border border-gray-500 p-2 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <Field
                      name="vehicleNumber"
                      type="text"
                      placeholder="Vehicle Number"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 text-gray-900"
                    />

                    <div className="h-full w-fit text-gray-700 text-2xl p-2">
                      <FaCarAlt />
                    </div>
                  </div>
                  <ErrorMessage
                    name="vehicleNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* vehicleName*/}
                <label
                  htmlFor="vehicleName"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Vehicle Name{" "}
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className=" p-2 border border-gray-500 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <Field
                      name="vehicleName"
                      type="text"
                      placeholder="Vehicle Name"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 text-gray-900"
                    />
                    <div className="h-full w-fit text-gray-700 text-2xl p-2">
                      <FaTruck />
                    </div>
                  </div>
                  <ErrorMessage
                    name="vehicleName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* driverName*/}
                <label
                  htmlFor="driverName"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Driver Name{" "}
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className=" p-2 border border-gray-500 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <Field
                      name="driverName"
                      type="text"
                      placeholder="Driver Name"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 text-gray-900"
                    />

                    <div className="h-full w-fit text-gray-700 text-2xl p-2">
                      <FaUser />
                    </div>
                  </div>
                  <ErrorMessage
                    name="driverName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* contact*/}
                <label
                  htmlFor="contact"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Driver contact{" "}
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className=" p-2 border border-gray-500 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <Field
                      name="contact"
                      type="tel"
                      placeholder="Driver contact"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 text-gray-900"
                    />

                    <div className="h-full w-fit text-gray-700 text-2xl p-2">
                      <FaUser />
                    </div>
                  </div>
                  <ErrorMessage
                    name="contact"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="w-full max-w-xl h-full flex flex-col space-y-4">
                {/* categories multi select dropdown */}
                <label
                  htmlFor="category"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Categories
                </label>
                <div className="bg-base-200 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-dark/10   w-full border border-gray-500 rounded-lg">
                  <CustomMultiSelect
                    name="category"
                    options={mockCategories}
                    valueKey="id"
                    labelKey="name"
                  />
                 
                </div>

                {/* drag and drop images */}
                <div className="h-full  flex flex-col justify-center">
                  <label
                    htmlFor="image"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Upload Image
                  </label>
                  <ImageDropzone name="image" />
                </div>
              </div>
            </div>

            {/* submit button */}
            <div className="w-full h-fit flex justify-end items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className=" max-w-md disabled:cursor-not-allowed bg-gray-200 cursor-pointer w-full   shadow-black/10  hover:bg-primary hover:text-white active:bg-primary/50 active:scale-95 scale-95 hover:scale-100 transition-all duration-300 px-8 p-3 rounded-lg border border-gray-400 hover:border-primary text-xl font-roboto font-semibold"
              >
                {isSubmitting ? "Adding..." : "Add vehicle"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddVehicleForm;
