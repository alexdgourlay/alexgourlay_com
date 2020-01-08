import React from 'react'

import "./PreviewPane.css";

const RES_DIR = "resources/projects";

const PreviewPane = (props) => {

  if (props.project !== null) {
    return (
      <div id="preview-container">
        <div style={{ textAlign: "right" }}>
          <h1 id="preview-header">{props.project.summary}</h1>
        </div> 

        <img
                        className='preview-image'
                        alt='Project Preview'
                        src={`${props.github_url}/${RES_DIR}/${props.project.img}`} />
      </div>
    );
  } else
    return (
      <div id="preview-container">
        <div style={{ textAlign: "right" }}>
          <h1 id="preview-header">
            Welcome to my portfolio site! To the left <span role="img" aria-label="left-hand">👈</span> you will find a selection of different projects I have worked on
            over the past few years. Feel free to explore, Alex.
          </h1>
        </div>

        <img
          className="preview-image preview-image-placeholder"
          alt="Me"
          src={`${props.github_url}/resources/me.jpg`}
        />
      </div>
    );
};

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
