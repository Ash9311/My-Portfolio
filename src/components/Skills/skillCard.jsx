import react from "react";
import './skills.css' 

const skillCard = ({skillName,skillUrl}) => {
    return (
        <div className="skill">
            <img src = {skillUrl} alt="skill" />
            <p>{skillName}</p>
        </div>
    )
}