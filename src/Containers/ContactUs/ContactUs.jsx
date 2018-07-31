import React from "react";
import "./ContactUs.scss";

const ContactUs = () => (
  <div className="grid-container-mainContent">
    <h1>Contact Us</h1>
    <div className="jumbotron">
      <p> We will get back to you asap! </p>
      <form className="form-box" method="POST">
        <div>
          <label htmlFor="contactName">Name</label>
          <input type="text" id="contactName" name="contactName" />
        </div>
        <div>
          <label htmlFor="contactEmail">Email</label>
          <input type="text" id="contactEmail" name="contactEmail" />
        </div>
        <div>
          <label htmlFor="emailMessage">Message</label>
          <textarea id="emailMessage" name="emailSubject" />
        </div>
      </form>
      <div className="cta" onClick={e => console.log("clicked!")}>
        Send Message
      </div>
    </div>
  </div>
);

export default ContactUs;
