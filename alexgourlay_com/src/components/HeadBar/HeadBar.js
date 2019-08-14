import React from 'react';
import { Link } from 'react-router-dom';
import './HeadBar.css';

const HeadBar = (props) => (
    <div>
        <Link to={'/'}>
            <div className='titleText'>Alex Gourlay</div>
        </Link>
    </div>

)

export default HeadBar;