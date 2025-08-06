import React from "react";
import { addItemsValidation } from "../../validations/addValidations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ImageDropzone from "../shared/ImageDropzone";
import { mockCategories, mockUOM } from "../../constants/mockdata";
import CustomSelect from "../shared/CustomSelect";

const AddItems = () => {
  const initialValues = {
    name: "",
    barcode: "",
    category: "",
    tax: "",
    uom: "",
    price: "",
    image: null,
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("item added", values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <div className="w-full h-fit rounded-lg flex flex-col  p-4 lg:px-8 gap-y-6   ">
      <Formik
        initialValues={initialValues}
        validationSchema={addItemsValidation}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 w-full mx-auto  flex flex-col">
            <div className="w-full  h-fit gap-4 flex flex-col lg:flex-row items-center">
              {/* input fields */}
              <div className="w-full h-fit max-w-xl  space-y-4">
                {/* name*/}
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-text/40"
                >
                  Item Name{" "}
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-black/10  p-2 border border-base-100 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <Field
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/80 "
                    />
                  </div>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Barcode*/}
                <label
                  htmlFor="barcode"
                  className="block mb-1 font-medium text-text/40"
                >
                  Barcode <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-black/10  p-2 border border-base-100 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <Field
                      name="barcode"
                      type="text"
                      autoFocus
                      placeholder="SDCFS21541674"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:secondary-content/80 "
                    />
                  </div>
                  <ErrorMessage
                    name="barcode"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* category select dropdown */}
                <label
                  htmlFor="category"
                  className="block mb-1 font-medium text-text/40"
                >
                  Category
                </label>
                <div className="bg-base-200 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-black/10   w-full border border-base-100 rounded-lg">
                  <CustomSelect
                    name="category"
                    options={mockCategories}
                    valueKey="id"
                    labelKey="name"
                    placeholder="Select a category"
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>


                 {/* tax*/}
                <label
                  htmlFor="tax"
                  className="block mb-1 font-medium text-text/40"
                >
                 Tax 
                </label>
                <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-black/10  p-2 border border-base-100 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                   

                    <Field
                      name="tax"
                      type="text"
                      placeholder="Tax"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/80 "
                    />
                  </div>
                  <ErrorMessage
                    name="tax"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>


                 {/* uom select dropdown */}
                <label
                  htmlFor="uom"
                  className="block mb-1 font-medium text-text/40"
                >
                  UOM
                </label>
                <div className="bg-base-200 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-black/10   w-full border border-base-100 rounded-lg">
                  <CustomSelect
                    name="uom"
                    options={mockUOM}
                    valueKey="id"
                    labelKey="name"
                    placeholder="UOM"
                  />
                  <ErrorMessage
                    name="uom"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>


                 {/* price*/}
                <label
                  htmlFor="tax"
                  className="block mb-1 font-medium capitalize text-text/40"
                >
                 price 
                </label>
                <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-black/10  p-2 border border-base-100 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                   

                    <Field
                      name="price"
                      type="text"
                      placeholder="price"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-secondary-content/80 "
                    />
                  </div>
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>


              </div>

              {/* drag and drop images */}
              <div className="h-full  flex flex-col justify-center">
                <label className="block mb-1 font-medium text-text/40">
                  Upload Image
                </label>
                <ImageDropzone name="image" />
              </div>
            </div>

            {/* submit button */}
            <div className="w-full h-fit flex justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className=" max-w-xl disabled:cursor-not-allowed cursor-pointer w-full bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60 shadow-black/10  hover:bg-primary/50 hover:text-white active:bg-primary/20 active:scale-95 scale-95 hover:scale-100 transition-all duration-300 px-8 p-3 rounded-lg border border-primary/10 text-xl font-roboto font-semibold"
              >
                {isSubmitting ? "Adding..." : "Add Item"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddItems;
