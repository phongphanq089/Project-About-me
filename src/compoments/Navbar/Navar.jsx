import React, { useState } from 'react'
import { AiTwotoneHome } from "react-icons/ai"
import { BsPeopleFill, BsFillJournalBookmarkFill, BsFillSuitHeartFill } from "react-icons/bs"
import { BiMailSend } from "react-icons/bi"
import { Link } from "react-scroll"
import "./navbar.scss"
const Navar = () => {
    const [active, setActive] = useState("")


    // window.addEventListener("scroll", () => {
    //     const header = document.querySelector(".Nav_bar")
    //     header.classList.toggle("active", window.scrollY > 100)
    // })

    return (
        <div className='Nav_bar' >
            <div className="nav__list">
                <Link to="/" smooth={true}>
                    <div onClick={() => setActive("/")} className={active === "/" ? "nav_item active" : "nav_item"}>
                        <div className="icon"><AiTwotoneHome /></div>
                        <div className="text">Home</div>
                    </div>
                </Link>
                <Link to="about" smooth={true}>
                    <div onClick={() => setActive("about")} className={active === "about" ? "nav_item active" : "nav_item"}>
                        <div className="icon"><BsPeopleFill /></div>
                        <div className="text">About</div>
                    </div>
                </Link>
                <Link to="experience" smooth={true}>
                    <div onClick={() => setActive("experience")} className={active === "experience" ? "nav_item active" : "nav_item"}>
                        <div className="icon"><BsFillJournalBookmarkFill /></div>
                        <div className="text">Experiences</div>
                    </div>
                </Link>
                <Link to="portfolio" smooth={true}>
                    <div  onClick={() => setActive("portfolio")} className={active === "portfolio" ? "nav_item active" : "nav_item"} >
                        <div className="icon"><BsFillSuitHeartFill /></div>
                        <div className="text">Portfolio</div>
                    </div>
                </Link>
                <Link to="contact" smooth={true}>
                    <div  onClick={() => setActive("contact")} className={active === "contact" ? "nav_item active" : "nav_item"}>
                        <div className="icon"><BiMailSend /></div>
                        <div className="text">Contact</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navar