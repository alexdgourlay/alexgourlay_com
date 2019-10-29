import React from 'react';
import { Link } from 'react-router-dom';
import './HeadBar.css';

import Nav from 'react-bootstrap/Nav'

const HeadBar = (props) => (
    <div>
        <Link to={'/'}>
            <div className='titleText'>AG</div>
        </Link>
        <div style={{ height: '40px' }} />
    </div>

)

export default HeadBar;