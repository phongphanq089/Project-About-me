import React from 'react'
import Header from './compoments/Header/Header'
 import Nav from './compoments/Nav/Nav'
 import About from './compoments/About/About'
import Experiences from './compoments/Experiences/Experiences'
import Services from './compoments/Services/Services'
 import Portfolio from './compoments/Portfolio/Portfolio '
 import Testimonial from './compoments/Testimonial/Testimonial'
 import Contact from './compoments/Contact/Contact'
 import Footer from './compoments/Footer/Footer'
const App = () => {
  return (
    <div>
     <Header/>
    <Nav/>
    <About/>
    <Experiences/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App