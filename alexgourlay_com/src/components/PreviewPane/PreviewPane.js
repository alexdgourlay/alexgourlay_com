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

                <img
                    id='image'
                    alt='Project Preview'
                    src={`${props.github_url}/${RES_DIR}/${props.project.img}`} />
                    
            </Suspense>

        )
    } else return (
        <div />
    );
}



// const TextFiller = () => {
//     return (
//         <div style={{}}>
//             <p
//                 style={{
//                     "textAlign": "justified center",
//                     "maxWidth": "400px",
//                     "fontFamily": "serif",
//                     "fontSize": "40px",
//                     "paddingTop": "30px",
//                     "paddingRight": "40px",
//                     "fontWeight": "500",
//                     "fontColor": "white"
//                 }}>
//                 Hello and welcome to my portfolio site, to find out
//             more about me and my work, click <b style={{ "color": "red" }}>here</b>, otherwise
//                             hover and select a project from the left. 👈
//         </p>
//         </div>
//     )
// }


export default PreviewPane;