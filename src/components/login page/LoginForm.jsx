import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../../validations/loginValidation";
import { IoMdBusiness } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const LoginForm = () => {
  const [isShowing, setIsShowing] = useState(false);
  const validationSchema = loginSchema;


  // login logic 
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    console.log("Login form submitted with:", values);
    // Your login logic here
    setSubmitting(false);
    resetForm();
  };

  const handleShowClick = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="w-full h-fit rounded-lg flex flex-col backdrop-blur-2xl  bg-gradient-to-br from-white/10 via-white/5 to-white/5 drop-shadow-2xl  drop-shadow-white/10 border-2 border-white/10 p-4 lg:px-8 gap-y-6  ">
      <h2 className="text-3xl text-white/80 text-center font-semibold mb-4">
        Easy Stock
      </h2>

      <Formik
        initialValues={{
          tenantName: "",
          userCode: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Tenant Name */}
            <div className="bg-black/10 backdrop-blur-sm shadow-lg shadow-black/10  border border-white/5 p-2 w-full rounded-lg">
              <div className="w-full flex flex-row items-center ">
                <div className="h-full w-fit text-white/40 text-2xl p-2">
                  <IoMdBusiness />
                </div>

                <Field
                  name="tenantName"
                  type="text"
                  placeholder="Tenant Name"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-white/40 text-white"
                />
              </div>
              <ErrorMessage
                name="tenantName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* user code */}
            <div className="bg-black/10 backdrop-blur-sm shadow-lg shadow-black/10  p-2 border border-white/5 w-full rounded-lg">
              <div className="w-full flex flex-row items-center ">
                <div className="h-full w-fit text-white/40 text-2xl p-2">
                  <CiUser />
                </div>

                <Field
                  name="userCode"
                  type="text"
                  placeholder="User Code"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-white/40 text-white"
                />
              </div>
              <ErrorMessage
                name="userCode"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* password */}
            <div className="bg-black/10 transition-all duration-200 backdrop-blur-sm shadow-lg shadow-black/10  p-2 w-full border border-white/5 rounded-lg">
              <div className="w-full flex flex-row items-center ">
                <div className="h-full w-fit text-white/40 text-2xl p-2">
                  <CiLock />
                </div>

                <Field
                  name="password"
                  type={isShowing ? "text" : "password"}
                  placeholder="Password"
                  className="w-full  px-2 py-2 rounded-md focus:outline-none placeholder:text-white/40 text-white"
                />
                <button
                  type="button"
                  onClick={() => handleShowClick()}
                  className="text-2xl text-white/40 p-2"
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

            {/* Remember Me */}
            <Field name="rememberMe">
              {({ field }) => (
                <div className="flex items-center gap-2 pt-4 pl-3 text-white/70">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    {...field}
                    checked={field.value}
                    className="accent-white/50 w-4 h-4"
                  />
                  <label htmlFor="rememberMe" className="text-sm">
                    Remember Me
                  </label>
                </div>
              )}
            </Field>

            {/* login button */}
            <div className="w-full h-fit flex justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-primary/80 disabled:cursor-not-allowed cursor-pointer w-full bg-gradient-to-b from-primary/15 via-primary/5 to-primary/15 shadow-black/10  hover:bg-primary/50 hover:text-white active:bg-primary/20 active:scale-95 scale-95 hover:scale-100 transition-all duration-300 px-8 p-3 rounded-lg border border-primary/10 text-xl font-roboto font-semibold"
              >
                {isSubmitting ? "Logging In..." : "Login"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
