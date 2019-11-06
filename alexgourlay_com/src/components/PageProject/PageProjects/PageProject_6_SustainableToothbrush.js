import React from 'react';
import LazyLoad from 'react-lazyload';
import Image from 'react-bootstrap/Image';


const PageProject_6_SustainableToothbrush = (props) => {

    const pages = [1, 4, 8, 10, 11,
                    12, 13, 14, 15, 17, 18, 19, 20, 21];

    return (
        <div id="project-content">

            <p className="p">
                This project was conducted as part of a second year module at
                the Dyson School of Design Engineering. The brief given was to produce
                a design for a more sustainable toothbrush. Material manufacturing method
                decisions were facilitated by CES Edupack and an analysis of the material
                lifecycle was conducted.

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

export default PageProject_6_SustainableToothbrush;