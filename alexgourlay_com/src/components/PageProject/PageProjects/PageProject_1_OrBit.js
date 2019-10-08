import React from 'react';
import LazyLoad from 'react-lazyload';
// import { Image } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

import MyIFrame from '../../MyIFrame/MyIFrame';

const PageProject_1_OrBit = (props) => {

    const IMAGES_A = [
        {
            src: `${props.RES_DIR}/OPT_A_OrBit.jpg`,
            thumbnail: `${props.RES_DIR}/OPT_A_OrBit.jpg`,
            thumbnailWidth: 570,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/4.JPG`,
            thumbnail: `${props.RES_DIR}/4.JPG`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/OPT_Chiara.png`,
            thumbnail: `${props.RES_DIR}/OPT_Chiara.png`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/0.png`,
            thumbnail: `${props.RES_DIR}/0.png`,
            thumbnailWidth: 528,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/Effect_Selection.gif`,
            thumbnail: `${props.RES_DIR}/Effect_Selection.gif`,
            thumbnailWidth: 567,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/Screen_Control.gif`,
            thumbnail: `${props.RES_DIR}/Screen_Control.gif`,
            thumbnailWidth: 567,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/Sketches2.png`,
            thumbnail: `${props.RES_DIR}/Sketches2.png`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
            caption: "Sketches by Ian Kegler"
        },
    ];

    const IMAGES_B = [
        {
            src: `${props.RES_DIR}/3.jpg`,
            thumbnail: `${props.RES_DIR}/3.jpg`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/app1.JPG`,
            thumbnail: `${props.RES_DIR}/app1.JPG`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/app2.JPG`,
            thumbnail: `${props.RES_DIR}/app2.JPG`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
        },
    ]

    return (
        <div id='project-content'>

            <p className='p' >
                <b>My Role:</b><br /> Product Design, Software Development (React Native & Max for Live), Video Production
            </p>

            <p className='p'>
                Orbit is a motion-sensing device for musicians and performers.
                It bridges the gap between acoustic and digital music by connecting
                you to your favourite digital effects and sounds. The device connects wirelessly
                to your DAW via the OrBit software plugin.
            </p>

            <div style={{ "paddingTop": "30px" }} />

            {/* Kickstarter video */}
            <MyIFrame
                _title="Vimeo Video"
                _src="https://player.vimeo.com/video/337293634" />

            <div style={{ "paddingTop": "30px" }} />

            <p className='p'>
                The project was conducted as part of an enterprise module at Imperial
                College London as a team of four. The project started with a product concept
                and progressed into a well developed hardware/software prototype. The team
                adopted the name BitLabs and I took on the role of CTO.

                <br /><br />
                One deliverable for the module, produced half way
                through OrBit's development, was a public website & video that would
                promote the product. This was

            </p>

            <p className='p' style={{ 'fontWeight': '600', "textAlign": "right" }}>
                Promotional Website Available <a href="http://www.bitlabs.uk/"
                    target="_blank"
                    rel='noopener noreferrer'>
                    here.</a>
            </p>
            <p className='p' style={{ 'fontWeight': '600', "textAlign": "left" }}>
                Kickstarter Page Available <a href="https://www.kickstarter.com/projects/bitlabs/1326804002?ref=1ml55j&token=2f7e4b06"
                    target="_blank"
                    rel='noopener noreferrer'>
                    here.</a>
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

            <p className='p'>
                Developed alongside the physical prototype was a mobile app that 
                would imitate the functionality of the hardware. The app was developed
                using React Native and was given a skeumorphic design to help
                give a convincing experience of the real product.

                <br/><br/>

                Communication between the mobile app and the host DAW was 
                facilitated by a websocket connection. The connection was served using
                Node.js, which was hosted in a Max for Live device.
                 
            </p>

            <LazyLoad height={200}>
                <div className="gallery-div">
                    <Gallery
                        images={IMAGES_B}
                        enableImageSelection={false}
                        margin={4}
                        rowHeight={200} />
                </div>
            </LazyLoad>

        </div>
    );
}

export default PageProject_1_OrBit;



