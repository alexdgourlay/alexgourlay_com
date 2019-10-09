import React from 'react';
import Image from 'react-bootstrap/Image';
import LazyLoad from 'react-lazyload';
import Gallery from 'react-grid-gallery';

import '../PageProject.css'

const PageProject_3_VitaRun = (props) => {


    const IMAGES_A = [
        {
            src: `${props.RES_DIR}/OPT_VitaRun_Over_Shoulder_Crop.png`,
            thumbnail: `${props.RES_DIR}/OPT_VitaRun_Over_Shoulder_Crop.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 750,
        },
        {
            src: `${props.RES_DIR}/OPT_VitaRun_Over_Shoulder_Crop.png`,
            thumbnail: `${props.RES_DIR}/OPT_VitaRun_Over_Shoulder_Crop.png`,
            thumbnailWidth: 1000,
            thumbnailHeight: 750,
        },
    ];


    return (
        <div id='project-content'>

            <p className='p' >
                <b>My Role:</b><br /> Project Management, Android Development (Project Structure, BLE Connectivity, Server Connectivity)
            </p>

            <p className='p'>
                VitaRun is a mobile smart-healthcare app that integrates pressure sensing insoles and machine learning
                to provide personalised feedback on your running style.

                <br /><br />

                Injuries resulting from abnormal pronation or high impact force while running can
                are at risk of
            </p>

            <Image
                src={`${props.RES_DIR}/system_diagram.jpeg`}
                fluid />

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