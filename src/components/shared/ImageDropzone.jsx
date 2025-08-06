import { useDropzone } from "react-dropzone";
import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const ImageDropzone = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const [isWindowDragActive, setIsWindowDragActive] = useState(false);
  let dragCounter = 0;

  const onDrop = (acceptedFiles) => {
    setFieldValue(name, acceptedFiles[0]); // You can allow multiple files if needed
    setIsWindowDragActive(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  
  });

 // Handle full window drag enter/leave
  useEffect(() => {
    const handleDragEnter = (e) => {
      e.preventDefault();
      dragCounter++;
      setIsWindowDragActive(true);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      dragCounter--;
      if (dragCounter <= 0) {
        setIsWindowDragActive(false);
      }
    };

    const handleDragOver = (e) => {
      e.preventDefault();
    };

    const handleDrop = (e) => {
      e.preventDefault();
      dragCounter = 0;
      setIsWindowDragActive(false);
    };

    window.addEventListener("dragenter", handleDragEnter);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("dragover", handleDragOver);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragenter", handleDragEnter);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("dragover", handleDragOver);
      window.removeEventListener("drop", handleDrop);
    };
  }, []);


  return (
    <>
     {/* Main Dropzone UI */}
      <div
        {...getRootProps()}
        className={`w-full min-h-[180px] p-4 border-2 border-dashed flex items-center justify-center rounded-md cursor-pointer ${
          field.value ? "border-gray-300" : "border-text/40"
        }`}
      >
        <input {...getInputProps()} />
        {field.value ? (
          <div className="text-center text-sm text-gray-700">
            <img
              src={URL.createObjectURL(field.value)}
              alt="preview"
              className="w-24 h-24 object-cover mx-auto mb-2 rounded"
            />
            <p>{field.value.name}</p>
          </div>
        ) : (
          <p className="text-center text-sm text-gray-500">
            Drag & drop an image here, or click to browse
          </p>
        )}
        {meta.touched && meta.error && (
          <div className="text-red-500 text-xs mt-1">{meta.error}</div>
        )}
      </div>

      {/* Fullscreen Overlay Dropzone */}
      {isWindowDragActive && (
        <div
          {...getRootProps()}
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center border-4 border-dashed border-white"
        >
          <input {...getInputProps()} />
          <p className="text-white text-xl font-semibold">
            Drop file to upload
          </p>
        </div>
      )}
    </>
  );
};

export default ImageDropzone;
