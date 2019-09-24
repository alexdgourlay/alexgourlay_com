import React, { lazy, Suspense } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

import ProjectTile from '../ProjectTile/ProjectTile.js';

import './PageProject.css'

import projects from '../../data/projects.json';
import links from '../../data/links.json';

const AXPendula = lazy(() => import('./PageProjects/PageProject_0_AXPendula'));
const OrBit = lazy(() => import('./PageProjects/PageProject_1_OrBit'));
const HorizonsStudio = lazy(() => import('./PageProjects/PageProject_2_HorizonsStudio'));

const PageProjectTemplate = (props) => {

    const projectTitle = props.match.params.projectTitle;

    document.title = `AG Portfolio - ${projectTitle}`;

    const pages = {
        AXPendula: [0, AXPendula],
        OrBit: [1, OrBit],
        HorizonsStudio: [2, HorizonsStudio]
    }

    const ProjectComp = pages[projectTitle][1];
    const project = projects[pages[projectTitle][0]];

    return (
        <Suspense
            fallback=
            {
                <div>
                    <SyncLoader
                        css={{ position: 'fixed', top: '50%', left: '50%', marginRight: '100px', marginBottom: '50px' }}
                        sizeUnit={'px'}
                        size={10}
                        color={'#676767'}
                        loading={true} />
                </div>
            }>
            <div id="project-main-body">
                <ProjectTile
                    key={project.id}
                    project={project}
                    match={props.match}
                    animation={false}
                    handleTileEnter={() => { }}
                    handleTileExit={() => { }}
                />
                <ProjectComp
                    project={project} 
                    RES_DIR={`${links['github_dir']}/${project.dir}`}/>
            </div>
        </Suspense>
    );
}

// const LoadingScreen = (props) => {

//     return (
//         <div
//             style="position:fixed;top:50%;left:50%">
//             <Spinner
//                 animation="grow" />
//         </div>
//     );
// }

export default PageProjectTemplate;