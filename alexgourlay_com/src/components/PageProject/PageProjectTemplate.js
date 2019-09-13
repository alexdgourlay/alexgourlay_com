import React, { lazy, Suspense } from 'react';

import ProjectTile from '../ProjectTile/ProjectTile.js';

import './PageProject.css'

import projects from '../../data/projects.json'

const AXPendula = lazy(() => import('./PageProjects/PageProject_0_AXPendula'));
const OrBit = lazy(() => import('./PageProjects/PageProject_1_OrBit'));

const PageProjectTemplate = (props) => {

    const projectTitle = props.match.params.projectTitle;

    document.title = `AG Portfolio - ${projectTitle}`;

    const pages = {
        AXPendula: [0, AXPendula],
        OrBit: [1, OrBit],
    }

    const ProjectComp = pages[projectTitle][1];
    const project = projects[pages[projectTitle][0]];

    return (
        <Suspense fallback={<div>Loading..</div>}>
            <div>  
                <ProjectTile
                    key={project.id}
                    project={project}
                    match={props.match}
                    animation = {false}
                    handleTileEnter={() => {}}
                    handleTileExit={() => {}}
                    />
                <ProjectComp 
                    project = {project}/>
            </div>
        </Suspense>
    );
}

export default PageProjectTemplate;