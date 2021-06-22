import React from 'react'

export default function ProjectCard(props) {
    const {project} = props
    function openNewTab() {
        window.open(project.link, "_blank")
    }
    var style ={
        backgroundImage: `url(${project.image})`,
        backgroundSize: "auto 750px",
        backgroundRepeat: "no-repeat"
    }; 
    return (
        // <div className='card' onClick={openNewTab}>
        //     <h3>{project.name}</h3>
        //     <img src={project.image} alt='image'/>
        //     <div class='links'>
        //         <a href={project.frontend}>Front End</a>            
        //         <a href={project.backend}>Back End</a>            
        //     </div>
        //     <i class='project-details'>{project.hook}</i>
        //     <p class='project-details'>{project.description}</p>
        // </div>
        <card className='card' style={ style } onClick={openNewTab}>
            <h3>{project.name}</h3>
            <h3>{project.subName}</h3>
        </card>
    )
}
