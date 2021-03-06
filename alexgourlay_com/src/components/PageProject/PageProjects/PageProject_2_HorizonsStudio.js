import React from 'react';
import LazyLoad from 'react-lazyload';
import Gallery from 'react-grid-gallery';


import '../PageProject.css'
import MyIFrame from '../../MyIFrame/MyIFrame';

const PageProject_2_HorizonsStudio = (props) => {

    const IMAGES_A = [
        {
            src: `${props.RES_DIR}/OPT_HD_ShoalFishStill.jpg`,
            thumbnail: `${props.RES_DIR}/OPT_HD_ShoalFishStill.jpg`,
            thumbnailWidth: 320,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/1.png`,
            thumbnail: `${props.RES_DIR}/1.png`,
            thumbnailWidth: 255,
            thumbnailHeight: 320,
            caption: "Procedural Sea Vines"
        },
        {
            src: `${props.RES_DIR}/nsynth.gif`,
            thumbnail: `${props.RES_DIR}/nsynth.gif`,
            thumbnailWidth: 1280,
            thumbnailHeight: 800,
        },
        {
            src: `${props.RES_DIR}/2.png`,
            thumbnail: `${props.RES_DIR}/2.png`,
            thumbnailWidth: 320,
            thumbnailHeight: 320,
            caption: "Rope Simulation"
        },
        {
            src: `${props.RES_DIR}/3.png`,
            thumbnail: `${props.RES_DIR}/3.png`,
            thumbnailWidth: 255,
            thumbnailHeight: 320,
        },
        {
            src: `${props.RES_DIR}/ball_cloth.gif`,
            thumbnail: `${props.RES_DIR}/ball_cloth.gif`,
            thumbnailWidth: 1280,
            thumbnailHeight: 800,
        },
        // {
        //     src: `${props.RES_DIR}/supershape.gif`,
        //     thumbnail: `${props.RES_DIR}/supershape.gif`,
        //     thumbnailWidth: 1280,
        //     thumbnailHeight: 800,
        // },
    ];

    const IMAGES_B = [
        {
            src: `${props.RES_DIR}/me_vr.jpg`,
            thumbnail: `${props.RES_DIR}/me_vr.jpg`,
            thumbnailWidth: 2000,
            thumbnailHeight: 1309,
            caption: "",
        },
        {
            src: `${props.RES_DIR}/4.jpg`,
            thumbnail: `${props.RES_DIR}/4.jpg`,
            thumbnailWidth: 719,
            thumbnailHeight: 320,
            caption: "Concept Sketching"
        },
        {
            src: `${props.RES_DIR}/0.png`,
            thumbnail: `${props.RES_DIR}/0.png`,
            thumbnailWidth: 449,
            thumbnailHeight: 320,
            caption: "PureData Patching"
        },
    ]

    return (

        <div id='project-content'>
            <p className='p'>
                During the summer of 2018 I interned at London based virtual reality
                developers Horizons Studio. My role at Horizons was that of research and development
                whereby I developed new interactions for the Oculus Rift platform. Horizons create
                interactive music journeys that allow the player to control the sound of a piece of
                music by interacting with objects in the virtual world.
                <br />
                <br />

                <b><a href="https://horizons-vr.com"
                    target="_blank"
                    rel='noopener noreferrer'>
                    horizons-vr.com</a></b>
            </p>

            <div className="separator" />

        
            <MyIFrame
                _title="Vimeo Video"
                _src="https://player.vimeo.com/video/361057084" />

            <div className="separator" />

            <p className='p'>
                Interactions and assets were developed inside Unity. I explored various techniques of
                procedurally generating shapes, using Unity's mesh class to programmatically
                define vertex positions. I also explored various simulation methods, including
                Craig Reynolds' boids algorithm which was used to create the motion behaviour 
                of the 'shoal sequencer' scene.

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
                The responsive audio for the interactions was developed using PureData,
                a visual programming language used for digital signal processing, before being compiled
                into a Unity C# plugin. I called on my experience in sound design when
                developing a variety of different synthesis methods for patches.

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


        </div >
    )
}

export default PageProject_2_HorizonsStudio;