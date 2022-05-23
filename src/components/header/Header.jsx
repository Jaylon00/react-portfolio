import React from 'react'
import './header.css'
import CTA from './CTA'
import MYSELF from '../../assets/myself.JPG'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return(
    <header>
      <div className="container header__container">
        <h5>Hello I am </h5>
        <h1>Jaylon Garza</h1>
        <h5 className="text-light">College Graduate</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="myself">
          <img src={MYSELF} alt="myself" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}
export default Header