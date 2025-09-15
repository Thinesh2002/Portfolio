import React from "react";
import "../css/contact.css";
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p><FiPhone className="icon" /> <strong>Phone:</strong> +94 76 498 3833</p>
        <p><FiMail className="icon" /> <strong>Email:</strong> <a href="mailto:sthinesh0730@gmail.com">sthinesh0730@gmail.com</a></p>
        <p><FiLinkedin className="icon" /> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/thinesh-633045272/" target="_blank" rel="noopener noreferrer">Thineshkaran Sureshkaran</a></p>
        <p><FiGithub className="icon" /> <strong>GitHub:</strong> <a href="https://github.com/Thinesh2002" target="_blank" rel="noopener noreferrer">Thinesh2002</a></p>
        <p><FiMapPin className="icon" /> <strong>Address:</strong> Navaly, South Manipay</p>
      </div>
    </div>
  );
}

export default Contact;
