import React from "react";
import { useField, useFormikContext } from "formik";
import Select from "react-select";

const CustomSelect = ({
  name,
  options = [],
  placeholder = "Select an option",
  valueKey = "id",
  labelKey = "name",
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  // react-select expects the selected value as the full { value, label } object
  const formattedOptions = options.map((opt) => ({
    value: opt[valueKey],
    label: opt[labelKey],
  }));

  // If field.value is the object, use it; otherwise null
  const value = field.value || null;

  const customStyles = {
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
    
    control: (base, state) => ({
      ...base,
      width: "100%",
      padding: "0.5rem", // px-2 py-2 equivalent
      borderRadius: "0.375rem", // rounded-md
      border: "none",
      outline: "none",
      backgroundColor: "var(--color-bg)", // dynamic bg

      boxShadow: state.isFocused ? `none` : "none",
      minHeight: "38px",
      cursor: "pointer",
      // keep display flex so input appears
      display: "flex",
    }),
    input: (base) => ({
      ...base,
      
      margin: 0,
      padding: 0,
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--color-gray-400)",
      opacity:"80%",
    }),
    singleValue: (base) => ({
      ...base,
      color: "var(--color-gray-700)",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "var(--color-gray-300)", // dropdown menu background
      borderRadius: "0.375rem",
      marginTop: 4,
      zIndex: 100,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "var(--color-option-hover)"
        : "transparent",
      color: "var(--color-gray-900)",
      cursor: "pointer",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "var(--color-gray-700)",
    }),
    clearIndicator: (base) => ({
      ...base,
      color: "var(--color-gray-700)",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: "transparent",
    }),
  };

  return (
    <div className="w-full">
      <Select
        name={name}
        options={formattedOptions}
        value={value}
        onChange={(option) => setFieldValue(name, option)}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable
        // ensure the menu renders above other elements if nested
        menuPortalTarget={document.body}
        menuPosition="fixed"
        // adapt menu portal if needed; remove if unwanted
        classNamePrefix="react-select"
      />

      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default CustomSelect;
