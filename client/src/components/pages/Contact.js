import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { validateEmail } from '../../utils/helpers';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_6rs7a6l', 'skullstylist_contact', e.target, 'user_pgIVepcVl3wWSLScNiRjW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return(
    <div>
      <div className="form-box">
        <form onSubmit={sendEmail}>
          <div className="input-small">
            <input type="text" placeholder="Name" name="name"/>
          </div>
          <div className="input-small">
            <input type="text" placeholder="Email" name="email"/>
          </div>
          <div className="input-description">
            <textarea placeholder="How would you like your skull styled?" name="message"></textarea>
          </div>
          <div className="button">
            <input type="submit" value="Send Message"></input>
          </div>
        </form>
      </div>
    </div>
  )
}

// init("user_pgIVepcVl3wWSLScNiRjW");

// function Form() {
//   const [email, setEmail] = useState('');
//   const [contactName, setContactName] = useState('');
//   const [inputDescription, setInputDescription] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;
//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'contactName') {
//       setContactName(inputValue);
//     } else if (inputType === 'inputDescription') {
//         setInputDescription(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!validateEmail(email) ) {
//       setErrorMessage('Email is invalid');
//       return;
//     }
//     alert(`Thank you for your enquiry ${contactName}, Skull Stylist will respond very soon.`);
//     setContactName('');
//     setEmail('');
//     setInputDescription('');
    
//   };

//   return (
//     <div className= "form-box" >

//       <form className="form">
//       <input className="input-small"
//           value={contactName}
//           name="contactName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Contact Name"
//         />
//         <br/>
//         <input className="input-small"
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="email"
//           placeholder="Email Address"
//         />
//         <br/>
//         <textarea className= "input-description"
//           value={inputDescription}
//           name="inputDescription"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="How would you like your Skull Styled?"
//         />
//         <br/>
//         <button type="button" onClick={handleFormSubmit}>Submit</button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }
// function sendEmail(e) {
//   e.preventDefault();

//   emailjs.sendForm('service_6rs7a6l', 'skullstylist_contact', e.target, "
//   user_pgIVepcVl3wWSLScNiRjW")
//   .then((result) => {
//     console.log(result.text);
//   }, (error) => {
//     console.log(error.text);
//   });
// }

