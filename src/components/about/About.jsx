import React from 'react'
import './about.css'
import MYSELF from '../../assets/myself_1.JPG'
import {RiSuitcaseLine} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {GiBlackBook} from 'react-icons/gi'

const About = () => {
  return(
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MYSELF} alt="ABOUT IMAGE" />
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <RiSuitcaseLine className='about__icon'/>
                <h5>Experience</h5>
                <small>2 Years Working Experience</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>50 Locally</small>
              </article>

              <article className='about__card'>
                <GiBlackBook className='about__icon'/>
                <h5>Projects</h5>
                <small>50+ Completed Projects</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur debitis repellendus qui esse architecto excepturi amet non, officiis voluptate aliquid laudantium. Eos illum id non minus culpa quae soluta rerum.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About