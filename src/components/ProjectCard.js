import React from 'react'
import {navigate} from 'gatsby';

export default function ProjectCard(props) {
    const {project} = props
    function openNewTab() {
        navigate(`/${project.page}`);
    }
    return (
        <card className='card' onClick={openNewTab}>
            <h3>{project.name}</h3>
            <h3>{project.subName}</h3>
            <div id="project-icon">{project.image}</div>
        </card>
    )
}
