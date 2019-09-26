import React from 'react';
import Gallery from 'react-grid-gallery';

import '../PageProject.css'


const PageProject_0_AXPendula = (props) => {

    const IMAGES_A = [
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

            <iframe
                title="YouTube Video"
                width="560" height="315"
                src="https://www.youtube.com/embed/rDF878TOnoI?start=39"
                frameBorder="0"></iframe>

            <iframe
                title="Facebook Post"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fimperialcollegelondon%2Fphotos%2Fgm.341656999910770%2F10156606112121838%2F%3Ftype%3D3%26theater&width=500&show_text=true&height=500&appId"
                width="500" height="500"
                style={{ "border": "none", "overflow": "hidden" }}
                scrolling="no"
                frameBorder="0" ></iframe>

            <Gallery
                images={IMAGES_A}
                enableImageSelection={false} />

            <div>
                <p className='p'>
                    Fuck me.............
                </p>
            </div>
        </div>
    )
}


export default PageProject_0_AXPendula;