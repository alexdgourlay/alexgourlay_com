import React from 'react';
import { Button, Carousel } from 'react-bootstrap'

import links from '../../../data/links.json';

import '../PageProject.css'

const PageProject_0_AXPendula = (props) => {
    const RES_DIR = 'resources/projects';

    return (
        <div>
                <div>
                    <img
                        id = 'hero_img'
                        alt='Project Preview'
                        src={`${links['github_dir']}/${RES_DIR}/${props.project.img}`} />
                </div>
                <Button />

                <Carousel>

                </Carousel>
                <p> Hello this is a project in my portfolio</p>
        </div>
    )
}

export default PageProject_0_AXPendula;