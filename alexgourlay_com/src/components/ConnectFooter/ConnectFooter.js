import React from 'react';

import { GoMarkGithub } from 'react-icons/go';
import { TiSocialLinkedin, TiSocialVimeo } from 'react-icons/ti';


import links from '../../data/links.json';

import "./ConnectFooter.css"

const ConnectFooter = (props) => {

    let iconSize = 35;

    return (
        <div id="container">
            <div>
                <TiSocialLinkedin
                    className='footer-icon'
                    size={iconSize}
                    onClick={() => window.open(links.linkedin)} />
                <GoMarkGithub
                    className="footer-icon"
                    size={iconSize}
                    onClick={() => window.open(links.github)} />
                <TiSocialVimeo
                    className='footer-icon'
                    size={iconSize}
                    onClick={() => window.open(links.vimeo)} />
            </div>
            <div>
                <p className="footer-text">
                    Designed and built by me, using React.js
                </p>
            </div>
        </div>

    );
}

export default ConnectFooter;

