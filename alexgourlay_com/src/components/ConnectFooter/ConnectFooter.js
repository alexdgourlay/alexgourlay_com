import React from 'react';

import { GoMarkGithub } from 'react-icons/go';
import { TiSocialLinkedin } from 'react-icons/ti';

import links from '../../data/links.json';

import "./ConnectFooter.css"

const ConnectFooter = (props) => {

    let iconSize = 25;

    return (
        <div id="container">
            <div>
                <GoMarkGithub
                    className="icon"
                    size={iconSize}
                    onClick={() => window.open(links.github)} />
                <TiSocialLinkedin
                    className='icon'
                    size={iconSize}
                    onClick={() => window.open(links.linkedin)} />
            </div>
            <div>
                <p className="footer-text">
                    Designed and built by me, using React.js <span>✌</span>
                </p>
            </div>
        </div>

    );
}

export default ConnectFooter;

