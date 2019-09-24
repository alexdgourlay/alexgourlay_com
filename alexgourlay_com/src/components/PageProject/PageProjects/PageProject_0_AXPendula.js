import React from 'react';
import { Button } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

import '../PageProject.css'


const PageProject_0_AXPendula = (props) => {

    const IMAGES = [
        {
            src: `${props.RES_DIR}/OPT_A_AXPendula.JPG`,
            thumbnail: `${props.RES_DIR}/OPT_A_AXPendula.JPG`,
            thumbnailWidth: 640,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/OPT_A_AXPendula.JPG`,
            thumbnail: `${props.RES_DIR}/OPT_A_AXPendula.JPG`,
            thumbnailWidth: 320,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/OPT_A_AXPendula.JPG`,
            thumbnail: `${props.RES_DIR}/OPT_A_AXPendula.JPG`,
            thumbnailWidth: 320,
            thumbnailHeight: 320,
        },
    ]

    return (
        <div id='project-content'>
            <Gallery
                images={IMAGES}
                enableImageSelection={false} />
        </div>
    )
}


export default PageProject_0_AXPendula;