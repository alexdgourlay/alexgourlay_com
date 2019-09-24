import React from 'react';
import { Button, Image, Jumbotron } from 'react-bootstrap';

const PageProject_1_OrBit = (props) => {

    return (
        <div id='project-content'>
            <p className='p'>
                Orbit is a motion-sensing device for musicians and performers.
                It bridges the gap between acoustic and digital music by connecting
                you to your favourite digital effects and sounds.
            </p>

            {/* Kickstarter video */}
            <div className='iframe-container'>
                <iframe
                    src="https://player.vimeo.com/video/337293634"
                    width="480" height="360"
                    frameBorder=""
                    allow="autoplay; fullscreen"
                    allowFullScreen></iframe>
            </div>


            <p className='p'>
                This project spanned across an academic year and was
            </p>

            <Button
                variant="outline-info "
                siz="lg"
                block
                onClick={() => window.location.href = 'http://bitlabs.uk'}>
                Go to promotional website
                </Button>

            <Image
                src={`${props.RES_DIR}/OPT_bitlabs_uk.PNG`}
                alt='bitlabs.uk screenshot'
                rounded
                fluid />
        </div>
    );
}

export default PageProject_1_OrBit;



{/* <p className='p' style={{'text-align':'center'}}>
    Promotional website available <a href="http://www.bitlabs.uk" 
                                    target="_blank"
                                    rel='noopener noreferrer'>
                                    here.</a>
</p> */}