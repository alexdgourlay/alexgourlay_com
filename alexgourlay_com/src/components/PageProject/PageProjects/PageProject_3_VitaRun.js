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
        // {
        //     src: `${props.RES_DIR}/OPT_VitaRun_Over_Shoulder_Crop.png`,
        //     thumbnail: `${props.RES_DIR}/OPT_VitaRun_Over_Shoulder_Crop.png`,
        //     thumbnailWidth: 1000,
        //     thumbnailHeight: 750,
        // },
        // {
        //     src: `${props.RES_DIR}/OPT_vita_run.png`,
        //     thumbnail: `${props.RES_DIR}/OPT_vita_run.png`,
        //     thumbnailWidth: 1000,
        //     thumbnailHeight: 562,
        // },
        // {
        //     src: `${props.RES_DIR}/GraphicAsset4.png`,
        //     thumbnail: `${props.RES_DIR}/GraphicAsset4.png`,
        //     thumbnailWidth: 1000,
        //     thumbnailHeight: 562,
        // },
        {
            src: `${props.RES_DIR}/2_Normalized_data_zoom.PNG`,
            thumbnail: `${props.RES_DIR}/2_Normalized_data_zoom.PNG`,
            thumbnailWidth: 1483,
            thumbnailHeight: 852,
        },
        {
            src: `${props.RES_DIR}/5_Frequency_and_split.PNG`,
            thumbnail: `${props.RES_DIR}/5_Frequency_and_split.PNG`,
            thumbnailWidth: 1000,
            thumbnailHeight: 562,
        },
        {
            src: `${props.RES_DIR}/boxplots.png`,
            thumbnail: `${props.RES_DIR}/boxplots.png`,
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
                VitaRun is a mobile smart healthcare app that uses pressure sensing insoles and
                machine learning to provide live, personalised feedback on your running style. The
                feedback helps runners reduce their chance of injury by communcating information about
                their gait and stride frequency.
            </p>
            <div className="separator" />
            <Image
                src={`${props.RES_DIR}/OPT_vita_combo.png`}
                fluid
            />
            <div className="separator" />

            <p className="p">
                VitaRun features a user profile system, allowing users to
                consolidate historical information about their running style, in order to monitor improvements over
                time.
            </p>


            <LazyLoad height={200}>
                <div className="gallery-div">
                    <Gallery
                        images={IMAGES_B}
                        enableImageSelection={false}
                        margin={10}
                        rowHeight={350} />
                </div>
            </LazyLoad>

            <LazyLoad height={200}>
                <div className="gallery-div">
                    <Gallery
                        images={IMAGES_C}
                        enableImageSelection={false}
                        margin={10}
                        rowHeight={350} />
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

            <LazyLoad height={200}>

                <div className="gallery-div">
                    <Gallery
                        images={IMAGES_D}
                        enableImageSelection={false}
                        margin={4}
                        rowHeight={100} />
                </div>
            </LazyLoad>

        </div>
    )
}

export default PageProject_3_VitaRun;