import React from "react";
import { useField, useFormikContext } from "formik";
import Select from "react-select";

const CustomMultiSelect = ({
  name,
  options = [],
  placeholder = "Select categories",
  valueKey = "id",
  labelKey = "name",
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const formattedOptions = options.map((opt) => ({
    value: opt[valueKey],
    label: opt[labelKey],
  }));

  const selectedValues = field.value || [];

  const customStyles = {
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
    control: (base, state) => ({
      ...base,
      width: "100%",
      padding: "0.5rem",
      borderRadius: "0.375rem",
      border: "none",
      outline: "none",
      backgroundColor: "var(--color-bg)",
      boxShadow: state.isFocused ? `none` : "none",
      minHeight: "38px",
      cursor: "pointer",
      display: "flex",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "var(--color-base-200)",
      borderRadius: "0.375rem",
      marginTop: 4,
      zIndex: 100,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "var(--color-option-hover)"
        : "transparent",
      color: "var(--color-text)",
      cursor: "pointer",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "var(--color-option-hover)",
      borderRadius: "0.25rem",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "var(--color-text)",
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: "var(--color-text)",
      ":hover": {
        backgroundColor: "red",
        color: "white",
        borderRadius: "0.25rem",
      },
    }),
    input: (base) => ({
      ...base,
      color: "var(--color-text)",
      margin: 0,
      padding: 0,
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--color-secondary-content)",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "var(--color-text)",
      transition: "color 0.2s ease",
      ":hover": {
        color: "var(--color-primary)", // or your desired hover color variable
      },
    }),
    clearIndicator:  (base, state) => ({
      ...base,
      color: "var(--color-text)",
      transition: "color 0.2s ease",
      ":hover": {
        color: "var(--color-primary)", // or your desired hover color variable
      },
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
        value={selectedValues}
        onChange={(option) => setFieldValue(name, option)}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable
        isMulti
        closeMenuOnSelect={false}
        menuPortalTarget={document.body}
        menuPosition="fixed"
        classNamePrefix="react-select"
      />

      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default CustomMultiSelect;
