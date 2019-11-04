import React from 'react';
import { Link } from 'react-router-dom';
import './HeadBar.css';

import ReactAnime from 'react-animejs';

const {Anime} = ReactAnime;

const HeadBar = (props) => (
    <div>
        <div id="headbar-container">
            <Link to={'/'}>
                <div className='titleText'>AG</div>
            </Link>
        </div>
        {/* <Anime
            initial={[
                {
                    targets: "#Box",
                    translateX: 50,
                    easing: "linear"
                }
            ]}
        > */}
            {/* <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} /> */}
        {/* </Anime> */}
        <div style={{ height: '40px' }} />
    </div>

)

export default HeadBar;