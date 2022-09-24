import React from 'react'
import "./portfolio.scss"
import IMG1 from "../../accsets/portfolio1.jpg"
import IMG2 from "../../accsets/portfolio2.jpg"
import IMG3 from "../../accsets/portfolio3.jpg"
import IMG4 from "../../accsets/portfolio4.jpg"
import IMG5 from "../../accsets/portfolio5.png"
import IMG6 from "../../accsets/portfolio6.jpg"
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/phongphanq089" rel="noopener noreferrer" className='btn' target="_blank" >Github</a>
            <a href="https://phongphanq089.github.io/TODO-APP/" rel="noopener noreferrer" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/phongphanq089" rel="noopener noreferrer" className='btn' target="_blank" >Github</a>
            <a href="https://phongphanq089.github.io/TODO-APP/" rel="noopener noreferrer" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/phongphanq089" rel="noopener noreferrer" className='btn' target="_blank" >Github</a>
            <a href="https://phongphanq089.github.io/TODO-APP/" rel="noopener noreferrer" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/phongphanq089" rel="noopener noreferrer" className='btn' target="_blank" >Github</a>
            <a href="https://phongphanq089.github.io/TODO-APP/" rel="noopener noreferrer" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/phongphanq089" rel="noopener noreferrer" className='btn' target="_blank" >Github</a>
            <a href="https://phongphanq089.github.io/TODO-APP/" rel="noopener noreferrer" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/phongphanq089" rel="noopener noreferrer" className='btn' target="_blank" >Github</a>
            <a href="https://phongphanq089.github.io/TODO-APP/" rel="noopener noreferrer" className='btn btn-primary' target="_blank" >Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio 
