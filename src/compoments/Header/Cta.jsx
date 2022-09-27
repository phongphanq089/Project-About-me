import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai"
import { Link } from "react-scroll"
import CV from "../../accsets/cv.pdf"
const Cta = () => {
  return (
    <div className='CTA'>
      <a href={CV} className="btn" download>Download CV</a>
      <Link to = "footer" smooth ={true}> <a href="#contact" className='scroll__down btn btn-primary'>  let's scrollDown <AiOutlineArrowDown className='icon'/> </a></Link>
      
    </div>
  )
}

export default Cta
