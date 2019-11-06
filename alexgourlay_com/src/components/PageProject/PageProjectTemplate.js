import React, { lazy, Suspense } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

import ProjectTile from '../ProjectTile/ProjectTile.js';

import './PageProject.css'

import projects from '../../data/projects.json';
import links from '../../data/links.json';

const projectPages = [
    lazy(() => import('./PageProjects/PageProject_0_AXPendula')),
    lazy(() => import('./PageProjects/PageProject_1_OrBit')),
    lazy(() => import('./PageProjects/PageProject_2_HorizonsStudio')),
    lazy(() => import('./PageProjects/PageProject_3_VitaRun')),
    lazy(() => import('./PageProjects/PageProject_4_PersonalWebsite')),
    lazy(() => import('./PageProjects/PageProject_5_Vortech')),
    lazy(() => import('./PageProjects/PageProject_6_SustainableToothbrush')),
];

const PageProjectTemplate = (props) => {

    const projectKey = props.match.params.projectKey;
    const project = projects.find((project) => (project.id === projectKey));

    document.title = `AG Portfolio - ${project.title}`;

    // Assign reference to correct project react component.
    const ProjectComp = projectPages[projectKey];

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
                    RES_DIR={`${links['github_dir']}/${project.dir}`} />
                <hr />
            </div>
            <div style={{ "paddingBottom": "100px" }}></div>s

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