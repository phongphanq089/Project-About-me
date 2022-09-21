import React from 'react'
import "./header.css"
import {AiOutlineArrowDown} from "react-icons/ai"
import  Me from "../../accsets/phongphan.jpg"
import Cta from './Cta.jsx'
import HeaderSociel from './headerSociel'
import Typical from "react-typical"
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        {/* left */}
        <div className="left-h">
        <div className="about-me">
        <button className='button-btn'>Well come to my Portfolio</button>
        <h1> 👋 Hi, I’m Phong Phan <br/>
          <Typical
          loop={Infinity}
          wrapper = "b"
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
        <p className='text text-alight'>When I was 16 years old, my father told me to do whatever  <br/>you want with your life. And to become anything you have to work really hard. That's why<br/>
         when I die, I want
           people to remember me for the life I lived,
            not the money I've earned.</p>
        <Cta/>
        <HeaderSociel/>
        <div className="scrolldown">
        <a href="#contact" className="scroll_down"> let's scrollDown</a>
        <div className="icon"><AiOutlineArrowDown/></div>
        </div>
        </div>
        </div>
        {/* right */}
        <div className="right-h">
        <div className="me">
          <img src={Me} alt=''/>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header