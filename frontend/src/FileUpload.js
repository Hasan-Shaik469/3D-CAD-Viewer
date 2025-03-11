import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("File uploaded successfully!");
      setFile(null);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Upload failed.");
    }
  };

  return (
    <div className="upload-container">
      <input type="file" accept=".stl,.obj" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
