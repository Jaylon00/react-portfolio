import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return(
    <div>
      <footer>
          <a href="#" className='footer__logo'>Jaylon Garza Portfolio</a>
          <ul className='permalinks'>
            <li a href="#">Home</li>
            <li a href="#about">About</li>
            <li a href="#experience">Expereince</li>
            <li a href="#services">Services</li>
            <li a href="#portfolio">Portfolio</li>
            <li a href="#testimonials">Testimonials</li>
            <li a href="#contact">Contact</li>
          </ul>

          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/jaylon-garza-8b7701136/"><AiFillLinkedin/></a>
            <a href="https://www.linkedin.com/in/jaylon-garza-8b7701136/"><AiFillLinkedin/></a>
            <a href="https://www.linkedin.com/in/jaylon-garza-8b7701136/"><AiFillLinkedin/></a>
          </div>
      </footer>

      <div className="footer__copyright">
        <small>&copy;Jaylon Garza Portfolio. All Rights Reserved</small>
      </div>
    </div>
  )
}
export default Footer