import React, { useState } from "react";
import axios from "axios";
import { FaMicrophone } from "react-icons/fa";

const RunExe = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.get("http://localhost:3001/run-exe");
      setMessage("EXE file executed successfully: " + response.data);
    } catch (error) {
      console.error(error);
      setMessage("Error executing EXE file");
    }

    setLoading(false);
  };

  return (
    <div>
      <button style={styles.b1} onClick={handleClick} disabled={loading}>
        <FaMicrophone style={styles.icon} />
        {loading ? "Running" : "Talk Now"}
      </button>
      {/* {message && <p>{message}</p>} */}
    </div>
  );
};

const styles = {
  b1: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "12px 30px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
};

export default RunExe;
