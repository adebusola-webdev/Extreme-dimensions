import React from "react";
import { Nav } from "../component/Nav";
import { Link } from "react-router-dom";
import { Footer } from "../component/Footer";
import "../styles/contact.css";

export const Contact = () => {
  return (
    <>
      <div className="Contact__section">
        <h1>Contact Us</h1>
        <p>Get in touch with us through the form below.</p>
        {/* Add your contact form or details here */}
      </div>
    </>
  );
};
