import React from 'react';

import './PreviewPane.css'

const RES_DIR = 'resources/projects';

const PreviewPane = (props) => {

    if (props.project !== null) {
        return (
                <img
                    id='image'
                    alt='Project Preview'
                    src={`${props.github_url}/${RES_DIR}/${props.project.img}`} />
        )

    } else return null;
}

export default PreviewPane;