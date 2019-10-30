import React from 'react';
import LazyLoad from 'react-lazyload';
import Image from 'react-bootstrap/Image';


const PageProject_5_Vortech = (props) => {

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div id="project-content">

            <p className='p' >
                <b>My Role:</b><br /> Product Design, CAD Modelling, Software Development (Matlab)
            </p>

            <div className="separator" />

            <p className="p">
                Vortech exists as a pair of medical devices, each used to measure different aspects of human
                lung capacity. The project was conducted as part of a 2nd year university module and was
                developed with help from experts at the Royal Brompton Hospital, London. The project 
                report detailing the design process for Vortech is shown below.
            </p>

            <div className="separator" />
            {
                pages.map((val) => {
                    return <LazyLoad height={200} key={val}>
                        <div className="image-div">
                            <Image
                                src={`${props.RES_DIR}/${val}.jpg`}
                                key={val}
                                fluid
                            />
                        </div>
                        <div className="separator" />
                    </LazyLoad>

                })
            }
        </div>
    );
}

export default PageProject_5_Vortech;