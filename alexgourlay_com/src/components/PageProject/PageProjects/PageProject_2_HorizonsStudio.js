import React from 'react';

import '../PageProject.css'
import MyIFrame from '../../MyIFrame/MyIFrame';

const PageProject_2_HorizonsStudio = (props) => {

    return (
        <div id='project-content'>
            <p className='p'>
                During the summer of 2018 I interned at London based virtual reality
                developers Horizons Studio. My role at Horizons was that of research and development
                whereby I developed new interactions for the Oculus Rift platform. Horizons create
                interactive music journeys that allow the player to control the sound of a piece of
                music by interacting with objects in the virtual world.
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

            <p className='p'>

            <p className='p'>
                
            </p>

            </p>


        </div >
    )
}

export default PageProject_2_HorizonsStudio;