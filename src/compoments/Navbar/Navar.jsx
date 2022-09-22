import React from 'react'
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { BsFillPeopleFill, BsFillJournalBookmarkFill, BsBookmarkHeartFill } from 'react-icons/bs'
import logo from "../../accsets/logo_dev.jpg"
import "./navbar.scss"
const Navar = () => {
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".Nav_bar")
        header.classList.toggle("active", window.scrollY > 100)
    })

    return (
        <div className='Nav_bar'>
            <div className="navbar_menu">
                <div className="logo">
                    <img src={logo} alt="LOGO" />
                </div>
                <div className="list_menu">
                    <h2 className='home'><AiOutlineHome /></h2>
                    <h2 className='about'><BsFillPeopleFill /></h2>
                    <h2 className='my_experience' ><BsFillJournalBookmarkFill /></h2>
                    <h2 className='my_service'><BsBookmarkHeartFill /></h2>
                    <div className='contact_me '>LET CONTACT <i><AiOutlineMail /></i></div>
                </div>
            </div>
        </div>
    )
}

export default Navar