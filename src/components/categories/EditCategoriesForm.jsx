import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { addCategoriesValidation } from "../../validations/addValidations";
import ImageDropzone from "../shared/ImageDropzone";

const EditCategoriesForm = ({initialData}) => {
  const initialValues = {
    name:initialData.name || "",
    image: null,
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("categories added", values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <div className="w-full h-fit rounded-lg flex flex-col  p-4 lg:px-8 gap-y-6   ">
      <Formik
        initialValues={initialValues}
        validationSchema={addCategoriesValidation}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 w-full mx-auto max-w-xl  flex flex-col">
            {/* name*/}
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-gray-700"
            >
              Category Name <span className="text-red-500 font-semibold"> *</span>
            </label>
            <div className=" p-2 border border-gray-300 w-full rounded-lg">
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

            <div className="h-full  flex flex-col justify-center">
              <label className="block mb-1 font-medium text-gray-700 ">
                Upload Image
              </label>
              <ImageDropzone name="image" />
            </div>

            {/* submit button */}
            <div className="w-full h-fit flex justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className=" max-w-md disabled:cursor-not-allowed bg-gray-200 cursor-pointer w-full   shadow-black/10  hover:bg-primary hover:text-white active:bg-primary/50 active:scale-95 scale-95 hover:scale-100 transition-all duration-300 px-8 p-3 rounded-lg border border-gray-400 hover:border-primary text-xl font-roboto font-semibold"
              >
                {isSubmitting ? "Adding..." : "Add Category"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditCategoriesForm;
