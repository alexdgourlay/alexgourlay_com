import React from 'react';

import { GoMarkGithub } from 'react-icons/go';
import { TiSocialLinkedin } from 'react-icons/ti';

import links from '../../data/links.json';

import "./ConnectFooter.css"

const ConnectFooter = (props) => {

    let iconSize = 35;

    return (
        <div id="container">
            <div>
                <GoMarkGithub
                    className="footer-icon"
                    size={iconSize}
                    onClick={() => window.open(links.github)} />
                <TiSocialLinkedin
                    className='footer-icon'
                    size={iconSize}
                    onClick={() => window.open(links.linkedin)} />
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

