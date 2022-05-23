import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {
  return(
    <section id='contact'>
      <h5>Get in touch:</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>matthew12990@gmail.com</h5>
            <a href="mailto:matthew12990@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn Profile</h4>
            <h5>Name: Jaylon Garza</h5>
            <a href="https://www.linkedin.com/in/jaylon-garza-8b7701136/" target="_blank">Profile</a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Phone #</h4>
            <h5>+123456789</h5>
            <a href="mailto:matthew12990@gmail.com" target="_blank">Send a message</a>
          </article>

          <form action="">
            <input type="text" name ='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact