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


