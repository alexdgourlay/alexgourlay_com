import React from 'react';

const PageProject = (props) => {

    return (
        <div>
            <h2>{props.match.params.projectTitle}</h2>
        </div>
    );
}

export default PageProject;