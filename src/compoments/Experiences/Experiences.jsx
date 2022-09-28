import React from 'react'
import "./experiences.scss"
import { data, dataBA } from '../DataPortforlio/dataEperiences'
import { BsShieldFillCheck } from "react-icons/bs"
const Experiences = () => {
  return (
    <section id='experience'>
      <div className="blur blur-about"></div>

      <h5>What skills I have</h5>
      <h2>My Experiences</h2>

      <div className="container experiences__container">
        <div className="experiences__fontend">
          <h3>Frontend Development</h3>
          <div className="experiences_content">
            {
              data.map((item, index) => (
                <article className='experiences-detail' key={index}>
                  <BsShieldFillCheck className="detail-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-alight">{item.Experienced}</small>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
        <div className="experiences_backend">
          <h3> Backend Development</h3>
          <div className="experiences_content">
            {
              dataBA.map((item, index) => (
                <article className='experiences-detail' key={index}>
                  <BsShieldFillCheck className="detail-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-alight">{item.Experienced}</small>
                  </div>
                </article>
              ))
            }

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
