import React from "react";
import FormBox from '../../Components/FormBox/FormBox';
import "./ContactUs.scss";


const ContactUs = () => {
  const styleInput = {
    margin: '20px auto',
  };

  return (
  <div className="grid-container-mainContent">
    <h1>Contact Us</h1>
    <div className='jumbotron'>
      <FormBox 
        formContainerName='Contact'
      />
    </div>
  </div>
);
}

export default ContactUs;
