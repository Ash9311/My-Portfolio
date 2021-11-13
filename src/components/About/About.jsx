import React from "react";
import Header from '../Header/Header';
import './About.css'
import aboutVector from './../../assets/about_vector.png';
import FooterLink from '../FooterLink/FooterLink';

const About= () => {
    return ( <div className='section-container'>
        <Header heading='About Me.'
        details='Software Engineer | B.Tech Graduate | Coding and Problem Solving Geek'
        />
    <FooterLink phrase="check out my " link="projects!" toAdress="/projects"/>
    {/* vector Frame */}
    <div className="vector-frame">
        <img src={aboutVector} className="about-vector" alt="about"/>
    </div>

    </div> );
};

export default About;