import * as Yup from "yup"; 

export const addUserValidation =Yup.object({
    userCode: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    customer: Yup.mixed(),
    categories: Yup.mixed(),
    menu: Yup.array().min(1, "Select at least one menu"),
    vehicle: Yup.mixed(),
    image: Yup.mixed(),
  })





export const addItemsValidation = Yup.object({
  name: Yup.string()
    .required("Item name is required")
    .min(2, "Item name must be at least 2 characters"),

  barcode: Yup.string()
    .required("Barcode is required")
    .matches(/^[A-Za-z0-9]+$/, "Barcode can only contain letters and numbers"),

  category: Yup.mixed()
    .required("Category is required"),

  tax: Yup.string()
    .required("Tax is required"),

  uom: Yup.mixed()
    .required("Unit of Measure is required"),

  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be greater than zero"),

  image: Yup.mixed()
    .nullable()
    .test("fileSize", "Image must be less than 2MB", value => {
      return !value || (value && value.size <= 5 * 1024 * 1024);
    })
    .test("fileType", "Only JPG, PNG, or WEBP files are allowed", value => {
      return (
        !value ||
        (value &&
          ["image/jpeg", "image/png", "image/webp"].includes(value.type))
      );
    }),
});


export const addCategoriesValidation = Yup.object({
  name: Yup.string()
    .required("Category name is required")
    .min(2, "Category name must be at least 2 characters"),
  
  image: Yup.mixed()
    .nullable()
    .test("fileSize", "Image must be less than 2MB", value => {
      return !value || (value && value.size <= 5 * 1024 * 1024);
    })
    .test("fileType", "Only JPG, PNG, or WEBP files are allowed", value => {
      return (
        !value ||
        (value &&
          ["image/jpeg", "image/png", "image/webp"].includes(value.type))
      );
    }),

})



export const addUomSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),

  description: Yup.string()
    .required("Description is required")
    .min(5, "Description must be at least 5 characters"),
});


export const AddVehicleSchema = Yup.object({
  vehicleNumber: Yup.string()
    .required("Vehicle number is required")
    .min(2, "Vehicle number must be at least 2 characters"),

  vehicleName: Yup.string()
    .required("Vehicle name is required")
    .min(2, "Vehicle name must be at least 2 characters"),

  driverName: Yup.string()
    .required("Driver name is required")
    .min(2, "Driver name must be at least 2 characters"),

  contact: Yup.string()
    .required("Contact number is required")
    .matches(
      /^[0-9]{10}$/,
      "Contact number must be exactly 10 digits"
    ),

  category: Yup.array()
    .min(1, "At least one category must be selected")
    .of(Yup.mixed()),

 image: Yup.mixed()
  .nullable()
  .test("fileSize", "Image must be less than 5MB", value => {
    if (!value) return true; // allow empty
    return value.size <= 5 * 1024 * 1024;
  })
  .test("fileType", "Only JPG, PNG, or WEBP files are allowed", value => {
    if (!value) return true; // allow empty
    return ["image/jpeg", "image/png", "image/webp"].includes(value.type);
  }),

});