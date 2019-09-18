import React from 'react';
import { Link } from 'react-router-dom';
import './HeadBar.css';

const HeadBar = (props) => (
    <div>
        <Link to={'/'}>
            <div className='titleText'>A</div>
        </Link>
        <div style={{height:'40px'}}/>
    </div>

)

export default HeadBar;