import React from 'react';
const RES_DIR = '../../resources/projects'

const fs = require('fs');
const path = require('path');

// const resContext = require.context(RES_DIR, true, /\.(png|jpe?g|svg)$/);

export default class PreviewPane extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            previewImages: []
        }
    }

    componentDidMount() {

        require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
            const files = {};

            function readDirectory(directory) {
                fs.readdirSync(directory).forEach((file) => {
                    const fullPath = path.resolve(directory, file);

                    if (fs.statSync(fullPath).isDirectory()) {
                        if (scanSubDirectories) readDirectory(fullPath);
                        return;
                    }

                    if (!regularExpression.test(fullPath)) return;
                    files[fullPath] = true;
                });
            }
            readDirectory(path.resolve(__dirname, base));

            function Module(file) {
                return require(file);
            }
            Module.keys = () => Object.keys(files);
            return Module;
        };

        require.context(RES_DIR, true, /\.(png|jpe?g|svg)$/);
    }

    render() {

        let previewPane;
        let img;

        if (this.props.project !== null) {

            previewPane =
                <img className="img"
                    alt=''
                    src={img} />;

        } else {
            previewPane = null;
        }
        //src = require('../../resources/projects/0_AXPendula/A_AXPendula.JPG')} />
        // src={`${RES_DIR}/${props.project.img}`} />

        return (
            <div>
                {/* { previewPane } */}
            </div>
        )
    }
}
