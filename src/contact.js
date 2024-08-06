import React from 'react';
import './App.css';
import { FaEnvelope, FaGithub } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
          <FaEnvelope />
          <strong>Email: </strong> 
          <a href="mailto:farah.najjar55@gmail.com">Farah.najjar55@gmail.com</a>
        </p>

        <p>
        <FaGithub /> 
          <strong>GitHub: </strong> 
          <a href="https://github.com/FarahNajjar" target="_blank" rel="noopener noreferrer">
          https://github.com/FarahNajjar
          </a>
          </p>
     </section>
  );
};

export default Contact;
