import React from 'react';
import './css/Contact.css';

const Contact = () => {
    return (
      <div className="contact">
        <h1>Contact Information</h1>
        <ul>
          <li>
            Email: <a href="mailto:JulienH15@icloud.com">JulienH15@icloud.com</a>
          </li>
          <li>
            Instagram: <a href="https://www.instagram.com/julienhovan/" target="_blank" rel="noopener noreferrer">@julienhovan</a>
          </li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/julien-hovan/" target="_blank" rel="noopener noreferrer">Julien M. Hovan</a>
          </li>
          <li>
            Indeed: <a href="https://www.indeed.com/r/Julien-Hovan/" target="_blank" rel="noopener noreferrer">Julien Hovan</a>
          </li>
          <li>
            Phone: <a href="tel:+16033203104">603-320-3104</a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Contact;
  