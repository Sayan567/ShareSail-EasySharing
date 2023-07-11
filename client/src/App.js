import { useRef, useState, useEffect } from "react";
import "./App.css";
import { uploadFile } from "./services/api";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const logo =
    "https://images.unsplash.com/photo-1585909694668-0a6e0ddbfe8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

  const fileUploadClick = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileUploadClick.current.click();
  };

  // console.log(file);

  return (
    <div className="container">
      <div>
        <img src={logo} alt="banner" />
      </div>
      <div className="wrapper">
        <h1>ShareSail - Simple File Sharing! </h1>
        <p>Upload and share the download link</p>
        <button
          onClick={() => {
            onUploadClick();
          }}
        >
          Upload
        </button>
        <input
          type="file"
          ref={fileUploadClick}
          style={{ display: "none" }}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />

        <a href={result} target="_blank">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
