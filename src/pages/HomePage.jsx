import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import screen from "../assets/linux.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Roxie from "../components/Roxie";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".exploreEnquireText",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".driveText",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 2,
        ease: "power2.out",
        color: "purple",
      }
    );

    gsap.fromTo(
      ".phoneImage",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 1,
      }
    );

    gsap.fromTo(
      "#roxie",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#roxie",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />
      <div id="home" style={styles.mainContent}>
        <div style={styles.leftBox}>
          <img
            src={screen}
            alt="Phone Screen"
            className="phoneImage"
            style={styles.phoneImage}
          />
        </div>
        <div style={styles.rightContent}>
          <div style={styles.text}>
            <div className="exploreEnquireText" style={styles.mainText}>
              Explore. Enquire.
            </div>
            <div className="driveText" style={styles.subText}>
              Drive.
            </div>
          </div>
        </div>
      </div>

      <div id="roxie" style={styles.roxieWrapper}>
        <Roxie />
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    position: "relative",
    minHeight: "100vh",
  },
  mainContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "300px",
    padding: "20px",
    height: "100vh",
  },
  leftBox: {
    width: "40%",
    padding: "10px",
    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.3)",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneImage: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "contain",
    borderRadius: "10px",
  },
  rightContent: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    textAlign: "left",
  },
  mainText: {
    fontSize: "64px",
    color: "white",
    whiteSpace: "nowrap",
  },
  subText: {
    fontSize: "72px",
    color: "white",
  },
  roxieWrapper: {
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
  },
};

export default HomePage;
