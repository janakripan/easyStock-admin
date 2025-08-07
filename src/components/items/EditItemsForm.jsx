import React from "react";
import { addItemsValidation } from "../../validations/addValidations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ImageDropzone from "../shared/ImageDropzone";
import { mockCategories, mockUOM } from "../../constants/mockdata";
import CustomSelect from "../shared/CustomSelect";

const EditItemsForm = ({ initialData }) => {
  const initialValues = {
    name: initialData?.name || "",
    barcode: initialData?.barcode || "",
    category: initialData?.category || "",
    tax: initialData?.tax || "",
    uom: initialData?.uom || "",
    price: initialData?.price || "",
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
            <div className="w-full  h-fit gap-4 flex flex-col lg:flex-row items-start">
              {/* left side input fields */}
              <div className="w-full h-fit max-w-xl  space-y-5">
                {/* name*/}
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Item Name{" "}
                  <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className="   p-2 border border-gray-300 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <Field
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 "
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
                  className="block mb-1 font-medium text-gray-700"
                >
                  Barcode <span className="text-red-500 font-semibold"> *</span>
                </label>
                <div className="   p-2 border border-gray-300 w-full rounded-lg">
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
                  className="block mb-1 font-medium text-gray-700"
                >
                  Category
                </label>
                <div className=" transition-all duration-200    w-full border border-gray-300 rounded-lg">
                  <CustomSelect
                    name="category"
                    options={mockCategories}
                    valueKey="id"
                    labelKey="name"
                    placeholder="Select a category"
                  />
                </div>

                {/* tax*/}
                <label
                  htmlFor="tax"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Tax
                </label>
                <div className="   p-2 border border-gray-300 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <Field
                      name="tax"
                      type="text"
                      placeholder="Tax"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 "
                    />
                  </div>
                  <ErrorMessage
                    name="tax"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* right side input fields */}
              <div className="w-full h-fit max-w-xl  space-y-4">
                {/* uom select dropdown */}
                <label
                  htmlFor="uom"
                  className="block mb-1 font-medium text-gray-700"
                >
                  UOM
                </label>
                <div className=" transition-all duration-200    w-full border border-gray-300 rounded-lg">
                  <CustomSelect
                    name="uom"
                    options={mockUOM}
                    valueKey="id"
                    labelKey="name"
                    placeholder="UOM"
                  />
                </div>

                {/* price*/}
                <label
                  htmlFor="tax"
                  className="block mb-1 font-medium capitalize text-gray-700"
                >
                  price
                </label>
                <div className="   p-2 border border-gray-300 w-full rounded-lg">
                  <div className="w-full flex flex-row items-center ">
                    <Field
                      name="price"
                      type="text"
                      placeholder="price"
                      className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-gray-400 "
                    />
                  </div>
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* drag and drop images */}
                <div className="h-full  flex flex-col justify-center">
                  <label className="block mb-1 font-medium text-gray-700">
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
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditItemsForm;
