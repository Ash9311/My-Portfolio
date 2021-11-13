import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import './Skills.css';
import skillsVector from './../../assets/skills_vector.png';
import {skillList} from './../../assets/skillsData';

const Skills = () => {
    return(
        <div  className='section-container'>
            <Header
            heading = "My Skills."
            details="Passionate about learning different technologies, and Here's the stack I've worked with!"/>

            <div className="skill-card-container">
                {
                    skillList.map(skill => {
                        return <h1>{skill.skillName}</h1>
                    })
                }
            </div>

            <FooterLink phrase="Get in " link="touch." toAdress="/contact" />

            <div className="skills-vector-frame">
                <img src={skillsVector} alt="skills" className="skills-vector" />
            </div>
        </div>
    )
}

export default Skills;