import React from 'react'
import { BsFacebook, BsGithub } from "react-icons/bs"
import { FaInstagramSquare } from "react-icons/fa"
import { Link } from "react-scroll"
import "./footer.scss"
const Footer = () => {
  return (
    <footer>
      <a href='/' className='footer__logo' rel="noopener noreferrer">PHONG PHAN</a>

      <ul className='parmalink'>
        <li><a href='/123' ><Link to='/' smooth={true}>HOME</Link></a></li>
        <li><a href='/#' ><Link to='about' smooth={true}>About</Link></a></li>
        <li><a href='/123' > <Link to='experience' smooth={true}>Experience</Link></a></li>
        <li><a href='/123' >  <Link to='servieces' smooth={true}>Services</Link></a></li>
        <li><a href='/123' > <Link to='portfolio' smooth={true}>Portfolio</Link> </a></li>
        <li><a href='/123' > <Link to='testimonial' smooth={true}>Testimonials</Link> </a></li>
        <li><a href='/123' >  <Link to='contact' smooth={true}>Contact</Link></a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100013596668789"><BsFacebook /></a>
        <a href="https://www.instagram.com/phongphan547/"><FaInstagramSquare /></a>
        <a href="https://github.com/phongphanq089"><BsGithub /></a>
      </div>
      <div className="footer__copyRigth">
        <small>&copy; PHONG PHAN Turtorial. All rigth reserved</small>
      </div>
    </footer>
  )
}

export default Footer
