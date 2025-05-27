import { useState } from "react";
import TokenInput from "./components/TokenInput";
import ImageUploader from "./components/ImageUploader";
import ReportViewer from "./components/ReportViewer";
import "./index.css";

function App() {
  const [token, setToken] = useState("");
  const [file, setFile] = useState(null);
  const [report, setReport] = useState(null);

  // Use backend API URL from environment variables
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:7000";

  const handleSubmit = async () => {
    if (!token || !file) return alert("Token and image are required");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`${apiUrl}/moderate/moderate/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      setReport(data);
    } catch (error) {
      alert("Error submitting file");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Image Moderation</h1>
      <TokenInput token={token} setToken={setToken} />
      <ImageUploader onUpload={setFile} />

      {file && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Image Preview:</h3>
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded preview"
            style={{ maxWidth: "300px", maxHeight: "300px", borderRadius: "8px" }}
          />
        </div>
      )}

      <button onClick={handleSubmit}>Submit for Moderation</button>

      <ReportViewer report={report} />
    </div>
  );
}

export default App;
