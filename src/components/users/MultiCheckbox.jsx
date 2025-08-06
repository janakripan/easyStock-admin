import React from "react";
import { useField, useFormikContext } from "formik";
import { FaCheck } from "react-icons/fa";

const MultiCheckbox = ({
  name,
  options = [],
  placeholder = "",
  valueKey = "id",
  labelKey = "name",
  setDriverSelected,
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    let selected = [...field.value];

    if (checked) {
      selected.push(value);
      if (value === "driver" && !selected.includes("purchase_request")) {
        selected.push("purchase_request");
      }
    } else {
      selected = selected.filter((v) => v !== value);
      if (value === "purchase_request") {
        selected = selected.filter((v) => v !== "driver");
      }
    }

    setFieldValue(name, selected);
    setDriverSelected?.(selected.includes("driver"));
  };

  return (
    <div className="w-full ">
      <div className="mb-1 text-sm text-text/70">{placeholder}</div>
      <div className="flex flex-col gap-2 bg-[var(--color-base-200)] p-3 rounded-md shadow-sm">
        {options.map((opt) => {
          const isChecked = field.value?.includes(opt[valueKey]);
          return (
            <label
              key={opt[valueKey]}
              className="flex items-center gap-2 cursor-pointer text-text"
            >
              <input
                type="checkbox"
                value={opt[valueKey]}
                checked={isChecked}
                onChange={handleChange}
                className="sr-only"
              />
              <div
                className={`h-4 w-4 flex items-center justify-center border rounded-sm bg-base-200 transition-colors duration-150
                  ${
                    isChecked
                      ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-text"
                      : "bg-[var(--color-bg)] border-primary"
                  }`}
              >
                {isChecked && <FaCheck className="w-3 h-3" />}
              </div>
              <span>{opt[labelKey]}</span>
            </label>
          );
        })}
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default MultiCheckbox;
