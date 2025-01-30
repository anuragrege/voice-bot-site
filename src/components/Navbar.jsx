import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Transcripts from "../pages/Transcripts";

// Register the plugin with GSAP
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
      }
    );
  }, []);

  // Smooth scroll function using GSAP
  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sectionId, offsetY: 50 },
      ease: "power2.out",
    });
  };
  const redirectToDashboard = () => {
    window.location.href = "http://roxiedash1.netlify.app/";
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logor.png" alt="Logo" className="logo-img" />
        </Link>
      </div>
      <div className="nav-buttons">
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#roxie"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#roxie");
              }}
            >
              Roxie
            </a>
          </li>
          <li>
            <Link to="/transcripts" target="_blank" rel="noopener noreferrer">
              Transcript
            </Link>
          </li>
          <li>
            <a
              href="#dashboard"
              id="dashboard-link"
              onClick={(e) => {
                e.preventDefault();
                redirectToDashboard();
              }}
            >
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
