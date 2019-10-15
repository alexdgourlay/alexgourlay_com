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

            {
                pages.map((val) => {
                    return <LazyLoad height={200} key={val}>
                        <div className="image-div">
                            <Image
                                src={`${props.RES_DIR}/${val}.jpg`}
                                key = {val}
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