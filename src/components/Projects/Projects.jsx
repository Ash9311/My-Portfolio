import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import './Projects.css';
import { projectsData } from "../../assets/projectsData";

const Projects = () => {
    return(
        <div className='section-container'>
            <Header heading="My Projects." details="Here are a few cool things I've worked on"/>

            <div className="project-cards-container">
                {
                    projectsData.map(project => {
                        return <h1>{project.projectName}</h1>
                    })
                }
            </div>


            <FooterLink phrase="Check out " link="my skills!" toAdress="/skills" />
        </div>
    )
}

export default Projects;