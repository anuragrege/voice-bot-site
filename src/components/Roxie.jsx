import React from "react";
import {
  FaDownload,
  FaFileUpload,
  FaRegFile,
  FaMicrophone,
} from "react-icons/fa";
import RunExe from "./RunExe";

const Roxie = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <div style={styles.description}>
            <p style={styles.productDescription}>
              Our bot can engage with potential buyers, answer questions about
              products or services, recommend options based on user preferences,
              and even guide them through the purchasing process, all while
              providing a personalized and seamless experience.
            </p>
          </div>
          <div style={styles.buttonsContainer}>
            <button style={styles.uploadButton}>
              <FaRegFile style={styles.icon} />
              Upload Text File
            </button>
            {/* <button style={styles.talkButton}>
              <FaMicrophone style={styles.icon} />
              Talk Now
            </button> */}
            <RunExe />
          </div>
        </div>
        <div style={styles.rightSection}>
          <img src="/model2.png" alt="Model" style={styles.modelImage} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "1200px",
    height: "auto",
  },
  leftSection: {
    flex: 1,
    padding: "20px",
    borderRadius: "10px",
    marginRight: "30px",
  },
  description: {
    marginBottom: "30px",
  },
  productDescription: {
    fontSize: "18px",
    color: "white",
    lineHeight: "1.6",
    textAlign: "justify",
  },
  buttonsContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "flex-start",
  },
  uploadButton: {
    backgroundColor: "#ddd",
    color: "#333",
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
  talkButton: {
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
  icon: {
    fontSize: "20px",
  },
  rightSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modelImage: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "10px",
  },
};

export default Roxie;
