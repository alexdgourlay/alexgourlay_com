import React from 'react';

const PageProject_1_OrBit = (props) => {

    return (
        <div>
             {/* Kickstarter video */}
            <p className='p'>
                Orbit is a motion-sensing device for musicians and performers. 
                It bridges the gap between acoustic and digital music by connecting 
                you to your favourite digital effects and sounds.
            </p>
            <iframe
                title='Orbit Kickstarter Video'
                src="https://player.vimeo.com/video/337293634"
                width="640" height="360"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen></iframe>

            <p className='p'>
                This projet spanned aross an academic year and was 
            </p>
        </div>
    );
}

export default PageProject_1_OrBit;