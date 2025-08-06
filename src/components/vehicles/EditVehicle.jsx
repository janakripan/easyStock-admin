import React from "react";
import { AddVehicleSchema } from "../../validations/addValidations";
import { FaCarAlt } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaTruck } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { mockCategories } from "../../constants/mockdata";
import CustomMultiSelect from "../shared/CustomMultiSelect";
import ImageDropzone from "../shared/ImageDropzone";

const EditVehicle = ({initialData}) => {
  const initialvalues = {
     vehicleNumber: initialData.number || "",
    vehicleName: initialData.name || "",
    driverName: initialData.driverName || "",
    contact: initialData.driverContact || "",
    category: initialData.assignedCategory || [],
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
          <Form className="space-y-4 w-full mx-auto max-w-xl  flex flex-col">


            {/* drag and drop images */}
              <div className="h-full  flex flex-col justify-center">
                <label htmlFor="image" className="block mb-1 font-medium text-text/40">
                  Upload Image
                </label>
                <ImageDropzone name="image" />
              </div>


            {/* vehicleNumber */}
            <label
              htmlFor="vehicleNumber"
              className="block mb-1 font-medium text-text/40"
            >
              Vehicle Number <span className="text-red-500 font-semibold"> *</span>
            </label>
            <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-dark/10  border border-base-100 p-2 w-full rounded-lg">
              <div className="w-full flex flex-row items-center ">
                

                <Field
                  name="vehicleNumber"
                  type="text"
                  placeholder="Vehicle Number"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/70 text-text"
                />

                <div className="h-full w-fit text-text/40 text-2xl p-2">
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
              className="block mb-1 font-medium text-text/40"
            >
              Vehicle Name <span className="text-red-500 font-semibold"> *</span>
            </label>
            <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-dark/10  p-2 border border-base-100 w-full rounded-lg">
              <div className="w-full flex flex-row items-center ">
               

                <Field
                  name="vehicleName"
                  type="text"
                  placeholder="Vehicle Name"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/70 text-text"
                />
                 <div className="h-full w-fit text-text/40 text-2xl p-2">
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
              className="block mb-1 font-medium text-text/40"
            >
              Driver Name <span className="text-red-500 font-semibold"> *</span>
            </label>
            <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-dark/10  p-2 border border-base-100 w-full rounded-lg">
              <div className="w-full flex flex-row items-center ">
               

                <Field
                  name="driverName"
                  type="text"
                  placeholder="Driver Name"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/70 text-text"
                />

                 <div className="h-full w-fit text-text/40 text-2xl p-2">
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
              className="block mb-1 font-medium text-text/40"
            >
              Driver contact <span className="text-red-500 font-semibold"> *</span>
            </label>
            <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-dark/10  p-2 border border-base-100 w-full rounded-lg">
              <div className="w-full flex flex-row items-center ">
               

                <Field
                  name="contact"
                  type="tel"
                  placeholder="Driver contact"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/70 text-text"
                />

                 <div className="h-full w-fit text-text/40 text-2xl p-2">
                  <FaUser />
                </div>
              </div>
              <ErrorMessage
                name="contact"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>


            {/* categories multi select dropdown */}
            <label
              htmlFor="category"
              className="block mb-1 font-medium text-text/40"
            >
              Categories
            </label>
            <div className="bg-base-200 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-dark/10   w-full border border-base-100 rounded-lg">
              <CustomMultiSelect
                name="category"
                options={mockCategories}
                valueKey="id"
                labelKey="name"
              />
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>



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

export default EditVehicle;
