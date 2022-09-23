import React from 'react'
import "./about.scss"
import { BsFillAwardFill } from "react-icons/bs"
import { HiUsers } from 'react-icons/hi'
import { GiFullFolder } from "react-icons/gi"
import Me from "../../accsets/me-about.jpg"
import { Link } from "react-scroll"
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          < div className="about__carts">
            <article className='about_cart'>
              <BsFillAwardFill className='fa-icon' />
              <h5> Experiences</h5>
              <small>1 +years working</small>
            </article>


            <article className='about_cart'>
              <HiUsers className='fa-icon' />
              <h5> Clients</h5>
              <small>200 +Worldwide</small>
            </article>


            <article className='about_cart'>
              <GiFullFolder className='fa-icon' />
              <h5> Project</h5>
              <small>20 +completed</small>
            </article>
          </div>
          <p>“My name is Susan Gill and I am a web designer from Raleigh, North Carolina.

            I live with my two dogs and my wonderful husband. I graduated in 2004 with a bachelor’s degree in Information
            Technology and Web Design from the California Institute of Technology. I served my first two years at a small
            advertising agency, but have since moved onto freelancing full time.”</p>
          <h3 className="btn "><Link to='contact' span={true} smooth={true}>Let's talk</Link></h3>

        </div>
      </div>


    </section >
  )
}

export default About
