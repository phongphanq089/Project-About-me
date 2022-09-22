import React from 'react'
import { AiFillLinkedin } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { AiFillFacebook } from "react-icons/ai"
import { FaYoutube, FaInstagramSquare } from "react-icons/fa"
const HeaderSociel = () => {
  return (
    <div className='header_social'>
      <a href="https://github.com/phongphanq089" rel="noopener noreferrer" target="_blank"><AiFillFacebook /></a>
      <a href="https://github.com/phongphanq089" rel="noopener noreferrer" target="_blank"><BsGithub /></a>
      <a href="https://github.com/phongphanq089" rel="noopener noreferrer" target="_blank"><AiFillLinkedin /></a>
      <a href="https://github.com/phongphanq089" rel="noopener noreferrer" target="_blank"><FaYoutube /></a>
      <a href="https://github.com/phongphanq089" rel="noopener noreferrer" target="_blank"><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSociel
