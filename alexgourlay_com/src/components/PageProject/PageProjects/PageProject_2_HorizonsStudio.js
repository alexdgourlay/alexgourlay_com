import React from 'react';

import '../PageProject.css'

const PageProject_2_HorizonsStudio = (props) => {

    return (
        <div id='project-content'>

            <p className='p'>
                During the summer of 2018 I interned at virtual reality 
                developers Horizons Studio, based in London. My role at Horizons
                was that of research and development. I was tasked to develop new
                interactions for the Oculus Rift platform.
            </p>

            <div className="separator"/>
            
            <div className="resp-container">
                <iframe
                    className="resp-iframe"
                    title="Vimeo Video"
                    src="https://player.vimeo.com/video/361057084"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen></iframe>
            </div>


        </div>
    )
}

export default PageProject_2_HorizonsStudio;