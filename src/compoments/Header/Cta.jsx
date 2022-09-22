import React from 'react'
import CV from "../../accsets/cv.pdf"
const Cta = () => {
  return (
    <div className='CTA'>
      <a href={CV} className="btn" download>Download CV</a>
      <a href="#contact" className='btn btn-primary'> Let's talk</a>
    </div>
  )
}

export default Cta
