import React from 'react';
import {Button} from 'react-bootstrap';

const PageProject_1_OrBit = (props) => {

    return (
        <div id='project-content'>
            {/* Kickstarter video */}
            <p className='p'>
                Orbit is a motion-sensing device for musicians and performers.
                It bridges the gap between acoustic and digital music by connecting
                you to your favourite digital effects and sounds.
            </p>
            <iframe
                title='Orbit Kickstarter Video'
                src="https://player.vimeo.com/video/337293634"
                width="600" height="360"
                frameBorder=""
                allow="autoplay; fullscreen"
                allowFullScreen></iframe>

            <p className='p'>
                This project spanned across an academic year and was
            </p>

            <Button 
                variant="outline-primary"
                siz="lg"
                block>
                    Go to promotional website
                </Button>
            {/* <p className='p' style={{'text-align':'center'}}>
                Promotional website available <a href="http://www.bitlabs.uk" 
                                                target="_blank"
                                                rel='noopener noreferrer'>
                                                here.</a>
            </p> */}
            <img
                className='project-img'
                alt='bitlabs.uk screenshot'
                src={`${props.RES_DIR}/OPT_bitlabs_uk.PNG`}
            />
        </div>
    );
}

export default PageProject_1_OrBit;