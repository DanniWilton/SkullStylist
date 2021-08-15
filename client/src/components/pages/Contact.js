import React, { useState } from 'react';
import './contact.css';
import { validateEmail } from '../../utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'contactName') {
      setContactName(inputValue);
    } else if (inputType === 'inputDescription') {
        setInputDescription(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) ) {
      setErrorMessage('Email is invalid');
      return;
    }
    alert(`Thank you for your enquiry ${contactName}, Skull Stylist will respond very soon.`);
    setContactName('');
    setEmail('');
    setInputDescription('');
    
  };

  return (
    <div className= "form-box" >

      <form className="form">
      <input className="input-small"
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="Contact Name"
        />
        <br/>
        <input className="input-small"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email Address"
        />
        <br/>
        <textarea className= "input-description"
          value={inputDescription}
          name="inputDescription"
          onChange={handleInputChange}
          type="text"
          placeholder="How would you like your Skull Styled?"
        />
        <br/>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router)


// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "skull.stylist.email@gmail.com",
//     pass: "JoshuaHomme21",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });
// router.post("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message; 
//   const mail = {
//     from: name,
//     to: "skull.stylist.email@gmail.com",
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// });


export default Form;
