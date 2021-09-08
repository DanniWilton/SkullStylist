import React  from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

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
          <div >
            <input type="text" className="input-small" placeholder="Name" name="from_name"/>
          </div>
          <div>
            <input type="text" className="input-small" placeholder="Email" name="user_email"/>
          </div>
          <div >
            <textarea className="input-description" placeholder="How would you like your skull styled?" name="message"></textarea>
          </div>
          <div >
            <button className="button" type="submit" value="Submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}


