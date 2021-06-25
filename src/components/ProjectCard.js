import React from 'react'
import {navigate} from 'gatsby';

export default function ProjectCard(props) {
    const {project} = props
    function openNewTab() {
        navigate(`/${project.page}`);
    }
    var style ={
        backgroundImage: `url(${project.image})`,
        backgroundSize: "auto 750px",
        backgroundRepeat: "no-repeat"
    }; 
    return (
        <card className='card' style={ style } onClick={openNewTab}>
            <h3>{project.name}</h3>
            <h3>{project.subName}</h3>
        </card>
    )
}
