import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { addCategoriesValidation } from "../../validations/addValidations";
import ImageDropzone from "../shared/ImageDropzone";

const EditCategories = ({initialData}) => {
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
              className="block mb-1 font-medium "
            >
              Category Name <span className="text-red-500 font-semibold"> *</span>
            </label>
            <div className="bg-base-200 backdrop-blur-sm shadow-lg shadow-black/10  p-2 border border-base-100 w-full rounded-lg">
              <div className="w-full flex flex-row items-center ">
               
                <Field
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:secondary-content/80 "
                />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>


            <div className="h-full  flex flex-col justify-center">
                <label className="block mb-1 font-medium ">
                  Upload Image
                </label>
                <ImageDropzone name="image" />
              </div>

              {/* submit button */}
            <div className="w-full h-fit flex justify-center items-center">
             <button
                type="submit"
                disabled={isSubmitting}
                className=" max-w-xl disabled:cursor-not-allowed cursor-pointer w-full bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60 shadow-black/10  hover:bg-primary/50 hover:text-white active:bg-primary/20 active:scale-95 scale-95 hover:scale-100 transition-all duration-300 px-8 p-3 rounded-lg border border-primary/10 text-xl font-roboto font-semibold"
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

export default EditCategories;
