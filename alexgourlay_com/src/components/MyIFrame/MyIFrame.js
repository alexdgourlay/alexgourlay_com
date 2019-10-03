import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import './MyIFrame.css'

class MyIFrame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            "loading": true
        };

        this.handleOnLoad = this.handleOnLoad.bind(this);
    }

    handleOnLoad = () => {
        this.setState({
            "loading": false
        })
    };

    render() {
        return (
            <div className="resp-container">
                {this.state.loading ? (
                    <div style={{
                        "position": "absolute",
                        "top": "50%",
                        "left": "50%",
                        "marginRight": "50%"
                    }}>
                        <ClipLoader
                            sizeUnit={'px'}
                            size={20}
                            color={'black'}
                            loading={true} />
                    </div>
                ) : null}

                <iframe
                    className="resp-iframe"
                    title={this.props._title}
                    src={this.props._src}
                    onLoad={this.handleOnLoad}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen />
            </div>
        );
    }
}

export default MyIFrame;