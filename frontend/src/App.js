import React, { useState } from "react";
import axios from "axios";
import FileUpload from "./FileUpload";
import ModelViewer from "./ModelViewer";
import { ToastContainer, toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [viewFilesClicked, setViewFilesClicked] = useState(false);

  const fetchFiles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/files");
      setFiles(response.data.files);
      setViewFilesClicked(true);
      toast.success("Files loaded!");
    } catch (error) {
      toast.error("Failed to load files.");
    }
  };

  const handleDelete = async (filename) => {
    try {
      await axios.delete(`http://localhost:5000/models/${filename}`);
      setFiles(files.filter((file) => file !== filename));
      toast.success("File deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete file.");
    }
  };

  return (
    <div className="container">
      {selectedFile ? (
        <div className="full-screen">
          <ModelViewer filename={selectedFile} onBack={() => {
            setSelectedFile(null);
          }} />
        </div>
      ) : (
        <>
          <h1>3D CAD Viewer</h1>
          <FileUpload />
          <button className="view-btn" onClick={fetchFiles}>View Files</button>
          {viewFilesClicked && files.length > 0 && (
            <ul className="file-list">
              {files.map((file) => (
                <li key={file} className="file-item">
                  <button className="file-btn" onClick={() => setSelectedFile(file)}>
                    {file}
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(file)}>
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
