import React from 'react';
import { Link } from 'react-router-dom';
import './HeadBar.css';

const HeadBar = (props) => (
    <div>
        <div id="headbar-container">
            <Link to={'/'}>
                <div className='titleText'>AG</div>
            </Link>
        </div>
        <div style={{ height: '40px' }} />
    </div>

)

export default HeadBar;