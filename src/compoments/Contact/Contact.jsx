import React, { useRef } from 'react'
import "./contact.scss"
import { SiGmail } from "react-icons/si"
import { BsMessenger } from "react-icons/bs"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const Form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g51gli9', 'template_787naqr', Form.current, 'zuSpHsI0oijnacH26')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <div className="blur blur-contact"></div>
      <h5>Get In Touh</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <SiGmail />
            <h4>Email</h4>
            <h5>phongphantienq089@gmail.com</h5>
            <a href="mailto:phongphantienq089@gmail.com" rel="noopener noreferrer" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/profile.php?id=100013596668789" rel="noopener noreferrer" target="_blank">Send Email</a>
          </article>
          <article className='contact__option'>
            <h4>Zalo</h4>
            <h6>Zalo</h6>
            <h5>0857277264</h5>
            <a href="https://chat.zalo.me/" rel="noopener noreferrer" target="_blank">Send a Zalo</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form className="formSend" action="" ref={Form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full email" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your message" required />
          <button type='submit' value="Send" className='btn btn-primary'>send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
