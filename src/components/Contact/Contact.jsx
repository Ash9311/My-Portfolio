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
            <FooterLink phrase="Read mode " toAdress="/about" link="about me"/>

            <div className="vector-frame">
                <img src={contactVector} alt="vector" className="about-vector"/>
            </div>
        </div>
    )
}

export default Contact;