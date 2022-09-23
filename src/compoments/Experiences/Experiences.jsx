import React from 'react'
import "./experiences.scss"
import { BsShieldFillCheck } from "react-icons/bs"
const Experiences = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experiences</h2>

      <div className="container experiences__container">
        <div className="experiences__fontend">
          <h3>Frontend Development</h3>
          <div className="experiences_content">
            <article className='experiences-detail'>
              <BsShieldFillCheck className="detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-alight">Experienced</small>
              </div>
            </article>
            <article className='experiences-detail'>
              <BsShieldFillCheck className="detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-alight">Experienced</small>
              </div>
            </article>
            <article className='experiences-detail'>
              <BsShieldFillCheck className="detail-icon" />
              <div>
                <h4>SASS</h4>
                <small className="text-alight">Experienced</small>
              </div>
            </article>
            <article className='experiences-detail'>
              <BsShieldFillCheck className="detail-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-alight">Experienced</small>
              </div>
            </article>
            <article className='experiences-detail'>
              <BsShieldFillCheck className="detail-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-alight">Basic</small>
              </div>
            </article>
            <article className='experiences-detail'>
              <BsShieldFillCheck className="detail-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-alight">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiences_backend">
          <h3> Backend Development</h3>
          <div className="experiences_content">
            <article className='experiences-detail'>
              <BsShieldFillCheck className="detail-icon" />
              <div>
                <h4>NODE JS</h4>
                <small className="text-alight">Experienced</small>
              </div>
            </article>
            <article className='experiences-detail'>
              <BsShieldFillCheck className="detail-icon" />
              <div>
                <h4>Monggo DB</h4>
                <small className="text-alight">Experienced</small>
              </div>
            </article>
            <article className='experiences-detail'>
              <BsShieldFillCheck className="detail-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-alight">Basic</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
