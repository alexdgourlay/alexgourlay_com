import React from 'react';
import Image from 'react-bootstrap/Image';

import '../PageProject.css'

const PageProject_2_HorizonsStudio = (props) => {

    return (
        <div id='project-content'>

            <p className='p' >
                <b>My Role:</b><br /> Project Management, Android Development (Project Structure, BLE Connectivity, Server Connectivity)
            </p>

            <Image
                src= {`${props.RES_DIR}/system_diagram.jpeg`}
                flex/>

            <p className='p'>
                VitaRun is 
            </p>
        </div>
    )
}

export default PageProject_2_HorizonsStudio;