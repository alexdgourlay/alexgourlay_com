import React from 'react';
import { Link } from 'react-router-dom';
import './HeadBar.css';

import Nav from 'react-bootstrap/Nav'

const HeadBar = (props) => (
    <div>
        <Link to={'/'}>
            <div className='titleText'>A</div>
        </Link>
        <div style={{ height: '40px' }} />

        <Nav>
            {/* <Nav.item> */}
                {/* <Link to={'/AboutMe'}> */}
                    {/* <Nav.Link>About Me</Nav.Link> */}
                {/* </Link> */}
            {/* </Nav.item> */}
        </Nav>
    </div>

)

export default HeadBar;