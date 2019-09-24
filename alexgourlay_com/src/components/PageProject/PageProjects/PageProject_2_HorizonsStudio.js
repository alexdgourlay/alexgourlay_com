import React from 'react';
import { Button, Carousel } from 'react-bootstrap'

import '../PageProject.css'

const PageProject_2_HorizonsStudio = (props) => {
    const RES_DIR = 'resources/projects';

    return (
        <div id='project-content'>
            <p className='p'>
                During the summer of 2018 I interned at virtual reality 
                developers Horizons Studio, based in London. My role at Horizons
                was that of research and development. I was tasked to develop new
                interactions for the Oculus Rift platform.
            </p>
            <iframe
                src="https://player.vimeo.com/video/361057084"
                width="640" height="360"
                frameborder="0"
                allow="autoplay; fullscreen" allowfullscreen>

            </iframe>
        </div>
    )
}

export default PageProject_2_HorizonsStudio;