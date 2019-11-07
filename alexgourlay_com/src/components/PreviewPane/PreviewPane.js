import React, { Suspense } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

import './PreviewPane.css';

const RES_DIR = 'resources/projects';

const PreviewPane = (props) => {

    if (props.project !== null) {

        return (
            <Suspense
                fallback={

                    <div>
                        <SyncLoader
                            css={{ position: 'fixed', top: '50%', left: '50%', marginRight: '100px', marginBottom: '50px' }}
                            sizeUnit={'px'}
                            size={10}
                            color={'#676767'}
                            loading={true} />
                    </div>
                }>

                <div id="preview-container">

                    <div style={{ textAlign: "right" }}>
                        <h1 id="preview-header">
                            {props.project.summary}
                        </h1>
                    </div>

                    <img
                        id='preview-image'
                        alt='Project Preview'
                        src={`${props.github_url}/${RES_DIR}/${props.project.img}`} />

                </div>

            </Suspense >

        )
    } else return (

        <div id="preview-container">
            <div style={{ textAlign: "right" }}>
                <h1 id="preview-header">
                    Hello and welcome to my portfolio site, to the left you will
                    find a selection of different projects I have worked on over
                    the past few years. Feel free to explore! Alex. 
                        </h1>
            </div>

            <img
                id='placeholder-image'
                alt='Me'
                src={`${props.github_url}/resources/me.jpg`} />
        </div>
    );
}



// const TextFiller = (props) => {
//     return (
//         <div style={{}}>
//             {/* <p
//                 style={{
//                     "textAlign": "justified center",
//                     "maxWidth": "400px",
//                     "fontSize": "40px",
//                     "paddingTop": "30px",
//                     "paddingRight": "40px",
//                     "fontWeight": "500",props
//                     "fontColor": "white"
//                 }}>
//                 Hello and welcome to my portfolio site, to find out
//             more about me and my work, click <b style={{ "color": "red" }}>here</b>, otherwise
//                             hover and select a project from the left. 👈
//         </p> */}

//             <img
//                 id='placeholder-image'
//                 alt='Me'
//                 src={`${props.github_url}/resources/me.jpg`} />
//         </div>
//     )
// }


export default PreviewPane;