import React from 'react';

import { GoMarkGithub } from 'react-icons/go';
import { TiSocialLinkedin } from 'react-icons/ti';

import links from '../../data/links.json';

import "./ConnectFooter.css"

const ConnectFooter = (props) => {

    return (
        <div id="container">
            <div>
            <GoMarkGithub
                className="icon"
                size= {30}
                onClick={() => window.open(links.github)} />
            </div>
            <div>
            <TiSocialLinkedin
                className='icon'
                size = {30} 
                onClick={() => window.open(links.linkedin)}/>
            </div>
            <div>
                <p>Designed and built by me, using React.js</p>
            </div>
        </div>
        
    );
}

export default ConnectFooter;

