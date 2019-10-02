import React from 'react';
import Gallery from 'react-grid-gallery';
import LazyLoad from 'react-lazyload';

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
        // {
        //     src: `${props.RES_DIR}/3.jpg`,
        //     thumbnail: `${props.RES_DIR}/3.jpg`,
        //     thumbnailWidth: 667,
        //     thumbnailHeight: 320,
        // },
    ]

    return (
        <div id='project-content'>

            <p className="p">
                AXPendula is an interactive audio visual installation based on
                the physical laws of simple harmonic motion. Eight custom designed
                pendula are set in motion, each illuminating and triggering a musical
                note as they pass through the centre.

                <br />
                <br />

                AXPendula was exhibited twice throughout 2018, firstly at the Dyson
                School's Audio Experience exhibition and secondly for London Design
                Festival where the installation was opened to the public.
            </p>

            <div className="separator" />

            <div className="resp-container">
                <iframe
                    className="resp-iframe"
                    title="Vimeo Video"
                    src="https://player.vimeo.com/video/363536559"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen></iframe>
            </div>

            <div className="separator" />

            <p className='p'>
                The installation was built using Arduino as an input-output controller,
                Max MSP for processing and sound generation and MIRA to provide a user
                interface on an iPad wirelessly.
            </p>

            <div className="separator" />

            <LazyLoad height={200}>
                <Gallery
                    images={IMAGES_A}
                    enableImageSelection={false}
                    margin={4}
                    rowHeight={200} />
            </LazyLoad>



            <LazyLoad height={200}>

                <div className="separator" />
                <p className='p'>
                    The project was carried out in a team of seven students, in which I had a
                    leading role. I took on the development of the software, which was implemented
                    inside Max MSP. Along with overseeing the build process and parts sourcing.
            </p>
            </LazyLoad>

            <LazyLoad height={200}>
                <div>

                    <iframe
                        title="Facebook Post"
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fimperialcollegelondon%2Fphotos%2Fgm.341656999910770%2F10156606112121838%2F%3Ftype%3D3%26theater&width=500&show_text=true&height=500&appId"
                        width="400" height="500"
                        style={{ "padding": "30px", "overflow": "hidden" }}
                        align="left"
                        scrolling="no"
                        frameBorder="0" ></iframe>

                </div>
            </LazyLoad>
        </div >
    )
}


export default PageProject_0_AXPendula;