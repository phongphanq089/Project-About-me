import React from 'react'
import "./header.scss"

import Me from "../../accsets/phongphan.jpg"
import Cta from './Cta.jsx'
import HeaderSociel from './headerSociel'
import Typical from "react-typical"
const Header = () => {
  return (
    <header  id='/' >
      <div className="container header_container" >
        <div className="about__me">
          <button className='button-btn'>Well come to my Portfolio</button>
          <h1 className='text'> 
            <div className="firt_text">👋 Hi, My name'ss <p>Phong Phan</p></div>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                " web Designer 💞️",
                1000,
                "Full stack Developer 💻",
                1000,
                "React/React js 🌐",
                1000,
              ]}
            />
          </h1>
          <p className='text text-alight'>When I was 16 years old, my father told me to do whatever you want with your life. And to become anything you have to work really hard. That's why
            when I die, I want
            people to remember  me for the life I lived,
            not the money I've earned.</p>
          <Cta />
         
        </div>
        <div className="image-me">
            <img src={Me} alt='image_abc' />
            <HeaderSociel />
          </div>
      </div>

    </header>


  )
}

export default Header
