import React, { useRef } from 'react'
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai"
import logo from "../../accsets/logo_dev.jpg"
import { Link } from "react-scroll"
import "./navbar.scss"
const Navar = () => {
    //reposive menu
    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle("reponsive_nav")
    }

    window.addEventListener("scroll", () => {
        const header = document.querySelector(".Nav_bar")
        header.classList.toggle("active", window.scrollY > 100)
    })

    return (
        <div className='Nav_bar' >
            <div className="navbar_menu">
                <div className="logo">
                    <img src={logo} alt="LOGO" />
                </div>

                <div className="list_menu" ref={navRef}>
                    <h2 className='home'><Link to='/' span={true} smooth={true}>HOME</Link></h2>
                    <h2 className='about'><Link to='about' span={true} smooth={true}>ABOUT ME</Link></h2>
                    <h2 className='my_experience' ><Link to='experience' span={true} smooth={true}>MY EXPERIENCE</Link></h2>
                    <h2 className='my_service'><Link to='servieces' span={true} smooth={true}>MY SERVICE</Link></h2>
                    <div className='contact_me '><Link to='contact' span={true} smooth={true}>LET CONTACT</Link> </div>
                    <div className='closeMenu' onClick={showNavbar}><AiOutlineClose /></div>
                </div>
                <div className='menuNabar' onClick={showNavbar}><AiOutlineMenuFold /></div>

            </div>
        </div>
    )
}

export default Navar