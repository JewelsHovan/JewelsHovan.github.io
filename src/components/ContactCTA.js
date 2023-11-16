import React from 'react';
import './css/ContactCTA.css'; // Separate CSS file for styling

const ContactCTA = () => {
  return (
    <div className="cta">
      <h2>Contact Me</h2>
      <p>Thank you for looking at my page. If you want to contact me for any reason, I welcome it. I'm open to any collaboration.</p>
      <p>You can reach me at:</p>
      <p><strong>Email</strong>: julienh15@icloud.com</p>
      <p><strong>Phone</strong>: +1-603-320-3104</p>
      {/* Optionally, add a contact form or buttons linking to your social profiles */}
    </div>
  );
};

export default ContactCTA;