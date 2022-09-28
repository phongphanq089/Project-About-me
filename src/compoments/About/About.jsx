import React from 'react'
import "./about.scss"
import { BsFillAwardFill, BsFillImageFill } from "react-icons/bs"
import { HiUsers } from 'react-icons/hi'
import { GiFullFolder } from "react-icons/gi"
import { MdOutlineCastForEducation } from "react-icons/md"
import Me from "../../accsets/image_.jpg"
import { Link } from "react-scroll"
const About = () => {
  return (
    <section id='about'>
      <div className="blur blur-about"></div>
      <div className="blur blur-about-right"></div>
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
              <h5> Client</h5>
              <small> +200</small>
            </article>

            <article className='about_cart'>
              <MdOutlineCastForEducation className='fa-icon' />
              <h5> educational</h5>
              <small>Information Technology at Nha Trang University</small>
            </article>


            <article className='about_cart'>
              <GiFullFolder className='fa-icon' />
              <h5> Project</h5>
              <small>20 +completed</small>
            </article>


          </div>
          <div className="about__me-cart">
            <BsFillImageFill className='bs-icon' />
            <div className="backgound__cart">
              <h1 className='backgound__cart-item'><h6>backgound:</h6> <small>16 june 2000</small></h1>
              <h1 className='backgound__cart-item'><h6>Age:</h6> <small>22</small></h1>
              <h1 className='backgound__cart-item'><h6>Website: </h6><small>www.phongphan.com</small></h1>
              <h1 className='backgound__cart-item'><h6>Email:</h6> <small>phongphantienq089@gmail.com</small></h1>
              <h1 className='backgound__cart-item'><h6>Phone:</h6> <small>0706113210</small></h1>
            </div>
          </div>
          <p>“My name is Phan Tien Phong and I am a web designer from Khanh Hoa, Viet Nam.
            I live with my two dogs and my family. I graduated in 2022 with a bachelor’s degree in Information
            Technology and Web Design Faculty of Information Technology at Nha Trang University.”</p>
          <h3 className="btn "><Link to='contact' span={true} smooth={true}>Let's talk</Link></h3>

        </div>
      </div>


    </section >
  )
}

export default About
