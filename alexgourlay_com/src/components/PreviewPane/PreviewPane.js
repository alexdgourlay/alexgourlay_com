import React from 'react';
const RES_DIR = 'resources/projects';

const PreviewPane = (props) => {

    if (props.project !== null) {
        return (
            <img 
                alt='Project Preview'
                src={`${props.github_url}/${RES_DIR}/${props.project.img}`} />
        )
    } else return null;
}

export default PreviewPane;