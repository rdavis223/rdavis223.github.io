import React from "react";
import './ProjectEntry.css'



export default function ProjectEntry({ image, title, description, id, link}){
    let a = 'imageContainer' + id;
    return (
        <div className = 'projectEntry' onClick={() => {window.open(link, '_blank')}}>  
            <div id={a}><img src={image} className="projectPicture" alt="projectPicture"/></div>
            <div className= "projectTitle"> 
                {title}
            </div>
            <div className= "projectDescription">
                {description}
            </div>
        </div>
        )
}
