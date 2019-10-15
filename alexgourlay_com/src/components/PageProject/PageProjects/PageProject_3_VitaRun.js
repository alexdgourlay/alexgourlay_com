import React from 'react';
import Image from 'react-bootstrap/Image';
import LazyLoad from 'react-lazyload';
import Gallery from 'react-grid-gallery';

import '../PageProject.css'

const PageProject_3_VitaRun = (props) => {


    const IMAGES_A = [
        {
            src: `${props.RES_DIR}/system_diagram.jpeg`,
            thumbnail: `${props.RES_DIR}/system_diagram.jpeg`,
            thumbnailWidth: 1920,
            thumbnailHeight: 1080,
        },
        {
            src: `${props.RES_DIR}/OPT_Wireframe-1.jpeg`,
            thumbnail: `${props.RES_DIR}/OPT_Wireframe-1.jpeg`,
            thumbnailWidth: 1000,
            thumbnailHeight: 562,
        },
        {
            src: `${props.RES_DIR}/OPT_Wireframe-2.jpeg`,
            thumbnail: `${props.RES_DIR}/OPT_Wireframe-2.jpeg`,
            thumbnailWidth: 699,
            thumbnailHeight: 552,
        },
    ];

    const IMAGES_B = [
        {
            src: `${props.RES_DIR}/OPT_Picture5.png`,
            thumbnail: `${props.RES_DIR}/OPT_Picture5.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 1733,
        },
        {
            src: `${props.RES_DIR}/OPT_Picture6.png`,
            thumbnail: `${props.RES_DIR}/OPT_Picture6.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 1733,
        },
        {
            src: `${props.RES_DIR}/OPT_Picture4.png`,
            thumbnail: `${props.RES_DIR}/OPT_Picture4.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 1733,
        },
        {
            src: `${props.RES_DIR}/OPT_Picture7.png`,
            thumbnail: `${props.RES_DIR}/OPT_Picture7.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 1733,
        },
    ];

    const IMAGES_C = [
        {
            src: `${props.RES_DIR}/OPT_Picture1.png`,
            thumbnail: `${props.RES_DIR}/OPT_Picture1.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 1733,
        },
        {
            src: `${props.RES_DIR}/OPT_Picture3.png`,
            thumbnail: `${props.RES_DIR}/OPT_Picture3.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 1733,
        },
    ]

    const IMAGES_D = [
        {
            src: `${props.RES_DIR}/OPT_VitaRun_Over_Shoulder_Crop.png`,
            thumbnail: `${props.RES_DIR}/OPT_VitaRun_Over_Shoulder_Crop.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 750,
        },
        {
            src: `${props.RES_DIR}/OPT_vita_run.png`,
            thumbnail: `${props.RES_DIR}/OPT_vita_run.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 562,
        },
        {
            src: `${props.RES_DIR}/GraphicAsset4.png`,
            thumbnail: `${props.RES_DIR}/GraphicAsset4.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 562,
        },
    ];


    return (
        <div id='project-content'>

            <p className='p' >
                <b>My Role:</b><br /> Project Management, Android Development (Project Structure, BLE Connectivity, Server Connectivity)
            </p>

            <p className='p'>
                VitaRun is a mobile smart-healthcare app that integrates smart insoles with machine learning
                to provide personalised feedback on your running style, to help avoid injury.

                <br /><br />

                Poor technique, characterised by a high impact force or abnormal pronation while running,
                puts runners at risk of injury. VitaRun addresses these issues by monitoring features
                of the users gait using pressure sensors and an IMU embedded in a smart insole.
                Live feedback is provided, informing the runner on issues with their
                style, along with other relevant metrics about their current run.
            </p>

            <div className="separator" />

            <Image
                src={`${props.RES_DIR}/OPT_vita_combo.png`}
                fluid
            />

            <div className="separator" />

            <LazyLoad height={200}>
                <div className="gallery-div">
                    <Gallery
                        images={IMAGES_B}
                        enableImageSelection={false}
                        margin={10}
                        rowHeight={400} />
                </div>
            </LazyLoad>

            <LazyLoad height={200}>
                <div className="gallery-div">
                    <Gallery
                        images={IMAGES_C}
                        enableImageSelection={false}
                        margin={10}
                        rowHeight={400} />
                </div>
            </LazyLoad>


            <p className='p'>
                The mobile app was developed for Android devices, using Android studio.
            </p>

            <LazyLoad height={200}>

                <div className="gallery-div">
                    <Gallery
                        images={IMAGES_A}
                        enableImageSelection={false}
                        margin={4}
                        rowHeight={200} />
                </div>
            </LazyLoad>

        </div>
    )
}

export default PageProject_3_VitaRun;