import React from 'react';
import { Image } from 'react-bootstrap';

import Gallery from 'react-grid-gallery';
// import LazyLoad from 'react-lazyload';

const PageProject_1_OrBit = (props) => {

    const IMAGES_A = [
        {
            src: `${props.RES_DIR}/8.jpg`,
            thumbnail: `${props.RES_DIR}/8.jpg`,
            thumbnailWidth: 480,
            thumbnailHeight: 320,
        },
    ];

    return (
        <div id='project-content'>
            <p className='p'>
                Orbit is a motion-sensing device for musicians and performers.
                It bridges the gap between acoustic and digital music by connecting
                you to your favourite digital effects and sounds.
            </p>

            <div style={{ "paddingTop": "30px" }} />

            {/* Kickstarter video */}
            <div className="resp-container">
                <iframe
                    className="resp-iframe"
                    title="Vimeo Video"
                    src="https://player.vimeo.com/video/337293634"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen></iframe>
            </div>


            <div style={{ "paddingTop": "30px" }} />

            <p className='p'>
                OrBit offers a means of controlling music software that focuses on expression and versatility. Using motion to control musical effects and sounds provides two extra dimensions
                of expression when compared to a single knob or slider found on conventional MIDI controllers. As a
                result, a much wider range of sonic results can be achieved. Another advantage over conventional
                input methods is that motion control does not require use of the fingers, which would be occupied
                when playing an instrument. OrBit therefore allows instrumentalists to actively control musical
                effects and sounds whilst performing.
            </p>

            <p className='p' style={{ 'textAlign': 'center' }}>
                Promotional website available <a href="http://www.bitlabs.uk"
                    target="_blank"
                    rel='noopener noreferrer'>
                    here.</a>
            </p>

            <Image
                src={`${props.RES_DIR}/Mapping.gif`}
                fluid />
            <Image
                src={`${props.RES_DIR}/Screen_Control.gif`}
                fluid />

        </div>
    );
}

export default PageProject_1_OrBit;



