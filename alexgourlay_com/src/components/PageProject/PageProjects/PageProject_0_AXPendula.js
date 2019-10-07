import React from 'react';
import Gallery from 'react-grid-gallery';
import LazyLoad from 'react-lazyload';

import MyIFrame from '../../MyIFrame/MyIFrame';

import '../PageProject.css'

const PageProject_0_AXPendula = (props) => {

    const IMAGES_A = [
        {
            src: `${props.RES_DIR}/8.jpg`,
            thumbnail: `${props.RES_DIR}/8.jpg`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/1.jpg`,
            thumbnail: `${props.RES_DIR}/1.jpg`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/5.jpg`,
            thumbnail: `${props.RES_DIR}/5.jpg`,
            thumbnailWidth: 570,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/6.jpg`,
            thumbnail: `${props.RES_DIR}/6.jpg`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/7.jpg`,
            thumbnail: `${props.RES_DIR}/7.jpg`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/9.jpg`,
            thumbnail: `${props.RES_DIR}/9.jpg`,
            thumbnailWidth: 427,
            thumbnailHeight: 320,
            caption: "Design by Fan Mo"
        },
        // {
        //     src: `${props.RES_DIR}/0.jpg`,
        //     thumbnail: `${props.RES_DIR}/0.jpg`,
        //     thumbnailWidth: 478,
        //     thumbnailHeight: 320,
        // },
        // {
        //     src: `${props.RES_DIR}/4.jpg`,
        //     thumbnail: `${props.RES_DIR}/4.jpg`,
        //     thumbnailWidth: 240,
        //     thumbnailHeight: 320,
        // },
    ]

    const IMAGES_B = [
        {
            src: `${props.RES_DIR}/10.jpg`,
            thumbnail: `${props.RES_DIR}/10.jpg`,
            thumbnailWidth: 526,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/11.jpg`,
            thumbnail: `${props.RES_DIR}/11.jpg`,
            thumbnailWidth: 382,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/12.jpg`,
            thumbnail: `${props.RES_DIR}/12.jpg`,
            thumbnailWidth: 440,
            thumbnailHeight: 320,
        },
          {
            src: `${props.RES_DIR}/3.jpg`,
            thumbnail: `${props.RES_DIR}/3.jpg`,
            thumbnailWidth: 667,
            thumbnailHeight: 320,
        },
    ]

    return (
        <div id='project-content'>

            <p className='p' >
                <b>My Role:</b><br /> Project Management, Software Development (Max MSP), Sound Design
            </p>

            <p className="p">
                AXPendula is an interactive audio visual installation based on
                the laws of simple harmonic motion. Eight custom designed
                pendulums are set in motion, each illuminating and triggering a musical
                note as they pass through the centre.
            </p>

            <div className="separator" />

            <MyIFrame
                _title="Vimeo Video"
                _src="https://player.vimeo.com/video/363536559" />

            <div className="separator" />

            <p className='p'>

                AXPendula was exhibited twice throughout 2018, firstly at the Dyson
                    School's Audio Experience exhibition and secondly for London Design
                    Festival where the installation was opened to the public.
                    <br /><br />

                The installation was built using an Arduino as an input-output controller,
                Max MSP for processing/sound generation and MIRA to provide a user
                interface on an iPad wirelessly. The interface allowed viewers to
                change the harmonic scale that would be played as the pendulums triggered.
            </p>

            <LazyLoad height={200}>
                <div className="gallery-div">
                    <Gallery
                        images={IMAGES_A}
                        enableImageSelection={false}
                        margin={4}
                        rowHeight={200}
                        backdropClosesModal={true} />

                </div>
            </LazyLoad>

            <p className="p">

                The project was carried out by a team of students, in which I had a
                leading role. I covered the development of the installation's software
                and also undertook the task of sound design, which was fulfilled using
                subtractive synthesis within Max MSP.
            </p>

            <LazyLoad height={200}>
                <div className="gallery-div">
                    <Gallery
                        images={IMAGES_B}
                        enableImageSelection={false}
                        margin={4}
                        rowHeight={200}
                        backdropClosesModal={true} />

                </div>
            </LazyLoad>

            <p className="p">

            The budget for the project was £100 and construction of the installation took around 1 week. Each pendulum consisted of
            a 2W white LED cluster, a plastic Christmas tree bauble, a 3D printed ceramic part and a small magnet. Each was suspended
            using polyamide thread. Hall effect sensors were used to sense the pendulums passing through the centre.

            </p>


        </div >
    )
}


export default PageProject_0_AXPendula;

//             {/* <LazyLoad height={200}>
//                 <div style={{ "alignContent": "right" }}>
//                     <iframe
//                         title="Facebook Post"
//                         src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fimperialcollegelondon%2Fphotos%2Fgm.341656999910770%2F10156606112121838%2F%3Ftype%3D3%26theater&width=500&show_text=true&height=500&appId"
//                         width="400" height="500"
//                         style={{ "padding": "30px", "overflow": "hidden" }}
//                         align="right"
//                         scrolling="no"
//                         frameBorder="0" ></iframe>

//                 </div>
//             </LazyLoad> */}