import React from 'react';
import LazyLoad from 'react-lazyload';
import Image from 'react-bootstrap/Image';


const PageProject_5_Vortech = (props) => {

    const pages = [1, 2, 3, 4, 5, 7, 8, 10, 11,
                    12, 13, 14, 15, 17, 18, 19, 20, 21];

    return (
        <div id="project-content">

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