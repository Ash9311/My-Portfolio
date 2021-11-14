import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
//import github from './../../assets/gh.png';
//import github from './../../assets/gh.png';

const Contact = () => {
    return (
        <div  className='section-container'>
            <Header heading="Get in touch."
            details="Interested to collaborate? Feel free to drop me an email"
            
            />

            {/* social icons */}

            <div className="social-icons-container">
                <a href="https://github.com/Ash9311" className="social-icon"><img src={github} alt="social"/></a>
                <a href="https://www.linkedin.com/in/ashutosh-mulky-6175b615a/" className="social-icon"><img src={linkedin} alt="social"/></a>
                <a href="https://www.instagram.com/ash_1110/" className="social-icon"><img src={instagram} alt="instagram"/></a>
            </div>

            <FooterLink phrase="Read mode " toAdress="/about" link="about me"/>

            <div className="vector-frame">
                <img src={contactVector} alt="vector" className="about-vector"/>
            </div>
        </div>
    )
}

export default Contact;