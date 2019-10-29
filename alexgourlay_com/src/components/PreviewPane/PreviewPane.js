import React from 'react';

import './PreviewPane.css';

const RES_DIR = 'resources/projects';

const PreviewPane = (props) => {

    if (props.project !== null) {
        return (
            <div id="preview-container">
                <img
                    id='image'
                    alt='Project Preview'
                    src={`${props.github_url}/${RES_DIR}/${props.project.img}`} />
            </div>
        )

    } else return (
        <div id="preview-container">
            {/* <div style={{
                // top:"50%",
                // left:"50%",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                
            }}>

                <P5Wrapper sketch={sketch} />
            </div> */}
        </div>
        // <TextFiller/>
    );
}



const TextFiller = () => {
    return (
        <div style={{}}>
            <p
                style={{
                    "textAlign": "justified center",
                    "maxWidth": "400px",
                    "fontFamily": "serif",
                    "fontSize": "40px",
                    "paddingTop": "30px",
                    "paddingRight": "40px",
                    "fontWeight": "500",
                    "fontColor": "white"
                }}>
                Hello and welcome to my portfolio site, to find out
            more about me and my work, click <b style={{ "color": "red" }}>here</b>, otherwise
                            hover and select a project from the left. 👈
        </p>
        </div>
    )
}


export default PreviewPane;